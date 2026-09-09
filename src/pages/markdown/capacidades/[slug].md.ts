import type { APIRoute, GetStaticPaths } from 'astro';
import { capabilityMarkdown } from '../../../data/markdown';
import { capabilities } from '../../../data/portfolio';

export const getStaticPaths: GetStaticPaths = () => capabilities.map((item) => ({ params: { slug: item.slug } }));

export const GET: APIRoute = ({ params }) => {
  const body = capabilityMarkdown(params.slug ?? '');
  return body ? new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } }) : new Response('Not found', { status: 404 });
};
