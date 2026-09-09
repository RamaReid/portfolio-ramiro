import { caseStudies, capabilities, projects, stages, garciaDelilloWebUrl } from './portfolio';
import { loadPublicProjection } from './public-projection';
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
    ? `Fuente canonica disponible: export ${projection.exportId}, generado ${projection.generatedAt}.`
    : 'Fuente canonica de Is My Life: todavia no hay un snapshot publico importado; esta salida usa el contenido curado del portfolio.';

  return `# Ramiro Garcia Reid - vista profesional

> El output cambia. El metodo permanece.

${sourceLine}

Esta vista esta pensada para lectura humana, indexacion y agentes. El caso Garcia Delillo funciona como entrada a su web institucional; el portfolio no duplica el catalogo de obras.

## Casos

${list(caseStudies.map((item) => `**${heading(item.title)}** - ${heading(item.summary)} ([HTML](${publicUrl(item.href)}) · [Markdown](${publicUrl(sitePath(`/markdown/casos/${item.slug}.md`))})${item.id === 'garcia-delillo' ? ` · [Web de Garcia Delillo](${garciaDelilloWebUrl})` : ''})`))}

## Capacidades

${list(capabilities.map((item) => `**${heading(item.title)}** - ${heading(item.description)} ([HTML](${publicUrl(sitePath(`/capacidades/${item.slug}/`))}) · [Markdown](${publicUrl(sitePath(`/markdown/capacidades/${item.slug}.md`))}))`))}

## Trayectoria

${list(stages.map((item) => `**${heading(item.title)}** (${item.periodLabel ?? 'periodo abierto'}) - ${heading(item.description)}`))}

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
  const isGarciaDelillo = item.id === 'garcia-delillo';
  const detail = isGarciaDelillo
    ? `## Web canonica

La identidad empresarial, la animacion del logo, la pagina web y las obras construidas se desarrollan en la web de Garcia Delillo: ${garciaDelilloWebUrl}`
    : `## Proyectos relacionados

${list(relatedProjects.map((project) => `**${heading(project.title)}** - ${heading(project.lead)}`)) || '- No hay proyectos relacionados publicados.'}`;

  return `# ${heading(item.title)}

${heading(item.summary)}

## Capacidades relacionadas

${list(relatedCapabilities.map((capability) => `**${heading(capability.title)}** - ${heading(capability.description)}`)) || '- No hay capacidades relacionadas publicadas.'}

## Etapas relacionadas

${list(relatedStages.map((stage) => `**${heading(stage.title)}** (${stage.periodLabel ?? 'periodo abierto'}) - ${heading(stage.description)}`)) || '- No hay etapas temporales relacionadas publicadas.'}

${detail}

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

${list(relatedCases.map((candidate) => `**${heading(candidate.title)}** - ${heading(candidate.summary)}`)) || '- No hay casos relacionados publicados.'}

## Etapas relacionadas

${list(relatedStages.map((stage) => `**${heading(stage.title)}** (${stage.periodLabel ?? 'periodo abierto'}) - ${heading(stage.description)}`)) || '- No hay etapas temporales relacionadas publicadas.'}
`;
}

export function projectionMarkdown() {
  const projection = loadPublicProjection();
  if (!projection) return null;

  return `# Proyeccion publica de Is My Life

Exportacion: ${projection.exportId}
Generada: ${projection.generatedAt}
Hash: ${projection.hash}

Esta ruta identifica la proyeccion publica aprobada y deriva el desarrollo institucional de Garcia Delillo a su web canonica.

Web de Garcia Delillo: ${garciaDelilloWebUrl}

## Alcance del export

- Entidades: ${projection.entities.length}
- Relaciones: ${projection.relations.length}
- Bloques editoriales: ${projection.contentBlocks.length}
- Assets: ${projection.assets.length}
`;
}
