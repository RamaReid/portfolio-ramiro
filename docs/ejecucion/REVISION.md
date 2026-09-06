# Revisión e integración de entregas

El revisor recibe la ficha, las decisiones aplicables, el informe de entrega y los archivos o parche de la misma revisión. Evalúa el resultado; el informe del ejecutor es una referencia que debe contrastarse con los archivos reales.

## Encargo para un modelo revisor

```text
Revisá la entrega asignada del portfolio. Leé AGENTS.md,
docs/ejecucion/DECISIONES.md, la ficha de docs/ejecucion/TAREAS.md
y el informe correspondiente en docs/ejecucion/entregas/.

Contrastá los cambios reales con los criterios de la ficha y las decisiones.
Comprobá los recorridos y afirmaciones relevantes con tus herramientas.
No des por ejecutadas pruebas que solo figuran como sugerencias.
Preservá los archivos: este encargo es de revisión.

Entregá hallazgos con ubicación, impacto y pasos de reproducción.
Separá los problemas que impiden cerrar de las mejoras opcionales y de
problemas anteriores ajenos al cambio. Indicá qué no pudiste verificar.
Si no encontrás problemas, delimitá lo revisado; no garantices ausencia
de fallos fuera de esa revisión. No cambies decisiones de producto.
```

## Controles según la entrega

| Tipo de entrega | Qué comprobar |
|---|---|
| Alcance y arquitectura | Decisiones explícitas, dependencias coherentes, propuestas separadas de acuerdos |
| Casos y evidencias | Rol, período y resultados fieles a las fuentes; autoría y autorización; ausencia de datos privados en la entrega pública |
| Diseño | Vistas y estados definidos, legibilidad, comportamiento adaptable y acceso al relato sin interacción |
| Base técnica | Instalación reproducible, comprobación de tipos, compilación y separación del material privado |
| Página o interacción | Recorrido real, enlaces y medios, navegación por teclado, vista móvil y escritorio, contenido esencial sin JavaScript |
| Buscadores | Texto extraíble del HTML inicial, estructura semántica, enlaces estándar, metadatos y marcado coherentes con la página |
| Publicación | Commit esperado, resultado del despliegue, URL real, rutas directas y estado HTTP; no confundir acceso con indexación |

## Informe del revisor

Registrar en `docs/ejecucion/entregas/Txx-revision.md`:

- Tarea, revisor y revisión exacta inspeccionada.
- Archivos y comportamientos revisados.
- Comprobaciones ejecutadas y resultados observados.
- Hallazgos que impiden cerrar, con ubicación e impacto.
- Mejoras opcionales dentro del contexto, sin convertirlas en nuevos requisitos.
- Limitaciones y controles no ejecutados.
- Resultado: apta para integrar / requiere corrección / revisión incompleta.

Un problema ajeno al alcance se comunica sin corregirlo automáticamente. Si afecta una dependencia necesaria del cambio, identificar esa relación para que el integrador asigne la corrección pertinente.

## Integración y cierre

1. Comparar la base del ejecutor con el estado actual. Preservar los cambios ajenos y resolver los conflictos de forma explícita.
2. Incorporar los archivos o parche revisados. Verificar también los archivos nuevos que no aparecen en un diff de archivos seguidos por Git.
3. Repetir solo las comprobaciones afectadas por la integración, cambios posteriores o resultados todavía inciertos.
4. Si queda una decisión funcional pendiente, registrar `espera_decision` y no activar el comportamiento dependiente.
5. Actualizar la entrega con la revisión integrada y el estado real de commit, push y publicación.
6. Marcar la tarea `completa` cuando cumpla la ficha. Habilitar las dependientes que ya tengan todos sus insumos.

Para volver atrás, revertir o restaurar únicamente el cambio de la tarea en un contexto conocido. No usar limpiezas generales ni descartar el directorio de trabajo para resolver un conflicto. Una reversión de código y una reversión de un sitio ya publicado son acciones distintas y deben comprobarse por separado.
