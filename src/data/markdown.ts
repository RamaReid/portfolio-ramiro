import { caseStudies, capabilities, projects, stages } from './portfolio';
import { loadPublicProjection, projectionBlockText, type ProjectionSection } from './public-projection';
import { sitePath, siteUrl } from './site';

function heading(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function list(items: string[]) {
  return items.map((item) => `- ${item}`).join('\n');
}

function publicUrl(path: string) {
  return `${siteUrl}${path.replace(sitePath('/'), '/')}`;
}

export function markdownIndex() {
  const projection = loadPublicProjection();
  const sourceLine = projection
    ? `Fuente canónica disponible: export ${projection.exportId}, generado ${projection.generatedAt}.`
    : 'Fuente canónica de Is My Life: todavía no hay un snapshot público importado; esta salida usa el contenido curado del portfolio.';

  return `# Ramiro García Reid — vista profesional

> El output cambia. El método permanece.

${sourceLine}

Esta vista está pensada para lectura humana, indexación y agentes. Cada enlace HTML tiene una versión Markdown equivalente cuando corresponde.

## Casos

${list(caseStudies.map((item) => `**${heading(item.title)}** — ${heading(item.summary)} ([HTML](${publicUrl(item.href)}) · [Markdown](${publicUrl(sitePath(`/markdown/casos/${item.slug}.md`))}))`))}

## Capacidades

${list(capabilities.map((item) => `**${heading(item.title)}** — ${heading(item.description)} ([HTML](${publicUrl(sitePath(`/capacidades/${item.slug}/`))}) · [Markdown](${publicUrl(sitePath(`/markdown/capacidades/${item.slug}.md`))}))`))}

## Trayectoria

${list(stages.map((item) => `**${heading(item.title)}** (${item.periodLabel ?? 'período abierto'}) — ${heading(item.description)}`))}

## Rutas

- [Inicio HTML](${publicUrl(sitePath('/'))})
- [Casos HTML](${publicUrl(sitePath('/casos/'))})
- [Trayectoria HTML](${publicUrl(sitePath('/trayectoria/'))})
- [Contacto HTML](${publicUrl(sitePath('/contacto/'))})
`;
}

export function caseMarkdown(slug: string) {
  const item = caseStudies.find((candidate) => candidate.slug === slug);
  if (!item) return null;
  const relatedCapabilities = capabilities.filter((capability) => item.capabilityIds.includes(capability.id));
  const relatedStages = stages.filter((stage) => item.stageIds.includes(stage.id));
  const relatedProjects = projects.filter((project) => item.projectIds.includes(project.id));

  return `# ${heading(item.title)}

${heading(item.summary)}

## Capacidades relacionadas

${list(relatedCapabilities.map((capability) => `**${heading(capability.title)}** — ${heading(capability.description)}`)) || '- No hay capacidades relacionadas publicadas.'}

## Etapas relacionadas

${list(relatedStages.map((stage) => `**${heading(stage.title)}** (${stage.periodLabel ?? 'período abierto'}) — ${heading(stage.description)}`)) || '- No hay etapas temporales relacionadas publicadas.'}

## Proyectos relacionados

${list(relatedProjects.map((project) => `**${heading(project.title)}** — ${heading(project.lead)}`)) || '- No hay proyectos relacionados publicados.'}

Fuente HTML: ${publicUrl(item.href)}
`;
}

export function capabilityMarkdown(slug: string) {
  const item = capabilities.find((candidate) => candidate.slug === slug);
  if (!item) return null;
  const relatedCases = caseStudies.filter((candidate) => item.caseIds.includes(candidate.id));
  const relatedStages = stages.filter((stage) => item.stageIds.includes(stage.id));

  return `# ${heading(item.title)}

${heading(item.description)}

## Casos relacionados

${list(relatedCases.map((candidate) => `**${heading(candidate.title)}** — ${heading(candidate.summary)}`)) || '- No hay casos relacionados publicados.'}

## Etapas relacionadas

${list(relatedStages.map((stage) => `**${heading(stage.title)}** (${stage.periodLabel ?? 'período abierto'}) — ${heading(stage.description)}`)) || '- No hay etapas temporales relacionadas publicadas.'}
`;
}

export function projectionMarkdown() {
  const projection = loadPublicProjection();
  if (!projection) return null;

  const blocksById = new Map(projection.contentBlocks.map((block) => [block.id, block]));
  const sections = projection.sections.map((section: ProjectionSection) => {
    const title = typeof section.title === 'string' && section.title.trim() ? section.title : section.id;
    const blocks = (section.contentBlockIds ?? []).map((id) => blocksById.get(id)).filter(Boolean);
    const body = blocks.map((block) => {
      const text = projectionBlockText(block!);
      return block?.title ? `### ${heading(block.title)}\n\n${text}` : text;
    }).filter(Boolean).join('\n\n');
    return `## ${heading(title)}\n\n${body || '_Sin contenido editorial en esta sección._'}`;
  }).join('\n\n');

  return `# Proyección pública de Is My Life

Exportación: ${projection.exportId}  
Generada: ${projection.generatedAt}  
Hash: ${projection.hash}

${sections || '_La proyección no contiene secciones editoriales._'}
`;
}
