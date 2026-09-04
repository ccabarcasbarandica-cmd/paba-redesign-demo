import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://pabayasociados.com.co/sitemap.xml', host: 'https://pabayasociados.com.co' };
}
