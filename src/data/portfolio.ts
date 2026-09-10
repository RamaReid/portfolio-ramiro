import { sitePath } from './site';

export type Stage = {
  id: string;
  slug: string;
  title: string;
  periodLabel?: string;
  description: string;
};

export type Capability = {
  id: string;
  slug: string;
  title: string;
  description: string;
  caseIds: string[];
  stageIds: string[];
};

export type ProjectSummary = {
  id: string;
  slug: string;
  title: string;
  lead: string;
  sourcePage: string;
  caseId: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  href: string;
  sourcePage?: string;
  stageIds: string[];
  capabilityIds: string[];
  projectIds: string[];
};

export type GarciaDelilloLayer = {
  id: string;
  title: string;
  description: string;
};

export type TimelineEvent = {
  id: string;
  stageId: string;
  slug: string;
  title: string;
  periodLabel?: string;
  description: string;
  href: string;
  caseIds: string[];
};

export type GraphNode = {
  id: string;
  label: string;
  kind: 'case' | 'stage' | 'capability' | 'project';
  href: string;
  description: string;
};

export type GraphEdge = {
  id: string;
  source: string;
  target: string;
  label: string;
  explanation: string;
};

export const stages: Stage[] = [
  {
    id: 'stage-representation',
    slug: 'representacion-y-modelado',
    title: 'Representación y modelado',
    periodLabel: '1997–2002',
    description: 'Dibujo de planos, maquetas físicas y virtuales, y visualización de proyectos según la declaración curricular.',
  },
  {
    id: 'stage-project-development',
    slug: 'diseno-y-desarrollo',
    title: 'Diseño y desarrollo de proyectos',
    periodLabel: 'Desde 2002',
    description: 'Diseño, relaciones públicas y desarrollo de proyectos según la formulación editorial aprobada.',
  },
  {
    id: 'stage-construction',
    slug: 'direccion-de-obras',
    title: 'Dirección de obras',
    periodLabel: 'Desde 2004',
    description: 'Dirección de obras según la declaración curricular, sin agregar responsabilidades no documentadas.',
  },
];

export const capabilities: Capability[] = [
  {
    id: 'capability-representation',
    slug: 'representacion',
    title: 'Representación',
    description: 'Hacer visible una propuesta para poder entenderla, comunicarla y revisarla.',
    caseIds: ['garcia-delillo'],
    stageIds: ['stage-representation'],
  },
  {
    id: 'capability-modeling',
    slug: 'modelado-y-visualizacion',
    title: 'Modelado y visualización',
    description: 'Traducir una idea espacial a formas que otras personas puedan interpretar.',
    caseIds: ['garcia-delillo'],
    stageIds: ['stage-representation'],
  },
  {
    id: 'capability-design',
    slug: 'diseno-de-proyectos',
    title: 'Diseño de proyectos',
    description: 'Organizar decisiones de diseño dentro del desarrollo de un proyecto.',
    caseIds: ['garcia-delillo'],
    stageIds: ['stage-project-development'],
  },
  {
    id: 'capability-development',
    slug: 'desarrollo-de-proyectos',
    title: 'Desarrollo de proyectos',
    description: 'Conectar propuesta, comunicación y desarrollo de proyecto.',
    caseIds: ['garcia-delillo'],
    stageIds: ['stage-project-development'],
  },
  {
    id: 'capability-direction',
    slug: 'direccion-de-obras',
    title: 'Dirección de obras',
    description: 'Acompañar la realización de proyectos en obra según el alcance documentado.',
    caseIds: ['garcia-delillo'],
    stageIds: ['stage-construction'],
  },
  {
    id: 'capability-conversational-architecture',
    slug: 'arquitectura-conversacional',
    title: 'Arquitectura conversacional',
    description: 'Diseñar entrevistas que avanzan por preguntas y convierten respuestas en una estructura legible.',
    caseIds: ['productoria'],
    stageIds: [],
  },
  {
    id: 'capability-systems-modeling',
    slug: 'modelado-de-sistemas',
    title: 'Modelado de sistemas',
    description: 'Representar una organización mediante entidades, relaciones y jerarquías que pueden explorarse.',
    caseIds: ['productoria'],
    stageIds: [],
  },
  {
    id: 'capability-organizational-diagnosis',
    slug: 'diagnostico-organizacional',
    title: 'Diagnóstico organizacional',
    description: 'Ordenar información sobre una empresa para detectar estructura, funcionamiento y áreas de análisis.',
    caseIds: ['productoria'],
    stageIds: [],
  },
  {
    id: 'capability-workflow-design',
    slug: 'diseno-de-workflows',
    title: 'Diseño de workflows',
    description: 'Secuenciar conversación, persistencia y actualización de un resultado visual.',
    caseIds: ['productoria'],
    stageIds: [],
  },
  {
    id: 'capability-applied-ai',
    slug: 'ia-aplicada',
    title: 'IA aplicada',
    description: 'Integrar un agente conversacional dentro de un flujo que produce una representación explorable.',
    caseIds: ['productoria'],
    stageIds: [],
  },
  {
    id: 'capability-web-development',
    slug: 'desarrollo-web',
    title: 'Desarrollo web',
    description: 'Construir interfaces y recorridos web con HTML, CSS, JavaScript, TypeScript y React.',
    caseIds: ['programming-interfaces'],
    stageIds: [],
  },
  {
    id: 'capability-interface-architecture',
    slug: 'arquitectura-de-interfaces',
    title: 'Arquitectura de interfaces',
    description: 'Organizar rutas, componentes y estados para que una experiencia interactiva tenga una lectura clara.',
    caseIds: ['programming-interfaces'],
    stageIds: [],
  },
  {
    id: 'capability-interactive-narrative',
    slug: 'narrativa-interactiva',
    title: 'Narrativa interactiva',
    description: 'Convertir una secuencia de contenidos en escenas, transiciones y recorridos navegables.',
    caseIds: ['programming-interfaces'],
    stageIds: [],
  },
  {
    id: 'capability-frontend-motion',
    slug: 'motion-design-frontend',
    title: 'Motion design frontend',
    description: 'Diseñar loaders, animaciones SVG/CSS y cambios de estado que acompañan la lectura de una interfaz.',
    caseIds: ['programming-interfaces'],
    stageIds: [],
  },
  {
    id: 'capability-content-modeling',
    slug: 'modelado-de-contenido',
    title: 'Modelado de contenido',
    description: 'Estructurar catálogos, fichas y relaciones para que el contenido pueda alimentar distintas vistas.',
    caseIds: ['programming-interfaces'],
    stageIds: [],
  },
];

export const projects: ProjectSummary[] = [
  { id: 'cedahause', slug: 'cedahause', title: 'CeDaHause', lead: 'Habitar la pendiente sin tocarla', sourcePage: 'GDweb/cedahause.html', caseId: 'garcia-delillo' },
  { id: 'donahause', slug: 'donahause', title: 'DoNaHause', lead: 'Tradición con carácter propio', sourcePage: 'GDweb/donahause.html', caseId: 'garcia-delillo' },
  { id: 'gadehause', slug: 'gadehause', title: 'GaDeHause', lead: 'Racionalismo anclado a la tierra', sourcePage: 'GDweb/gadehause.html', caseId: 'garcia-delillo' },
  { id: 'jobehause', slug: 'jobehause', title: 'JoBeHause', lead: 'Clasicismo atemporal', sourcePage: 'GDweb/jobehause.html', caseId: 'garcia-delillo' },
  { id: 'jomahause', slug: 'jomahause', title: 'JoMaHause', lead: 'Arcos que reciben, fuego que reúne', sourcePage: 'GDweb/jomahause.html', caseId: 'garcia-delillo' },
  { id: 'jonohause', slug: 'jonohause', title: 'JoNoHause', lead: 'Tradición habitada', sourcePage: 'GDweb/jonohause.html', caseId: 'garcia-delillo' },
  { id: 'magahause', slug: 'magahause', title: 'MaGaHause', lead: 'Solidez habitable', sourcePage: 'GDweb/magahause.html', caseId: 'garcia-delillo' },
  { id: 'markhause', slug: 'markhause', title: 'MarkHause', lead: 'Galería y luz: una casa de campo contemporánea', sourcePage: 'GDweb/markhause.html', caseId: 'garcia-delillo' },
  { id: 'scohause', slug: 'scohause', title: 'ScoHause', lead: 'Tradición contemporánea, vivida', sourcePage: 'GDweb/scohause.html', caseId: 'garcia-delillo' },
  { id: 'vidahause', slug: 'vidahause', title: 'ViDaHause', lead: 'Una casa que se vive en la galería', sourcePage: 'GDweb/vidahause.html', caseId: 'garcia-delillo' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'garcia-delillo',
    slug: 'garcia-delillo',
    title: 'García Delillo Construcciones',
    summary: 'Una evolución profesional desde la representación y el modelado hasta el desarrollo de proyectos y la dirección de obras.',
    href: sitePath('/casos/garcia-delillo/'),
    stageIds: stages.map((stage) => stage.id),
    capabilityIds: capabilities.filter((capability) => capability.caseIds.includes('garcia-delillo')).map((capability) => capability.id),
    projectIds: [],
  },
  {
    id: 'productoria',
    slug: 'productoria',
    title: 'Productoria · Genio Productor',
    summary: 'Un prototipo de entrevista conversacional que transforma información sobre una empresa en un mapa de nodos y relaciones.',
    href: sitePath('/casos/productoria/'),
    sourcePage: 'https://github.com/productoria/bci-next-app',
    stageIds: [],
    capabilityIds: capabilities.filter((capability) => capability.caseIds.includes('productoria')).map((capability) => capability.id),
    projectIds: [],
  },
  {
    id: 'programming-interfaces',
    slug: 'programacion-interfaces',
    title: 'Programación, interfaces y sistemas visuales',
    summary: 'Una selección de repositorios que reúne aplicaciones web, navegación editorial, modelado de catálogos y sistemas de movimiento para frontend.',
    href: sitePath('/casos/programacion-interfaces/'),
    sourcePage: 'https://github.com/RamaReid',
    stageIds: [],
    capabilityIds: capabilities.filter((capability) => capability.caseIds.includes('programming-interfaces')).map((capability) => capability.id),
    projectIds: [],
  },
];

export const caseStudy = caseStudies[0];
export const productoriaCase = caseStudies[1];
export const programmingCase = caseStudies[2];

export const garciaDelilloWebUrl = 'https://gdarq.lovable.app';
export const garciaDelilloIdentityUrl = sitePath('/casos/garcia-delillo/identidad/');

export const garciaDelilloLayers: GarciaDelilloLayer[] = [
  {
    id: 'identidad-empresarial',
    title: 'Diseno de la imagen empresarial',
    description: 'La identidad empresarial organiza el modo en que Garcia Delillo se presenta como Arquitectura, Diseno y Construccion.',
  },
  {
    id: 'web-y-animacion',
    title: 'Animacion del logo y pagina web',
    description: 'La animacion del logo y la pagina web llevan esa identidad a una experiencia digital navegable.',
  },
  {
    id: 'obras-construidas',
    title: 'Arquitectura, Diseno y Construccion',
    description: 'Las obras construidas forman el cuerpo de trabajo que la web de Garcia Delillo presenta y desarrolla.',
  },
];

export const timelineEvents: TimelineEvent[] = stages.map((stage) => ({
  id: `timeline-${stage.id}`,
  stageId: stage.id,
  slug: stage.slug,
  title: stage.title,
  periodLabel: stage.periodLabel,
  description: stage.description,
  href: sitePath(`/trayectoria/#${stage.slug}`),
  caseIds: caseStudies.filter((item) => item.stageIds.includes(stage.id)).map((item) => item.id),
}));

export const graphNodes: GraphNode[] = [
  ...caseStudies.map((item) => ({ id: item.id, label: item.title, kind: 'case' as const, href: item.href, description: item.summary })),
  ...stages.map((stage) => ({ id: stage.id, label: stage.title, kind: 'stage' as const, href: sitePath(`/trayectoria/#${stage.slug}`), description: stage.description })),
  ...capabilities.map((capability) => ({ id: capability.id, label: capability.title, kind: 'capability' as const, href: sitePath(`/capacidades/${capability.slug}/`), description: capability.description })),
];

export const graphEdges: GraphEdge[] = [
  ...caseStudies.flatMap((item) => [
    ...item.stageIds.map((stageId) => {
      const stage = stages.find((candidate) => candidate.id === stageId);
      return {
        id: `${item.id}-${stageId}`,
        source: item.id,
        target: stageId,
        label: 'Etapa',
        explanation: stage ? `El caso organiza el recorrido mediante la etapa «${stage.title}».` : 'El caso se relaciona con esta etapa.',
      };
    }),
    ...item.capabilityIds.map((capabilityId) => {
      const capability = capabilities.find((candidate) => candidate.id === capabilityId);
      return {
        id: `${item.id}-${capabilityId}`,
        source: item.id,
        target: capabilityId,
        label: 'Capacidad aplicada',
        explanation: capability ? `El caso muestra la capacidad de ${capability.title.toLowerCase()} dentro del trabajo documentado.` : 'El caso se relaciona con esta capacidad.',
      };
    }),
    ...item.projectIds.map((projectId) => {
      const project = projects.find((candidate) => candidate.id === projectId);
      return {
        id: `${item.id}-${projectId}`,
        source: item.id,
        target: projectId,
        label: 'Proyecto relacionado',
        explanation: project ? `La página de GDweb presenta ${project.title} dentro del catálogo de la empresa.` : 'El caso se relaciona con este proyecto.',
      };
    }),
  ]),
  ...capabilities.flatMap((capability) => capability.stageIds.map((stageId) => ({
    id: `${stageId}-${capability.id}`,
    source: stageId,
    target: capability.id,
    label: 'Capacidad aplicada',
    explanation: `La capacidad de ${capability.title.toLowerCase()} aparece vinculada a esta etapa del recorrido.`,
  }))),
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
