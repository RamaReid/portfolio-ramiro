# Escenarios de aceptación

Cada encargo cita los escenarios pertinentes. Las herramientas propuestas se incorporan en IM-002: Vitest para lógica, pruebas SQL/pgTAP para RLS e integridad y Playwright para recorridos. Son controles pendientes de implementar, no resultados obtenidos al escribir este plan.

| ID | Escenario y resultado esperado |
|---|---|
| V01 | Instalación desde lockfile; check y build pasan; arranque local identifica versión y entorno sin volcar secretos |
| V02 | Recrear una base **de pruebas** desde migraciones; claves, constraints, índices y RLS presentes; nunca resetear producción |
| V03 | Propietario puede operar; anon y otro usuario autenticado no leen ni escriben datos de Ramiro por tabla, RPC, HTML, API ni Storage |
| V04 | Relación o evidencia con extremo de otro perfil se rechaza; pruebas inspeccionan filas, no solo ausencia de excepción |
| V05 | Guardar/cargar años, meses, extremos de precisión distinta, fechas aproximadas, fin desconocido y en curso sin inventar día; intervalo invertido se rechaza |
| V06 | Clasificación declarada/respaldada/inferida independiente de aceptada/rechazada y permiso público; editar invalida aprobación vigente |
| V07 | Reimportar la misma fuente no duplica entidades, relaciones ni archivos; dry-run muestra diferencias y jamás escribe |
| V08 | Crear, editar y archivar desde UI persiste en PostgreSQL; conflicto de revisión devuelve 409 y no pisa el cambio anterior |
| V09 | Original y copia verifican hash; archivo privado requiere sesión; alt/procedencia sobreviven al guardado y a la exportación |
| V10 | Cambiar relevancia o vista no concede acceso; relaciones, títulos, fuentes, conteos y breadcrumbs no filtran registros excluidos |
| V11 | Los cuatro slugs de vista existen; un mismo ID aparece en distintas consultas y cambia en todas al editarlo una sola vez |
| V12 | Parsear/serializar la URL recupera frames, selección, búsqueda y rango; atrás/adelante y acceso directo coinciden con clics; URL inválida y ajena tienen respuestas previstas |
| V13 | Seleccionar muestra card sin entrar; explorar añade contexto; breadcrumb vuelve; un ciclo vuelve al frame existente; una dimensión vacía conserva salida navegable |
| V14 | Dial de una fecha, varios hitos coincidentes, intervalos abiertos y sin fecha; sin NaN ni posición inventada; acercar y mover preservan escala y contexto |
| V15 | Rueda y enlaces seleccionan la misma dimensión y devuelven exactamente los mismos IDs visibles |
| V16 | Teclado, foco, lector de pantalla, reduced-motion y móvil; card debajo en móvil; zoom navegador y scroll permiten leer los controles |
| V17 | Sin JavaScript se navega HTML público y SSR privado autenticado; API y HTML expresan el mismo contenido autorizado; estados error/vacío no se confunden |
| V18 | Búsqueda devuelve solo coincidencias dentro del contexto autorizado; paginación agotada sin truncamiento silencioso; sin fecha queda en sección explícita |
| V19 | Recorrido personal fuera del catálogo profesional con fuente real y vínculo real; falta de fuente impide cerrar esta validación, sin bloquear tests técnicos sintéticos |
| V20 | Export de lista positiva: ningún original, secreto, ruta local, objeto privado ni referencia huérfana; hash y revisiones cambian al editar; aprobación obsoleta se rechaza |
| V21 | Snapshot inválido no altera el portfolio; repetir import es idempotente; retirada elimina recursos administrados, preservando archivos ajenos |
| V22 | Comparar todas las rutas públicas y contenido aprobado de la base registrada; preservar navegación, canonical y JSON-LD bajo /portfolio-ramiro/ y evidencias WebP/JPEG |
| V23 | HTTP real en todas las rutas publicadas y assets referenciados; contenido esperado además de 200; distinguir de workflow exitoso e indexación de buscador |
| V24 | Respaldo de PostgreSQL y objetos privados restaurado en entorno aislado, con hashes y relaciones válidos; restauración jamás sobre producción para probar |
| V25 | Revocar sesión, acceso directo sin sesión, fallo de red y reinicio; sin contenido privado cacheado en respuesta compartida |
| V26 | Aceptar una propuesta de staging aplica una transacción única; rechazar no cambia memoria; reintento no duplica y registra autor/fuente |
| V27 | Importador de texto soporta UTF-8, archivo ilegible y fuente repetida; todo queda pendiente hasta revisar y los originales se conservan |
| V28 | IA solo recupera contexto autorizado y cita sus fuentes; sin datos responde que faltan; instrucciones incrustadas en documentos no autorizan acciones |
| V29 | Propuesta IA no modifica memoria; requiere revisión humana, aplica V26 y conserva origen del modelo; fallos y costes se registran sin guardar secretos |

## Hitos de aceptación

**H1 — Memoria editable:** PostgreSQL, auth, fuentes, edición, relaciones y cuatro configuraciones de vista comprobadas. Incluye V01–V11 y V25 aplicables.

**H2 — Is My Life navegable:** H1 más V12–V19. Demostración: entrar por Mi vida, seleccionar un ámbito, explorar una entidad real y sus personas/lugares/aprendizajes confirmados; abrir esa misma entidad desde otro recorrido. El portfolio no es la única prueba de este hito.

**H3 — Portfolio derivado:** H2 y V20–V22; exportación profesional revisable y sitio local con contenido preservado. No depende de IA ni de alojamiento nuevo.

**H4 — Primera versión operativa:** H3, V23–V25, revisión independiente y estados de publicación comprobados. Si falta alojamiento privado, H3 sigue utilizable localmente y H4 sigue pendiente.

**H5 — Ingesta asistida:** después de H4; V26–V29. La primera versión útil se entrega antes de este hito.

## Comandos previstos y registro

IM-002 creará scripts npm `check`, `build`, `test`, `test:db`, `test:e2e` y `verify`. Cada script debe fallar si falta su herramienta; no usar placeholders que devuelvan éxito. Descubrir sintaxis y versión de Supabase CLI con `--help`. Las migraciones se validan localmente; asesores de seguridad complementan, no reemplazan, pruebas RLS. Registrar comandos reales, entorno y códigos de salida por tarea.

CI del núcleo: instalación limpia, check, tests de lógica/base y build con datos sintéticos. UI y escenarios de publicación se ejecutan en sus paquetes. La revisión final integra resultados previos y repite únicamente los afectados por cambios o dudas abiertas. Ninguna comprobación de esta lista ha sido ejecutada como parte de la preparación documental.
