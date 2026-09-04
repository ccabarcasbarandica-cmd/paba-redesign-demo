import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { confidentialityNotice, getProfessional, getPublicActuation, publicActuations } from '@/lib/content';

export function generateStaticParams() { return publicActuations.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getPublicActuation(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary, alternates: { canonical: `/experiencia-y-actuaciones/${item.slug}` }, openGraph: { type: 'article', title: `${item.title} | Paba & Asociados`, description: item.summary, images: [] }, twitter: { card: 'summary', title: `${item.title} | Paba & Asociados`, description: item.summary, images: [] } };
}

export default async function PublicActuationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getPublicActuation(slug);
  if (!item) notFound();
  const relatedProfessionals = item.professionalSlugs.map(getProfessional).filter((profile) => profile !== undefined);
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: item.title, description: item.summary, about: item.area, publisher: { '@type': 'LegalService', name: 'Paba & Asociados Abogados Consultores S.A.S.' }, mainEntityOfPage: `https://pabayasociados.com.co/experiencia-y-actuaciones/${item.slug}` };
  return (
    <main id="contenido">
      <section className="case-detail-hero"><div className="container"><Link className="back-link" href="/experiencia-y-actuaciones">← Experiencia y actuaciones</Link><p className="eyebrow">{item.area} · Información pública</p><h1>{item.title}</h1><p>{item.summary}</p><small>{item.date}</small></div></section>
      <section className="case-story section-pad"><div className="container case-story-grid"><aside><p>Confidencialidad</p><span>{confidentialityNotice}</span></aside><div><section><span>01</span><h2>Intervención profesional</h2><p>{item.intervention}</p></section><section><span>02</span><h2>Contexto público</h2><p>{item.context}</p></section>{relatedProfessionals.length > 0 && <section><span>03</span><h2>Profesional relacionado</h2>{relatedProfessionals.map((profile) => <p key={profile.slug}><Link className="inline-link" href={`/abogados/${profile.slug}`}>{profile.name} · {profile.role}</Link></p>)}</section>}</div></div></section>
      <section className="sources-section section-pad"><div className="container"><p className="section-eyebrow">Publicaciones relacionadas</p><h2>Fuentes externas</h2><div className="source-links">{item.sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>{source.outlet}</span><strong>{source.title}</strong><small>{source.date ? `${source.date} · ` : ''}Ver publicación ↗</small></a>)}</div></div></section>
      <section className="final-cta section-pad"><div className="container final-cta-inner"><h2>Solicite una valoración jurídica de su asunto.</h2><Link className="button button-accent" href="/contacto">Solicitar valoración jurídica</Link></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
