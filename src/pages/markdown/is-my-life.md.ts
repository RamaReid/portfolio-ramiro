import type { APIRoute } from 'astro';
import { projectionMarkdown } from '../../data/markdown';

export const GET: APIRoute = () => {
  const body = projectionMarkdown();
  return body
    ? new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
    : new Response('Todavía no hay una proyección pública de Is My Life importada.\n', { status: 404, headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
