# Protocolo de encargos entre modelos

## Preparación del integrador

1. Leer `PLAN.md`; elegir una tarea disponible y comprobar entregas de dependencias.
2. Registrar repositorio, ruta de trabajo, rama y `git rev-parse HEAD`; recoger `git status --short`, diff y archivos nuevos todavía sin seguimiento.
3. Asignar responsable y zona de escritura. Un escritor por directorio; para trabajo paralelo, worktrees aislados y una misma base revisada.
4. Adjuntar este kit, el encargo y solo las fuentes que necesita. Un modelo sin acceso al disco requiere archivos o extractos autorizados, no una lista de rutas.
5. Aclarar capacidades efectivas: terminal, PostgreSQL local, navegador, fuentes privadas y permisos de escritura. No asignar como comprobada una prueba que el receptor no puede ejecutar.

La primera copia de este kit vive en el portfolio. IM-001 establece el repositorio privado como sede del tablero. Solo el integrador actualiza estados compartidos y cierra tareas; los ejecutores escriben su entrega, nunca dan por cerrada una dependencia ajena.

## Texto listo para copiar

```text
Proyecto: Is My Life. Ramiro es el primer ejemplo real; el portfolio es
una proyección profesional de su memoria. No limitar el dominio al trabajo.

Repositorio y directorio: [destino comprobado]
Rama y commit base: [valor real]
Cambios locales incluidos: [archivos/parche, incluidos los no seguidos]
Tarea asignada: IM-XXX

Leé AGENTS.md del destino y docs/is-my-life/LEEME.md, ARQUITECTURA.md,
NAVEGACION.md, encargos/IM-XXX.md y los escenarios de VALIDACION.md
que correspondan. Las instrucciones actuales y permisos ya autorizados
prevalecen sobre restricciones históricas del piloto profesional.

Ejecutá solo IM-XXX. Confirmá las dependencias contra sus entregas reales.
Modificá únicamente las rutas asignadas; preservá cambios ajenos y originales.
No inventes biografía, fuentes, autorizaciones, credenciales ni pruebas.
Si falta un dato necesario, identifica la parte afectada y continuá lo independiente.

Entregá archivos o parche y docs/is-my-life/entregas/IM-XXX.md con objetivo,
cambios, pruebas realizadas, resultados, pendientes y estado Git real.
El integrador revisa y cierra. Este traspaso no autoriza por sí solo nuevos
servicios de pago ni publicación de datos; respetá la autorización vigente.
```

Los corchetes son campos que **el integrador completa antes de enviar**, no decisiones que deba adivinar el ejecutor. El destinatario no debe reconstruir un commit desde este ejemplo.

## Plantilla de entrega

```text
Tarea / repositorio / base recibida:
Objetivo alcanzado:
Archivos modificados y motivo:
Fuentes usadas (ubicaciones sensibles solo en informe privado):
Cambios de esquema/contrato y consumidores afectados:
Comprobaciones realmente ejecutadas: comando, entorno, resultado, log:
Comprobaciones no ejecutadas y motivo:
Fuentes, decisiones o accesos pendientes:
Riesgos concretos o límites observados:
Reversión comprobada si corresponde:
Cambio local:
Commit:
Push:
Migraciones locales/remotas:
Backend desplegado:
Frontend publicado:
URL comprobada:
Próxima tarea habilitada:
```

Un error de TLS o herramienta se registra como fallo de comprobación, no como sitio sano ni caído. Un workflow exitoso acredita el workflow; la URL exige su propio control. Un cambio de documentación no requiere ejecutar todas las pruebas de la aplicación.

## Revisión y tamaño de tarea

El revisor compara alcance, diff, contratos y evidencia. Para datos verifica procedencia y fidelidad; para seguridad prueba permisos permitidos y denegados; para navegación comprueba URL, teclado y coincidencia textual. Si ejecutor y revisor son el mismo, declarar autorrevisión.

Entregar cada tarea por separado. Si una nueva decisión amplía la ficha, el integrador crea otra tarea, conserva la parte terminada y actualiza dependencias. No aprovechar una corrección para cambiar framework, organización de repositorios o semántica del producto.

Estados: `disponible`, `en_curso`, `en_revision`, `requiere_correccion`, `espera_dependencia`, `espera_fuente`, `espera_decision`, `completa`, `no_aplica`. Solo `completa` tras revisión satisface una dependencia; `no_aplica` exige verificar que el consumidor ya no necesita esa capacidad.

No programar fechas o prometer horas por encargo sin conocer la capacidad del ejecutor. La unidad de avance es el entregable comprobado.
