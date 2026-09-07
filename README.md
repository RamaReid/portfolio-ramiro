# Portfolio profesional de Ramiro García Reid

Este portfolio es la primera proyección profesional de **Is My Life**, la aplicación general de memoria personal. El núcleo privado vive en [RamaReid/is-my-life](https://github.com/RamaReid/is-my-life). El [kit local de implementación](docs/is-my-life/LEEME.md) conserva el plan por etapas, contratos y encargos pequeños para continuar con otros modelos usando la vida de Ramiro como ejemplo real.

Repositorio de trabajo para construir un portfolio profesional interactivo organizado temporalmente alrededor del eje:

> El output cambia. El método permanece.

## Estado

La aplicación Astro está implementada en `RamaReid/portfolio-ramiro`, con workflow de GitHub Pages y Node 22. El historial de trabajo registra el push y un despliegue exitoso del commit `2c8140b`; la comprobación HTTP pública quedó pendiente por un problema de la herramienta. El nuevo kit documenta ese punto de partida sin presentar Is My Life como ya implementado.

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
