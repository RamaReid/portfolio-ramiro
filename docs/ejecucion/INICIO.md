# Instrucciones para ejecutar el portfolio con otros modelos

**Continuación del producto:** Is My Life es el sistema completo y este portfolio una de sus proyecciones. El núcleo privado es [RamaReid/is-my-life](https://github.com/RamaReid/is-my-life); para desarrollar el núcleo, usar el [kit local de encargos](../is-my-life/LEEME.md). Las prioridades y fotografías de estado de esta guía corresponden al piloto profesional; no sustituyen el alcance actual. La aplicación Astro del piloto ya existe.

Este es el punto de entrada para continuar el trabajo sin depender del historial del chat. La prioridad es preparar un caso verificable, implementar su recorrido completo con contenido legible por buscadores y extender el patrón mediante tareas acotadas.

La base acordada del piloto es Astro, TypeScript, HTML, CSS y Markdown. Al redactar originalmente esta guía todavía no había aplicación; ese estado quedó superado por la implementación y sus entregas. Las decisiones se verifican contra sus registros vigentes y las instrucciones actuales.

## Lectura inicial

1. Leer [AGENTS.md](../../AGENTS.md), los [acuerdos vigentes](DECISIONES.md) y el [tablero de tareas](TAREAS.md).
2. Identificar la tarea asignada y leer únicamente sus fuentes adicionales. El [plan general](../plan_desarrollo.md) explica los paquetes P01 a P10; las tareas T01 a T15 los convierten en encargos ejecutables.
3. Comprobar el estado real del repositorio y de los archivos antes de modificar nada. Un documento de planificación no acredita que exista código, que una prueba haya pasado o que un sitio esté publicado.

Las instrucciones actuales de Ramiro tienen prioridad sobre estos documentos. Si una nueva instrucción cambia una decisión, el integrador actualiza su registro y las tareas afectadas. No hay que volver a preguntar por una decisión ya tomada que sigue siendo aplicable.

## Prioridades de ejecución

| Prioridad | Trabajo | Resultado que habilita |
|---|---|---|
| A | T01 y T02; luego T03, T04 y T05 | Alcance definido, caso piloto preciso, evidencia publicable y contrato de contenido |
| B | T06 y T07 en paralelo; después T08 | Diseño y base técnica reunidos en un primer caso funcional |
| C | T09, T10, T11 y T12 según el alcance aprobado | Casos adicionales, trayectoria, método y contacto |
| D | T13, T14 y T15 | Validación integral, revisión independiente y publicación comprobada |
| E | Ampliaciones PX, una necesidad por tarea | Mejoras posteriores acordadas |

La prioridad indica orden de atención. Las dependencias del tablero determinan cuándo se puede ejecutar cada tarea. Preparar un caso permite avanzar sin procesar todo el archivo histórico. Las funcionalidades opcionales solo entran si se incorporan al alcance.

## Funciones de los modelos

| Función | Trabajo asignable | Qué entrega |
|---|---|---|
| Coordinación e integración | Reservar tareas, mantener decisiones y tablero, incorporar cambios revisados | Estado actualizado y siguiente encargo listo |
| Contenido e investigación | T01 a T04; contenido de T09 a T12 | Afirmaciones con fuentes, pendientes y copias curadas |
| Arquitectura y diseño | T05 y T06 | Estructura, contratos y vistas que se pueden implementar |
| Desarrollo | T07 a T13, según la tarea | Archivos o parche aplicable, comprobaciones y resultado visible |
| Revisión | Revisar cada entrega y ejecutar T14 | Hallazgos reproducibles, alcance revisado y veredicto sustentado |

Son funciones, no marcas ni modelos específicos. Asignar según capacidades: lectura de documentos para contenido, acceso al repositorio y terminal para código, inspección visual para diseño. Un modelo sin acceso al navegador no puede dar por comprobado el diseño en un navegador. Preferir un revisor diferente del ejecutor; si no existe, dejar explícita la autorrevisión.

## Ciclo de una tarea

1. **Asignar.** El integrador elige una tarea disponible, registra responsable, revisión de partida y archivos reservados. Revisa sus dependencias y decisiones necesarias.
2. **Preparar contexto.** Entrega la ficha y sus fuentes, las instrucciones vigentes, el estado de partida y el objetivo de esta ejecución.
3. **Ejecutar.** El modelo trabaja dentro de la ficha. Puede resolver detalles internos de implementación; consulta decisiones funcionales, tecnológicas o de publicación no establecidas después de preparar las alternativas concretas.
4. **Comprobar.** Ejecuta los controles pertinentes y conserva evidencia de resultados. Si falta una herramienta, informa qué comprobación no pudo realizar.
5. **Entregar.** Deja los archivos o un parche, más un informe basado en [ENTREGA.md](ENTREGA.md). Una descripción sin los cambios necesarios no es una implementación.
6. **Revisar.** Otro modelo o el integrador aplica el protocolo de [REVISION.md](REVISION.md). Los fallos vuelven al ejecutor con pasos de reproducción.
7. **Integrar.** El integrador incorpora los cambios, comprueba las dependencias afectadas y actualiza el tablero. Solo marca completa una tarea que cumple su criterio de cierre y las decisiones aplicables.
8. **Transferir.** El próximo modelo recibe el estado actualizado, lo realizado, las limitaciones y la siguiente tarea; no reconstruye decisiones desde conversaciones incompletas.

El integrador es quien actualiza el tablero compartido. Los ejecutores informan el estado en su entrega para evitar escrituras simultáneas sobre ese registro.

## Estados del tablero

| Estado | Significado |
|---|---|
| disponible | Puede comenzar con las fuentes y decisiones actuales |
| en_curso | Está asignada y tiene un responsable trabajando |
| espera_decision | Las alternativas están preparadas y falta una decisión concreta de Ramiro |
| espera_fuente | Falta un material necesario identificado |
| espera_dependencia | Requiere una tarea anterior todavía no completada |
| en_revision | El ejecutor entregó cambios y evidencia de comprobación |
| requiere_correccion | La revisión encontró problemas que impiden cerrar |
| completa | Está integrada, comprobada y cumple sus decisiones y criterios de cierre |
| no_aplica | El alcance acordado excluye esta tarea; el motivo está registrado |

Una tarea puede tener avances y seguir esperando una fuente o decisión. El informe separa lo realizado de lo pendiente. Una dependencia marcada `no_aplica` se considera resuelta únicamente si esa exclusión coincide con el alcance y no elimina una capacidad que otra tarea necesita.

## Trabajo en paralelo

- T01 y T02 pueden ejecutarse simultáneamente: alcance público y análisis documental privado.
- T04 puede avanzar después de T03. T05 espera T03 y T04, porque el contrato debe contemplar el caso y sus evidencias; ambos deben quedar listos antes de cerrar T06 y T08.
- T06 y T07 pueden ejecutarse simultáneamente: diseño documentado y base de código.
- T09 a T12 admiten trabajo paralelo cuando el integrador asigna zonas separadas o ramas aisladas. Si comparten navegación, esquema de contenido o componentes, coordinar el cambio común e integrar en secuencia.

En una misma carpeta de trabajo, mantener un solo escritor de código a la vez. Para escritores simultáneos, usar ramas y directorios de trabajo aislados con la misma revisión base. No cambiar de rama debajo de otro ejecutor ni resolver conflictos descartando cambios ajenos. La publicación la ejecuta el responsable de T15, una vez integrada la versión candidata.

## Cómo pasar el encargo a otro modelo

### Modelo con acceso al repositorio

Pegar el siguiente encargo, sustituyendo el identificador solo cuando se asigne otra tarea:

```text
Trabajás en el portfolio de Ramiro. Leé AGENTS.md,
docs/ejecucion/INICIO.md, docs/ejecucion/DECISIONES.md
y la ficha T01 de docs/ejecucion/TAREAS.md.

Ejecutá T01 dentro de su alcance. Comprobá el estado actual antes de escribir,
preservá los cambios existentes y usá las fuentes indicadas en la ficha.
No completes decisiones pendientes por suposición ni vuelvas a preguntar
las ya confirmadas. Avanzá en todo lo que no dependa de la respuesta.

Dejá el resultado concreto y un informe con docs/ejecucion/ENTREGA.md
en docs/ejecucion/entregas/T01.md. Informá comprobaciones realmente
ejecutadas, pendientes y siguiente paso. El alcance de este encargo
es local; no incluye push ni publicación.
```

Para T02 también se necesita acceso al material privado local autorizado. Un repositorio clonado no contiene esas fuentes; su ausencia no demuestra que no existan.

### Modelo sin acceso al repositorio

Preparar un paquete de contexto con el contenido de `AGENTS.md`, `INICIO.md`, `DECISIONES.md`, la ficha elegida, `ENTREGA.md` y las fuentes curadas que esa ficha requiere. Añadir la revisión de partida y los archivos completos que debe editar.

Entregar solo el contexto necesario. Las fuentes privadas no se adjuntan ni se envían a otro entorno automáticamente. Las tareas que necesitan originales se asignan al entorno local autorizado, o se proporciona una copia curada autorizada. Las rutas de archivo sin su contenido no son contexto suficiente para un modelo sin acceso al disco.

Pedir que devuelva archivos completos o un parche aplicable y un informe. Debe marcar como no ejecutadas las pruebas para las que no dispone de herramientas. El integrador aplica los cambios y los comprueba en el repositorio antes de cerrar la tarea.

### Revisión base y cambios todavía locales

Al crear esta guía, la rama es `main` y el commit de referencia es `15fab846f3a4ec922d7c4f96f3726f9a1d37be84`. Hay documentos nuevos y modificados todavía sin commit. Este dato es una fotografía del estado inicial; cada traspaso debe obtener la revisión actual mediante Git.

Un clon o worktree creado solo desde ese commit no incluye estos documentos locales. Para un traspaso inmediato, entregar también los archivos nuevos y cambios pendientes de la tarea. `git diff` por sí solo no incluye archivos sin seguimiento. Cuando corresponda publicar el kit mediante GitHub, revisar e incluir archivos explícitos, sin añadir indiscriminadamente todo el directorio.

El receptor debe confirmar qué revisión y cambios recibió. Si su base difiere de la entrega, revisar el parche sobre la nueva base y repetir las verificaciones afectadas antes de integrarlo.

## Continuación después de una interrupción

Leer primero el tablero y la última entrega de la tarea. Compararlos con Git y el contenido real. Si hay cambios sin informe, inspeccionarlos y registrar qué se pudo comprobar; no eliminarlos ni considerarlos automáticamente terminados. Reanudar desde el último resultado confirmado.

Si aparece una decisión pendiente, identificar qué parte afecta y continuar el trabajo independiente. Si un ejecutor no tiene acceso a una fuente o herramienta, el integrador puede reasignar esa comprobación sin reiniciar el resto de la tarea.

## Qué significa publicar

Los estados se informan por separado: cambio local, commit, push, verificaciones remotas, despliegue y frontend comprobado. El paso de un modelo a otro no autoriza automáticamente publicar. Se respeta la autorización existente para la tarea y se considera si el push activa un despliegue.

Los controles de buscadores comienzan en el caso piloto: HTML servido sin JavaScript, texto extraíble, enlaces rastreables y consistencia con el contenido aprobado. Después de publicar se comprueba la URL real. Accesibilidad técnica, indexación observada y aparición en respuestas de buscadores son resultados diferentes.
