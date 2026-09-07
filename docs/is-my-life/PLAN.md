# Plan de desarrollo por encargos pequeños

**Estado:** preparación documental; ninguna tarea IM está implementada por este kit. **Integrador:** responsable único del tablero. **Primera tarea:** [IM-001](encargos/IM-001.md).

## Resultado buscado

Is My Life será la aplicación completa de memoria personal; Ramiro es el primer caso real y su portfolio una proyección. Una sola entidad debe poder aparecer en distintos ámbitos, fechas y recorridos, con la misma identidad y sin duplicaciones. La aplicación permite cargar información y usarla antes de incorporar IA.

Este plan sustituye los paquetes P00–P15 del borrador conversacional: los divide y corrige dependencias. Conserva las decisiones elegidas por Ramiro; adelanta editor y control de acceso, define navegación con camino explícito y exige una muestra personal además del piloto profesional.

## Etapas

| Etapa | Propósito | Encargos | Resultado |
|---|---|---|---|
| A | Preparar | IM-001–003 | Repositorio, entorno y muestra de vida; las fuentes se preparan en paralelo. |
| B | Construir la memoria | IM-004–012 | Contratos, PostgreSQL, sesiones y lectura/escritura segura. |
| C | Cargar y editar | IM-013–018 | Importación del portfolio, datos reales y editor sin tocar código. |
| D | Leer la misma memoria | IM-019–022 | Cuatro vistas, consultas, búsqueda, cards y detalle HTML. |
| E | Recorrer tiempo y dimensiones | IM-023–028 | Historial, dial, controles, ruedas y validación con tu vida. |
| F | Generar el portfolio | IM-029–033 | Exportación aprobada y adaptación compatible del sitio actual. |
| G | Operar y publicar | IM-034–038 | Respaldo, despliegue privado, publicación pública y mantenimiento. |
| H | Asistir la entrada con IA | IM-039–044 | Staging, revisión, primer importador y luego IA con fuentes. |

## Orden práctico de ejecución

1. Ejecutar IM-001 y entregar el repositorio/kit; después IM-002 (entorno) e IM-003 (fuentes) pueden avanzar en paralelo.
2. Completar contratos IM-004/005. IM-006 (navegación pura) puede avanzar junto con IM-007–010 (esquema); luego IM-011/012 habilitan datos reales y editor.
3. Separar escritores para IM-013/014 (datos), IM-015–018 (edición) e IM-019/020 (consultas). No esperar a tener toda la biografía para programar.
4. Integrar texto/card/detalle y luego cada control visual IM-021–027. IM-028 revisa el recorrido real de vida y cierra H2.
5. Preparar export IM-029, adaptar el portfolio IM-030–032 y revisar H3 en IM-033. Solo tareas con prefijo de rutas PORTFOLIO modifican esa aplicación, además del enlace documental de continuidad asignado a IM-001.
6. El respaldo IM-034 puede adelantarse cuando cumpla sus dependencias. Preparar infraestructura IM-035 y desplegar IM-036; la salida pública IM-037 no depende de contratar un servidor privado. IM-038 cierra H4 al comprobar ambas partes.
7. Ejecutar IM-039–044 como ampliación posterior. La primera versión útil no depende de IA.

Los números indican organización, no una orden de ejecutar tareas cuya dependencia falta. La tabla define la disponibilidad efectiva. Las tareas independientes pueden integrarse en distinto orden si se conservan los contratos.

## Tablero inicial

Cada enlace abre un encargo con objetivo, responsable, rutas permitidas, pasos, entrega y pruebas. Los entregables de esta tabla son **previstos**, no existentes. Durante la ejecución, el integrador añade la identidad del responsable y revisión base en el traspaso.

| ID | Etapa | Tarea | Responsable | Dependencias | Estado |
|---|---|---|---|---|---|
| [IM-001](encargos/IM-001.md) | A | Establecer el repositorio y el punto de partida | Integrador | Ninguna | `disponible` |
| [IM-002](encargos/IM-002.md) | A | Preparar el entorno ejecutable y los comandos | Desarrollo | IM-001 | `espera_dependencia` |
| [IM-003](encargos/IM-003.md) | A | Preparar una muestra de vida con fuentes | Contenido / Ramiro | IM-001 | `espera_dependencia` |
| [IM-004](encargos/IM-004.md) | B | Definir entidades y temporalidad | Dominio | IM-002 | `espera_dependencia` |
| [IM-005](encargos/IM-005.md) | B | Definir afirmaciones, evidencias, acceso y vistas | Dominio | IM-004 | `espera_dependencia` |
| [IM-006](encargos/IM-006.md) | B | Implementar el estado de navegación y su URL | Navegación | IM-005 | `espera_dependencia` |
| [IM-007](encargos/IM-007.md) | B | Crear tablas de perfil, políticas, entidades y tiempo | Base de datos | IM-002, IM-005 | `espera_dependencia` |
| [IM-008](encargos/IM-008.md) | B | Persistir fuentes, afirmaciones y texto editorial | Base de datos | IM-007 | `espera_dependencia` |
| [IM-009](encargos/IM-009.md) | B | Persistir relaciones, etiquetas y evidencias | Base de datos | IM-008 | `espera_dependencia` |
| [IM-010](encargos/IM-010.md) | B | Persistir cuatro vistas y sus dimensiones | Base de datos | IM-009 | `espera_dependencia` |
| [IM-011](encargos/IM-011.md) | B | Conectar la sesión del propietario | Desarrollo / Seguridad | IM-010 | `espera_dependencia` |
| [IM-012](encargos/IM-012.md) | B | Implementar lectura y escritura versionada | Desarrollo / Datos | IM-011 | `espera_dependencia` |
| [IM-013](encargos/IM-013.md) | C | Preparar la importación del portfolio en dry-run | Contenido / Datos | IM-012 | `espera_dependencia` |
| [IM-014](encargos/IM-014.md) | C | Cargar la muestra real revisada | Integrador / Datos | IM-013 | `espera_dependencia` |
| [IM-015](encargos/IM-015.md) | C | Construir el editor de entidades | Interfaz | IM-012 | `espera_dependencia` |
| [IM-016](encargos/IM-016.md) | C | Editar vínculos, fechas y afirmaciones | Interfaz | IM-015 | `espera_dependencia` |
| [IM-017](encargos/IM-017.md) | C | Incorporar archivos y sus evidencias | Desarrollo / Datos | IM-016 | `espera_dependencia` |
| [IM-018](encargos/IM-018.md) | C | Editar selecciones de vista y permisos | Interfaz | IM-015, IM-010 | `espera_dependencia` |
| [IM-019](encargos/IM-019.md) | D | Resolver vistas y contexto autorizado | Motor de proyección | IM-012, IM-005 | `espera_dependencia` |
| [IM-020](encargos/IM-020.md) | D | Proyectar tiempo, búsqueda y orden | Motor de proyección | IM-019, IM-004 | `espera_dependencia` |
| [IM-021](encargos/IM-021.md) | D | Servir cuatro vistas en HTML y API | Desarrollo web | IM-020, IM-006, IM-011 | `espera_dependencia` |
| [IM-022](encargos/IM-022.md) | D | Mostrar cards y detalle permanente | Interfaz | IM-021, IM-017 | `espera_dependencia` |
| [IM-023](encargos/IM-023.md) | E | Conectar interacción, historial y breadcrumbs | Navegación / React | IM-022, IM-006 | `espera_dependencia` |
| [IM-024](encargos/IM-024.md) | E | Dibujar el dial desde la proyección | Interfaz temporal | IM-023, IM-020 | `espera_dependencia` |
| [IM-025](encargos/IM-025.md) | E | Agregar controles de tiempo y zoom | Interfaz temporal | IM-024 | `espera_dependencia` |
| [IM-026](encargos/IM-026.md) | E | Implementar ruedas de dimensiones y profundidad | Interfaz de navegación | IM-025 | `espera_dependencia` |
| [IM-027](encargos/IM-027.md) | E | Revisar móvil, teclado y lectura equivalente | Diseño / Revisión | IM-026 | `espera_dependencia` |
| [IM-028](encargos/IM-028.md) | E | Validar la vida de Ramiro como ejemplo del producto | Integrador / Ramiro | IM-003, IM-014, IM-018, IM-027 | `espera_dependencia` |
| [IM-029](encargos/IM-029.md) | F | Generar y aprobar un snapshot público | Datos / Publicación | IM-020, IM-018 | `espera_dependencia` |
| [IM-030](encargos/IM-030.md) | F | Preparar el importador público en el portfolio | Desarrollo (portfolio) | IM-029 | `espera_dependencia` |
| [IM-031](encargos/IM-031.md) | F | Conectar las páginas al export canónico | Desarrollo (portfolio) | IM-030 | `espera_dependencia` |
| [IM-032](encargos/IM-032.md) | F | Comprobar compatibilidad y descubrimiento público | Revisión (portfolio) | IM-031 | `espera_dependencia` |
| [IM-033](encargos/IM-033.md) | F | Revisar la primera versión integrada | Revisor independiente | IM-028, IM-032 | `espera_dependencia` |
| [IM-034](encargos/IM-034.md) | G | Preparar respaldo y restauración | Operaciones / Datos | IM-017, IM-012 | `espera_dependencia` |
| [IM-035](encargos/IM-035.md) | G | Cerrar infraestructura de producción | Integrador / Operaciones | IM-033, IM-034 | `espera_dependencia` |
| [IM-036](encargos/IM-036.md) | G | Desplegar el núcleo privado | Operaciones | IM-035 | `espera_dependencia` |
| [IM-037](encargos/IM-037.md) | G | Publicar el portfolio derivado y verificarlo | Integrador (portfolio) | IM-033 | `espera_dependencia` |
| [IM-038](encargos/IM-038.md) | G | Cerrar la primera versión y entregar operación | Integrador | IM-036, IM-037 | `espera_dependencia` |
| [IM-039](encargos/IM-039.md) | H | Crear staging de importación | Datos | IM-038 | `espera_dependencia` |
| [IM-040](encargos/IM-040.md) | H | Revisar y aplicar propuestas | Interfaz / Datos | IM-039 | `espera_dependencia` |
| [IM-041](encargos/IM-041.md) | H | Importar texto manual a staging | Importadores | IM-040 | `espera_dependencia` |
| [IM-042](encargos/IM-042.md) | H | Preparar el contrato de IA y elegir proveedor | Arquitectura / Integrador | IM-041 | `espera_dependencia` |
| [IM-043](encargos/IM-043.md) | H | Agregar consulta asistida con fuentes | IA / Servidor | IM-042 | `espera_dependencia` |
| [IM-044](encargos/IM-044.md) | H | Proponer cambios con IA y cerrar la ampliación | IA / Integrador | IM-043 | `espera_dependencia` |

## Puntos de control

| Hito | Cuándo | Qué debe demostrarse |
|---|---|---|
| H1 | Editor y esquema integrados | Guardar y relacionar un dato desde UI, persistirlo en PostgreSQL, restringir acceso y configurar cuatro vistas |
| H2 | IM-028 | Tu vida se recorre por ámbitos, tiempo y relaciones; mismo registro desde dos caminos y un episodio personal real |
| H3 | IM-033 | La proyección profesional genera el portfolio local desde la misma memoria, con revisión independiente |
| H4 | IM-038 | Núcleo privado y salida pública operativos, URLs comprobadas, respaldo restaurable y manual de uso |
| H5 | IM-044 | Fuentes entran a staging y la IA propone con revisión humana |

[VALIDACION.md](VALIDACION.md) especifica los escenarios; [ARQUITECTURA.md](ARQUITECTURA.md) y [NAVEGACION.md](NAVEGACION.md) fijan los contratos comunes.

## Entradas faltantes y alcance

Las decisiones conocidas no se vuelven a preguntar. El episodio personal se reúne en IM-003, la cuenta propietaria en IM-011, el alojamiento en IM-035 y el proveedor IA en IM-042. [FUENTES_Y_PENDIENTES.md](FUENTES_Y_PENDIENTES.md) identifica las preguntas y qué tareas continúan mientras tanto.

El plan define un propietario y cuatro vistas, no acceso familiar compartido ni gestión de múltiples propietarios desde la interfaz. El dominio y RLS contemplan pertenencia por perfil. Compartir con invitados, otros idiomas, conectores adicionales, pagos o funciones nuevas requerirán encargos posteriores concretos; no forman una condición oculta para cerrar esta primera versión.

Cada tarea entrega un resultado comprobable antes de pasar a otra. Comenzar con el traspaso de IM-001 según [TRASPASO.md](TRASPASO.md), sin poner las 44 tareas en un único prompt de ejecución.
