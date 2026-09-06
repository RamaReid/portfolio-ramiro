import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export type EvidenceAsset = {
  src: string;
  alt: string;
  source: string;
  page: string;
  status: string;
};

export type EvidenceProject = {
  id: string;
  title: string;
  sourcePage: string;
  relation: string;
  assets: EvidenceAsset[];
};

export type EvidenceManifest = {
  version: number;
  source: string;
  status: string;
  note: string;
  projects: EvidenceProject[];
};

export function loadEvidenceManifest(): EvidenceManifest {
  const manifestPath = join(process.cwd(), 'public', 'evidencias', 'garcia-delillo', 'manifest.json');
  return JSON.parse(readFileSync(manifestPath, 'utf8')) as EvidenceManifest;
}

export function getEvidenceForProject(slug: string) {
  return loadEvidenceManifest().projects.find((project) => project.id === slug);
}
