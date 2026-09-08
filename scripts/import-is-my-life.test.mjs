import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { applyImport, canonicalJson, prepareImport, validateProjection } from './import-is-my-life.mjs';

function projection(exportId = 'synthetic-001') {
  const payload = {
    schemaVersion: 'public-projection.v1',
    exportId,
    generatedAt: '2026-09-08T00:00:00.000Z',
    profile: { slug: 'ramiro' },
    sourceRevisions: [{ recordType: 'entity', recordId: 'person-1', revision: 1 }],
    entities: [{ id: 'person-1', type: 'person', slug: 'ramiro', title: 'Ramiro', summary: 'Perfil sintético', temporalSpan: null }],
    relations: [],
    sections: [],
    contentBlocks: [],
    routes: [{ entityId: 'person-1', path: '/portfolio-ramiro/ramiro/' }],
    assets: [],
  };
  return { ...payload, hash: createHash('sha256').update(canonicalJson(payload)).digest('hex') };
}

function tempProject() {
  const root = mkdtempSync(join(tmpdir(), 'is-my-life-import-'));
  mkdirSync(join(root, 'tmp'), { recursive: true });
  return root;
}

test('dry-run valida el paquete y no modifica el portfolio', () => {
  const root = tempProject();
  const candidate = projection();
  const prepared = prepareImport(candidate, { root });
  assert.deepEqual(prepared.remove, []);
  assert.deepEqual(prepared.write, ['src/data/is-my-life/public-projection.json', 'public/is-my-life/manifest.json']);
  assert.equal(existsSync(join(root, 'src')), false);
});

test('rechaza hash o ruta inválida antes de tocar un archivo existente', () => {
  const root = tempProject();
  const target = join(root, 'src', 'data', 'is-my-life', 'public-projection.json');
  mkdirSync(join(root, 'src', 'data', 'is-my-life'), { recursive: true });
  writeFileSync(target, 'contenido previo');
  const invalid = projection();
  invalid.routes[0].path = '/fuera/portfolio-ramiro/';
  assert.throws(() => prepareImport(invalid, { root }), /hash no coincide|Ruta fuera de la base/);
  assert.equal(readFileSync(target, 'utf8'), 'contenido previo');
});

test('aplicar es repetible y retira únicamente recursos administrados', () => {
  const root = tempProject();
  const first = prepareImport(projection('first'), { root });
  applyImport(first, { root });
  const projectionPath = join(root, 'src', 'data', 'is-my-life', 'public-projection.json');
  const manifestPath = join(root, 'public', 'is-my-life', 'manifest.json');
  const firstBytes = readFileSync(projectionPath);
  const unmanaged = join(root, 'public', 'unmanaged.txt');
  const managedOld = join(root, 'public', 'is-my-life', 'old-managed.json');
  writeFileSync(unmanaged, 'conservar');
  writeFileSync(managedOld, 'retirar');
  const statePath = join(root, 'tmp', 'is-my-life-import', 'managed.json');
  const state = JSON.parse(readFileSync(statePath, 'utf8'));
  state.managedPaths.push('public/is-my-life/old-managed.json');
  writeFileSync(statePath, `${JSON.stringify(state)}\n`);

  const second = prepareImport(projection('second'), { root });
  assert.deepEqual(second.remove, ['public/is-my-life/old-managed.json']);
  applyImport(second, { root });
  assert.equal(existsSync(managedOld), false);
  assert.equal(readFileSync(unmanaged, 'utf8'), 'conservar');
  assert.notDeepEqual(readFileSync(projectionPath), firstBytes);

  const beforeRepeat = readFileSync(manifestPath);
  applyImport(prepareImport(projection('second'), { root }), { root });
  assert.deepEqual(readFileSync(manifestPath), beforeRepeat);
});

test('comprueba que un asset pertenece a public y conserva su hash', () => {
  const root = tempProject();
  const assetPath = join(root, 'public', 'evidencias', 'sample.webp');
  mkdirSync(join(root, 'public', 'evidencias'), { recursive: true });
  writeFileSync(assetPath, 'asset');
  const assetHash = createHash('sha256').update('asset').digest('hex');
  const candidate = projection('asset-001');
  candidate.assets = [{ id: 'asset-1', path: '/evidencias/sample.webp', sha256: assetHash, mimeType: 'image/webp', byteSize: 5, width: 1, height: 1, alt: 'Muestra' }];
  const { hash: _hash, ...payload } = candidate;
  candidate.hash = createHash('sha256').update(canonicalJson(payload)).digest('hex');
  assert.deepEqual(validateProjection(candidate, { root }), []);
  candidate.assets[0].path = '/referencias_privadas/secreto.webp';
  assert.match(validateProjection(candidate, { root }).join('\n'), /ruta inválida/);
});
