import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { editorials, getCase, publicCases } from '@/lib/content';

export function generateStaticParams() { return publicCases.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/casos/${item.slug}` },
    openGraph: { type: 'article', title: item.title, description: item.summary, images: [{ url: item.image, alt: item.imageAlt }] },
    twitter: { card: 'summary_large_image', title: item.title, description: item.summary, images: [item.image] },
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();
  const relatedEditorials = editorials.filter((entry) => item.relatedEditorialSlugs.includes(entry.slug));
  return (
    <main id="contenido">
      <section className="case-detail-hero"><div className="container"><Link className="back-link" href="/casos">← Casos</Link><p className="eyebrow">{item.area} · Ficha documental</p><h1>{item.title}</h1><p>{item.summary}</p><small>{item.date}</small></div></section>
      <figure className="case-cover container"><Image src={item.image} alt={item.imageAlt} width={1280} height={720} priority sizes="(max-width: 720px) 100vw, 1360px" /></figure>
      <section className="case-story section-pad"><div className="container case-story-grid">
        <aside><p>Publicación anonimizada</p><span>Construida únicamente con titulares y fuentes abiertas enlazadas por la firma.</span></aside>
        <div>
          <section><span>01</span><h2>Contexto</h2><p>{item.context}</p></section>
          <section><span>02</span><h2>Reto</h2><p>{item.challenge}</p></section>
          <section><span>03</span><h2>Criterio editorial</h2><p>{item.strategy}</p></section>
          <section><span>04</span><h2>Información pública disponible</h2><p>{item.result}</p></section>
        </div>
      </div></section>
      <section className="sources-section section-pad"><div className="container"><p className="section-eyebrow">Cobertura relacionada</p><h2>Fuentes externas</h2><div className="source-links">{item.sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>{source.outlet}</span><strong>{source.title}</strong><small>Abrir fuente ↗</small></a>)}</div></div></section>
      <section className="related-section section-pad"><div className="container"><p className="section-eyebrow">Contenido relacionado</p><div className="related-grid">{relatedEditorials.map((entry) => <Link key={entry.slug} href={`/editorial/${entry.slug}`}><span>{entry.category}</span><h3>{entry.title}</h3><small>Leer editorial →</small></Link>)}<div className="related-empty"><span>Equipo relacionado</span><h3>Identidades reservadas</h3><small>Se publicarán perfiles solo con validación expresa.</small></div></div></div></section>
      <section className="final-cta section-pad"><div className="container final-cta-inner"><h2>¿Tienes una situación que requiere defensa estratégica?</h2><Link className="button button-accent" href="/contacto">Hablar con un abogado</Link></div></section>
    </main>
  );
}
