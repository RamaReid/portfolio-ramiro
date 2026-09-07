import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, sep } from 'node:path';

const root = process.cwd();
const originalRoot = join(root, 'referencias_privadas', '05_Evidencias_GD', 'originales');
const publicRoot = join(root, 'public', 'evidencias', 'garcia-delillo');
const outputRoot = join(root, 'public', 'evidencias', 'garcia-delillo-web');
const manifestPath = join(originalRoot, 'manifest-original.json');
const ffmpeg = process.env.FFMPEG_BIN ?? 'ffmpeg';
const ffprobe = process.env.FFPROBE_BIN ?? 'ffprobe';
const maxDimension = 1600;

if (!existsSync(originalRoot) || !existsSync(manifestPath)) {
  throw new Error('Faltan las fuentes privadas de evidencias. Se necesita referencias_privadas/05_Evidencias_GD/originales/ y manifest-original.json.');
}

function run(binary, args) {
  return execFileSync(binary, args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

function toUrlPath(value) {
  return value.split(sep).join('/');
}

function probeDimensions(filePath) {
  const output = run(ffprobe, ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=s=x:p=0', filePath]).trim();
  const [width, height] = output.split('x').map(Number);
  if (!Number.isFinite(width) || !Number.isFinite(height)) throw new Error(`No se pudieron leer las dimensiones de ${filePath}`);
  if (Math.max(width, height) > maxDimension) throw new Error(`La salida supera ${maxDimension}px: ${filePath} (${width}x${height})`);
  return { width, height };
}

function sourceRelativePath(src) {
  const prefix = '/evidencias/garcia-delillo/';
  if (!src.startsWith(prefix)) throw new Error(`Ruta de evidencia inesperada: ${src}`);
  return src.slice(prefix.length).split('/').join(sep);
}

function convert(sourcePath, webpPath, jpegPath) {
  const scale = `scale=w='if(gte(iw,ih),min(${maxDimension},iw),-2)':h='if(gte(iw,ih),-2,min(${maxDimension},ih))'`;
  mkdirSync(dirname(webpPath), { recursive: true });
  mkdirSync(dirname(jpegPath), { recursive: true });
  run(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', '-i', sourcePath, '-map_metadata', '-1', '-vf', scale, '-frames:v', '1', '-c:v', 'libwebp', '-q:v', '82', '-preset', 'picture', webpPath]);
  run(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', '-i', sourcePath, '-map_metadata', '-1', '-vf', scale, '-frames:v', '1', '-c:v', 'mjpeg', '-q:v', '3', '-pix_fmt', 'yuvj420p', jpegPath]);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
let sourceBytes = 0;
let outputBytes = 0;
let assetCount = 0;

for (const project of manifest.projects) {
  for (const asset of project.assets) {
    const originalRelative = sourceRelativePath(asset.src);
    const sourcePath = join(originalRoot, originalRelative);
    if (extname(sourcePath).toLowerCase() !== '.png') throw new Error(`La fuente no es PNG: ${sourcePath}`);
    const sourceStat = statSync(sourcePath);
    sourceBytes += sourceStat.size;

    const relativeWithoutExtension = originalRelative.slice(0, -extname(originalRelative).length);
    const webpRelative = `${relativeWithoutExtension}.webp`;
    const jpegRelative = `${relativeWithoutExtension}.jpg`;
    const webpPath = join(outputRoot, webpRelative);
    const jpegPath = join(outputRoot, jpegRelative);
    convert(sourcePath, webpPath, jpegPath);

    const dimensions = probeDimensions(webpPath);
    const webpBytes = statSync(webpPath).size;
    const jpegBytes = statSync(jpegPath).size;
    outputBytes += webpBytes + jpegBytes;
    asset.src = `/evidencias/garcia-delillo-web/${toUrlPath(webpRelative)}`;
    asset.fallbackSrc = `/evidencias/garcia-delillo-web/${toUrlPath(jpegRelative)}`;
    asset.width = dimensions.width;
    asset.height = dimensions.height;
    assetCount += 1;
  }
}

manifest.version = 2;
manifest.note = 'Derivados web generados desde originales preservados fuera de la salida pública; formato WebP con fallback JPEG, lado mayor máximo de 1600px';
writeFileSync(join(publicRoot, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

console.log(JSON.stringify({
  assets: assetCount,
  sourceBytes,
  outputBytes,
  reductionPercent: Number(((1 - outputBytes / sourceBytes) * 100).toFixed(2)),
  maxDimension,
  formats: ['webp', 'jpg'],
}, null, 2));
