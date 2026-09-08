# Importador público de Is My Life

El portfolio acepta un archivo `PublicProjectionV1` aprobado por el núcleo privado. El importador trabaja sin Supabase, sin llaves y sin consultar una base en vivo.

## Uso

Primero se valida sin escribir:

```powershell
node scripts/import-is-my-life.mjs --export C:\ruta\public-projection.json --dry-run
```

Cuando el resultado fue revisado, se aplica de forma atómica:

```powershell
node scripts/import-is-my-life.mjs --export C:\ruta\public-projection.json --apply
```

El paquete debe tener `schemaVersion: public-projection.v1`, hash SHA-256 válido, referencias internas completas, rutas bajo `/portfolio-ramiro/` y activos que existan dentro de `public/` con el hash declarado. Se rechazan claves privadas, rutas locales, traversal, referencias huérfanas y activos fuera de la salida pública.

La aplicación genera únicamente:

- `src/data/is-my-life/public-projection.json`, para los consumidores del portfolio;
- `public/is-my-life/manifest.json`, con rutas y activos aprobados.

El estado local de recursos administrados queda en `tmp/is-my-life-import/managed.json`, fuera de Git. Solo esos recursos pueden retirarse en una actualización; los archivos ajenos se conservan. El proceso usa una carpeta temporal y una copia de recuperación antes de reemplazar archivos.

La ejecución actual no conecta todavía las páginas existentes. Eso corresponde a IM-031 y requiere primero un snapshot real aprobado.
