import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProfessional, professionals } from '@/lib/content';

export function generateStaticParams() { return professionals.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfessional(slug);
  if (!profile) return {};
  return { title: profile.name, description: `${profile.role} en Paba & Asociados.`, alternates: { canonical: `/abogados/${profile.slug}` } };
}

export default async function ProfessionalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getProfessional(slug);
  if (!profile) notFound();
  return <main id="contenido" className="profile-page"><div className="container"><Image src={profile.photo} alt={profile.name} width={720} height={900} /><p className="eyebrow">{profile.role}</p><h1>{profile.name}</h1>{profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></main>;
}
