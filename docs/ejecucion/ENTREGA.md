# Plantilla de entrega de una tarea

Copiar esta plantilla en `docs/ejecucion/entregas/Txx.md` y completar los campos con hechos observados. Para trabajo con fuentes privadas, guardar el detalle sensible en `referencias_privadas/`; el informe público debe estar curado. Si se trabaja sin acceso al repositorio, devolver el informe junto con los archivos o parche.

## Identificación

- Tarea:
- Ejecutor y función:
- Fecha de entrega:
- Rama o directorio de trabajo:
- Commit de partida:
- Archivos pendientes recibidos además del commit:
- Estado propuesto: en_revision / espera_decision / espera_fuente / requiere_correccion.

## Resultado

Describir el cambio y para qué sirve. Enumerar los archivos creados, modificados o eliminados. Adjuntar o indicar el parche cuando el integrador no comparte el mismo directorio. No atribuirse cambios anteriores recibidos con la tarea.

## Alcance y decisiones

- Criterios de la ficha satisfechos:
- Criterios pendientes y motivo:
- Decisiones aplicadas y sus IDs:
- Decisión necesaria, si existe, con alternativas preparadas:
- Fuente o herramienta faltante, si existe:

## Comprobaciones

| Comando o procedimiento realmente ejecutado | Revisión y entorno comprobados | Resultado observado | Evidencia o limitación |
|---|---|---|---|
| Completar al verificar | Completar | Completar | Completar |

Separar expresamente pruebas ejecutadas, fallidas y no ejecutadas. No listar como exitosos comandos sugeridos. Para tareas documentales basta una revisión pertinente; para comportamiento web, registrar el recorrido y el resultado.

Si hay una página: informar lectura del HTML inicial, navegación sin JavaScript, comparación del texto extraído con el contenido aprobado y revisión visual cuando correspondan. Una compilación exitosa no sustituye esos controles.

## Integración

- Archivos compartidos o conflictos posibles:
- Cambios requeridos en otras tareas:
- Cómo aplicar o reproducir el resultado:
- Cómo volver al estado anterior sin eliminar cambios ajenos:

## Estado de publicación

- Cambio local:
- Commit creado por esta entrega: hash, o no realizado.
- Push: destino y resultado, o no realizado.
- Verificaciones remotas: evidencia, o no ejecutadas.
- Despliegue: versión y resultado, o no realizado.
- Frontend: URL y comprobación real, o no comprobado.
- Migraciones o funciones de servidor: detallar solo si aplican.

## Siguiente paso

Indicar la siguiente acción concreta y sus dependencias. Si falta una decisión, explicar qué parte queda pendiente y qué puede continuar. El integrador registra el cierre y actualiza el tablero después de revisar e integrar; el ejecutor no se atribuye esa revisión independiente.
