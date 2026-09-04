import type { MetadataRoute } from 'next';
import { isDemoDeployment } from '@/lib/deployment';

export default function robots(): MetadataRoute.Robots {
  if (isDemoDeployment) {
    return { rules: { userAgent: '*', allow: '/' } };
  }

  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://pabayasociados.com.co/sitemap.xml', host: 'https://pabayasociados.com.co' };
}
