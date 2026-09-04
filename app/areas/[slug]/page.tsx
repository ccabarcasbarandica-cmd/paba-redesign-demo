import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { getArea, legacyAreaRedirects, practiceAreas, workProcess } from '@/lib/content';

export function generateStaticParams() {
  return [...practiceAreas.map((area) => ({ slug: area.slug })), ...Object.keys(legacyAreaRedirects).map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const target = legacyAreaRedirects[slug];
  if (target) return { robots: { index: false, follow: true }, alternates: { canonical: `/areas/${target}` } };
  const area = getArea(slug);
  if (!area) return {};
  const description = `${area.summary} Paba & Asociados, Bogotá D. C.`;
  return {
    title: area.name,
    description,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: { title: `${area.name} | Paba & Asociados`, description, type: 'website', images: [] },
    twitter: { card: 'summary', title: `${area.name} | Paba & Asociados`, description, images: [] },
  };
}

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const target = legacyAreaRedirects[slug];
  if (target) permanentRedirect(`/areas/${target}`);
  const area = getArea(slug);
  if (!area) notFound();
  const related = practiceAreas.filter((item) => item.slug !== area.slug).slice(0, 3);
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'Service', name: area.name, description: area.summary,
    provider: { '@type': 'LegalService', name: 'Paba & Asociados Abogados Consultores S.A.S.' },
    areaServed: { '@type': 'Country', name: 'Colombia' }, url: `https://pabayasociados.com.co/areas/${area.slug}`,
  };

  return (
    <main id="contenido">
      <section className="area-hero"><div className="container area-hero-grid">
        <div><Link className="back-link" href="/areas">← Todas las áreas</Link><p className="eyebrow">{area.eyebrow}</p><h1>{area.name}</h1><p>{area.summary}</p><Link className="button button-accent" href="#valoracion">Solicitar valoración jurídica</Link></div>
        <div className="area-monogram" aria-hidden="true"><span>{area.shortName.slice(0, 2).toUpperCase()}</span><small>Práctica jurídica</small></div>
      </div></section>

      <section className="section-pad"><div className="container split-editorial"><p className="section-index">01 — Enfoque</p><div className="rich-intro"><p className="display-copy">{area.summary}</p>{area.slug === 'justicia-transicional-y-jep' && <p>Nuestro trabajo combina conocimiento jurídico, experiencia en derechos humanos y comprensión del modelo colombiano de justicia transicional.</p>}{area.slug === 'solucion-estrategica-de-controversias' && <p>No todos los conflictos requieren un proceso judicial.</p>}<p>La valoración de cada asunto depende de sus hechos, documentos, etapa y términos. Esta página ofrece información general y no reemplaza una valoración jurídica individual.</p></div></div></section>

      <section className="dark-section section-pad" aria-labelledby="services-title"><div className="container services-layout"><div><p className="section-eyebrow">02 — Servicios</p><h2 id="services-title">Nuestra práctica comprende</h2></div><ul className="service-list">{area.services.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ul></div></section>

      <section className="section-pad"><div className="container"><div className="section-heading"><p className="section-eyebrow">03 — Metodología</p><h2>Nuestra forma de trabajo</h2></div><ol className="process-grid five">{workProcess.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>

      <section className="related-section section-pad"><div className="container"><div className="section-heading"><p className="section-eyebrow">04 — Práctica integral</p><h2>Áreas relacionadas</h2></div><div className="related-grid">{related.map((item) => <Link key={item.slug} href={`/areas/${item.slug}`}><span>{item.eyebrow}</span><h3>{item.name}</h3><small>Conocer el área →</small></Link>)}</div></div></section>

      <section className="contact-section section-pad" id="valoracion"><div className="container contact-grid"><div><p className="section-eyebrow">05 — Contacto</p><h2>Analicemos su situación jurídica.</h2><p>Cada asunto requiere comprender los hechos antes de definir una estrategia.</p></div><ContactForm defaultArea={area.name} /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
