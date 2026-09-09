import type { APIRoute } from 'astro';
import { markdownIndex } from '../../data/markdown';

export const GET: APIRoute = () => new Response(markdownIndex(), {
  headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
});
