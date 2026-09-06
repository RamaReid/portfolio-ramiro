# Alcance inicial del portfolio

**Estado:** definido para la primera etapa; pendiente de revisión independiente.
**Fecha:** 2026-09-05.

## Objetivo y audiencia

El portfolio presentará a Ramiro ante empresas y equipos de tecnología. La prioridad inicial es la búsqueda de empleo en tecnología. La consultoría y la colaboración podrán aparecer como formas de transferir capacidades, pero no desplazan ese objetivo.

El idioma inicial será español. La incorporación de inglés u otros idiomas queda para una decisión posterior.

## Experiencia principal

La experiencia central será un mapa interactivo de proyectos y capacidades. Al seleccionar un nodo, la interfaz destacará sus conexiones y mostrará una explicación con acceso al caso completo. El mapa deberá permitir desplazamiento, zoom, restablecimiento de vista y selección de etapa.

La misma información estará disponible como navegación textual en HTML, con enlaces directos a cada caso y capacidad. Esa versión permitirá leer el contenido con teclado, en móvil y sin JavaScript. La trayectoria temporal será una experiencia complementaria.

## Caso piloto

El primer caso será la evolución profesional dentro de García Delillo Construcciones. El relato recorrerá, en la medida en que cada afirmación pueda documentarse o autorizarse:

- representación y dibujo de proyectos;
- modelado y visualización;
- diseño, relaciones públicas y desarrollo de proyectos;
- dirección y gestión de obras.

El piloto incluirá una introducción al eje narrativo, el mapa, su equivalente textual, una página del caso, el catálogo textual de proyectos, sus 102 evidencias visuales y metadatos que reproduzcan el contenido visible. El texto curricular GD-01 a GD-04 y los textos de proyecto revisados de `GDweb` quedan incorporados; no se publicarán fechas, atribuciones, obras, cifras o resultados que no tengan respaldo o autorización.

## Base técnica acordada

La base será Astro y TypeScript, con HTML semántico, CSS y contenido mantenible en Markdown o colecciones de contenido. La página inicial y las páginas de casos se generarán con contenido esencial en HTML para personas, buscadores y otros sistemas de interpretación.

Para la interacción del mapa se propone React dentro de Astro, React Flow y disposición automática con Dagre. Esta propuesta se validará durante T07 y T08 junto con teclado, lectores de pantalla, móvil, rendimiento y salida HTML. Si una biblioteca impide cumplir esos criterios, el problema deberá informarse antes de sustituirla.

No se incorpora una base de datos, autenticación ni servidor propio mientras no exista una función aprobada que lo requiera.

## Fuera de esta primera etapa

Quedan fuera del piloto el chatbot público, un CMS complejo, una red social, la publicación automática en redes, la versión en inglés, la reconstrucción completa de toda la trayectoria y cualquier cifra, autoría, obra o resultado que no pueda sostenerse.

El contacto, los perfiles externos, el alojamiento, el dominio, las métricas y la selección de casos adicionales se resolverán en sus tareas específicas. No condicionan la preparación inmediata del caso piloto ni del tablero.

## Paso hacia arquitectura

El alcance permitirá a T05 definir el contrato común de casos, capacidades, etapas, evidencias, conexiones, URLs, navegación textual y metadatos. T05 no podrá inventar contenido: las afirmaciones del piloto deberán provenir de la matriz privada y del relato aprobado.
