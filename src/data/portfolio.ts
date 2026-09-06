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
};

export type ProjectSummary = {
  id: string;
  slug: string;
  title: string;
  lead: string;
  sourcePage: string;
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

export const caseStudy = {
  id: 'garcia-delillo',
  slug: 'garcia-delillo',
  title: 'García Delillo Construcciones',
  summary: 'Una evolución profesional desde la representación y el modelado hasta el desarrollo de proyectos y la dirección de obras.',
  href: '/casos/garcia-delillo/',
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
  },
  {
    id: 'capability-modeling',
    slug: 'modelado-y-visualizacion',
    title: 'Modelado y visualización',
    description: 'Traducir una idea espacial a formas que otras personas puedan interpretar.',
  },
  {
    id: 'capability-design',
    slug: 'diseno-de-proyectos',
    title: 'Diseño de proyectos',
    description: 'Organizar decisiones de diseño dentro del desarrollo de un proyecto.',
  },
  {
    id: 'capability-development',
    slug: 'desarrollo-de-proyectos',
    title: 'Desarrollo de proyectos',
    description: 'Conectar propuesta, comunicación y desarrollo de proyecto.',
  },
  {
    id: 'capability-direction',
    slug: 'direccion-de-obras',
    title: 'Dirección de obras',
    description: 'Acompañar la realización de proyectos en obra según el alcance documentado.',
  },
];

export const projects: ProjectSummary[] = [
  { id: 'cedahause', slug: 'cedahause', title: 'CeDaHause', lead: 'Habitar la pendiente sin tocarla', sourcePage: 'GDweb/cedahause.html' },
  { id: 'donahause', slug: 'donahause', title: 'DoNaHause', lead: 'Tradición con carácter propio', sourcePage: 'GDweb/donahause.html' },
  { id: 'gadehause', slug: 'gadehause', title: 'GaDeHause', lead: 'Racionalismo anclado a la tierra', sourcePage: 'GDweb/gadehause.html' },
  { id: 'jobehause', slug: 'jobehause', title: 'JoBeHause', lead: 'Clasicismo atemporal', sourcePage: 'GDweb/jobehause.html' },
  { id: 'jomahause', slug: 'jomahause', title: 'JoMaHause', lead: 'Arcos que reciben, fuego que reúne', sourcePage: 'GDweb/jomahause.html' },
  { id: 'jonohause', slug: 'jonohause', title: 'JoNoHause', lead: 'Tradición habitada', sourcePage: 'GDweb/jonohause.html' },
  { id: 'magahause', slug: 'magahause', title: 'MaGaHause', lead: 'Solidez habitable', sourcePage: 'GDweb/magahause.html' },
  { id: 'markhause', slug: 'markhause', title: 'MarkHause', lead: 'Galería y luz: una casa de campo contemporánea', sourcePage: 'GDweb/markhause.html' },
  { id: 'scohause', slug: 'scohause', title: 'ScoHause', lead: 'Tradición contemporánea, vivida', sourcePage: 'GDweb/scohause.html' },
  { id: 'vidahause', slug: 'vidahause', title: 'ViDaHause', lead: 'Una casa que se vive en la galería', sourcePage: 'GDweb/vidahause.html' },
];

export const graphNodes: GraphNode[] = [
  { id: caseStudy.id, label: caseStudy.title, kind: 'case', href: caseStudy.href, description: caseStudy.summary },
  ...stages.map((stage) => ({ id: stage.id, label: stage.title, kind: 'stage' as const, href: `/trayectoria/#${stage.slug}`, description: stage.description })),
  ...capabilities.map((capability) => ({ id: capability.id, label: capability.title, kind: 'capability' as const, href: `/capacidades/${capability.slug}/`, description: capability.description })),
  ...projects.map((project) => ({ id: project.id, label: project.title, kind: 'project' as const, href: `/proyectos/garcia-delillo/${project.slug}/`, description: project.lead })),
];

export const graphEdges: GraphEdge[] = [
  ...stages.map((stage) => ({
    id: `${caseStudy.id}-${stage.id}`,
    source: caseStudy.id,
    target: stage.id,
    label: 'Etapa',
    explanation: `El caso organiza el recorrido mediante la etapa «${stage.title}».`,
  })),
  { id: 'stage-representation-capability-representation', source: 'stage-representation', target: 'capability-representation', label: 'Capacidad aplicada', explanation: 'La representación se organiza como capacidad del primer tramo del caso.' },
  { id: 'stage-representation-capability-modeling', source: 'stage-representation', target: 'capability-modeling', label: 'Capacidad aplicada', explanation: 'El modelado y la visualización forman parte del primer tramo del caso.' },
  { id: 'stage-project-development-capability-design', source: 'stage-project-development', target: 'capability-design', label: 'Capacidad aplicada', explanation: 'El diseño de proyectos forma parte del tramo de desarrollo de proyectos.' },
  { id: 'stage-project-development-capability-development', source: 'stage-project-development', target: 'capability-development', label: 'Capacidad aplicada', explanation: 'El desarrollo de proyectos aparece como capacidad del segundo tramo.' },
  { id: 'stage-construction-capability-direction', source: 'stage-construction', target: 'capability-direction', label: 'Capacidad aplicada', explanation: 'La dirección de obras identifica el tercer tramo declarado.' },
  ...projects.map((project) => ({
    id: `${caseStudy.id}-${project.id}`,
    source: caseStudy.id,
    target: project.id,
    label: 'Proyecto relacionado',
    explanation: `La página de GDweb presenta ${project.title} dentro del catálogo de la empresa.`,
  })),
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
