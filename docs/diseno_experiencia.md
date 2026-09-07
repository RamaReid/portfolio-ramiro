# Diseño de experiencia del explorador

**Estado:** entregado para el piloto local  
**Fecha:** 2026-09-06  
**Idioma:** español

## Propósito

La página inicial presenta el eje del portfolio y permite explorar la relación entre el caso de García Delillo Construcciones, sus etapas, las capacidades asociadas y los proyectos documentados. El mapa es una forma de exploración; el contenido esencial permanece disponible como HTML, con enlaces directos a cada página.

## Vista de escritorio

1. Encabezado con navegación a inicio, caso piloto y trayectoria.
2. Introducción breve con objetivo profesional y método narrativo.
3. Mapa interactivo de izquierda a derecha:
   - caso piloto;
   - etapas del recorrido;
   - capacidades relacionadas;
   - proyectos del catálogo autorizado.
4. Filtros de etapa con estado textual activo.
5. Controles de desplazamiento y zoom provistos por el mapa.
6. Acción `Restablecer vista`.
7. Panel de detalle del nodo seleccionado, con descripción y enlace directo.
8. Lista textual del mismo contenido debajo del mapa.

## Vista móvil

El mapa ocupa el ancho disponible y conserva desplazamiento y zoom táctiles. El detalle del nodo aparece debajo del mapa en el flujo normal de la página. La lista HTML y los enlaces directos siguen disponibles aunque el mapa no se ejecute.

## Estados y comportamiento

- La selección inicial es el caso piloto.
- Cada nodo seleccionado muestra título, descripción y enlace.
- Las conexiones del nodo seleccionado se resaltan y los nodos no relacionados se atenúan.
- El filtro `Todas` restaura el conjunto completo.
- Un filtro de etapa mantiene visibles la etapa elegida y sus conexiones.
- Las conexiones llevan etiqueta y explicación; la explicación se conserva en los datos para que el contenido no dependa del color o de la geometría.
- El foco visible, los nombres de los controles y el texto alternativo permiten comprender las acciones con teclado y tecnologías de asistencia.

## Correspondencia con el contrato de contenido

El mapa y la navegación textual consumen `src/data/portfolio.ts`. Las páginas de proyectos consumen el catálogo y el manifiesto de `public/evidencias/garcia-delillo/`. Las rutas directas son:

- `/casos/garcia-delillo/`;
- `/proyectos/garcia-delillo/{slug}/`;
- `/capacidades/{slug}/`;
- `/trayectoria/`.

La experiencia no agrega afirmaciones al relato editorial. Las imágenes se muestran con el texto alternativo del manifiesto y cada página conserva procedencia en el pie de la evidencia.

## Decisiones pendientes

El dominio, la publicación y la selección de casos adicionales permanecen fuera de este piloto. El contacto usa el perfil público de GitHub aprobado en T12. La revisión de censura adicional de las evidencias queda pendiente antes de publicar.
