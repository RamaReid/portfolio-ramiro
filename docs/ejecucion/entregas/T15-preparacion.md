# Preparación T15 — GitHub Pages

**Tarea:** T15
**Fecha:** 2026-09-07
**Estado:** preparación local completa; publicación pendiente

## Resultado

La aplicación quedó preparada para publicarse como sitio de usuario de GitHub Pages en `https://ramareid.github.io/`. La configuración de Astro y los metadatos dejaron de usar `example.invalid`, y el workflow ejecuta las comprobaciones antes de cargar `dist/` como artefacto de Pages.

## Comprobaciones previstas en Actions

- `npm ci`
- `npm run check`
- `npm run build`
- carga de `dist/`
- despliegue mediante `actions/deploy-pages`

## Estado de publicación

- Cambio local: preparado.
- Commit: creado localmente para esta preparación.
- Push: no realizado.
- Despliegue: no realizado.
- URL pública: prevista, no comprobada.
- Repositorio remoto: todavía no configurado.
