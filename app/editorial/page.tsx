import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { editorials } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Editorial Paba & Asociados',
  description: 'Editorial mensual de opinión y análisis institucional de Paba & Asociados Abogados Consultores.',
  alternates: { canonical: '/editorial' },
  openGraph: { title: 'Editorial Paba & Asociados', description: 'Editorial mensual de opinión y análisis institucional.', images: [] },
  twitter: { card: 'summary', title: 'Editorial Paba & Asociados', description: 'Editorial mensual de opinión y análisis institucional.', images: [] },
};

export default function EditorialPage() {
  const [featured, ...rest] = editorials;
  return (
    <main id="contenido">
      <PageHero eyebrow="Pieza institucional mensual" title="Editorial Paba & Asociados" description="Opinión y análisis institucional sobre asuntos jurídicos relevantes, en una publicación diferenciada de la biblioteca permanente de Análisis Jurídico." />
      <section className="section-pad"><div className="container editorial-lead"><Link href={`/editorial/${featured.slug}`} className="editorial-lead-image"><Image src={featured.image} alt={featured.imageAlt} width={1280} height={800} priority sizes="(max-width: 900px) 100vw, 58vw" /></Link><article><p className="section-eyebrow">Edición destacada · {featured.category}</p><h2><Link href={`/editorial/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.summary}</p><p className="byline">Por {featured.author} · <time dateTime={featured.date}>{featured.displayDate}</time></p><Link className="button button-dark" href={`/editorial/${featured.slug}`}>Leer editorial</Link></article></div></section>
      <section className="section-pad editorial-archive"><div className="container"><p className="section-index">Archivo editorial</p><div className="archive-grid">{rest.map((item) => <article key={item.slug}><Link className="editorial-image" href={`/editorial/${item.slug}`}><Image src={item.image} alt={item.imageAlt} width={720} height={450} sizes="(max-width: 720px) 100vw, 50vw" /></Link><p>{item.category}</p><h2><Link href={`/editorial/${item.slug}`}>{item.title}</Link></h2><p>{item.summary}</p><Link className="arrow-link dark" href={`/editorial/${item.slug}`}>Leer editorial <span>→</span></Link></article>)}</div></div></section>
      <section className="publishing-note"><div className="container"><span>Publicación mensual</span><p>La estructura admite nuevas ediciones con portada, autor, cargo, categoría, fecha, contenido, SEO y lecturas relacionadas.</p></div></section>
      <section className="analysis-distinction"><div className="container"><strong>Biblioteca jurídica permanente</strong><p>Para consultar artículos, jurisprudencia, reformas y actualidad, visite <Link href="/analisis-juridico">Análisis Jurídico</Link>.</p></div></section>
    </main>
  );
}
