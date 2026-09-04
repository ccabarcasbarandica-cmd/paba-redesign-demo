import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { practiceAreas } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Áreas de práctica',
  description: 'Servicios jurídicos de Paba & Asociados en derecho penal, laboral, disciplinario, electoral, JEP, público y empresarial.',
  alternates: { canonical: '/areas' },
};

export default function AreasPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Capacidades" title="Áreas de práctica" description="Experiencia multidisciplinaria para identificar el problema completo, no solo su categoría jurídica más evidente." />
      <section className="section-pad">
        <div className="container cards-grid">
          {practiceAreas.map((area, index) => (
            <article className="practice-card" key={area.slug}>
              <p>{String(index + 1).padStart(2, '0')} · {area.eyebrow}</p>
              <h2>{area.name}</h2>
              <p>{area.summary}</p>
              <Link className="arrow-link dark" href={`/areas/${area.slug}`}>Ver práctica <span>→</span></Link>
            </article>
          ))}
          <article className="practice-card contact-card"><p>¿No identificas el área?</p><h2>Cuéntanos la situación.</h2><p>La firma puede revisar el contexto inicial y orientarte hacia la práctica adecuada.</p><Link className="button button-accent" href="/contacto?area=otro">Consultar</Link></article>
        </div>
      </section>
    </main>
  );
}
