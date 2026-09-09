import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export type ProjectionProfile = {
  slug: string;
  [key: string]: unknown;
};

export type ProjectionBlock = {
  id: string;
  title?: string;
  body?: string;
  markdown?: string;
  text?: string;
  content?: string;
  entityId?: string;
  viewSectionId?: string;
  [key: string]: unknown;
};

export type ProjectionSection = {
  id: string;
  title?: string;
  slug?: string;
  entityIds?: string[];
  contentBlockIds?: string[];
  [key: string]: unknown;
};

export type PublicProjection = {
  schemaVersion: 'public-projection.v1';
  exportId: string;
  generatedAt: string;
  profile: ProjectionProfile;
  hash: string;
  sourceRevisions: unknown[];
  entities: unknown[];
  relations: unknown[];
  sections: ProjectionSection[];
  contentBlocks: ProjectionBlock[];
  routes: unknown[];
  assets: unknown[];
  [key: string]: unknown;
};

const projectionPath = join(process.cwd(), 'src', 'data', 'is-my-life', 'public-projection.json');

export function loadPublicProjection(): PublicProjection | null {
  if (!existsSync(projectionPath)) return null;
  try {
    return JSON.parse(readFileSync(projectionPath, 'utf8')) as PublicProjection;
  } catch {
    return null;
  }
}

export function projectionBlockText(block: ProjectionBlock) {
  return [block.markdown, block.body, block.text, block.content].find((value) => typeof value === 'string' && value.trim())?.trim() ?? '';
}

export function projectionStatus() {
  const projection = loadPublicProjection();
  return projection
    ? { available: true, exportId: projection.exportId, generatedAt: projection.generatedAt, hash: projection.hash }
    : { available: false as const };
}
