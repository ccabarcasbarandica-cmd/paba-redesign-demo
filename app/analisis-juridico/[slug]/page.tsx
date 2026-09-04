import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLegalAnalysis, legalAnalyses } from '@/lib/content';

export function generateStaticParams() { return legalAnalyses.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getLegalAnalysis(slug);
  if (!item) return {};
  return { title: item.seoTitle, description: item.seoDescription, alternates: { canonical: `/analisis-juridico/${item.slug}` }, openGraph: { type: 'article', title: item.title, description: item.summary, publishedTime: item.date, authors: [item.author], images: [{ url: item.cover, alt: item.coverAlt }] }, twitter: { card: 'summary_large_image', title: item.title, description: item.summary, images: [item.cover] } };
}

export default async function LegalAnalysisDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getLegalAnalysis(slug);
  if (!item) notFound();
  const related = legalAnalyses.filter((entry) => item.relatedSlugs.includes(entry.slug));
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: item.title, description: item.summary, datePublished: item.date, author: { '@type': 'Person', name: item.author, jobTitle: item.authorRole }, publisher: { '@type': 'LegalService', name: 'Paba & Asociados Abogados Consultores S.A.S.' }, image: `https://pabayasociados.com.co${item.cover}`, mainEntityOfPage: `https://pabayasociados.com.co/analisis-juridico/${item.slug}` };
  return <main id="contenido"><article className="article-page"><header className="article-header container"><Link className="back-link" href="/analisis-juridico">← Análisis Jurídico</Link><p className="eyebrow">{item.area}</p><h1>{item.title}</h1><p className="article-summary">{item.summary}</p><p className="article-meta">Por {item.author} · {item.authorRole} · <time dateTime={item.date}>{item.displayDate}</time> · {item.readingTime}</p></header><figure className="article-cover container"><Image src={item.cover} alt={item.coverAlt} width={1280} height={800} priority /></figure><div className="article-layout container"><aside><span>Área</span><p>{item.area}</p></aside><div className="article-body">{item.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="article-disclaimer"><strong>Información general</strong><p>Este contenido no sustituye una valoración jurídica del asunto concreto.</p></div></div></div></article>{related.length > 0 && <section className="related-section section-pad"><div className="container"><p className="section-eyebrow">Análisis relacionados</p><div className="related-grid">{related.map((entry) => <Link key={entry.slug} href={`/analisis-juridico/${entry.slug}`}><span>{entry.area}</span><h3>{entry.title}</h3><small>Leer →</small></Link>)}</div></div></section>}<section className="final-cta section-pad"><div className="container final-cta-inner"><h2>{item.cta}</h2><Link className="button button-accent" href="/contacto">Solicitar valoración jurídica</Link></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main>;
}
