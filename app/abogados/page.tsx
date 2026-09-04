import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { professionals } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Equipo',
  description: 'Profesionales de Paba & Asociados Abogados Consultores y sus áreas de práctica.',
  alternates: { canonical: '/abogados' },
  openGraph: { title: 'Equipo | Paba & Asociados', description: 'Profesionales detrás de cada estrategia jurídica.', images: [] },
  twitter: { card: 'summary', title: 'Equipo | Paba & Asociados', description: 'Profesionales detrás de cada estrategia jurídica.', images: [] },
};

export default function LawyersPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Nuestro equipo" title="Profesionales detrás de cada estrategia" description="Los asuntos complejos requieren abogados capaces de combinar conocimiento jurídico, experiencia práctica y pensamiento estratégico." />
      <section className="section-pad"><div className="container team-intro"><p>Cada integrante de Paba & Asociados aporta conocimientos y experiencia complementarios para construir respuestas jurídicas integrales.</p></div></section>
      <section className="team-directory section-pad"><div className="container professional-grid">{professionals.map((profile) => <article key={profile.slug}><div className="neutral-portrait compact" role="img" aria-label={`Espacio reservado para fotografía profesional de ${profile.name}`}><span>JP</span><small>Fotografía profesional pendiente</small></div><p>{profile.role}</p><h2>{profile.name}</h2><p>{profile.biography[0]}</p><div className="tag-list">{profile.areas.map((area) => <span key={area}>{area}</span>)}</div><Link className="button button-dark" href={`/abogados/${profile.slug}`}>Ver perfil completo</Link></article>)}</div></section>
      <section className="verification-band"><div className="container"><p>Publicación responsable</p><h2>Los demás integrantes se incorporarán cuando la firma suministre y valide sus perfiles y fotografías profesionales.</h2></div></section>
    </main>
  );
}
