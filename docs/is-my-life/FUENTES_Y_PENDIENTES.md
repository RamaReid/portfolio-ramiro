# Fuentes, decisiones y datos de entrada

## Jerarquía y procedencia

1. Instrucciones actuales de Ramiro: Is My Life es el todo, la vida propia es la muestra y el portfolio una salida. Este criterio corrige el sesgo profesional de los primeros documentos.
2. Selecciones explícitas de esta conversación: varias vistas, núcleo privado separado, PostgreSQL/Supabase desde el comienzo, Ramiro como único propietario inicial, cuatro vistas con datos reales/estados vacíos, navegación híbrida, export estático e IA posterior.
3. Propuesta conceptual adjunta «Sí. Y para dejarlo realmente listo para implementar…»: memoria, entidades, relaciones, tiempo, fuentes, permisos, dimensiones y navegación recursiva. Este kit traduce esos conceptos a contratos operativos. Su texto no acredita fechas o relaciones de ejemplo como hechos de Ramiro.
4. Código y contenido aprobado del portfolio en el commit base anotado en LEEME. Documentos antiguos se usan por alcance y fecha, no como descripción automática del estado actual.

Las decisiones mecánicas detalladas en ARQUITECTURA/NAVEGACION son propuestas de implementación de este plan. No atribuirlas a elecciones explícitas anteriores del usuario. El implementador las sigue al recibir el encargo, salvo corrección posterior o incompatibilidad concreta documentada.

## Matriz de importación que debe preparar IM-013

| Fuente existente | Destino canónico | Regla |
|---|---|---|
| Catálogo `src/data/portfolio.ts` | Entidades, relaciones, dimensiones y mapeo de slugs | No convertir arrays de presentación en hechos biográficos nuevos |
| `docs/casos/` y bloques de páginas Astro | ContentBlock y ViewSection | Conservar texto aprobado y relacionarlo con fuentes/afirmaciones |
| Etapas curriculares | Experience, relaciones y TemporalSpan | Fin abierto no implica vigencia actual confirmada |
| Proyectos GDweb | Project, fuentes y vínculos documentados | Conservar nombres y atribuciones autorizadas |
| Manifiesto de evidencias | Source, Artifact, Evidence y derivados | Conservar alt, procedencia, tamaño, permisos y hashes |
| Rutas existentes | Mapeo de rutas públicas por sección/entidad | Conservar enlaces de la primera proyección |
| Fuentes personales adicionales | Candidatos privados con respaldo identificado | No incorporarlas al público por estar accesibles localmente |

No usar el inventario histórico como aprobación indiscriminada de cifras, cargos ni períodos. Consultar las matrices y entregas aplicables; autorizaciones ya concedidas para textos/fotos profesionales se reutilizan para el mismo uso.

## Datos que necesitan entrada humana cuando llegue su tarea

| Tarea | Entrada concreta | Trabajo que puede seguir sin ella |
|---|---|---|
| IM-001 | Solo si hay conflicto: nombre/destino existente del repositorio privado | Inspección y preparación de estructura/documentación |
| IM-003 | Un episodio personal real, período conocido o desconocido y vínculo confirmado con persona, lugar, idea o aprendizaje | Dominio, editor, seguridad y navegación sobre fuentes existentes |
| IM-011 | Cuenta propietaria provisionada; correo entregado directamente para Auth | Auth y RLS en base de prueba aislada |
| IM-028 | Aceptación del recorrido real de IM-003/014 | Revisión funcional con muestra disponible, sin dar H2 completo |
| IM-035 | Organización/región/proyecto Supabase y servidor SSR de producción; coste aceptado si lo hubiera | Configuración local, recetas de despliegue y H3 |
| IM-042 | Proveedor/modelo IA, presupuesto y fuentes autorizadas para ese proveedor | Staging, revisión e importador de texto |

No recopilar toda la vida antes de construir. Para IM-003 la pregunta mínima es: «¿Qué episodio personal querés usar, cuándo ocurrió si lo sabés, con qué persona/lugar/aprendizaje lo vinculás y qué fuente o relato tuyo lo documenta?». Puede responderse por texto; un testimonio propio sirve como declaración identificada, sin exigir documentación del proceso que no exista.

## Fuentes técnicas consultadas

- [Changelog de Supabase](https://supabase.com/changelog): comprobar compatibilidad Node y privilegios explícitos de Data API. El índice `.md` no pudo leerse con la herramienta; se consultó la versión HTML.
- [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security): políticas por propietario y pruebas de acceso real.
- [Sesiones SSR](https://supabase.com/docs/guides/auth/server-side/creating-a-client): clientes y verificación de sesión en servidor.
- [Auth con contraseña](https://supabase.com/docs/guides/auth/passwords): mecanismo de referencia del prototipo.
- [Astro Node](https://docs.astro.build/en/guides/integrations-guide/node/) y [renderizado bajo demanda](https://docs.astro.build/en/guides/on-demand-rendering/): aplicación privada servida por Node y salida pública estática separada.

Consulta realizada al preparar este kit. IM-002 e IM-035 deben verificar otra vez compatibilidad y configuración antes de instalar o desplegar; una guía no demuestra que el servicio exista o que una migración haya sido aplicada.
