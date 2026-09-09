# Implementación de la vista profesional y la salida legible por agentes

## Identificación

- Tarea: implementar la primera parte posible del plan de vista profesional conectado a Is My Life.
- Ejecutor y función: Codex / desarrollo local.
- Fecha de entrega: 2026-09-08.
- Rama o directorio de trabajo: `D:\ramiro\portfolio-ramiro`.
- Commit de partida: cambios locales sin commit.
- Archivos pendientes recibidos además del commit: plan local bajo `tmp/plan-is-my-life/`, fuera de Git.
- Estado propuesto: `en_revision`.

## Resultado

La portada comienza por una vista profesional curada: casos, método, capacidades y luego exploración completa. Se agregó un índice público de casos y rutas Markdown para lectura humana, indexación y agentes.

También se agregó un lector para `public-projection.v1`. El snapshot público aprobado conserva su hash y conteos para trazabilidad, mientras que la salida visible del portfolio deriva el desarrollo institucional de García Delillo a su web canónica y no repite sus obras ni galerías.

Archivos creados:

- `src/data/markdown.ts`
- `src/data/public-projection.ts`
- `src/pages/casos/index.astro`
- `src/pages/markdown/index.md.ts`
- `src/pages/markdown/casos/[slug].md.ts`
- `src/pages/markdown/capacidades/[slug].md.ts`
- `src/pages/markdown/is-my-life.md.ts`
- `src/pages/proyectos/garcia-delillo/[slug].astro`
- este informe

Archivos modificados:

- `src/pages/index.astro`
- `src/data/portfolio.ts`
- `src/data/markdown.ts`
- `src/pages/casos/garcia-delillo/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

No se eliminaron archivos. Is My Life se modificó dentro de su base local autorizada para preparar el export público; no se modificó su código fuente.

## Alcance y decisiones

- Se reutilizó el contenido ya presente en `src/data/portfolio.ts`.
- No se agregaron fechas, roles, métricas, clientes, resultados ni fuentes nuevas.
- Se eligió la entrada curada por casos y la exploración como segundo modo, tal como proponía el plan local.
- La conexión con el snapshot canónico se conserva mediante el importador existente, con dry-run previo y aplicación controlada; no se usa para duplicar la web institucional.
- García Delillo funciona como entrada a `https://gdarqdisenoyconstruccion.lovable.app`.
- El export aprobado es `public-ramiro-garcia-reid-2026-09-09`, con hash `ada81429ab31259e3c03924d730b24065776714aba313ecacf7242652d9ce2af`.
- El snapshot contiene 29 entidades, 23 relaciones, 29 bloques de contenido y 102 assets públicos.

## Comprobaciones

| Comando o procedimiento | Resultado observado | Evidencia o limitación |
|---|---|---|
| `npm.cmd run build` | Exitoso; 33 páginas generadas | Incluyó la entrada García Delillo, Markdown y rutas de derivación |
| `npm.cmd run check` | 0 errores, 0 warnings, 0 hints | 28 archivos Astro revisados |
| `npm.cmd test` | 4 pruebas, 4 exitosas | Importador público y protección de archivos administrados |
| `npm.cmd run check` en Is My Life | 0 errores, 0 warnings, 0 hints | Astro, dominio y proyecciones revisados |
| `npm.cmd run test:db` en Is My Life | Exitoso | Supabase CLI y PostgreSQL local disponibles |
| `scripts/import-is-my-life.mjs --dry-run` | Válido; 0 removals y 2 archivos administrados | Snapshot aprobado validado antes de aplicar |
| Revisión de `dist/` | La entrada no contiene tarjetas de obras; las rutas individuales derivan a la web canónica | Build local exitoso |
| Revisión de enlaces Markdown | Sin enlaces `portfolio-ramirocasos`; enlaces con base correcta | Se corrigió un error textual antes de la verificación final |
| Revisión de privacidad | La portada generada no contiene `referencias_privadas` | No se inspeccionaron fuentes privadas ni se copiaron al proyecto |

## Integración

- El importador existente sigue siendo el único mecanismo para incorporar un snapshot público.
- La futura incorporación de `public-projection.json` debe pasar primero por `scripts/import-is-my-life.mjs --dry-run`.
- Los endpoints Markdown se regeneran durante `npm.cmd run build` y la proyección técnica expone metadatos, no el catálogo duplicado.

## Estado de publicación

- Cambio local: implementado y verificado.
- Commits creados por esta entrega: `cb963e7` y `42f100c`; este ajuste queda pendiente de commit.
- Push: los dos commits anteriores fueron publicados en `origin/main`; este ajuste queda pendiente de push.
- Despliegue: GitHub Pages ejecutado con éxito en los workflows `34306415175` y `34306522781`; falta publicar este ajuste.
- Frontend: la URL canónica de García Delillo responde 200; el portfolio local está verificado y falta publicar este ajuste.
- Migraciones o funciones de servidor: no aplican; el registro de export se preparó en la base local de Is My Life.

## Siguiente paso

La siguiente iteración puede revisar el contenido editorial de los casos y, si corresponde, ampliar el snapshot mediante otro export aprobado. La implementación publicada queda disponible en `https://ramareid.github.io/portfolio-ramiro/`.
