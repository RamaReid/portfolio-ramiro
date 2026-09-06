# Revisión T09 — Caso Productoria / Genio Productor

**Tarea:** T09
**Revisor:** Integrador / Codex
**Fecha:** 2026-09-06
**Resultado:** entrega revisada; `completa`

## Puntos a contrastar

- El caso público coincide con `docs/casos/productoria.md`.
- Las afirmaciones técnicas se pueden localizar en el commit revisado del repositorio fuente.
- La declaración de autoría y coautoría queda identificada como declaración curricular.
- El mapa, la lista textual, las capacidades y la página directa usan los mismos títulos, enlaces y relaciones.
- La ruta se puede leer sin JavaScript y contiene JSON-LD coherente.
- No aparecen `referencias_privadas`, conversaciones, archivos originales ni credenciales en `dist/`.
- Se mantienen separados el cambio local, el commit, el push, el despliegue y la URL pública.

## Resultado de la revisión

- La ficha pública y la página HTML usan el mismo alcance editorial.
- Las afirmaciones técnicas se vinculan al commit revisado y la autoría/coautoría está marcada como declaración curricular.
- El caso y sus cuatro capacidades tienen enlaces directos; la ruta inicial incluye las relaciones en HTML.
- Las rutas nuevas devuelven HTTP 200, la página del caso contiene JSON-LD y la salida no expone `referencias_privadas`.
- `npm.cmd run check`, `npm.cmd run build` y `git diff --check` pasaron; el build generó 23 páginas estáticas.
- La copia fuente y la matriz siguen bajo `referencias_privadas/`, excluidas de Git.

T09 puede cerrarse como `completa`. La entrega queda preparada para un commit local; no hay push, despliegue ni URL pública comprobada.
