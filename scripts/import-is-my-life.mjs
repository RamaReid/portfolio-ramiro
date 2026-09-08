import { createHash } from 'node:crypto';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const SCHEMA_VERSION = 'public-projection.v1';
export const PUBLIC_BASE_PATH = '/portfolio-ramiro/';
export const OUTPUT_PATHS = [
  'src/data/is-my-life/public-projection.json',
  'public/is-my-life/manifest.json',
];

const STATE_PATH = 'tmp/is-my-life-import/managed.json';
const FORBIDDEN_KEYS = new Set(['accessPolicyId', 'ownerUserId', 'storageKey', 'localPath', 'sourceIds', 'privatePath']);

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).sort(([left], [right]) => left.localeCompare(right)).map(([key, child]) => [key, canonicalize(child)]));
  }
  return value;
}

export function canonicalJson(value) {
  return JSON.stringify(canonicalize(value));
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function hashProjection(projection) {
  const { hash: _hash, ...payload } = projection;
  return sha256(canonicalJson(payload));
}

function collectForbidden(value, path = '$') {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectForbidden(item, `${path}[${index}]`));
  }
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, child]) => [
    ...(FORBIDDEN_KEYS.has(key) ? [`${path}.${key}`] : []),
    ...collectForbidden(child, `${path}.${key}`),
  ]);
}

function pathInside(root, candidate) {
  const relativePath = relative(resolve(root), resolve(candidate));
  return relativePath === '' || (relativePath !== '..' && !relativePath.startsWith(`..${sep}`) && !isAbsolute(relativePath));
}

function safePublicPath(publicPath) {
  if (typeof publicPath !== 'string' || !publicPath.startsWith('/') || publicPath.includes('..') || publicPath.includes('\\') || publicPath.includes(':')) return false;
  const relativePath = publicPath.slice(1).split('/').join(sep);
  return relativePath.length > 0 && !relativePath.startsWith(`referencias_privadas${sep}`);
}

function add(errors, condition, message) {
  if (!condition) errors.push(message);
}

function checkUnique(errors, values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) errors.push(`${label} duplicado: ${value}.`);
    seen.add(value);
  }
}

export function validateProjection(projection, { root, checkAssets = true } = {}) {
  const errors = [];
  add(errors, projection && typeof projection === 'object' && !Array.isArray(projection), 'El paquete debe ser un objeto JSON.');
  if (errors.length) return errors;

  add(errors, projection.schemaVersion === SCHEMA_VERSION, `schemaVersion inválido: se esperaba ${SCHEMA_VERSION}.`);
  add(errors, typeof projection.exportId === 'string' && projection.exportId.length > 0, 'Falta exportId.');
  add(errors, typeof projection.generatedAt === 'string' && projection.generatedAt.length > 0, 'Falta generatedAt.');
  add(errors, projection.profile && typeof projection.profile.slug === 'string' && /^[a-z0-9-]+$/.test(projection.profile.slug), 'profile.slug inválido.');
  add(errors, /^[0-9a-f]{64}$/.test(projection.hash ?? ''), 'hash inválido.');
  for (const field of ['sourceRevisions', 'entities', 'relations', 'sections', 'contentBlocks', 'routes', 'assets']) add(errors, Array.isArray(projection[field]), `Falta el arreglo ${field}.`);

  const forbidden = collectForbidden(projection);
  for (const path of forbidden) errors.push(`El paquete contiene un campo privado en ${path}.`);
  if (errors.length) return errors;

  add(errors, hashProjection(projection) === projection.hash, 'El hash no coincide con el contenido.');
  const entityIds = new Set(projection.entities.map((entity) => entity.id));
  const sectionIds = new Set(projection.sections.map((section) => section.id));
  const blockIds = new Set(projection.contentBlocks.map((block) => block.id));
  checkUnique(errors, projection.entities.map((entity) => entity.id), 'Entidad');
  checkUnique(errors, projection.routes.map((route) => route.path), 'Ruta');
  checkUnique(errors, projection.assets.map((asset) => asset.path), 'Activo');

  for (const relation of projection.relations) {
    add(errors, entityIds.has(relation.fromEntityId) && entityIds.has(relation.toEntityId), `Relación huérfana: ${relation.id}.`);
  }
  for (const section of projection.sections) {
    for (const entityId of section.entityIds ?? []) add(errors, entityIds.has(entityId), `Sección con entidad huérfana: ${section.id}.`);
    for (const blockId of section.contentBlockIds ?? []) add(errors, blockIds.has(blockId), `Sección con bloque huérfano: ${section.id}.`);
  }
  for (const block of projection.contentBlocks) {
    if (block.entityId) add(errors, entityIds.has(block.entityId), `Bloque con entidad huérfana: ${block.id}.`);
    if (block.viewSectionId) add(errors, sectionIds.has(block.viewSectionId), `Bloque con sección huérfana: ${block.id}.`);
  }
  for (const route of projection.routes) {
    add(errors, entityIds.has(route.entityId), `Ruta con entidad huérfana: ${route.entityId}.`);
    add(errors, typeof route.path === 'string' && route.path.startsWith(PUBLIC_BASE_PATH) && !route.path.includes('..') && !route.path.includes('\\') && !route.path.includes(':') && !route.path.includes('?') && !route.path.includes('#'), `Ruta fuera de la base pública: ${route.path}.`);
  }
  for (const asset of projection.assets) {
    add(errors, typeof asset.id === 'string' && typeof asset.path === 'string' && safePublicPath(asset.path), `Activo con ruta inválida: ${asset.id}.`);
    add(errors, /^[0-9a-f]{64}$/.test(asset.sha256 ?? ''), `Activo sin hash válido: ${asset.id}.`);
    if (root && checkAssets && safePublicPath(asset.path)) {
      const assetPath = join(root, 'public', asset.path.slice(1).split('/').join(sep));
      add(errors, pathInside(join(root, 'public'), assetPath), `Activo fuera de public: ${asset.id}.`);
      add(errors, existsSync(assetPath) && statSync(assetPath).isFile(), `No existe el activo del export: ${asset.path}.`);
      if (existsSync(assetPath) && statSync(assetPath).isFile()) add(errors, sha256(readFileSync(assetPath)) === asset.sha256, `El hash del activo no coincide: ${asset.path}.`);
    }
  }
  return errors;
}

function stablePrettyJson(value) {
  return `${JSON.stringify(canonicalize(value), null, 2)}\n`;
}

function publicManifest(projection) {
  return {
    schemaVersion: projection.schemaVersion,
    exportId: projection.exportId,
    generatedAt: projection.generatedAt,
    profileSlug: projection.profile.slug,
    snapshotHash: projection.hash,
    routes: projection.routes,
    assets: projection.assets,
  };
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function relativeSafePath(root, value) {
  if (typeof value !== 'string' || isAbsolute(value) || value.includes('\\')) throw new Error(`Ruta administrada inválida: ${value}`);
  const normalized = value.split('/').join('/');
  const candidate = resolve(root, normalized.split('/').join(sep));
  if (!pathInside(root, candidate) || normalized.startsWith('referencias_privadas/')) throw new Error(`Ruta administrada fuera del proyecto: ${value}`);
  return normalized;
}

function loadManagedPaths(root) {
  const statePath = join(root, STATE_PATH.split('/').join(sep));
  if (!existsSync(statePath)) return [];
  const state = readJson(statePath);
  if (!Array.isArray(state.managedPaths)) throw new Error('El estado del importador no contiene managedPaths.');
  return state.managedPaths.map((value) => {
    const safePath = relativeSafePath(root, value);
    if (!safePath.startsWith('src/data/is-my-life/') && !safePath.startsWith('public/is-my-life/')) throw new Error(`El estado intenta administrar una ruta ajena: ${value}`);
    return safePath;
  });
}

function stagedFiles(projection) {
  return new Map([
    ['src/data/is-my-life/public-projection.json', stablePrettyJson(projection)],
    ['public/is-my-life/manifest.json', stablePrettyJson(publicManifest(projection))],
  ]);
}

export function prepareImport(projection, { root = process.cwd(), checkAssets = true } = {}) {
  const errors = validateProjection(projection, { root, checkAssets });
  if (errors.length) throw new Error(`El paquete no es válido:\n- ${errors.join('\n- ')}`);
  const files = stagedFiles(projection);
  const previous = loadManagedPaths(root);
  const next = [...files.keys()];
  return {
    projection,
    files,
    previous,
    next,
    remove: previous.filter((file) => !next.includes(file)),
    write: next,
  };
}

function backupFile(root, backupRoot, relativePath, backups) {
  const target = join(root, relativePath);
  if (!existsSync(target)) return;
  const backup = join(backupRoot, `${backups.length}.bak`);
  mkdirSync(dirname(backup), { recursive: true });
  const content = readFileSync(target);
  writeFileSync(backup, content);
  backups.push({ relativePath, backup });
}

export function applyImport(prepared, { root = process.cwd() } = {}) {
  mkdirSync(join(root, 'tmp'), { recursive: true });
  const stageRoot = mkdtempSync(join(root, 'tmp', 'is-my-life-stage-'));
  const backupRoot = mkdtempSync(join(root, 'tmp', 'is-my-life-backup-'));
  const backups = [];
  const stateRelative = STATE_PATH;
  const changed = [...new Set([...prepared.previous, ...prepared.next, stateRelative])];
  try {
    for (const relativePath of changed) backupFile(root, backupRoot, relativePath, backups);
    for (const [relativePath, content] of prepared.files) {
      const stagePath = join(stageRoot, relativePath.split('/').join(sep));
      mkdirSync(dirname(stagePath), { recursive: true });
      writeFileSync(stagePath, content, 'utf8');
    }
    const statePath = join(stageRoot, stateRelative.split('/').join(sep));
    mkdirSync(dirname(statePath), { recursive: true });
    writeFileSync(statePath, stablePrettyJson({ schemaVersion: SCHEMA_VERSION, managedPaths: prepared.next }), 'utf8');
    for (const relativePath of prepared.remove) rmSync(join(root, relativePath.split('/').join(sep)), { force: true });
    for (const relativePath of [...prepared.next, stateRelative]) {
      const target = join(root, relativePath.split('/').join(sep));
      const staged = join(stageRoot, relativePath.split('/').join(sep));
      mkdirSync(dirname(target), { recursive: true });
      rmSync(target, { force: true });
      renameSync(staged, target);
    }
    rmSync(stageRoot, { recursive: true, force: true });
    rmSync(backupRoot, { recursive: true, force: true });
    return { changed: [...prepared.remove, ...prepared.next], managedPaths: prepared.next };
  } catch (error) {
    for (const relativePath of changed) rmSync(join(root, relativePath.split('/').join(sep)), { force: true });
    for (const { relativePath, backup } of backups) {
      const target = join(root, relativePath.split('/').join(sep));
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, readFileSync(backup));
    }
    rmSync(stageRoot, { recursive: true, force: true });
    rmSync(backupRoot, { recursive: true, force: true });
    throw error;
  }
}

function usage() {
  return 'Uso: node scripts/import-is-my-life.mjs --export <archivo.json> (--dry-run|--apply)';
}

function argument(args, name) {
  const index = args.indexOf(name);
  return index === -1 ? null : args[index + 1] ?? null;
}

export async function main(args = process.argv.slice(2), root = process.cwd()) {
  const exportPath = argument(args, '--export');
  const dryRun = args.includes('--dry-run');
  const apply = args.includes('--apply');
  if (!exportPath || dryRun === apply) throw new Error(usage());
  const sourcePath = resolve(root, exportPath);
  if (!existsSync(sourcePath) || !statSync(sourcePath).isFile()) throw new Error(`No existe el export: ${exportPath}`);
  const projection = readJson(sourcePath);
  const prepared = prepareImport(projection, { root });
  const result = {
    mode: dryRun ? 'dry-run' : 'apply',
    valid: true,
    exportId: projection.exportId,
    snapshotHash: projection.hash,
    remove: prepared.remove,
    write: prepared.write,
  };
  if (apply) Object.assign(result, applyImport(prepared, { root }));
  console.log(JSON.stringify(result, null, 2));
  return result;
}

const entryPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : null;
if (entryPath === import.meta.url) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
