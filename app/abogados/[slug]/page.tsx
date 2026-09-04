import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { editorials, getProfessional, professionals, publicActuations } from '@/lib/content';

export function generateStaticParams() { return professionals.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfessional(slug);
  if (!profile) return {};
  const description = `${profile.role} de Paba & Asociados. Práctica en ${profile.areas.join(', ')}.`;
  return { title: profile.name, description, alternates: { canonical: `/abogados/${profile.slug}` }, openGraph: { type: 'profile', title: `${profile.name} | Paba & Asociados`, description, images: profile.photo ? [{ url: profile.photo, alt: profile.name }] : [] }, twitter: { card: profile.photo ? 'summary_large_image' : 'summary', title: `${profile.name} | Paba & Asociados`, description, images: profile.photo ? [profile.photo] : [] } };
}

export default async function ProfessionalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getProfessional(slug);
  if (!profile) notFound();
  const relatedActuations = publicActuations.filter((item) => profile.relatedActuationSlugs.includes(item.slug));
  const publications = editorials.filter((item) => profile.publicationSlugs.includes(item.slug));
  const schema = { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: profile.role, worksFor: { '@type': 'LegalService', name: 'Paba & Asociados Abogados Consultores S.A.S.' }, knowsAbout: profile.areas, url: `https://pabayasociados.com.co/abogados/${profile.slug}` };
  return (
    <main id="contenido">
      <section className="profile-hero"><div className="container profile-hero-grid"><div>{profile.photo ? <Image src={profile.photo} alt={`Fotografía profesional de ${profile.name}`} width={720} height={900} priority /> : <div className="neutral-portrait tall" role="img" aria-label={`Espacio reservado para fotografía profesional de ${profile.name}`}><span>JP</span><small>Fotografía profesional pendiente</small></div>}</div><div><Link className="back-link" href="/abogados">← Equipo</Link><p className="eyebrow">{profile.role}</p><h1>{profile.name}</h1><div className="tag-list light">{profile.areas.map((area) => <span key={area}>{area}</span>)}</div></div></div></section>
      <section className="section-pad"><div className="container profile-content-grid"><aside><p className="section-index">Perfil profesional</p></aside><div className="profile-copy">{profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>
      <section className="profile-details section-pad"><div className="container detail-columns"><article><p className="section-eyebrow">Áreas</p><ul>{profile.areas.map((area) => <li key={area}>{area}</li>)}</ul></article><article><p className="section-eyebrow">Actividad académica</p>{profile.academicActivity.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>{profile.education.length > 0 && <article><p className="section-eyebrow">Formación</p><ul>{profile.education.map((item) => <li key={item}>{item}</li>)}</ul></article>}{profile.experience.length > 0 && <article><p className="section-eyebrow">Experiencia</p><ul>{profile.experience.map((item) => <li key={item}>{item}</li>)}</ul></article>}{publications.length > 0 && <article><p className="section-eyebrow">Publicaciones</p><ul>{publications.map((item) => <li key={item.slug}><Link href={`/editorial/${item.slug}`}>{item.title}</Link></li>)}</ul></article>}</div></section>
      {relatedActuations.length > 0 && <section className="related-section section-pad"><div className="container"><div className="section-heading"><p className="section-eyebrow">Actuaciones relacionadas</p><h2>Experiencia de conocimiento público</h2></div><div className="related-grid">{relatedActuations.map((item) => <Link key={item.slug} href={`/experiencia-y-actuaciones/${item.slug}`}><span>{item.area}</span><h3>{item.title}</h3><small>Ver actuación →</small></Link>)}</div></div></section>}
      <section className="final-cta section-pad"><div className="container final-cta-inner"><h2>Solicite una valoración jurídica de su asunto.</h2><Link className="button button-accent" href="/contacto">Solicitar valoración jurídica</Link></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
