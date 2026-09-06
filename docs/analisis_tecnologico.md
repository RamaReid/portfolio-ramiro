# Análisis del lenguaje y la tecnología del portfolio

Fecha de consulta: 5 de septiembre de 2026.

**Recomendación: TypeScript como lenguaje de programación y Astro como framework, con HTML, CSS y contenido en Markdown.** La recomendación se basa en el [brief del portfolio](proyecto_aplicacion.md) y en el [plan por paquetes](plan_desarrollo.md): presentar casos y evidencias, relacionarlos con la trayectoria y permitir una exploración progresiva. Se incorpora el requisito confirmado de facilitar que buscadores descubran, interpreten y extraigan la información pública.

Estado: propuesta técnica pendiente de confirmación. Este análisis adelanta la comparación de P06; no define las interacciones pendientes ni constituye una implementación. No se instalaron dependencias ni se configuró alojamiento.

## 1. Qué necesita resolver la tecnología

El contenido se compone de casos, etapas, capacidades y evidencias que deben mantenerse relacionados. El desarrollo por paquetes requiere poder incorporar un caso sin duplicar la estructura de toda la página. Las posibles interacciones incluyen navegación temporal, filtros y apertura de evidencias, pero su alcance todavía no está aprobado.

Mi interpretación del brief es que la experiencia gira principalmente alrededor de contenido curado, con interacción para comprenderlo. Esa interpretación favorece Astro. Si el diseño termina priorizando un explorador continuo con numerosos controles sincronizados, corresponde revisar el framework antes de desarrollar ese comportamiento, manteniendo el contenido esencial disponible en el HTML inicial.

## 2. Por qué TypeScript

TypeScript agrega comprobaciones de tipos a JavaScript y se transforma en JavaScript para su ejecución. Permite detectar durante el desarrollo errores como utilizar una propiedad inexistente o pasar un valor incompatible a una función. [Documentación de TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html).

Para este proyecto propongo usarlo en las estructuras de casos y evidencias, la lógica de navegación y las interacciones que se aprueben. Por ejemplo, ayudaría a que una tarjeta y una página de detalle utilicen los mismos campos y a manejar expresamente un período incompleto cuando el modelo lo permita.

JavaScript también podría resolverlo. Prefiero TypeScript porque las relaciones entre contenido y componentes se extenderán en paquetes sucesivos. Su costo es mantener los tipos y ejecutar su comprobación; para esta estructura considero que ese trabajo compensa los errores que puede detectar.

Los tipos no comprueban que una fecha o un resultado profesional sean verdaderos. La verificación editorial sigue siendo parte de P02 y P03. La validación del formato de los archivos de contenido requiere además un esquema adecuado.

## 3. Alternativas de framework

La siguiente evaluación expresa mi criterio para el alcance documentado, no una medición de rendimiento de aplicaciones equivalentes.

| Alternativa | Aporte para el portfolio | Trabajo o límite que debe considerarse | Evaluación |
|---|---|---|---|
| HTML, CSS y JavaScript sin framework | Control directo de una página y sus interacciones | Hay que resolver la reutilización de plantillas, organización de casos y validaciones por cuenta propia | Viable si se acuerda una estructura muy acotada |
| Astro y TypeScript | Páginas de contenido, plantillas reutilizables e interacción por componentes | Hay que aprender la estructura de Astro y diseñar cómo se comunican las partes interactivas | Mejor ajuste al brief actual |
| React, TypeScript y Vite | Una interfaz continua donde múltiples controles comparten estado | Para cumplir el requisito de lectura sin JavaScript habría que agregar generación previa de HTML o renderizado de servidor | Alternativa si la exploración interactiva domina la experiencia y se resuelve esa entrega de HTML |
| Next.js, React y TypeScript | Páginas generadas previamente y posibilidad de incorporar funciones de servidor | Hay que definir el modelo de ejecución y respetar las restricciones de una exportación estática | Alternativa si se concreta una necesidad de aplicación con servicios de servidor |

Astro está orientado a sitios con contenido y permite incorporar componentes de distintos frameworks. Esa combinación fundamenta su encaje aquí. [Enfoque de Astro](https://docs.astro.build/en/concepts/why-astro/).

La documentación de React explica que una base creada con herramientas como Vite parte de una aplicación ejecutada en el cliente; navegación y otros modos de renderizado necesitan decisiones adicionales. Esto no impide usarla para un portfolio, pero debe incluirse en el trabajo. [Crear una aplicación React desde cero](https://react.dev/learn/build-a-react-app-from-scratch).

Next.js también puede exportar HTML estático y alojarse sin un servidor de aplicación. Las funciones que dependen de ejecutar lógica de servidor por petición no están disponibles en esa exportación. Su capacidad de generar contenido estático es real; la razón para no priorizarlo aquí es que aún no hay una necesidad documentada que justifique elegir esa estructura. [Exportación estática de Next.js](https://nextjs.org/docs/app/guides/static-exports).

## 4. Cómo se aplicaría la recomendación

| Parte | Tecnología propuesta | Responsabilidad |
|---|---|---|
| Lógica y datos utilizados por componentes | TypeScript | Representar casos, períodos y relaciones; implementar comportamientos |
| Páginas y plantillas | Astro y HTML semántico | Generar presentación, trayectoria y vistas de casos |
| Diseño adaptable | CSS con variables compartidas | Tipografía, color, espaciado, distribución y estados visuales |
| Relatos de casos | Markdown con metadatos | Editar contenido sin mezclarlo con la presentación |
| Consistencia de los contenidos | Colecciones y esquemas de Astro | Validar estructura y referencias entre registros |
| Interacciones simples | Scripts TypeScript procesados por Astro | Resolver eventos y cambios locales en la interfaz |
| Interacciones complejas, si se aprueban | Componentes React dentro de Astro | Agrupar controles que necesitan compartir estado |
| Publicación | Compilación a archivos estáticos y flujo desde GitHub | Publicar la versión revisada en el alojamiento elegido |

Astro permite generar HTML y añadir componentes interactivos independientes, conocidos como islas. También admite que compartan estado. Propongo que el contenido esencial sea legible antes de activar la interacción y agrupar en un mismo componente los controles estrechamente relacionados. [Arquitectura de islas](https://docs.astro.build/en/concepts/islands/).

Para eventos sencillos, Astro admite scripts y procesamiento de TypeScript sin incorporar React. Por eso React sería una incorporación justificada por un comportamiento concreto, no una dependencia inicial automática. [Scripts y eventos](https://docs.astro.build/en/guides/client-side-scripts/).

Las colecciones permiten validar los metadatos de Markdown y establecer referencias entre entradas. Aplicado al portfolio, esto permite organizar casos, capacidades y evidencias sin exigir una base de datos para esa relación. Los campos y sus reglas se acordarían en P04 antes de implementar el esquema. [Colecciones de contenido](https://docs.astro.build/en/guides/content-collections/).

## 5. Descubrimiento e interpretación por buscadores

**Requisito confirmado por Ramiro:** facilitar que cualquier buscador interprete el portfolio y extraiga su información pública. El criterio técnico verificable será que esa información pueda recuperarse mediante HTML y enlaces estándar, sin depender de ejecutar JavaScript o activar controles. La decisión de indexar, posicionar o citar pertenece a cada buscador y no puede garantizarse para todos ellos.

Google puede ejecutar JavaScript, pero advierte que no todos los robots pueden hacerlo y recomienda considerar HTML generado previamente o en el servidor. Para este portfolio propongo generarlo durante la compilación. TypeScript organiza el desarrollo; el formato que reciben los buscadores es HTML. [Google y JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

### Estructura y contenido propuestos

| Aspecto | Aplicación al portfolio |
|---|---|
| HTML inicial completo | Incluir identidad profesional, relatos, períodos, roles, resultados conocidos y referencias a evidencias en la respuesta de cada página |
| Dirección estable por caso | Proponer en P04 una URL propia para cada caso desarrollado, además de la navegación temporal; permitir abrirla directamente |
| Enlaces rastreables | Usar enlaces HTML con `href` entre inicio, casos, método y evidencias; los controles interactivos complementan ese recorrido |
| Estructura semántica | Organizar título, encabezados, navegación, contenido principal y figuras según su función |
| Información explícita | Identificar quién intervino, en qué contexto, con qué rol y en qué período; explicar qué se hizo y qué resultado está documentado |
| Evidencias comprensibles | Añadir descripción y pie de imagen; incluir explicación textual y, cuando corresponda, transcripción del material audiovisual |
| Metadatos coherentes | Preparar título, descripción, idioma y URL canónica por página; generar el sitemap con las direcciones públicas definitivas |
| Datos estructurados | Proponer JSON-LD de Schema.org para describir la persona y la página, usando únicamente información pública aprobada y coherente con el texto visible |

Los enlaces con `href` y texto descriptivo permiten descubrir destinos y comprender su relación. Los casos deben seguir siendo accesibles aunque un buscador no accione el filtro o la cronología. [Enlaces rastreables según Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

Para identidad, `Person` permite describir a la persona y enlazar sus perfiles confirmados mediante `sameAs`. `ProfilePage` es una posibilidad para una página centrada en su perfil, siempre que corresponda con el contenido final. El marcado específico de los casos se resolverá según lo que representen; no todos los proyectos son aplicaciones de software ni todos los relatos son artículos. [Schema.org Person](https://schema.org/Person), [criterios de ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

Propongo generar texto visible y JSON-LD a partir del mismo contenido curado para evitar contradicciones. Una declaración curricular o un prototipo debe conservar su contexto también en la descripción legible por máquinas. El marcado no debe convertir formación en un título obtenido ni una participación en autoría exclusiva.

Bing relaciona la extracción y las citas con hechos explícitos, entidades consistentes, contenido comprensible en su propia URL y recursos visuales acompañados por texto. Esto refuerza la necesidad de explicar cada caso sin depender únicamente del eje narrativo general o de una imagen. [Directrices de Bing](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a?tabid=6307).

Para las funciones de búsqueda con IA de Google siguen aplicando los fundamentos de búsqueda: contenido textual accesible, enlaces internos y datos estructurados que coincidan con lo visible. Google no exige archivos especiales para IA. Por eso no propongo `llms.txt` como requisito ni como garantía de extracción. [Búsqueda con IA de Google](https://developers.google.com/search/docs/appearance/ai-features).

### Cómo se comprobará

1. En P07, recuperar la página compilada mediante una petición HTTP y comprobar que contiene el relato esencial y enlaces a sus evidencias, antes de ejecutar scripts.
2. Recorrer el contenido público con JavaScript desactivado y verificar que los casos pueden encontrarse y leerse.
3. Extraer el texto del HTML y contrastar identidad, rol, período, intervención, resultado y estado del proyecto con la ficha aprobada.
4. En P09, validar enlaces, metadatos, URLs canónicas, sitemap y JSON-LD; comprobar que el marcado coincide con la página visible y no expone información privada.
5. En P10, comprobar respuestas HTTP y acceso público desde la URL publicada, sin barreras involuntarias de alojamiento, robots o directivas de indexación.
6. Revisar la página mediante las herramientas de inspección de Google y Bing cuando exista acceso a las propiedades del sitio. Registrar por separado acceso técnico comprobado e indexación observada; una respuesta correcta del servidor no prueba inclusión en un índice.

Estas pruebas verifican la entrega y claridad de la información. El rendimiento real en buscadores y la precisión de respuestas generadas se observan después de publicar.

## 6. Publicación y mantenimiento

Propongo generar las páginas durante la compilación y servir el resultado como archivos estáticos. Cambiar un caso implicaría editar su contenido, comprobarlo, realizar commit y push y ejecutar una nueva publicación. Un sitio generado de esta forma puede mantener interacciones en el navegador.

GitHub Pages es un alojamiento posible: Astro documenta su publicación mediante GitHub Actions. El requisito del proyecto es trabajar y publicar mediante GitHub; eso no obliga a elegir GitHub Pages como alojamiento. Dominio y destino siguen pendientes de confirmación. [Astro en GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

El alcance actual no establece una función que necesite persistir datos de visitantes. Si se elige un formulario, habrá que resolver su recepción y envío mediante un servicio o lógica de servidor. Esa necesidad se evalúa antes de dar por suficiente un alojamiento exclusivamente estático.

Las colecciones se alimentarían únicamente de copias curadas y autorizadas. La carpeta privada debe quedar fuera del código y del resultado publicado; la elección del framework no garantiza por sí sola esa separación.

El mantenimiento incluiría dependencias, contenido y verificaciones. Astro no ejecuta la comprobación de tipos como parte de `astro build` por sí solo; propongo añadir `astro check` antes de compilar. [TypeScript en Astro](https://docs.astro.build/en/guides/typescript/).

## 7. Condiciones que podrían cambiar la elección

- Si cronología, filtros y conexiones forman una única herramienta con estado compartido, comparar un componente React amplio dentro de Astro con una aplicación React como base, conservando el HTML inicial y los recorridos rastreables.
- Si se incorporan sesiones, contenido por usuario o procesos de servidor, revisar el modelo de alojamiento y comparar las capacidades de Astro con Next.js u otra solución pertinente.
- Si mantener o demostrar experiencia en un framework específico pasa a ser un objetivo profesional del portfolio, incluir ese criterio expresamente en la decisión.
- Si el sitio queda reducido a una estructura breve y estable, reconsiderar si una solución sin framework cubre el mantenimiento esperado.

No se midió velocidad, costo de alojamiento ni esfuerzo de desarrollo de un prototipo. La recomendación es de arquitectura; esas variables se comprobarían con el primer caso completo de P07. No se seleccionaron versiones: su compatibilidad y soporte se revisarían al inicializar P06.

**Decisión propuesta para confirmar:** adoptar TypeScript, Astro, HTML, CSS y Markdown como base, con generación estática, contenido esencial en HTML inicial y datos estructurados coherentes; decidir la necesidad de React a partir de los comportamientos de P04/P05. Esta elección mantiene viable el desarrollo por paquetes y facilita que personas y buscadores accedan al contenido aprobado.
