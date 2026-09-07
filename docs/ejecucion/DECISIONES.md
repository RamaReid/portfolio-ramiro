# Decisiones vigentes para la ejecución

Este registro contiene decisiones de producto y tecnología. El [tablero](TAREAS.md) contiene el estado de ejecución; completar un análisis no equivale a completar una implementación. Las instrucciones actuales de Ramiro prevalecen sobre este registro.

## Acuerdos confirmados

| ID | Decisión | Base de la decisión | Consecuencia |
|---|---|---|---|
| D01 | Eje «El output cambia. El método permanece.» | AGENTS.md y brief | Los casos deben explicar la continuidad metodológica con evidencia |
| D02 | Desarrollo local y publicación mediante GitHub; sin Lovable | AGENTS.md e instrucciones de Ramiro | Usar el repositorio y conservar los estados de publicación separados |
| D03 | Astro y TypeScript como base, con HTML, CSS y Markdown | Conformidad de Ramiro con la recomendación tecnológica al solicitar su preparación para ejecución | Inicializar esa base en T07; no repetir la selección de framework salvo un cambio concreto de alcance |
| D04 | Facilitar descubrimiento, interpretación y extracción por buscadores | Solicitud expresa de Ramiro y requisito incorporado al brief | Entregar información esencial en HTML inicial y enlaces estándar; comprobar extracción desde T08 |
| D05 | Conservar originales, proteger fuentes privadas y publicar solo contenido autorizado | AGENTS.md | Las fuentes privadas no entran en Git ni en los archivos del frontend |
| D06 | Ejecutar por paquetes y preparar traspasos a otros modelos | Solicitud de Ramiro | Usar encargos acotados, entregas verificables y un estado común |
| D07 | Audiencia y objetivo prioritario | Confirmado por Ramiro; registrado en T01 | Empresas y equipos de tecnología; prioridad en conseguir empleo. Consultoría y colaboración quedan como transferencias posibles de capacidades |
| D08 | Alcance funcional e idiomas iniciales | Confirmado por Ramiro; registrado en T01 | Español; mapa interactivo de proyectos y capacidades como experiencia principal, equivalente textual en HTML y trayectoria temporal complementaria |
| D09 | Caso piloto y selección inicial de casos | Confirmado por Ramiro; registrado en T01/T02 | Evolución profesional dentro de García Delillo Construcciones, desde representación y modelado hasta desarrollo de proyectos y dirección de obras, según fuentes y autorizaciones |
| D13 | Contacto y perfil público | Confirmado por Ramiro al proporcionar el perfil individual; destino comprobado el 2026-09-06 | GitHub (`RamaReid`) funciona como perfil profesional y canal de contacto. No se incorpora correo, teléfono ni formulario en esta etapa |

La aceptación de D03 se refiere a la base presentada. No selecciona versiones, alojamiento, bibliotecas opcionales ni funciones que aún no se definieron. La generación estática de HTML será la base de implementación; una necesidad de servidor se evalúa cuando exista una función concreta que la requiera.

Para el mapa del piloto se adopta como dirección de implementación React dentro de Astro, React Flow y disposición automática con Dagre. T07 y T08 deben validar teclado, lectores de pantalla, móvil, rendimiento y la conservación del contenido esencial en HTML. Si alguna biblioteca impide cumplir esos criterios, el ejecutor debe informar el problema antes de proponer un reemplazo.

## Decisiones pendientes y tarea que las prepara

| ID | Tema | Quién prepara la alternativa | Qué debe quedar registrado para cerrar |
|---|---|---|---|
| D10 | Autorización de cada pieza y afirmación pública | T03/T04 y cada ampliación | Qué texto y derivado se autoriza; el respaldo sensible se conserva en privado |
| D11 | Arquitectura, URLs y estructura de contenido | T05 | Contrato de páginas y datos; resolver la propuesta de URL por caso desarrollado |
| D12 | Dirección visual y comportamientos | T06 | Vistas y estados aprobados; coherencia entre diseño y navegación sin JavaScript |
| D14 | Alojamiento, dominio y publicación | T15 prepara con antecedentes de T07 | Destino, configuración y efecto del push; autorización de publicación aplicable |
| D15 | Analítica y mantenimiento | T15 | Necesidad de analítica si se elige, responsable y forma de actualización |

Para el caso curricular de T03, la autorización textual cubre GD-01 a GD-04. Además, el titular confirmó que los textos de las páginas de proyecto de `GDweb` ya cuentan con revisión editorial por formar parte de la web de la empresa; esos textos se incorporan al catálogo de proyectos con su procedencia. T04 mantuvo separada la selección visual y completó ficha, procedencia, textos alternativos y revisión para las 102 imágenes que ahora tienen derivados web locales. Imágenes, planos, videos, renders y documentos adicionales siguen requiriendo revisión propia antes de incorporarse.

Versiones compatibles, nombres internos y organización de código dentro del contrato son decisiones rutinarias de implementación. El ejecutor las documenta y verifica. Agregar otro framework, un servicio o una función que cambie el alcance requiere una decisión concreta, no una suposición.

## Cómo registrar una decisión nueva

Registrar el tema, las alternativas presentadas, la elección expresada por Ramiro, su alcance y las tareas afectadas. Usar una síntesis fiel o una cita breve de la instrucción; no convertir el silencio en aprobación ni extender una conformidad a decisiones no planteadas.

No incluir aquí material confidencial ni datos de terceros. Cuando la decisión depende de un original, conservar el detalle en `referencias_privadas/` y registrar públicamente solo el resultado autorizado. Un identificador interno puede relacionar ambas partes sin exponer nombres de archivos sensibles.

Si cambia una decisión, conservar una nota breve de qué quedó sustituido y actualizar las fichas afectadas. Reabrir únicamente las tareas cuyo resultado ya no cumple el nuevo alcance.
