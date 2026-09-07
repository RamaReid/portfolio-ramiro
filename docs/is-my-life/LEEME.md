# Is My Life — entrada para implementar con otros modelos

Fecha de preparación: 2026-09-07. Estado: **plan preparado; implementación de Is My Life pendiente**.

Is My Life organiza una vida mediante una memoria única de entidades, relaciones, tiempo, afirmaciones y materiales. Ramiro es el primer propietario y su vida es la muestra real. El portfolio profesional es una proyección de esa memoria. La separación técnica de repositorios no representa dos productos independientes.

## Orden de lectura

1. Este archivo y [PLAN.md](PLAN.md): etapas, tareas disponibles e hitos.
2. [ARQUITECTURA.md](ARQUITECTURA.md): contratos y límites comunes.
3. [NAVEGACION.md](NAVEGACION.md): dial, dimensiones, recorrido y URL.
4. El archivo de `encargos/` de la única tarea asignada.
5. [TRASPASO.md](TRASPASO.md) y los escenarios pertinentes de [VALIDACION.md](VALIDACION.md).

Las instrucciones actuales de Ramiro prevalecen sobre documentos anteriores. Las guías del portfolio conservan valor histórico y sus autorizaciones de contenido siguen vigentes; su antiguo alcance profesional no limita Is My Life. No volver a pedir permisos que ya consten para el mismo uso. Incorporar información personal en la memoria y autorizar su publicación son operaciones distintas.

## Qué está decidido

- Is My Life es el conjunto; la vida de Ramiro permite comprobar el modelo en distintos ámbitos.
- Repositorio privado para el núcleo; `RamaReid/portfolio-ramiro` publica una exportación profesional aprobada.
- PostgreSQL mediante Supabase desde el comienzo, con un propietario inicial y cuatro vistas: Personal, Familiar, Profesional y Pública.
- Astro, React y TypeScript; navegación temporal y por dimensiones con equivalente textual.
- Información real autorizada y estados vacíos donde falten datos. Ejemplos sintéticos se permiten exclusivamente en pruebas aisladas.
- IA después de validar memoria, edición, permisos, navegación y exportación.

## Estado observado del punto de partida

El repositorio `D:/ramiro/portfolio-ramiro` está en el commit `2c8140b465ab91bb0b3d1fbbf355ebae58c48f2a`, inicialmente limpio. Contiene Astro, React Flow/Dagre, catálogo tipado, textos editoriales, galerías optimizadas y workflow con Node 22. No contiene el núcleo canónico, editor, autenticación ni migraciones de Is My Life.

La conversación registra un despliegue exitoso de GitHub Pages para ese commit; esta preparación no repitió la comprobación HTTP remota. Algunos documentos históricos aún dicen «sin aplicación» o «sin push»: verificar Git y ejecución real antes de repetir esas afirmaciones. El cierre documental del despliegue anterior se reconcilia en IM-001 sin declarar comprobada una URL que no se haya consultado.

Los datos de referencia del portfolio se encuentran en `src/data/portfolio.ts`, `src/data/project-content.ts`, `docs/casos/` y `public/evidencias/`. Los originales privados permanecen excluidos de Git. Leer textos como UTF-8; una consola con caracteres mal decodificados no acredita que los archivos estén dañados.

## Dónde implementar

Este kit se prepara localmente dentro del portfolio para poder entregarlo ahora. IM-001 lo copia a `docs/is-my-life/` del nuevo repositorio privado, cuyo directorio de trabajo previsto es `D:/ramiro/is-my-life`. Si ese destino ya existe, inspeccionarlo y preservar su contenido. A partir del traslado, el tablero operativo se mantiene en el núcleo; esta copia será una referencia con enlace al destino.

La aplicación privada se construirá con Astro renderizado en servidor y adaptador Node; el portfolio seguirá siendo una exportación estática. «Repositorio privado» no protege automáticamente una URL ni una base: la aplicación exige sesión y las tablas tienen RLS.

## Forma de ejecutar

Asignar una tarea disponible por vez. Una entrega debe incluir código o documentos concretos, pruebas ejecutadas y pendientes. El integrador revisa antes de cerrar y prepara el siguiente traspaso. No ejecutar de una vez las 44 tareas.

Comenzar por **[IM-001](encargos/IM-001.md)**. El encargo autoriza preparar una base de implementación; este kit por sí solo no acredita que repositorios, servicios o funciones ya estén creados.
