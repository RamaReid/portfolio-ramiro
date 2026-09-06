# Tablero de tareas

**Actualizado:** 2026-09-06  
**Responsable del tablero:** Integrador  
**Estado general:** T01, T02, T03, T04, T05, T06 y T07 completas; T08 disponible; todavía no hay commit, push, despliegue ni publicación.

Este tablero es la fuente operativa para pasar encargos a otros modelos. El integrador es la única persona responsable de cambiar estados y cerrar tareas. Cada encargo debe transmitirse junto con la revisión de Git, los cambios locales no confirmados y los archivos permitidos.

## Estados

- `disponible`: puede comenzar porque sus dependencias están satisfechas.
- `en_curso`: está asignada y tiene un responsable trabajando.
- `en_revision`: existe una entrega y falta contrastarla.
- `requiere_correccion`: la revisión encontró un problema que impide cerrar.
- `espera_dependencia`: todavía depende de otra tarea.
- `espera_decision`: requiere cerrar una decisión de `DECISIONES.md`.
- `espera_fuente`: el trabajo no puede concluir hasta obtener o verificar una fuente.
- `completa`: el integrador comprobó los criterios de cierre y aceptó la entrega.
- `no_aplica`: el integrador registró por qué la tarea dejó de ser necesaria.

## Orden de ejecución

| ID | Tarea | Estado | Dependencias | Responsable | Entrega principal |
|---|---|---|---|---|---|
| T01 | Registrar alcance inicial | `completa` | Ninguna | Integrador / Contenido | `docs/alcance_inicial.md` y `entregas/T01.md` |
| T02 | Contrastar fuentes de García Delillo | `completa` | Ninguna | Contenido, con acceso privado | Matriz privada y `entregas/T02.md` |
| T03 | Redactar el caso piloto | `completa` | T01, T02 | Contenido | `encargos/T03.md` y `docs/casos/garcia-delillo.md` |
| T04 | Preparar evidencias | `completa` | T02, T03 | Contenido / Integrador | 102 imágenes, manifiesto, procedencia y textos alternativos |
| T05 | Definir páginas, datos y conexiones | `completa` | T03, T04 | Arquitectura | `docs/arquitectura_contenido.md` y `entregas/T05.md` |
| T06 | Diseñar la experiencia del explorador | `completa` | T01, T05 | Diseño | `docs/diseno_experiencia.md` y `entregas/T06.md` |
| T07 | Preparar la base técnica | `completa` | T01, T05 | Desarrollo | Aplicación Astro local ejecutable y `entregas/T07.md` |
| T08 | Integrar el primer recorrido completo | `disponible` | T03, T04, T06, T07 | Desarrollo | Mapa, fallback, caso y evidencias |
| T09 | Ampliar casos | `espera_dependencia` | T08 y fuente aprobada por caso | Encargos separados | Casos adicionales integrados |
| T10 | Incorporar la trayectoria temporal | `espera_dependencia` | T08, T05 | Desarrollo / Contenido | Recorrido temporal accesible |
| T11 | Incorporar método, IA y docencia | `espera_dependencia` | T08 y fichas aprobadas | Contenido / Desarrollo | Secciones conectadas al mapa |
| T12 | Resolver contacto y perfiles | `espera_decision` | T05, D13 | Integrador / Contenido | Contacto y perfiles aprobados |
| T13 | Validar la versión integral | `espera_dependencia` | T08–T12 aplicables | Desarrollo | Informe de validación |
| T14 | Revisar de forma independiente | `espera_dependencia` | T13 | Revisor | Informe de revisión |
| T15 | Publicar y fijar mantenimiento | `espera_dependencia` | T14, D14 | Integrador | Publicación mediante GitHub y mantenimiento documentado |

## Encargos

### T01 — Registrar alcance inicial

**Objetivo:** convertir las decisiones de partida en un alcance verificable para contenido, arquitectura, diseño y desarrollo.

**Dependencias:** ninguna.  
**Archivos que puede modificar:** `docs/alcance_inicial.md`, `docs/ejecucion/DECISIONES.md`, `docs/ejecucion/entregas/T01.md`.  
**Archivos que no debe modificar:** código de la aplicación, materiales de `referencias_privadas/`, evidencias públicas y documentos ajenos al encargo.

**Fuentes necesarias:** el plan recibido en la conversación, `docs/proyecto_aplicacion.md`, `docs/analisis_tecnologico.md`, `docs/plan_desarrollo.md` y `docs/ejecucion/DECISIONES.md`.

**Entregable:** alcance inicial con objetivo, idioma, experiencia principal, piloto, límites y paso hacia arquitectura; decisiones D07–D09 actualizadas cuando ya estén definidas.

**Criterios de cierre:**

1. El alcance distingue objetivo principal, experiencia central, recorrido temporal y piloto.
2. El alcance conserva la exigencia de HTML legible sin JavaScript.
3. El alcance no inventa obras, fechas, roles, métricas ni resultados.
4. Las decisiones confirmadas y las pendientes quedan separadas.
5. El informe de entrega registra comprobaciones reales y estado local, commit, push, despliegue y URL.

### T02 — Contrastar fuentes de García Delillo

**Objetivo:** construir una matriz privada de afirmaciones, fuentes, clasificación, permisos y dudas para que T03 pueda redactar sin completar vacíos por inferencia.

**Dependencias:** ninguna.  
**Archivos que puede modificar:** `referencias_privadas/01_Trayectoria_y_CV/matriz_garcia_delillo.md` y `docs/ejecucion/entregas/T02.md`.  
**Archivos que no debe modificar:** originales privados, código, contenido público y evidencias públicas.

**Fuentes necesarias:** `referencias_privadas/01_Trayectoria_y_CV/Curriculum.docx`, `referencias_privadas/01_Trayectoria_y_CV/RGarciaReidUX.pdf`, el inventario de referencias y cualquier fuente externa que el integrador entregue de forma expresa. Los originales privados quedan fuera del repositorio público.

**Entregable:** matriz privada por afirmación, con fuente localizada, tipo de afirmación, estado de respaldo, autorización necesaria, discrepancias y pregunta pendiente. La entrega debe informar también si una fuente externa no pudo ser consultada.

**Criterios de cierre:**

1. Cada afirmación relevante del piloto está clasificada como declaración curricular, hecho respaldado o interpretación.
2. Los períodos y atribuciones abiertos quedan señalados como pendientes.
3. Las cifras curriculares no se presentan como hechos independientes.
4. Las imágenes y obras no se asignan al piloto sin evidencia específica.
5. No se copian originales privados al área pública.

### T03 — Redactar el caso piloto

**Objetivo:** producir un relato revisable y trazable sobre la evolución profesional en García Delillo Construcciones.

**Dependencias:** T01 y T02.  
**Archivos que puede modificar:** `docs/casos/garcia-delillo.md` y su informe de entrega.  
**Entregable:** relato en español, con afirmaciones enlazadas a la matriz y marcadores explícitos donde falta autorización o fuente.

**Criterios de cierre:** el relato separa hechos, declaraciones curriculares e interpretaciones; no agrega obras o resultados no documentados; incluye una conexión clara entre capacidades aplicadas y etapas; y puede convertirse en HTML indexable.

### T04 — Preparar evidencias

**Objetivo:** seleccionar, derivar y describir evidencias que puedan publicarse con autorización.

**Dependencias:** T02 y T03.  
**Archivos que puede modificar:** `public/evidencias/garcia-delillo/`, fichas de evidencia y su informe de entrega.  
**Entregable:** únicamente derivados autorizados, con texto alternativo, pie, procedencia y relación con el relato.

**Criterios de cierre:** cada recurso tiene permiso registrado, no expone material privado innecesario, es legible en la página y su texto visible coincide con la información aprobada.

**Estado vigente:** el caso curricular mantiene autorizado el texto GD-01 a GD-04. Además, los textos de las páginas de proyecto de `GDweb` se incorporaron al catálogo porque el titular confirmó que ya tienen revisión editorial en la web de la empresa. T04 quedó completa con 102 imágenes copiadas desde esas páginas, manifiesto, procedencia y textos alternativos. T05 también quedó completa.

### T05 — Definir páginas, datos y conexiones

**Objetivo:** establecer el contrato común que alimentará el mapa, las páginas de casos, la navegación textual, el recorrido temporal y los metadatos.

**Dependencias:** T03 y T04, además de T01 y T02 ya completadas.  
**Archivos que puede modificar:** `docs/arquitectura_contenido.md` y su informe de entrega.  
**Entregable:** estructura de contenido, tipos de nodo y conexión, campos obligatorios, slugs, URLs directas, evidencias, estados de publicación y reglas para JSON-LD.

**Criterios de cierre:** una afirmación tiene una única fuente editorial; el mapa y el HTML usan el mismo contenido; las conexiones explican capacidades aplicadas; la estructura admite lectura sin JavaScript; y un caso puede funcionar sin evidencias visuales, mostrando recursos solo cuando estén autorizados.

### T06 — Diseñar la experiencia del explorador

**Objetivo:** definir las vistas del piloto y sus comportamientos antes de integrarlos.

**Dependencias:** T01 y T05.  
**Archivos que puede modificar:** documentos y prototipos de diseño que el integrador entregue expresamente.  
**Entregable:** vista de escritorio, vista móvil, estados de selección, controles de desplazamiento, zoom, restablecimiento y etapa, detalle móvil bajo el mapa y navegación textual.

**Criterios de cierre:** todos los estados tienen texto, foco visible y alternativa comprensible; el diseño no depende de color; las decisiones de visualización no alteran el contenido aprobado.

### T07 — Preparar la base técnica

**Objetivo:** crear una aplicación Astro y TypeScript local, mínima y comprobable, sobre la que T08 pueda integrar el piloto.

**Dependencias:** T01 y T05.  
**Archivos que puede modificar:** configuración del proyecto, `src/`, `public/`, `package.json` y archivos de comprobación autorizados por el integrador.  
**Entregable:** aplicación local ejecutable con una ruta inicial, contenido semántico, estilos base, estructura para React/React Flow/Dagre y comandos de validación.

**Criterios de cierre:** la aplicación instala y compila localmente; la ruta inicial tiene HTML esencial; los enlaces son directos; se registran versiones y cualquier limitación de las bibliotecas; no se incorpora contenido privado.

### T08 — Integrar el primer recorrido completo

**Objetivo:** unir mapa, equivalente textual, selección de García Delillo, página del caso y evidencias autorizadas.

**Dependencias:** T03, T04, T06 y T07.  
**Archivos que puede modificar:** archivos de contenido, componentes, rutas, estilos y pruebas autorizados por el integrador.

**Entregable:** recorrido local completo, operable con teclado y móvil, con salida textual sin JavaScript y metadatos coherentes.

**Criterios de cierre:** seleccionar un nodo explica sus conexiones y abre el caso; existe desplazamiento, zoom, restablecimiento y etapa; en móvil el detalle aparece debajo; sin JavaScript se puede encontrar y leer el caso y sus evidencias.

### T09 — Ampliar casos

**Objetivo:** incorporar cada caso adicional mediante un encargo separado, manteniendo el contrato de T05.

**Dependencias:** T08 y fuente aprobada para cada caso.  
**Entregable:** ficha, evidencias, conexiones, ruta y validación de cada caso.

**Criterios de cierre:** el caso tiene autorización editorial, no altera el relato del piloto, comparte el fallback HTML y pasa las comprobaciones de contenido y accesibilidad.

### T10 — Incorporar la trayectoria temporal

**Objetivo:** sumar el recorrido temporal como experiencia complementaria.

**Dependencias:** T08 y T05.  
**Entregable:** cronología accesible, con etapas y enlaces al contenido existente.

**Criterios de cierre:** cada fecha tiene fuente o está marcada como abierta; la cronología no se convierte en la única forma de leer el contenido; funciona con teclado, móvil y sin JavaScript.

### T11 — Incorporar método, IA y docencia

**Objetivo:** incorporar capacidades metodológicas y otros ejes solo cuando sus fichas estén aprobadas.

**Dependencias:** T08 y fichas de contenido aprobadas.  
**Entregable:** secciones conectadas al mapa y al relato, con afirmaciones trazables.

**Criterios de cierre:** cada sección explica una práctica concreta y su relación con casos; no presenta aspiraciones como experiencia realizada.

### T12 — Resolver contacto y perfiles

**Objetivo:** definir la forma pública de contacto y los perfiles externos.

**Dependencias:** T05 y decisión D13.  
**Entregable:** contacto y perfiles aprobados, con enlaces y texto de contexto.

**Criterios de cierre:** los datos publicados están autorizados, los enlaces funcionan y la opción de contacto es legible sin depender de JavaScript.

### T13 — Validar la versión integral

**Objetivo:** comprobar contenido, accesibilidad, HTML, metadatos, responsive, rendimiento y privacidad.

**Dependencias:** T08–T12 que resulten aplicables.  
**Entregable:** informe reproducible con comandos, resultados, incidencias y estado de cada comprobación.

**Criterios de cierre:** el informe diferencia cambio local, commit, push, despliegue y URL comprobada; no se declara aprobado un punto sin evidencia.

### T14 — Revisión independiente

**Objetivo:** revisar el resultado sin asumir que las decisiones del ejecutor son correctas.

**Dependencias:** T13.  
**Entregable:** informe independiente con bloqueos, observaciones y recomendación de cierre.

**Criterios de cierre:** se contrastan afirmaciones con la matriz, HTML sin JavaScript, teclado, móvil, metadatos y ausencia de materiales privados.

### T15 — Publicar y fijar mantenimiento

**Objetivo:** publicar mediante GitHub solo la versión revisada y dejar instrucciones de mantenimiento.

**Dependencias:** T14 y decisión D14.  
**Entregable:** commit, push, publicación y URL comprobada, además del procedimiento de actualización.

**Criterios de cierre:** la publicación real fue comprobada; el informe separa cada estado; el repositorio público no contiene originales privados; las próximas modificaciones tienen responsable y criterio de revisión.

## Regla de traspaso

Antes de entregar cualquier tarea, el integrador copiará el encargo correspondiente y añadirá la revisión de Git, la lista de cambios locales adicionales y los permisos de modificación. El ejecutor devolverá archivos o parche e informe de pruebas realmente realizadas. Si encuentra una decisión funcional, una fuente o un permiso faltante, la registrará como pendiente y no la completará por inferencia.
