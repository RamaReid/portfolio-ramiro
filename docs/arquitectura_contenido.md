# Arquitectura de contenido

**Estado:** contrato revisado localmente y aceptado para T06/T07/T08  
**Idioma inicial:** español  
**Objetivo:** alimentar con una fuente editorial común el mapa interactivo, la navegación textual, las páginas directas, la trayectoria temporal y los metadatos.

## Decisiones que el contrato debe respetar

- El contenido esencial debe existir en HTML inicial y poder leerse sin JavaScript.
- El mapa es una forma de explorar el contenido; no es la única forma de acceder a él.
- Cada caso, proyecto, capacidad, etapa, evidencia y conexión debe tener una URL o un enlace descriptivo cuando sea una entidad navegable.
- Una afirmación pública debe tener una única fuente editorial y un estado de autorización identificable.
- Las fuentes privadas, las rutas locales, los originales y los datos sensibles no se serializan en el frontend.
- El piloto incluye el caso de García Delillo Construcciones, el catálogo textual de diez proyectos y un manifiesto con 102 imágenes provenientes de `GDweb`.
- Las evidencias visuales conservan procedencia y texto alternativo. La censura adicional puede aplicarse antes de una publicación externa efectiva.
- La implementación técnica prevista es React dentro de Astro, con React Flow y Dagre para el mapa. Este documento define contenido y datos; T07 y T08 validan las bibliotecas.

## Fuente editorial común

La aplicación debe producir sus vistas desde una colección normalizada de entidades. El formato físico puede ser Markdown, TypeScript, JSON o una colección de contenido de Astro; la elección concreta queda para T07. El contrato lógico es el siguiente:

```ts
type EditorialStatus = 'draft' | 'reviewed' | 'approved' | 'published' | 'excluded'
type ClaimKind = 'curricular' | 'backed-fact' | 'interpretation' | 'editorial-source'

interface SourceRef {
  id: string
  label: string
  kind: 'private' | 'existing-site' | 'public-derived'
}

interface Claim {
  id: string
  publicText: string
  kind: ClaimKind
  status: EditorialStatus
  sourceIds: string[]
}

interface Capability {
  id: string
  slug: string
  title: string
  summary: string
  claimIds: string[]
  status: EditorialStatus
}

interface Stage {
  id: string
  slug: string
  title: string
  order: number
  periodLabel?: string
  claimIds: string[]
  status: EditorialStatus
}

interface Evidence {
  id: string
  projectId: string
  src: string
  alt: string
  caption?: string
  sourceLabel: string
  sourcePage?: string
  mediaType: 'image' | 'plan' | 'render' | 'video' | 'document'
  status: EditorialStatus
}

interface Project {
  id: string
  slug: string
  title: string
  summary: string
  body: string
  caseId: string
  stageIds: string[]
  capabilityIds: string[]
  claimIds: string[]
  evidenceIds: string[]
  sourcePage?: string
  status: EditorialStatus
}

interface CaseStudy {
  id: string
  slug: string
  title: string
  summary: string
  body: string
  stageIds: string[]
  capabilityIds: string[]
  projectIds: string[]
  evidenceIds: string[]
  claimIds: string[]
  status: EditorialStatus
}

interface Connection {
  id: string
  fromId: string
  toId: string
  label: string
  explanation: string
  claimIds: string[]
  status: EditorialStatus
}

interface TimelineEvent {
  id: string
  title: string
  description: string
  dateLabel?: string
  order: number
  targetId: string
  claimIds: string[]
  status: EditorialStatus
}
```

Los identificadores son estables y no dependen del texto visible. Los `claimIds` permiten que una misma afirmación alimente una página, un nodo, una conexión y un metadato sin copiarla con variaciones.

## Entidades del piloto

El piloto debe registrar como entidades separadas:

- un caso: `garcia-delillo`;
- diez proyectos con slugs derivados de sus nombres: `cedahause`, `donahause`, `gadehause`, `jobehause`, `jomahause`, `jonohause`, `magahause`, `markhause`, `scohause` y `vidahause`;
- capacidades y etapas provenientes del relato curricular aprobado;
- 102 evidencias del manifiesto de `GDweb`;
- conexiones solamente cuando expliquen una relación editorial concreta entre proyecto, etapa y capacidad.

La presencia de una imagen o de un nombre de carpeta no crea por sí sola una conexión. La relación debe estar expresada por el texto del proyecto, por la ficha editorial o por una decisión registrada.

## Tipos de página y URLs propuestas

Estas rutas son una propuesta de T05 y deben conservar slugs estables si D11 no cambia:

| Tipo | Ruta propuesta | Contenido esencial |
|---|---|---|
| Explorador | `/` | Introducción, mapa, lista textual de nodos y enlaces a casos, proyectos y capacidades |
| Caso | `/casos/garcia-delillo/` | Relato, etapas, capacidades, proyectos relacionados, evidencias y fuentes editoriales públicas |
| Proyecto | `/proyectos/garcia-delillo/cedahause/` | Texto del proyecto, relación con el caso, galería autorizada y enlaces de retorno |
| Capacidad | `/capacidades/representacion-y-modelado/` | Descripción, proyectos y etapas que la aplican, con texto visible suficiente |
| Trayectoria | `/trayectoria/` | Eventos temporales y enlaces al contenido existente; las fechas abiertas se mantienen como tales |
| Evidencia | `/evidencias/garcia-delillo/cedahause/` | Solo si una evidencia requiere una página propia; la galería puede bastar en el caso o proyecto |

Los slugs se escriben en minúscula, sin acentos, con guiones y sin datos personales. Una URL directa no debe depender de una selección previa en el mapa ni de un estado almacenado en el navegador.

## Relación entre mapa, HTML y páginas

La misma colección normalizada debe generar tres salidas:

1. **HTML inicial:** títulos, resúmenes, lista de nodos, conexiones explicadas, enlaces directos y contenido del caso.
2. **Datos del mapa:** nodos y conexiones con los mismos `id`, títulos, URLs y textos de `explanation` que aparecen en el HTML.
3. **Metadatos:** título, descripción, canonical y datos estructurados derivados de los mismos campos visibles.

El componente interactivo puede reemplazar o enriquecer la lista visual después de hidratarse. No debe eliminar del DOM el contenido esencial que permite leer y navegar sin JavaScript. Si el mapa enfoca un nodo, el detalle debe enlazar a la URL directa de esa entidad y explicar sus conexiones con texto, no solo con color o posición.

## Fallback HTML y estados del mapa

La ruta inicial debe mostrar, antes de la interacción:

- el propósito del portfolio;
- el eje «El output cambia. El método permanece.»;
- un enlace al caso de García Delillo;
- una lista de proyectos, capacidades y etapas;
- una explicación textual de cada conexión pública;
- un enlace al catálogo o galería de evidencias cuando exista.

El mapa puede añadir desplazamiento, zoom, restablecimiento, selección de etapa y foco de conexiones. Cada control necesita nombre accesible, foco visible, operación de teclado y alternativa textual. En móvil, el detalle del nodo aparece debajo del mapa y sigue siendo parte del flujo normal de lectura.

Un caso sin evidencias visuales sigue siendo válido: se omite la galería, se conserva el relato y se informa que no hay recursos autorizados. Un caso con evidencias muestra solamente los recursos cuyo estado sea `approved` o `published`.

## Estados editoriales

- `draft`: contenido en preparación; no entra en la salida pública.
- `reviewed`: fuente o texto revisado, pendiente de aprobación de alcance.
- `approved`: autorizado para la salida del proyecto local.
- `published`: incorporado a una versión que se publicó y verificó.
- `excluded`: se conserva la razón editorial, pero no se muestra.

Un estado de una fuente no sustituye el estado de una afirmación. Una página de `GDweb` puede ser una fuente editorial revisada; la evidencia derivada conserva además su procedencia, `alt`, tipo de recurso y relación con el proyecto.

## Fuentes, afirmaciones y autorización

Los campos privados y los campos públicos deben vivir en capas distintas.

| Campo | Área | Uso |
|---|---|---|
| `publicText` | Pública | Formulación que aparece en HTML, mapa y metadatos |
| `kind` | Pública/editorial | Distingue declaración curricular, hecho respaldado, interpretación o texto editorial de sitio existente |
| `sourceIds` | Editorial | Relaciona la afirmación con fuentes sin exponer rutas privadas |
| `status` | Editorial | Impide que un borrador llegue al frontend |
| Ruta local original | Privada | Trazabilidad de coordinación; nunca se serializa |
| Permiso detallado | Privada/editorial | Control de uso; se refleja públicamente solo mediante el estado resultante |
| Datos de cliente o terceros | Privada | No se incorporan al contrato público salvo autorización específica |

El texto visible debe coincidir con `publicText`. No se deben agregar en JSON-LD, `alt`, `title`, atributos ocultos o palabras clave datos que no aparezcan en el contenido aprobado.

## Evidencias

El manifiesto público del piloto usa este contrato mínimo por recurso:

```json
{
  "id": "cedahause-exterior-sur",
  "projectId": "cedahause",
  "src": "/evidencias/garcia-delillo/cedahause/cedahause-exterior-sur.png",
  "alt": "Pilotes elevando la vivienda en Cedahause",
  "sourceLabel": "GDweb/img/cedahause/cedahause-exterior-sur.png",
  "sourcePage": "GDweb/cedahause.html",
  "mediaType": "image",
  "status": "approved"
}
```

El ejemplo usa un recurso ya catalogado. La aplicación no debe asumir que todo archivo privado tiene un `src` público. La copia pública se hace solo después de registrar la procedencia, el texto alternativo y el estado editorial.

## Conexiones y capacidades

Una conexión contiene una explicación legible:

```json
{
  "id": "conexion-ejemplo",
  "fromId": "cedahause",
  "toId": "capacidad-modelado",
  "label": "Modelado y visualización",
  "explanation": "El proyecto se relaciona con esta capacidad porque el texto editorial aprobado describe su representación y visualización.",
  "claimIds": ["claim-ejemplo"],
  "status": "approved"
}
```

El texto de `explanation` se muestra en el detalle del nodo y en la navegación textual. La conexión no debe comunicar una responsabilidad individual, una fecha o un resultado que no esté en sus `claimIds`.

## Metadatos y datos estructurados

Cada página debe generar:

- `title`, `description` y `canonical` coherentes con el título y resumen visibles;
- Open Graph y tarjeta social con el mismo título, descripción e imagen autorizada;
- JSON-LD de `WebPage` para páginas generales y `CreativeWork` o `Article` para casos y proyectos cuando sus campos estén visibles;
- `ImageObject` solo para imágenes realmente incluidas en la página, con `contentUrl`, `caption` o `description` coincidentes con `alt` y pie visibles.

No se usarán datos estructurados para añadir fechas, ubicación, clientes, métricas, roles o resultados que no estén en el contenido visible y aprobado. Una validación de T13 debe comparar el texto extraído del HTML con los valores principales de los metadatos.

## Privacidad y materiales privados

- `referencias_privadas/` no entra en Git.
- No se guardan en el frontend rutas locales, nombres de archivos privados, documentos originales ni datos de clientes.
- Los recursos públicos se derivan a `public/evidencias/garcia-delillo/` con nombres y rutas que no expongan información sensible.
- El manifiesto no incluye permisos detallados, datos de terceros ni ubicaciones privadas.
- La revisión de censura puede sustituir un recurso por otro derivado sin cambiar el `projectId` ni la trazabilidad editorial.
- El informe de cada cambio distingue copia local, commit, push, despliegue y URL comprobada.

## Preguntas que quedan para T06/T07/T08

- T06 debe fijar la presentación visual, densidad del mapa, estados de selección y comportamiento móvil.
- T07 debe convertir este contrato en colecciones o tipos reales y comprobar la salida Astro.
- T08 debe validar que la hidratación del mapa no cambie el HTML esencial y que el manifiesto se consuma sin duplicar contenido.
- Las decisiones de contacto, perfiles, dominio, alojamiento y analítica quedan fuera de este contrato.
