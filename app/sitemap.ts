import type { MetadataRoute } from 'next';
import { editorials, practiceAreas, publicCases } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pabayasociados.com.co';
  const staticRoutes = ['', '/firma', '/areas', '/abogados', '/casos', '/editorial', '/actualidad', '/contacto'];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : .8 })),
    ...practiceAreas.map((area) => ({ url: `${base}/areas/${area.slug}`, changeFrequency: 'monthly' as const, priority: .8 })),
    ...editorials.map((item) => ({ url: `${base}/editorial/${item.slug}`, lastModified: item.date, changeFrequency: 'monthly' as const, priority: .7 })),
    ...publicCases.map((item) => ({ url: `${base}/casos/${item.slug}`, changeFrequency: 'monthly' as const, priority: .6 })),
  ];
}
