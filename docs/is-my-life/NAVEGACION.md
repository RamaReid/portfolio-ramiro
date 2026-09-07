# Contrato de navegación

## Gramática de la experiencia

Inicio del propietario: **Mi vida**. Cambiar a Profesional, Familiar o Pública modifica la vista de la misma memoria. Navegación: elegir dimensión → seleccionar entidad → leer card → abrir detalle o entrar en su contexto → explorar nuevas relaciones. El dial recorre tiempo dentro del contexto actual.

Las dos acciones se distinguen: **Seleccionar** muestra una card sin cambiar el foco; **Explorar conexiones** entra en la entidad y añade un nivel. **Abrir detalle** abre su página permanente. Un clic no hace las tres cosas simultáneamente.

No usar LIFE → PROFESSIONAL → PROJECTS como si fueran carpetas anidadas: Mi vida/Profesional son vistas, Proyectos es una dimensión y García Delillo es una entidad o una composición editorial.

## Estado compartido

```ts
type Frame = { focusEntityId: string; dimensionId: string };
type NavigationState = {
  profileId: string;
  viewId: string;
  frames: Frame[];
  selectedEntityId: string | null;
  timeWindow: { from: string | null; to: string | null } | null;
  query: string;
};
```

El foco y dimensión actuales se derivan del último frame. `depth = frames.length - 1`: no guardar otra profundidad que pueda contradecir el recorrido. El primer frame apunta a la entidad de Ramiro con dimensión `life`. Los tipos admiten otro perfil futuro; la UI inicial opera con Ramiro.

El estado vive en un controlador independiente de React y se comparte entre enlaces HTML, dial, ruedas, card y búsqueda. Zoom geométrico, hover y tamaño de panel son estado visual local; no modifican datos ni permisos.

## URL y navegación del navegador

Ruta de exploración: `/p/{profileSlug}/v/{viewSlug}/`. Detalle: `/p/{profileSlug}/v/{viewSlug}/e/{entityId}/`. IDs internos no contienen nombres privados.

En exploración, `step` se repite para serializar los frames en orden. Valor `dimensionId~entityId`, con encode/decode mediante URLSearchParams. Sin `step`, usar el frame raíz. `selected`, `from`, `to` y `q` son opcionales. Ejemplo esquemático, cuyos marcadores se reemplazan por IDs reales:

```text
/p/ramiro/v/personal/?step=life~PERSON_ID&step=life~PROJECT_ID&selected=PLACE_ID
```

Una dimensión aplica al contexto del foco de ese frame; por ejemplo entrar en el proyecto y cambiar la dimensión a Personas muestra personas vinculadas a ese proyecto. Los breadcrumbs se reconstruyen validando las transiciones y sus recursos visibles, no aceptando títulos desde la URL.

Cambios confirmados usan `pushState`. El movimiento continuo de un control actualiza la vista local y confirma una URL al soltarlo; no crea una entrada por píxel. Atrás/Adelante usa `popstate` y la misma consulta. Enlaces y formulario GET funcionan sin JavaScript con las mismas rutas y parámetros. La página de detalle es permanente y puede abrirse sin historial previo.

`GET /api/projection` recibe `profile={profileSlug}` y `view={viewSlug}` más los mismos parámetros de exploración; el servidor los resuelve y autoriza. Ni esos parámetros ni los frames sustituyen la sesión. El parser de estado compartido debe producir el mismo resultado desde ruta SSR y desde API.

URL mal formada: 400 con explicación textual y enlace para volver. Perfil/vista/foco no disponible: 404 genérico. Selección que dejó de pertenecer al resultado por un cambio del usuario se limpia al producir ese nuevo estado. Un enlace directo a un registro ajeno responde igual que uno inexistente.

## Transiciones exactas

| Acción | Estado resultante |
|---|---|
| Abrir aplicación | Personal, raíz Ramiro, dimensión life, sin selección ni filtro temporal |
| Cambiar vista | Raíz de la nueva vista, limpiar frames anteriores, selección, búsqueda e intervalo; volver con Atrás recupera la anterior |
| Cambiar dimensión | Sustituir dimensión del último frame; conservar foco e intervalo; limpiar selección si ya no corresponde |
| Seleccionar hito/card | Mantener frames y filtros; cambiar selectedEntityId |
| Entrar en entidad | Añadir frame de la entidad seleccionada con dimensión life; limpiar búsqueda/intervalo y ajustar escala a ese contexto |
| Pulsar breadcrumb | Truncar frames hasta ese nivel; limpiar selección, búsqueda e intervalo |
| Buscar | q filtra título/resumen dentro del contexto autorizado; no busca en datos ocultos |
| Ajustar período | Cambiar timeWindow; actualizar dial y lista conjuntamente |
| Restablecer período | Quitar timeWindow y ajustar a la extensión temporal visible del contexto |
| Volver a mi vida | Restablecer raíz de la vista actual; conservar la elección de vista |
| Abrir detalle | Navegar por enlace real; conservar el estado previo en historial del navegador |

Los ciclos de relaciones son válidos en la memoria. Si «Explorar conexiones» apunta a una entidad que ya está en el camino, volver a ese frame en vez de acumular un bucle. Las dimensiones nuevas pueden cambiar el recorrido; la memoria no se fuerza a ser un árbol.

## Dimensiones y ruedas

Dimensiones base: `life`, `projects`, `work`, `people`, `places`, `learning`, `ideas`, `creative`, `ai`, `teaching`. Etiquetas visibles en español. Tipos consultables mediante `type`; temas mediante tags explícitos y relaciones aprobadas. No clasificar a una persona, foto o aprendizaje a partir del nombre de una carpeta.

La rueda muestra las dimensiones permitidas en la vista actual y un botón seleccionado. Todas tienen un botón/enlace textual equivalente. Una dimensión válida sin resultados muestra estado vacío; no desaparece silenciosamente. La rueda usa React/SVG, con etiquetas DOM, foco y sin rotación automática ni navegación que dependa solo de arrastrar.

La profundidad se expresa mediante la rueda del contexto actual y breadcrumbs. Se reutiliza la misma gramática en cada nivel; no es necesario dibujar un anillo infinito por cada salto. Un mapa opcional de relaciones consume la misma proyección y no decide visibilidad.

## Dial temporal

Un anillo representa la ventana visible de inicio a fin, con inicio arriba y avance horario. No es un reloj cíclico: al llegar al final no se vuelve automáticamente al inicio. Marcadores y segmentos se colocan a partir del tiempo fuente; los períodos se dibujan como arcos y se identifican como aproximados o abiertos cuando corresponda.

Controles equivalentes: anterior/siguiente ventana, acercar/alejar, rango desde/hasta, restablecer período y selección de hito. Acercar divide la amplitud por dos y alejar la duplica, anclado en el centro o en el punto indicado; los botones anteriores/siguientes desplazan una ventana. Estos son comportamientos de interacción del prototipo, no límites sobre los datos. Las escalas de etiquetas pasan de años a meses, días e instantes según el espacio; nunca implican que la fuente tenga esa precisión.

Varios eventos en una posición se agrupan en un marcador con lista desplegable ordenada; todos siguen disponibles en el HTML. Un solo evento se centra sin dividir por cero. Con fechas parciales, la geometría usa límites derivados y la etiqueta conserva la precisión original. Sin datos temporales se muestra un estado vacío y la sección «Sin fecha conocida», no un anillo con fechas ficticias. Los registros sin fecha no se eliminan al aplicar un filtro de período; se listan aparte y no se cuentan como coincidentes fechados.

Mantener la selección legible y anunciar cambios al terminar una acción, evitando anuncios continuos durante el arrastre. No capturar el scroll normal de toda la página. Flechas recorren controles/hitos según su componente, Enter selecciona y Escape cierra la card; todos los controles tienen nombres y foco visible.

## Presentación y accesibilidad

Escritorio: contexto y selector de vista, rueda/dial, detalle seleccionado y lista equivalente. Móvil: controles, dial, card debajo y lista en flujo vertical. Adoptar el breakpoint del diseño validado; comprobar al menos viewport estrecho y escritorio, sin inventar un ancho mínimo del producto.

La card y el detalle muestran fecha, resumen y conexiones autorizadas. Los datos de auditoría internos no se presentan como instrucciones técnicas al visitante. Cada evidencia tiene contexto, alt, procedencia publicable y ruta permitida.

HTML inicial de rutas públicas contiene todo el relato exportado; SSR privado entrega contenido solo tras autenticar. Los mensajes vacíos, carga, error, sesión caducada y conflicto de edición tienen salida textual. Respetar reduced-motion y no usar animación o color como único indicador de estado.

## Prueba que valida Is My Life

Usar un registro real para al menos dos recorridos, por ejemplo una experiencia enlazada con un lugar y un aprendizaje confirmados. Abrirlo desde Mi vida y desde una dimensión, volver al mismo ID, editarlo una vez y comprobar ambas lecturas. Incorporar un episodio personal fuera del catálogo profesional cuando esté documentado. Familiar puede permanecer vacía hasta tener un vínculo confirmado: no inventar parentescos para completar una demostración.
