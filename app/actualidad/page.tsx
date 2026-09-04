import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { mediaCoverage } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Actualidad y medios',
  description: 'Cobertura periodística y actualidad pública vinculada a Paba & Asociados.',
  alternates: { canonical: '/actualidad' },
};

export default function NewsPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Actualidad" title="La firma en la conversación pública." description="Una selección de piezas periodísticas que el sitio vigente relaciona con la trayectoria de Paba & Asociados." />
      <section className="section-pad">
        <div className="container press-list">
          {mediaCoverage.map((item, index) => (
            <a href={item.url} target="_blank" rel="noreferrer" key={`${item.outlet}-${item.title}`}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{item.outlet}</strong><h2>{item.title}</h2><small>Fuente externa ↗</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
