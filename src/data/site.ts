export const siteUrl = 'https://ramareid.github.io/portfolio-ramiro';
export const siteBase = '/portfolio-ramiro';

export function sitePath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteBase}${normalizedPath === '/' ? '/' : normalizedPath}`;
}
