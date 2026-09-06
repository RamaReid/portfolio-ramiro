import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getProject } from './portfolio';

export function loadProjectText(slug: string) {
  const project = getProject(slug);
  if (!project) return '';
  const filePath = join(process.cwd(), 'docs', 'casos', 'proyectos-garcia-delillo.md');
  const source = readFileSync(filePath, 'utf8');
  const heading = `## ${project.title}`;
  const start = source.indexOf(heading);
  if (start < 0) return project.lead;
  const afterHeading = source.slice(start + heading.length);
  const end = afterHeading.indexOf('\n## ');
  return (end >= 0 ? afterHeading.slice(0, end) : afterHeading).trim();
}
