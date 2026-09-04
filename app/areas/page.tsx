import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { practiceAreas } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Áreas de práctica',
  description: 'Litigio estratégico y asesoría jurídica especializada en Derecho Penal, Público, Laboral, Justicia Transicional, Derecho Privado y solución de controversias.',
  alternates: { canonical: '/areas' },
  openGraph: { title: 'Áreas de práctica | Paba & Asociados', description: 'Seis áreas de práctica para asuntos jurídicos de alta complejidad.', images: [] },
  twitter: { card: 'summary', title: 'Áreas de práctica | Paba & Asociados', description: 'Seis áreas de práctica para asuntos jurídicos de alta complejidad.', images: [] },
};

export default function AreasPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Litigio y asesoría especializada" title="Áreas de práctica" description="Una práctica jurídica que integra experiencia litigiosa, análisis riguroso y construcción estratégica para cada asunto." />
      <section className="section-pad" aria-labelledby="areas-list-title">
        <div className="container">
          <h2 className="sr-only" id="areas-list-title">Áreas de práctica de Paba & Asociados</h2>
          <div className="cards-grid">
            {practiceAreas.map((area, index) => (
              <article className="practice-card" key={area.slug}>
                <p>{String(index + 1).padStart(2, '0')} · {area.eyebrow}</p>
                <h2>{area.name}</h2>
                <p>{area.summary}</p>
                <Link className="arrow-link dark" href={`/areas/${area.slug}`}>Conocer el área <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="final-cta section-pad"><div className="container final-cta-inner"><h2>Analicemos su situación jurídica.</h2><Link className="button button-accent" href="/contacto">Solicitar valoración jurídica</Link></div></section>
    </main>
  );
}
