# Contrato de arquitectura de Is My Life

## Producto y alcance de la primera versión

Un único perfil de Ramiro, cuatro vistas sobre la misma memoria, editor básico, navegación textual y radial, persistencia PostgreSQL y salida profesional estática. El caso profesional es la primera fuente abundante; la validación del producto exige también un recorrido personal real. Si falta esa fuente, la arquitectura técnica puede avanzar, pero la validación de distintos ámbitos sigue pendiente.

Vistas iniciales: `personal` («Mi vida», todos los registros activos del propietario), `family` («Familiar», selección familiar), `professional` («Profesional», selección profesional) y `public` («Pública», lo publicable). El propietario puede abrir las cuatro. La primera versión no da cuentas ni acceso a familiares: eso requerirá un encargo posterior de identidades y concesión de acceso.

Elegir una vista modifica selección y presentación. La autorización depende de la identidad y de la política de cada recurso. Un dato puede ser relevante para Profesional y seguir siendo privado; no llegará al portfolio hasta autorizar su salida pública.

## Organización técnica de referencia

El núcleo usa npm workspaces: `apps/web` para Astro SSR con React; `packages/domain`, `packages/data`, `packages/projections` y `packages/navigation`; migraciones y pruebas en `supabase/`. Evitar crear paquetes adicionales sin una responsabilidad efectiva. La exportación profesional vive en el núcleo hasta aprobarse y transferirse al portfolio.

Usar Node 22 compatible con el Astro instalado, TypeScript estricto, versiones exactas de paquetes y lockfile. IM-002 registra versiones realmente instaladas y los comandos. Implementar el dial con React y SVG/CSS; el mapa React Flow existente puede mantenerse en la proyección profesional. El dial no depende del layout de un grafo.

Desarrollo inicial: aplicación local con Supabase local y PostgreSQL real; mocks solamente en pruebas unitarias. El entorno alojado se prepara después de validar el núcleo. Si falta Docker o Supabase CLI, registrar el requisito; no cambiar silenciosamente a JSON, SQLite ni a otro proyecto remoto. [Supabase registra cambios en Node y en la exposición de tablas](https://supabase.com/changelog), por lo que IM-002 debe comprobar versiones y privilegios vigentes.

Autenticación de referencia para el prototipo: correo y contraseña mediante Supabase Auth, cuenta propietaria provisionada expresamente, sin registro abierto. No inferir un correo desde GitHub ni usar credenciales de otras aplicaciones. Sesiones SSR con cookies y comprobación de identidad en servidor, usando clientes de usuario sujetos a RLS. La integración seguirá la [documentación oficial de sesiones SSR](https://supabase.com/docs/guides/auth/server-side/creating-a-client) y el [adaptador Node de Astro](https://docs.astro.build/en/guides/integrations-guide/node/). Este mecanismo es una propuesta concreta del plan, no una preferencia previamente expresada por Ramiro; IM-001 lo registra y consulta únicamente si Ramiro pide otro acceso o existe una configuración previa incompatible.

## Datos canónicos mínimos

Identificadores UUID estables. `profile_id` en cada fila perteneciente a una memoria; `profiles.owner_user_id` enlaza con `auth.users`. Fechas de auditoría separadas de fechas de vida. Toda referencia entre registros canónicos debe comprobar el mismo `profile_id`, también mediante claves compuestas en PostgreSQL, para impedir cruces de memorias.

| Registro | Campos y significado mínimos |
|---|---|
| Profile | ID, propietario autenticado, slug y entidad Person que representa al titular |
| Entity | ID, perfil, tipo, slug, título, resumen, estado `draft/active/archived`, revisión, política, temporalidad opcional |
| Relation | Origen, destino, tipo, temporalidad opcional, política, estado, revisión y afirmaciones que respaldan su significado |
| TemporalSpan | Inicio y fin parciales, precisión y certeza por extremo, estado `closed/ongoing/unknown`, etiqueta original |
| Source | Tipo, referencia de origen, fecha de incorporación, política y descripción; ubicaciones privadas no se exportan |
| Artifact | Entidad de tipo Artifact más metadatos de archivo: hash, MIME, tamaño, dimensiones y ubicación privada o derivado público |
| Assertion | Sujeto, predicado, objeto literal tipado **o** entidad destino, fuentes, tipo de respaldo, estado de revisión y política |
| Evidence | Relaciona fuente y/o Artifact con afirmación o entidad; descripción de qué documenta, procedencia, permiso y texto alternativo |
| ContentBlock | Texto editorial canónico en Markdown, asociado a entidad o sección de vista, referencias a afirmaciones, revisión y política |
| AccessPolicy | Perfil, alcance `owner/public/restricted`; restringido sin concesiones equivale a acceso solo del propietario |
| View | Slug, propósito, consulta tipada y dimensiones permitidas; no contiene copias de entidades |
| ViewSection | Presentación editorial de una vista, referencias a entidades y bloques de contenido; permite conservar casos agregados y URLs anteriores |
| ViewRelevance | Vista, entidad, `pinned` y orden editorial opcional; no otorga acceso |
| Dimension | Slug, nombre, consulta tipada, tipos y relaciones admitidos |
| Tag | Etiquetas y asignaciones a entidades para temas como familia, IA o aprendizaje; no duplican registros |

Tipos de Entity: `person`, `organization`, `place`, `event`, `experience`, `project`, `artifact`, `idea`, `learning`, `capability`, `decision`, `system`. Un caso editorial no tiene que convertirse forzosamente en una entidad: puede ser una sección que reúne varias.

Tablas de enlace: `assertion_sources`, `relation_assertions`, `entity_tags`, `view_section_entities`; cada una con claves, pertenencia al perfil y políticas. Las tablas se crean por paquetes IM-007 a IM-010, no en una migración gigantesca. Separar estructuras TypeScript y filas SQL mediante adaptadores comprobados.

## Afirmaciones, cambios y aprobación

Clasificación epistemológica: `declared`, `supported`, `inferred`. Revisión: `pending`, `accepted`, `rejected`. Una declaración aceptada por Ramiro sigue siendo una declaración; no se transforma automáticamente en hecho documentado. `confidence` es opcional y solo se conserva si una fuente o extracción la proporciona; nunca se inventa un número para dar apariencia de exactitud.

Una relación expresa navegación estructural. Sus afirmaciones de respaldo referencian el mismo origen, predicado y destino cuando describen ese vínculo. Evitar escribir una segunda versión contradictoria del hecho en texto o arrays independientes. Una foto documenta lo que muestra y su contexto aprobado; no acredita por sí sola autoría, fecha ni resultado.

Los bloques editoriales actuales se conservan con su fuente y revisión. La importación separa Organización García Delillo, experiencia de Ramiro, proyectos y composición del caso. Productoria mantiene las atribuciones aprobadas. Una fecha de commit es fecha de commit; no se convierte en comienzo o fin de un proyecto.

El explorador usa entidades activas y afirmaciones aceptadas; borradores y archivados permanecen accesibles al propietario en gestión. Las inferencias aceptadas se etiquetan como tales. El export añade sus propios controles de permiso y revisión pública; no basta con estar activo en la memoria.

Cada cambio canónico incrementa `revision` y conserva historial auditable de antes/después. Los guardados exigen `expectedRevision`; un conflicto devuelve 409 y ofrece recargar, sin sobrescribir silenciosamente. Un archivo original no se sobrescribe: un nuevo hash representa otra versión. Archivar excluye del recorrido corriente, conserva historial y provoca revisión de cualquier salida afectada.

`accepted` significa aprobado para la memoria; publicar exige, además, permiso público y aprobación de la revisión exportada. Un cambio de texto, relación, política o archivo invalida la aprobación anterior correspondiente.

## Tiempo honesto

Conservar valores parciales como `1997`, `2002-03` o un instante con zona horaria. La precisión de inicio puede diferir de la de fin. Una etiqueta «desde 2004» no prueba que la actividad siga vigente hoy: guardar el fin como desconocido salvo confirmación explícita de continuidad.

El motor deriva límites de búsqueda de fechas parciales, sin sustituir la fecha fuente por un día inventado. Intersección temporal inclusiva; intervalo inválido se rechaza. Un período confirmado en curso usa la fecha de consulta solo para dibujarse. Un fin desconocido usa una terminación abierta en el borde de la ventana con la etiqueta «Fin desconocido», sin afirmar vigencia. Sin fechas, la entidad va a «Sin fecha conocida» y permanece alcanzable en enlaces y búsqueda; no se coloca en un año supuesto.

La fecha de una relación no fecha automáticamente a sus dos entidades. La proyección puede mostrar «Participación en X» con el período de la relación e indicar de dónde viene. Nunca recortar todo el universo al período profesional: cada foco obtiene su extensión temporal de los datos visibles correspondientes.

## Permisos y acceso a datos

Aplicar RLS y privilegios explícitos en la misma migración que crea cada tabla. `anon` no tiene acceso directo a la memoria, incluso a filas marcadas publicables: la lectura pública utiliza el export. Usuarios autenticados ajenos no pueden leer ni modificar la memoria de Ramiro. Incluir pruebas de un segundo usuario sintético en una base de pruebas. [RLS y privilegios son controles complementarios en Supabase](https://supabase.com/docs/guides/database/postgres/row-level-security).

Las tablas canónicas y Storage exigen la identidad del propietario; nunca autorizar por `viewId`, parámetros URL o `user_metadata`. Las consultas respetan RLS; las funciones SQL usan `security invoker` por defecto. No exponer claves administrativas en bundles, HTML, repositorio o export. Los archivos privados se entregan por una ruta autenticada; las copias públicas requieren selección explícita.

El repositorio privado almacena código y migraciones, no es la base de datos ni un respaldo de originales. Mantener fuentes, dumps y paquetes con datos personales en directorios ignorados. Las pruebas y CI reciben muestras sintéticas aisladas, sin incorporarlas al perfil real.

## Interfaces de consulta y edición

El adaptador `MemoryRepository` permite listar/obtener registros, guardar con revisión esperada y ejecutar cambios relacionados en una transacción. Su implementación inicial usa PostgreSQL/Supabase real. La lógica de proyección es TypeScript puro y recibe un snapshot de datos previamente autorizado; no importa React ni Supabase.

```ts
resolveProjection(snapshot, navigationState, evaluationContext): ProjectionResult
```

`evaluationContext` lo establece el servidor; distingue edición del propietario y vista previa de una exportación pública. El navegador nunca elige una identidad efectiva. Resultado: entidades visibles, relaciones visibles, hitos temporales con procedencia, registros sin fecha, dimensiones disponibles, selección, migas de navegación y revisión de datos. Los hitos/cards se derivan; no hay tablas de hitos/cards.

Orden: identidad/perfil → autorización de cada recurso → consulta de vista → foco y dimensión → búsqueda/tiempo → orden editorial → proyección. Una relación se devuelve solo si también son visibles sus extremos y su contenido permitido. Un título, contador, breadcrumb, evidencia o mensaje de error no revela un registro que quede fuera de ese conjunto.

La consulta de una dimensión usa un AST validado: `all`, `type`, `tag`, `relation`, `and`, `or`. No ejecutar SQL ni JavaScript procedente de la URL o de textos de configuración. En el nivel raíz se consulta el perfil; al entrar en una entidad se consulta esa entidad y sus relaciones inmediatas autorizadas. Cada nuevo foco abre su contexto: los filtros de niveles anteriores no se acumulan hasta impedir recorrer personas, lugares o aprendizajes.

Contrato web: `GET /api/projection` comparte parser de URL con SSR; `GET/POST/PATCH /api/entities`, equivalentes para relaciones, afirmaciones, contenido y configuración. `PATCH` incluye revisión esperada. Sin DELETE físico de originales en el editor inicial. 401 sin sesión; 404 para IDs inexistentes o ajenos; 422 para entrada inválida; 409 para conflicto. Escrituras del mismo origen, con comprobación de sesión y origen; errores SQL privados no se devuelven al cliente. La paginación del adaptador se drena o señala continuación: no asumir que una sola petición Supabase contiene toda la memoria.

## Proyección pública e integración

Snapshot `PublicProjectionV1`: `schemaVersion`, ID de exportación, fecha, hash, perfil público mínimo, entidades, relaciones, temporalidad, secciones, bloques de contenido, mapeo de rutas y manifiesto de derivados. Lista explícita de campos públicos; excluir IDs de autenticación, políticas internas, rutas locales, borradores, historial privado y fuentes sensibles. Reutilizar los IDs de entidad que se publiquen, sin incluir referencias hacia objetos omitidos.

Aprobación asociada al hash del snapshot y a las revisiones de origen. Antes de transferirlo se vuelve a comprobar que no cambiaron; si cambiaron, regenerar y revisar. Si se retira una pieza pública, la siguiente exportación registra su retirada y el importador elimina la copia pública administrada por él. Una exportación inválida no modifica la versión en uso.

El portfolio importa un paquete aprobado, verifica esquema, hashes y archivos, y transforma esas proyecciones en su catálogo actual. Preservar `/portfolio-ramiro/`, rutas de casos/proyectos/capacidades/trayectoria/contacto, textos aprobados y 102 pares WebP/JPEG. Las secciones editoriales son canónicas en el núcleo después de la migración: futuras ediciones de contenido se hacen allí.

La memoria se verifica antes del export. Astro público sigue produciendo HTML legible sin JavaScript, enlaces reales y JSON-LD coherente. GitHub Pages aloja ese resultado estático; la aplicación privada SSR requiere un servidor, elegido en IM-035. Retirar del sitio no garantiza borrar copias de buscadores, archivos o historial de Git; no presentar reversión de un deploy como revocación de todas las copias.

## Límites que se resuelven en su encargo

IM-001 confirma destino físico y privado del núcleo si ya existe uno; IM-003 identifica un episodio personal y sus vínculos sin inferirlos; IM-011 necesita la cuenta propietaria; IM-035 necesita organización/región Supabase, proyecto de producción y alojamiento SSR. IM-042 prepara proveedor, modelo, presupuesto y autorización de uso de datos para IA. Estos datos no se inventan ni condicionan la redacción del kit o los paquetes independientes.
