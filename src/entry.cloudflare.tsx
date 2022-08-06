import render from './entry.ssr';
import { qwikCity } from "@builder.io/qwik-city/middleware/cloudflare-pages"
import qwikCityPlan from '@qwik-city-plan';

/**
 * Cloudflare Pages Request Handler
 */
export const onRequest = async (args: any) => {
  const handler = qwikCity(render, qwikCityPlan);
  return await handler(args)
};
