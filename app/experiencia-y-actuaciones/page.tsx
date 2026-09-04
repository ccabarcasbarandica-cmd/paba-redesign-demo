import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { confidentialityNotice, publicActuations } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Experiencia y actuaciones de interés',
  description: 'Actuaciones profesionales de Paba & Asociados documentadas exclusivamente mediante información de conocimiento público.',
  alternates: { canonical: '/experiencia-y-actuaciones' },
  openGraph: { title: 'Experiencia y actuaciones de interés | Paba & Asociados', description: 'Experiencia profesional documentada mediante fuentes públicas.', images: [] },
  twitter: { card: 'summary', title: 'Experiencia y actuaciones de interés | Paba & Asociados', description: 'Experiencia profesional documentada mediante fuentes públicas.', images: [] },
};

export default function PublicActuationsPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Experiencia profesional" title="Experiencia y actuaciones de interés" description="A lo largo de nuestra trayectoria profesional hemos participado en asuntos que, por su naturaleza o relevancia, han sido objeto de seguimiento público y cobertura periodística." />
      <section className="notice-band"><div className="container"><strong>Confidencialidad y reserva</strong><p>{confidentialityNotice}</p></div></section>
      <section className="section-pad"><div className="container actuations-list">{publicActuations.map((item, index) => <article key={item.slug}><div><span>{String(index + 1).padStart(2, '0')}</span><p>{item.area}</p></div><div><h2>{item.title}</h2><p>{item.summary}</p><dl><div><dt>Intervención profesional</dt><dd>{item.intervention}</dd></div><div><dt>Fecha</dt><dd>{item.date}</dd></div><div><dt>Medios</dt><dd>{item.sources.map((source) => source.outlet).join(' · ')}</dd></div></dl><Link className="button button-dark" href={`/experiencia-y-actuaciones/${item.slug}`}>Ver publicaciones</Link></div></article>)}</div></section>
      <section className="publishing-note"><div className="container"><span>Archivo ampliable</span><p>La arquitectura permite incorporar nuevas actuaciones con intervención profesional, medio, enlace, fecha y área relacionada.</p></div></section>
    </main>
  );
}
