# Revisión T08 — Primer recorrido completo

**Tarea:** T08
**Revisor:** Integrador / Codex
**Fecha:** 2026-09-06
**Resultado:** entrega revisada; `completa`

## Comprobaciones

- El grafo interactivo y su lista HTML reutilizan `src/data/portfolio.ts`.
- La selección de un nodo presenta las conexiones relacionadas con etiqueta, explicación y enlace.
- El fallback HTML incluye el caso, etapas, capacidades, proyectos y relaciones explicadas.
- Las páginas del caso y de los proyectos tienen rutas directas y salida estática.
- El caso contiene JSON-LD `WebPage`; cada proyecto contiene JSON-LD `CreativeWork`.
- Cinco rutas principales respondieron `200` en la previsualización local.
- Las respuestas comprobadas no exponen `referencias_privadas`.
- `npm.cmd run check` y `npm.cmd run build` terminaron sin errores.
- La disposición móvil se define en los cortes de 820 y 560 píxeles; el detalle está fuera del contenedor del mapa y sigue el flujo de la página.
- No se agregaron obras, fechas, métricas, roles ni resultados fuera del contenido aprobado.

## Cierre

T08 puede marcarse como `completa`. T09, T10 y T11 quedan pendientes según sus fuentes, fichas y dependencias; T13 seguirá esperando la integración de las tareas aplicables.

## Estado de publicación

La entrega está comprobada localmente. No hay push, despliegue ni URL pública comprobada.
