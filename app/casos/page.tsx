import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { publicCases } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Casos de experiencia pública',
  description: 'Fichas documentales basadas únicamente en cobertura pública vinculada por Paba & Asociados.',
  alternates: { canonical: '/casos' },
};

export default function CasesPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Experiencia documentada" title="Casos públicos, contados con rigor." description="La firma protege la confidencialidad de sus clientes. Esta sección solo recoge información presente en fuentes periodísticas abiertas relacionadas por el sitio vigente." />
      <section className="section-pad"><div className="container cases-list">{publicCases.map((item, index) => <article key={item.slug}><div className="case-list-image"><Image src={item.image} alt={item.imageAlt} width={720} height={540} sizes="(max-width: 720px) 100vw, 42vw" /></div><div><p>{String(index + 1).padStart(2, '0')} · {item.area}</p><h2>{item.title}</h2><p>{item.summary}</p><Link className="arrow-link dark" href={`/casos/${item.slug}`}>Ver ficha documental <span>→</span></Link></div></article>)}</div></section>
      <section className="confidentiality section-pad"><div className="container"><p className="section-eyebrow">Privacidad por diseño</p><h2>La ausencia de detalles no es un vacío: es parte de la reserva profesional.</h2><p>La arquitectura permite publicar nuevos casos con anonimización, fuentes y revisión editorial, sin convertir información sensible en contenido promocional.</p></div></section>
    </main>
  );
}
