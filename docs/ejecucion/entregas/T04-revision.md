# Revisión T04 — Evidencias de García Delillo Construcciones

**Tarea:** T04  
**Revisor:** Integrador / Codex (revisión local)  
**Fecha:** 2026-09-07
**Resultado:** entrega revisada; `completa`

## Resultado de la revisión

T04 cumple el paquete acordado: diez proyectos, 102 imágenes provenientes de las páginas de proyecto de `GDweb`, manifiesto estructurado, procedencia y textos alternativos tomados del sitio de origen. Los originales están preservados en privado y la salida local usa derivados WebP con fallback JPEG.

La revisión editorial de los textos ya estaba realizada en la web de la empresa, según la confirmación del titular. La aplicación local integra los derivados; cualquier revisión adicional queda para antes de una publicación externa efectiva.

## Comprobaciones

- El manifiesto contiene 10 proyectos.
- Cada recurso declarado en el manifiesto tiene WebP y JPEG existentes en el área pública local.
- Los 102 hashes privados fueron comprobados sin diferencias.
- Cada proyecto tiene página HTML de origen y carpeta de imágenes correspondiente.
- Los textos alternativos proceden de las etiquetas `alt` existentes en las páginas de `GDweb`.
- Los originales permanecen en `D:\New Life` sin modificaciones.
- El repositorio no contiene la copia privada ni el `.git` de `GDweb`.
- No se incorporaron las carpetas de demostración ni las imágenes personales excluidas.

## Cierre

T04 queda `completa`. T05, T06, T07, T08, T09, T10, T11, T12 y T13 también están cerradas; T14 documenta la revisión independiente.

## Estado de publicación

La aplicación local existe y fue comprobada con `npm.cmd run check`, `npm.cmd run build` y previsualización HTTP. No hay push, despliegue ni URL pública de frontend comprobada.
