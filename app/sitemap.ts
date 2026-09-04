import type { MetadataRoute } from 'next';
import { editorials, legalAnalyses, practiceAreas, professionals, publicActuations } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pabayasociados.com.co';
  const staticRoutes = ['', '/firma', '/areas', '/abogados', '/experiencia-y-actuaciones', '/editorial', '/analisis-juridico', '/contacto'];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : .8 })),
    ...practiceAreas.map((area) => ({ url: `${base}/areas/${area.slug}`, changeFrequency: 'monthly' as const, priority: .9 })),
    ...professionals.map((profile) => ({ url: `${base}/abogados/${profile.slug}`, changeFrequency: 'monthly' as const, priority: .7 })),
    ...publicActuations.map((item) => ({ url: `${base}/experiencia-y-actuaciones/${item.slug}`, changeFrequency: 'monthly' as const, priority: .7 })),
    ...editorials.map((item) => ({ url: `${base}/editorial/${item.slug}`, lastModified: item.date, changeFrequency: 'monthly' as const, priority: .7 })),
    ...legalAnalyses.map((item) => ({ url: `${base}/analisis-juridico/${item.slug}`, lastModified: item.date, changeFrequency: 'monthly' as const, priority: .7 })),
  ];
}
