import type { APIRoute, GetStaticPaths } from 'astro';
import { caseMarkdown } from '../../../data/markdown';
import { caseStudies } from '../../../data/portfolio';

export const getStaticPaths: GetStaticPaths = () => caseStudies.map((item) => ({ params: { slug: item.slug } }));

export const GET: APIRoute = ({ params }) => {
  const body = caseMarkdown(params.slug ?? '');
  return body ? new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } }) : new Response('Not found', { status: 404 });
};
