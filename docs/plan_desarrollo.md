# Plan de desarrollo del portfolio por paquetes

Fecha del análisis: 5 de septiembre de 2026.

La secuencia propuesta es definir el foco profesional, preparar contenido publicable, diseñar la experiencia, implementar un caso completo y ampliar el sitio con entregas independientes. Cada paquete debe dejar un resultado que se pueda revisar antes de continuar con sus dependencias.

El eje rector es **«El output cambia. El método permanece.»** La cronología debe mostrar la evolución de los trabajos y los casos deben explicar el método mediante intervenciones y evidencias concretas.

Este documento organiza el desarrollo; no aprueba por sí mismo audiencias, casos, funciones, idiomas, tecnología ni servicios de publicación. Las decisiones pendientes se resuelven en el paquete correspondiente. Los nombres de entregables futuros son propuestas de organización.

**Requisito confirmado:** facilitar que buscadores descubran, interpreten y extraigan la información pública. La arquitectura deberá entregar el contenido esencial en HTML inicial y ofrecer enlaces rastreables. Este criterio se trabaja desde P04 y se comprueba desde P07; el [análisis tecnológico](analisis_tecnologico.md) detalla las alternativas y verificaciones. No equivale a garantizar indexación o citas de todos los motores.

## 1. Diagnóstico de la carpeta

### Estado comprobado

- El repositorio contiene investigación y documentación, sin aplicación implementada. `src/` y `public/evidencias/` contienen únicamente archivos `.gitkeep`.
- No hay configuración de dependencias, compilación ni pruebas de una aplicación.
- El brief, el inventario y el borrador narrativo coinciden en el eje conceptual y en los principales candidatos a casos.
- La arquitectura, las interacciones y el alcance inicial del brief son propuestas pendientes de definición. La mención de cuatro a seis casos no constituye una cantidad obligatoria.
- `referencias_privadas/` está excluida mediante `.gitignore` y no aparece entre los archivos versionados. Los originales deben permanecer en ese circuito privado.
- La existencia del repositorio local no permite afirmar que haya un frontend publicado. Este análisis no comprobó despliegues externos.

### Documentos y materiales revisados

| Fuente | Aporte al plan | Alcance de la revisión |
|---|---|---|
| [Acuerdos del proyecto](../AGENTS.md) y [README](../README.md) | Reglas de trabajo, privacidad y estado inicial | Lectura completa |
| [Proyecto de aplicación](proyecto_aplicacion.md) | Objetivo, públicos posibles, recorridos, contenido y decisiones pendientes | Lectura completa |
| [Borrador narrativo](borrador_narrativo.md) | Hipótesis metodológica y cronología preliminar | Lectura completa |
| [Inventario maestro](inventario_maestro.md) | Fichas F01 a F08, evidencia disponible y vacíos | Lectura completa y contraste con originales seleccionados |
| [Fuentes externas](fuentes_externas.md) | Perfiles y organizaciones para una futura corroboración | Lectura del listado local; perfiles, repositorios y publicaciones no verificados en línea |
| Materiales privados de trayectoria e IA | Declaraciones curriculares, definición del bot, conversaciones y formación | Extracción textual de DOCX y PDF; lectura de los CV y de la definición del bot, revisión selectiva de conversaciones, guías y recetario |
| Materiales privados de interfaces | Estado de las páginas y documentación académica | Inspección del HTML y sus referencias locales; consulta puntual del PDF académico |
| Materiales privados de diseño técnico y producción creativa | Disponibilidad y trabajo necesario para preparar evidencias | Inspección visual del JPG, lectura de los dos SCAD, estructura del XLSM y cabeceras/tamaños de los STL; inventario de CDR |

La revisión textual no certifica la presentación visual de los PDF o DOCX. Tampoco se ejecutaron las interfaces históricas, las macros, los modelos 3D ni los archivos CDR. Su revisión específica queda dentro de la preparación de las evidencias que se seleccionen.

### Hallazgos que afectan el desarrollo

| Hallazgo | Consecuencia para el plan |
|---|---|
| Un CV respalda que una responsabilidad o una cifra fue declarada, pero no corrobora por sí solo su ejecución o impacto | Separar la procedencia de la afirmación de su grado de verificación. La etiqueta «evidencia alta» del inventario no debe trasladarse automáticamente a todos los datos del caso |
| El período de turismo y la duración declarada requieren conciliación; también hay denominaciones de roles pendientes | Resolver las discrepancias antes de redactar las fichas definitivas, sin elegir silenciosamente una versión |
| Los períodos que terminan en «actualidad» pertenecen a documentos históricos | Confirmar su vigencia antes de representarlos como actividad presente |
| Las conversaciones del bot muestran intercambios, pero no prueban por sí solas despliegue, uso comercial ni resultados posteriores | Describir por separado concepto, pruebas, implementación y resultados; preparar ejemplos autorizados y anonimizados |
| Las guías de IA se presentan como apuntes de un evento e incluyen referencias a terceros | Confirmar autoría y participación; tratarlas como material de formación mientras esa atribución siga pendiente |
| Los HTML académicos referencian CSS, JavaScript e imágenes ausentes en esta carpeta | Recuperar el proyecto original o utilizar otra evidencia autorizada. Una reconstrucción posterior debe identificarse como tal |
| El JPG técnico revisado muestra un esquema de aberturas con cotas y una identificación de tercero | Clasificarlo como documentación técnica; preparar una copia sin identificadores si se autoriza su publicación |
| Un SCAD contiene un módulo sin geometría desarrollada y hay STL cuyo tamaño individual ronda los 20 MB | Verificar el alcance real de la exploración y preparar derivados adecuados si se elige este caso. La existencia de una malla no prueba funcionamiento físico |
| Hay documentación académica colectiva, conversaciones de negocios y una planilla con macros | La selección y revisión de privacidad deben preceder a cualquier incorporación a `public/` o al repositorio público |
| El CV UX contiene una preferencia laboral y datos de perfil cuya vigencia necesita confirmación | Usarlos como antecedente para consultar el foco actual y confirmar los enlaces profesionales |

**Conclusión de planificación:** el trabajo editorial y la preparación de evidencias condicionan la primera versión. Conviene validar una experiencia completa con un caso y luego extenderla. No es necesario terminar de procesar todo el archivo histórico para empezar a desarrollar.

## 2. Secuencia de paquetes

Todos los paquetes de implementación están pendientes al redactar este plan. Sus criterios de cierre son una propuesta de trabajo que deberá ajustarse al alcance acordado.

| Paquete | Resultado revisable | Dependencias |
|---|---|---|
| P01 | Foco profesional y alcance de la primera versión | Documentación actual |
| P02 | Fichas de casos con afirmaciones y pendientes identificados | Puede empezar con el inventario; la selección final depende de P01 |
| P03 | Evidencias curadas y autorizadas por caso | P02 del caso correspondiente |
| P04 | Arquitectura de información y estructura de contenido | P01 y una ficha representativa de P02 con sus evidencias identificadas |
| P05 | Diseño de las vistas y comportamientos acordados | P04 y una muestra publicable de P03 |
| P06 | Base técnica ejecutable y procedimiento de trabajo | P01 y P04; puede avanzar en paralelo con P05 |
| P07 | Primer caso completo dentro del sitio local | P05, P06 y P02/P03 del caso elegido |
| P08 | Resto del alcance inicial, mediante subpaquetes | P07 y contenido preparado para cada incorporación |
| P09 | Versión candidata verificada | P08 y las funciones aprobadas para esa versión |
| P10 | Publicación comprobada y mantenimiento documentado | P09 y destino de publicación confirmado |
| PX | Ampliaciones que se decida incorporar | Necesidad validada y dependencias de cada ampliación |

La curaduría de casos adicionales puede continuar mientras se trabaja en diseño o desarrollo. Un material pendiente bloquea su propia publicación, no necesariamente el resto del sitio. Si cambia una decisión que afecta la estructura ya acordada, se revisan las dependencias antes de ampliar el código.

## 3. Trabajo paso a paso

### P01 — Foco profesional y alcance inicial

**Objetivo:** establecer a quién se dirige la primera versión y qué debe ayudar a conseguir.

1. Preparar una síntesis de las alternativas ya presentes en el brief: empleo, consultoría, colaboración o una combinación con prioridad explícita.
2. Contrastar esa síntesis con el posicionamiento del CV UX y confirmar qué sigue vigente.
3. Definir audiencia principal, objetivo prioritario e idiomas iniciales.
4. Comparar qué interacciones ayudarían a esa audiencia: lectura temporal, navegación entre casos, conexiones por método u otras posibilidades ya identificadas.
5. Acordar qué entra en la primera versión y qué queda pendiente. La cantidad de casos dependerá del contenido útil y autorizado.
6. Registrar las decisiones y las preguntas que se podrán resolver más adelante, como dominio, analítica y mantenimiento.

**Entregable propuesto:** `docs/alcance_inicial.md`, con las decisiones tomadas y el alcance pendiente. Los antecedentes privados permanecen fuera de Git.

**Cierre:** audiencia, objetivo, idiomas y funciones iniciales confirmados por Ramiro; cada función tiene una finalidad comprensible. No se elige todavía un stack por asociación con las herramientas mencionadas en el archivo histórico.

### P02 — Hechos y fichas de casos

**Objetivo:** convertir el inventario en contenido preciso que pueda sostener el diseño.

1. Trabajar una ficha por vez a partir de F01 a F08.
2. Relacionar cada afirmación relevante con una fuente concreta: período, rol, problema, intervención y resultado.
3. Revisar repositorios, videos y publicaciones externas pertinentes al caso, guardando el enlace preciso y qué permiten corroborar. Un perfil institucional no acredita automáticamente un rol individual.
4. Separar hechos respaldados, declaraciones curriculares e interpretaciones editoriales. Registrar las contradicciones sin resolverlas por suposición.
5. Confirmar vigencia de períodos abiertos, denominaciones profesionales, estado de formación y participación individual cuando corresponda.
6. Distinguir proyectos implementados, prototipos, ejercicios y exploraciones. No usar fechas de modificación de archivos como fechas del proyecto.
7. Redactar contexto, problema, intervención, resultado conocido, capacidades y conexiones con otros casos. Cuando falte un resultado, explicitar esa ausencia o ajustar el relato sin inventarlo.
8. Presentar la selección de protagonistas y secundarios de acuerdo con P01 y con la evidencia disponible.

**Entregables propuestos:** fichas públicas curadas en `docs/casos/` y matriz privada de afirmaciones y fuentes en `referencias_privadas/`. Las copias públicas solo contienen información autorizada.

**Cierre por caso:** el relato permite entender el rol y la intervención; las incertidumbres están identificadas; se sabe qué evidencias hacen falta y qué afirmaciones se podrán publicar. La falta de métricas no descarta automáticamente un caso.

### P03 — Evidencias publicables

**Objetivo:** transformar materiales seleccionados en recursos comprensibles y aptos para el sitio.

1. Elegir las piezas que sostienen el relato del caso, registrando qué afirmación respalda cada una.
2. Confirmar autoría, participación y permiso de publicación. Conservar ese registro en el circuito privado.
3. Crear copias de trabajo y retirar datos personales, financieros, administrativos y de terceros, incluidos los que estén en metadatos o nombres de archivo.
4. Revisar los formatos del caso seleccionado: abrir/exportar CDR, inspeccionar planillas sin ejecutar macros, recuperar dependencias HTML o comprobar modelos cuando corresponda.
5. Preparar derivados, pies de imagen, texto alternativo y descripciones. Distinguir una evidencia histórica de un diagrama explicativo o una reconstrucción posterior.
6. Comprobar legibilidad, integridad y relación con el relato. Incorporar únicamente los derivados autorizados a `public/evidencias/`.

**Entregables:** evidencias aprobadas y registro público de descripciones y atribuciones autorizadas; originales y trazabilidad sensible conservados en privado.

**Cierre por pieza:** puede entenderse fuera del archivo original, está vinculada con un caso y tiene autorización registrada. Ni el nombre del archivo ni su pertenencia a la carpeta prueban autoría.

### P04 — Arquitectura y estructura de contenido

**Objetivo:** definir cómo se organiza y se recorre la información antes de programarla.

1. Comparar una página con secciones y una estructura con páginas de casos, según la profundidad y navegación acordadas.
2. Definir la relación entre presentación, trayectoria, casos, método, IA, docencia y contacto. Resolver qué contenidos necesitan una sección propia y cuáles se integran en los casos.
3. Representar la cronología con períodos que pueden superponerse y con la precisión disponible; no forzar fechas exactas ni etapas excluyentes.
4. Preparar una estructura común de caso: identificador, título, período, contexto, rol, problema, intervención, resultado, capacidades y evidencias.
5. Modelar relaciones entre casos, etapas y capacidades. Una conexión debe poder explicarse a partir del trabajo documentado.
6. Mantener separados el estado de verificación de una afirmación, el estado de desarrollo de un proyecto y el permiso de publicación de una evidencia.
7. Definir qué parte de esa información necesita el visitante y qué parte sirve únicamente para el trabajo editorial privado.
8. Definir URLs y enlaces rastreables, proponiendo una dirección por caso desarrollado; organizar el contenido para que identidad, rol, período, intervención y resultado puedan comprenderse sin activar la interfaz interactiva.

**Entregable propuesto:** `docs/arquitectura_contenido.md`, con mapa de navegación, campos de contenido y ejemplos curados. El formato técnico se decide en P06.

**Cierre:** cada contenido aprobado tiene una ubicación y un recorrido; la estructura admite agregar casos sin duplicar su información; las fuentes y notas privadas no forman parte de los datos públicos de la aplicación.

### P05 — Diseño de la experiencia

**Objetivo:** revisar la presentación y los comportamientos con contenido real.

1. Preparar esquemas de inicio, recorrido, caso y contacto según P04.
2. Diseñar el paso desde una lectura rápida hasta la evidencia que sostiene una afirmación.
3. Proponer tipografía, color, espaciado, tratamiento de imágenes y componentes; confirmar la dirección visual antes de trasladarla a la aplicación.
4. Mostrar las vistas en computadora y teléfono, incluyendo navegación por teclado y estados de foco.
5. Especificar apertura, cierre, retorno, filtros y estados sin resultados únicamente para las interacciones aprobadas.
6. Revisar con un caso real si se entiende qué hizo Ramiro, qué evidencia lo respalda y cómo se conecta con el método.

**Entregables:** esquemas o prototipo local y especificación visual revisable. La herramienta de diseño se acuerda antes de adoptarla si no está definida.

**Cierre:** estructura visual y comportamientos confirmados; el diseño puede implementarse sin inventar funciones o completar información biográfica.

### P06 — Tecnología y base ejecutable

**Objetivo:** disponer de un proyecto reproducible adecuado al alcance elegido.

El [análisis tecnológico](analisis_tecnologico.md) compara las alternativas y propone TypeScript con Astro. Es una recomendación pendiente de confirmación; el paquete continúa pendiente.

1. Comparar alternativas técnicas según P04: generación de páginas para contenido editorial o una aplicación con mayor comportamiento en el navegador si las interacciones lo justifican.
2. Presentar una recomendación concreta con sus dependencias, mantenimiento y compatibilidad con la publicación mediante GitHub. Verificar documentación oficial vigente al realizar esa comparación.
3. Consultar y registrar stack, formato del contenido, estrategia de navegación y alojamiento antes de implementarlos. Las herramientas de los proyectos históricos no deciden el stack del portfolio.
4. Inicializar la aplicación local, fijar dependencias y documentar comandos de desarrollo, compilación y comprobación.
5. Implementar la estructura de contenido acordada y validaciones útiles para relaciones, identificadores y rutas de evidencias.
6. Comprobar que la compilación solo incorpora contenido público y que las comprobaciones no dependen de disponer de la carpeta privada.
7. Preparar las verificaciones automáticas en GitHub que correspondan al stack elegido y documentar cómo reproducirlas localmente.
8. Generar el contenido esencial en el HTML inicial y preparar metadatos y datos estructurados a partir de la misma fuente curada, de acuerdo con P04.

**Entregables:** base de código, configuración, documentación técnica y comandos reproducibles.

**Cierre:** el proyecto se instala, se ejecuta y se compila localmente; se pueden cargar datos curados; las referencias privadas no llegan al resultado de compilación.

Si el alcance acordado requiere servicios de servidor, almacenamiento o integraciones, se define su trabajo como paquete concreto antes de adoptarlos. No se agregan por defecto. No se utiliza Lovable para modificar, ejecutar ni publicar el proyecto.

### P07 — Primer caso completo

**Objetivo:** comprobar el recorrido real de principio a fin antes de multiplicar las pantallas.

1. Elegir un caso aprobado que tenga relato y evidencias preparados en P02/P03.
2. Implementar la presentación inicial y el acceso al caso según el diseño confirmado.
3. Incorporar contexto, rol, intervención, resultado conocido y evidencias del caso.
4. Mostrar su relación con el método y con la trayectoria hasta donde lo permita el alcance aprobado.
5. Implementar la navegación de retorno y los comportamientos del caso.
6. Probar lectura, teclado, móvil, carga de medios y consistencia entre contenido y fuentes autorizadas.
7. Revisar el resultado con Ramiro y corregir los problemas del patrón antes de ampliarlo.
8. Recuperar el HTML servido sin ejecutar JavaScript y contrastar su texto y enlaces con la ficha aprobada. Verificar también la lectura y navegación con JavaScript desactivado.

**Entregable:** una versión local navegable con un caso completo y componentes reutilizables.

**Cierre:** una persona puede entender el caso y acceder a sus evidencias sin explicaciones adicionales. La aplicación se compila y el recorrido principal funciona. Este hito no se presenta como portfolio publicado.

### P08 — Completar el alcance inicial

**Objetivo:** extender el patrón validado mediante cambios acotados. Cada fila se trabaja y verifica por separado.

| Subpaquete | Pasos | Criterio de cierre |
|---|---|---|
| P08-A, repetible por caso | Incorporar una ficha aprobada, sus evidencias y sus relaciones; revisar el caso y la navegación compartida | El caso se comprende, sus recursos funcionan y no se alteran los casos existentes |
| P08-B, trayectoria | Incorporar las etapas acordadas, sus períodos y los enlaces a casos; verificar superposiciones y fechas incompletas | El visitante comprende la evolución sin que la interfaz invente precisión o continuidad |
| P08-C, método, IA y docencia | Conectar capacidades con intervenciones concretas y ubicar IA y docencia según P04; distinguir formación, exploración e implementación | Las capacidades están apoyadas en ejemplos; no se atribuye material de terceros como producción propia |
| P08-D, contacto y perfiles | Confirmar los canales públicos, comprobar sus destinos e implementar la forma de contacto acordada | El visitante encuentra una vía real y comprobada; no se trasladan datos del CV sin autorización |

**Entregable:** primera versión con el contenido y las funciones comprometidas en P01.

**Cierre:** los subpaquetes aplicables están completos y los criterios de éxito del brief pueden evaluarse. Si una interacción es imprescindible para la versión inicial, se incorpora y valida aquí o en P07 según corresponda; no se difiere solo por aparecer como opcional en el brief original.

### P09 — Validación de la versión candidata

**Objetivo:** comprobar que el conjunto es coherente, funciona y está preparado para publicarse.

1. Revisar narrativa, fechas, roles, atribuciones y enlaces frente al contenido aprobado.
2. Probar los recorridos completos: inicio, caso, evidencia, método o trayectoria y contacto.
3. Revisar las vistas acordadas en computadora y teléfono, legibilidad, teclado, foco, textos alternativos y comportamiento de movimiento si existe.
4. Medir carga y revisar recursos pesados, errores de consola y enlaces o medios rotos. Acordar cualquier objetivo numérico antes de convertirlo en criterio de aceptación.
5. Validar títulos, descripciones, idioma, vista previa al compartir y tratamiento de rutas inexistentes; revisar URLs canónicas, mapa del sitio, acceso de buscadores y datos estructurados. Comparar el texto extraíble del HTML con las fichas y comprobar que el marcado coincide con lo visible.
6. Inspeccionar los archivos que se van a versionar y el resultado compilado para confirmar que no contienen originales ni datos privados.
7. Ejecutar las comprobaciones del stack y pruebas útiles para los comportamientos implementados. Registrar resultados, limitaciones y correcciones necesarias.
8. Revisar la versión candidata con Ramiro frente a los criterios de éxito del brief.

**Entregable propuesto:** `docs/validacion_version.md` y versión candidata local.

**Cierre:** los recorridos comprometidos funcionan, las incidencias que impiden publicar están resueltas y las limitaciones restantes quedan explícitas. Una compilación correcta por sí sola no demuestra calidad visual, exactitud de contenido ni publicación.

### P10 — GitHub, publicación y mantenimiento

**Objetivo:** publicar la versión validada y comprobar el resultado accesible al visitante.

1. Confirmar el destino, la rama de publicación y el dominio si corresponde. Si un push activa publicación automática, dejar identificado ese efecto antes de realizarlo.
2. Revisar el diff final, preservar cambios ajenos y comprobar que los materiales privados quedan fuera de los archivos a incluir.
3. Crear el commit de la entrega y realizar el push a GitHub dentro del alcance autorizado. Mantener separados ambos estados.
4. Comprobar las verificaciones remotas y el despliegue del alojamiento elegido, vinculándolos con el commit esperado.
5. Abrir la URL publicada y comprobar los recorridos principales, las rutas directas si existen, las evidencias y el contacto.
6. Registrar commit, resultado de publicación, URL y comprobaciones efectivamente realizadas. Una vista previa no equivale al sitio de producción.
7. Documentar cómo agregar un caso, actualizar períodos, sustituir evidencias, recuperar la versión anterior y publicar una actualización.
8. Acordar responsable y frecuencia de mantenimiento. La analítica solo se configura si fue elegida expresamente.
9. Comprobar acceso de buscadores e inspeccionar URLs en las herramientas de Google y Bing cuando exista acceso a las propiedades del sitio. Informar por separado accesibilidad técnica e indexación observada.

**Entregable:** sitio accesible y guía de actualización vinculada desde el README.

**Cierre:** la URL real presenta la versión prevista y sus recorridos funcionan. El informe de entrega distingue cambio local, commit, push, despliegue y frontend comprobado. Migraciones o funciones desplegadas se informan por separado únicamente si el alcance aprobado llegó a requerirlas.

### PX — Ampliaciones por necesidad comprobada

Las posibilidades del brief se evalúan individualmente. Esta lista no constituye un compromiso de implementarlas ni redefine el alcance acordado en P01.

| Ampliación posible | Condición para proponerla como paquete |
|---|---|
| Filtros por capacidad, área o tipo de output | Existe una dificultad de búsqueda que esos filtros resuelven |
| Cronología interactiva o conexiones visuales | Ayudan a comprender relaciones que la navegación actual no comunica bien |
| Visor 3D o reproducción integrada de video | Hay material autorizado y una necesidad narrativa que justifica esa interacción |
| Otro idioma | Se confirma la audiencia y cómo mantener las versiones del contenido |
| Nuevos casos, incluyendo candidatos todavía poco documentados | Están completos el relato, la atribución y las evidencias correspondientes |
| Analítica o cambios en la gestión del contenido | Se define para qué se necesita y quién la mantendrá |

Cada ampliación tendrá objetivo, alternativas, decisión, dependencia, implementación y prueba propios. Se mantienen las exclusiones actuales del brief, como chatbot público, red social y administración compleja, salvo una nueva decisión explícita.

## 4. Orden sugerido para preparar los casos

La prioridad narrativa depende de P01. La tabla indica qué trabajo destraba cada candidato, sin dar por aprobada su selección.

| Candidato del inventario | Trabajo siguiente | Uso posible al quedar preparado |
|---|---|---|
| F04 Productoria / Genio Productor | Documentar el prototipo de entrevista, su persistencia de eventos y su mapa de nodos con la fuente de GitHub revisada | Caso sobre traducción del método de organización y modelado a un producto digital; mantener F05 separado hasta contrastar sus fuentes |
| F03, producción y diseño técnico | Confirmar denominación del rol; preparar una pieza técnica y el contexto de su intervención | Caso sobre organización productiva y coordinación |
| F01, construcción | Identificar una obra concreta con período, participación y materiales autorizados | Caso sobre evolución desde representación hasta dirección |
| F02, servicios turísticos | Conciliar período y duración; conseguir evidencias del sistema de servicio y de la intervención | Caso sobre operación y experiencia de usuario |
| F07, interfaces | Recuperar dependencias o proyecto original y confirmar participación en los trabajos | Caso de formación y transición digital |
| F08, exploración 3D | Revisar geometrías, objetivo y pruebas; distinguir modelos, exploraciones y resultados físicos | Caso de diseño y prototipado, con alcance explícito |
| F06, guías de IA | Confirmar procedencia y participación; identificar trabajo propio relacionado | Contexto de formación o método; no asumir autoría de las guías |

La elección del caso de P07 se hace cuando exista material suficiente. No se fuerza un caso por ser reciente o visualmente llamativo.

## 5. Decisiones y momento de consulta

| Decisión | Momento | Alternativas que corresponde presentar |
|---|---|---|
| Audiencia y objetivo | P01 | Empleo, consultoría, colaboración o combinación jerarquizada |
| Idiomas | P01 | Idioma inicial y necesidad de versiones adicionales |
| Casos y detalle histórico | P02/P04 | Casos protagonistas, secundarios y nivel de síntesis por etapa |
| Publicación de materiales | P03, por pieza | Publicar una copia curada, reemplazarla por otro recurso autorizado o mantenerla privada |
| Navegación e interacciones | P01/P04/P05 | Estructura de páginas y comportamientos que aportan a la lectura |
| Dirección visual | P05 | Propuesta concreta basada en contenido real |
| Stack y alojamiento | P06 | Alternativas justificadas por contenido, interacción y mantenimiento |
| Forma de contacto | P04, antes de implementarla | Enlace profesional, correo autorizado o formulario; este último requiere definir su envío y tratamiento |
| Dominio y analítica | Antes de su configuración | Destino elegido, dominio propio si se desea y necesidad concreta de medición |
| Mantenimiento | P10 | Quién actualiza, cómo valida y cómo vuelve a publicar |

Las consultas se hacen sobre alternativas preparadas y en el momento en que afectan el siguiente trabajo. No es necesario resolver hoy todas las decisiones futuras. No se vuelve a pedir una decisión ya confirmada salvo que cambie su alcance o aparezca un conflicto concreto.

## 6. Forma de trabajar cada entrega

1. Identificar el paquete y verificar sus dependencias y decisiones ya tomadas.
2. Precisar el resultado de esa entrega, los archivos afectados y la comprobación que demostrará su funcionamiento.
3. Trabajar localmente, conservando originales y cambios ajenos.
4. Mostrar el resultado concreto y ejecutar las verificaciones apropiadas al cambio.
5. Corregir los problemas encontrados y actualizar el estado del paquete.
6. Versionar y publicar mediante GitHub cuando corresponda al alcance autorizado. Si hay despliegue automático, tratar el push como una acción con ese efecto.
7. Informar el resultado, las pruebas realizadas y lo pendiente, distinguiendo cada estado de publicación.

Una entrega documental se valida por coherencia, trazabilidad y ausencia de datos privados; no requiere pruebas de aplicación. Una entrega con comportamiento debe comprobar ese comportamiento y sus dependencias. Los paquetes permiten revisar avances y también revertir cambios acotados cuando haga falta.

No se asignan plazos cerrados sin conocer disponibilidad, recuperación de materiales y alcance confirmado. Después de P01 y de preparar un caso representativo se podrá estimar el trabajo; P07 permitirá ajustar esa estimación con experiencia real de implementación.

**Primer paquete a ejecutar: P01.** En paralelo se puede avanzar en la matriz de contradicciones de P02 y en localizar materiales faltantes, sin decidir todavía su publicación ni iniciar funciones pendientes de aprobación.
