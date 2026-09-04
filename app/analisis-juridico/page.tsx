import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { legalAnalyses, legalAnalysisCategories } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Análisis Jurídico',
  description: 'Derecho, jurisprudencia y actualidad: análisis especializado de decisiones judiciales, reformas legislativas y problemas jurídicos relevantes.',
  alternates: { canonical: '/analisis-juridico' },
  openGraph: { title: 'Análisis Jurídico | Paba & Asociados', description: 'Derecho, jurisprudencia y actualidad.', images: [] },
  twitter: { card: 'summary', title: 'Análisis Jurídico | Paba & Asociados', description: 'Derecho, jurisprudencia y actualidad.', images: [] },
};

export default function LegalAnalysisPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Derecho, jurisprudencia y actualidad" title="Análisis Jurídico" description="En este espacio nuestros profesionales analizan decisiones judiciales, reformas legislativas y problemas jurídicos relevantes para el ejercicio profesional y la sociedad colombiana." />
      <section className="section-pad"><div className="container split-editorial"><p className="section-index">01 — Propósito</p><div className="rich-intro"><p className="display-copy">Las publicaciones buscan aportar análisis especializado desde la experiencia académica y litigiosa de la firma.</p></div></div></section>
      <section className="analysis-categories section-pad"><div className="container"><p className="section-eyebrow">02 — Categorías</p><div className="category-grid">{legalAnalysisCategories.map((category, index) => <article key={category}><span>{String(index + 1).padStart(2, '0')}</span><h2>{category}</h2></article>)}</div></div></section>
      <section className="section-pad"><div className="container"><div className="section-heading"><p className="section-eyebrow">03 — Publicaciones</p><h2>Biblioteca jurídica</h2></div>{legalAnalyses.length > 0 ? <div className="archive-grid">{legalAnalyses.map((item) => <article key={item.slug}><Link className="editorial-image" href={`/analisis-juridico/${item.slug}`}><Image src={item.cover} alt={item.coverAlt} width={720} height={450} /></Link><p>{item.area} · {item.readingTime}</p><h2><Link href={`/analisis-juridico/${item.slug}`}>{item.title}</Link></h2><p>{item.summary}</p><Link className="arrow-link dark" href={`/analisis-juridico/${item.slug}`}>Leer análisis <span>→</span></Link></article>)}</div> : <div className="empty-library"><span>Archivo en preparación</span><h3>Las primeras publicaciones se incorporarán cuando su contenido y autoría sean validados por la firma.</h3><p>La biblioteca está preparada para registrar título, autor, cargo, fecha, área, tiempo de lectura, portada, contenido, SEO, relacionados y llamado a la acción.</p></div>}</div></section>
      <section className="analysis-distinction"><div className="container"><strong>Editorial y Análisis Jurídico cumplen funciones diferentes.</strong><p>La <Link href="/editorial">Editorial Paba & Asociados</Link> es una pieza institucional mensual de opinión y análisis. Esta sección funciona como biblioteca permanente de artículos, jurisprudencia, reformas y actualidad jurídica.</p></div></section>
    </main>
  );
}
