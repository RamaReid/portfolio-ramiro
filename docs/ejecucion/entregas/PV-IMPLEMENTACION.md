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

También se agregó un lector opcional para `public-projection.v1`. Si el importador instala `src/data/is-my-life/public-projection.json`, la salida Markdown puede mostrar sus secciones editoriales. Mientras no exista ese snapshot, la interfaz declara el estado pendiente y conserva el contenido curado actual.

Archivos creados:

- `src/data/markdown.ts`
- `src/data/public-projection.ts`
- `src/pages/casos/index.astro`
- `src/pages/markdown/index.md.ts`
- `src/pages/markdown/casos/[slug].md.ts`
- `src/pages/markdown/capacidades/[slug].md.ts`
- `src/pages/markdown/is-my-life.md.ts`
- este informe

Archivos modificados:

- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

No se eliminaron archivos ni se modificó `D:\ramiro\is-my-life`.

## Alcance y decisiones

- Se reutilizó el contenido ya presente en `src/data/portfolio.ts`.
- No se agregaron fechas, roles, métricas, clientes, resultados ni fuentes nuevas.
- Se eligió la entrada curada por casos y la exploración como segundo modo, tal como proponía el plan local.
- La conexión con el snapshot canónico se implementó como consumo opcional; no se fabricó un export que todavía no fue importado.
- La salida `/markdown/is-my-life.md` devuelve un documento explícito de pendiente cuando no hay proyección pública.

## Comprobaciones

| Comando o procedimiento | Resultado observado | Evidencia o limitación |
|---|---|---|
| `npm.cmd run build` | Exitoso; 32 páginas generadas | Incluyó `/casos/` y las rutas Markdown |
| `npm.cmd run check` | 0 errores, 0 warnings, 0 hints | 27 archivos Astro revisados |
| `npm.cmd test` | 4 pruebas, 4 exitosas | Importador público y protección de archivos administrados |
| Revisión de `dist/` | Índice HTML, índice Markdown y casos Markdown presentes | La ruta de proyección quedó marcada como pendiente |
| Revisión de enlaces Markdown | Sin enlaces `portfolio-ramirocasos`; enlaces con base correcta | Se corrigió un error textual antes de la verificación final |
| Revisión de privacidad | La portada generada no contiene `referencias_privadas` | No se inspeccionaron fuentes privadas ni se copiaron al proyecto |

## Integración

- El importador existente sigue siendo el único mecanismo para incorporar un snapshot público.
- La futura incorporación de `public-projection.json` debe pasar primero por `scripts/import-is-my-life.mjs --dry-run`.
- Los endpoints Markdown se regeneran durante `npm.cmd run build`.

## Estado de publicación

- Cambio local: implementado y verificado.
- Commit creado por esta entrega: no realizado.
- Push: no realizado.
- Despliegue: no realizado.
- Frontend: no comprobado en una URL remota.
- Migraciones o funciones de servidor: no aplican.

## Siguiente paso

Revisar visualmente la portada y decidir si se incorpora un snapshot público real de Is My Life. Esa incorporación depende de un export aprobado; la vista profesional y sus rutas Markdown ya pueden revisarse localmente sin esa fuente.
