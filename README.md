# Portfolio profesional de Ramiro García Reid

Repositorio de trabajo para construir un portfolio profesional interactivo organizado temporalmente alrededor del eje:

> El output cambia. El método permanece.

## Estado

La aplicación Astro está integrada y validada localmente. La publicación mediante GitHub Pages está preparada para el repositorio `RamaReid.github.io`; todavía no se hizo push ni se comprobó una URL pública.

## Estructura

- `docs/`: inventario, borrador narrativo y decisiones de contenido.
- `public/evidencias/`: materiales aprobados para publicación.
- `src/`: implementación del portfolio interactivo.
- `.github/workflows/deploy-pages.yml`: comprobación y publicación automática mediante GitHub Pages.
- `referencias_privadas/`: material local de consulta excluido de Git.

Las instrucciones para pasar encargos a otros modelos están en [INICIO.md](docs/ejecucion/INICIO.md) y el estado de ejecución se mantiene en el [tablero de tareas](docs/ejecucion/TAREAS.md).

## Publicación

El repositorio público es `RamaReid/portfolio-ramiro` y el sitio se publicará en `https://ramareid.github.io/portfolio-ramiro/`. Al hacer push sobre `main`, GitHub Actions ejecutará `npm ci`, `npm run check`, `npm run build` y desplegará `dist/` en GitHub Pages.

El [tablero de tareas](docs/ejecucion/TAREAS.md) registra qué está cerrado y separa cambio local, commit, push, despliegue y URL comprobada.
