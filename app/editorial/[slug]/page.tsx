import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, permanentRedirect } from 'next/navigation';
import { editorials, getEditorial, legacyEditorialRedirects } from '@/lib/content';

export function generateStaticParams() { return [...editorials.map((item) => ({ slug: item.slug })), ...Object.keys(legacyEditorialRedirects).map((slug) => ({ slug }))]; }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const target = legacyEditorialRedirects[slug];
  if (target) return { robots: { index: false, follow: true }, alternates: { canonical: `/editorial/${target}` } };
  const item = getEditorial(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary, alternates: { canonical: `/editorial/${item.slug}` }, openGraph: { type: 'article', title: item.title, description: item.summary, publishedTime: item.date, authors: [item.author], images: [{ url: item.image, alt: item.imageAlt }] }, twitter: { card: 'summary_large_image', title: item.title, description: item.summary, images: [item.image] } };
}

export default async function EditorialDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const target = legacyEditorialRedirects[slug];
  if (target) permanentRedirect(`/editorial/${target}`);
  const item = getEditorial(slug);
  if (!item) notFound();
  const related = editorials.filter((entry) => entry.slug !== item.slug).slice(0, 2);
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: item.title, description: item.summary, datePublished: item.date, author: { '@type': 'Organization', name: item.author }, publisher: { '@type': 'LegalService', name: 'Paba & Asociados Abogados Consultores S.A.S.' }, image: `https://pabayasociados.com.co${item.image}`, mainEntityOfPage: `https://pabayasociados.com.co/editorial/${item.slug}` };
  return (
    <main id="contenido">
      <article className="article-page"><header className="article-header container"><Link className="back-link" href="/editorial">← Editorial</Link><p className="eyebrow">{item.category}</p><h1>{item.title}</h1><p className="article-summary">{item.summary}</p><p className="article-meta">Por {item.author} · {item.authorRole} · <time dateTime={item.date}>{item.displayDate}</time> · {item.readingTime}</p></header><figure className="article-cover container"><Image src={item.image} alt={item.imageAlt} width={1280} height={800} priority sizes="(max-width: 720px) 100vw, 1360px" /></figure><div className="article-layout container"><aside><span>Compartir</span><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://pabayasociados.com.co/editorial/${item.slug}`)}`} target="_blank" rel="noreferrer">LinkedIn ↗</a></aside><div className="article-body">{item.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{item.quote && <blockquote>{item.quote}</blockquote>}<div className="article-disclaimer"><strong>Nota editorial</strong><p>Este contenido es informativo y no sustituye una valoración jurídica del asunto concreto.</p></div></div></div></article>
      <section className="related-section section-pad"><div className="container"><p className="section-eyebrow">Seguir leyendo</p><div className="related-grid">{related.map((entry) => <Link key={entry.slug} href={`/editorial/${entry.slug}`}><span>{entry.category}</span><h3>{entry.title}</h3><small>Leer editorial →</small></Link>)}</div></div></section>
      <section className="final-cta section-pad"><div className="container final-cta-inner"><h2>¿Requiere analizar su situación jurídica?</h2><Link className="button button-accent" href="/contacto">Solicitar valoración jurídica</Link></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
