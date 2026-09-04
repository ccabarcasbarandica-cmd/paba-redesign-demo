import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { getArea, practiceAreas } from '@/lib/content';

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const description = `${area.summary} Consulta a Paba & Asociados en Bogotá.`;
  return {
    title: area.name,
    description,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: { title: `${area.name} | Paba & Asociados`, description, type: 'website' },
    twitter: { card: 'summary', title: area.name, description },
  };
}

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  const related = practiceAreas.filter((item) => item.slug !== area.slug).slice(0, 3);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: area.name, description: area.summary, provider: { '@type': 'LegalService', name: 'Paba & Asociados S.A.S.' }, areaServed: 'Colombia' },
      { '@type': 'FAQPage', mainEntity: area.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    ],
  };

  return (
    <main id="contenido">
      <section className="area-hero">
        <div className="container area-hero-grid">
          <div>
            <Link className="back-link" href="/areas">← Todas las áreas</Link>
            <p className="eyebrow">{area.eyebrow}</p>
            <h1>{area.name}</h1>
            <p>{area.summary}</p>
            <Link className="button button-accent" href="#consulta">Consultar esta práctica</Link>
          </div>
          <div className="area-monogram" aria-hidden="true"><span>{area.shortName.slice(0, 2).toUpperCase()}</span><small>Práctica jurídica</small></div>
        </div>
      </section>

      <section className="section-pad"><div className="container split-editorial"><p className="section-index">01 — Enfoque</p><div className="rich-intro"><p className="display-copy">{area.intro}</p><p>La valoración de cada asunto depende de sus hechos, documentos, etapa y términos. Esta página ofrece información general y no reemplaza una consulta jurídica.</p></div></div></section>

      <section className="dark-section section-pad"><div className="container two-column-lists">
        <div><p className="section-eyebrow">02 — Situaciones</p><h2>¿A quién acompaña esta práctica?</h2><ul>{area.audience.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><p className="section-eyebrow">03 — Servicios</p><h2>Cómo puede ayudar la firma</h2><ul>{area.services.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div></section>

      <section className="section-pad"><div className="container"><div className="section-heading"><p className="section-eyebrow">04 — Ruta de trabajo</p><h2>Del contexto a una estrategia ejecutable.</h2></div><ol className="process-grid three">{area.process.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>

      <section className="faq-section section-pad"><div className="container faq-grid"><div><p className="section-eyebrow">05 — Preguntas frecuentes</p><h2>Antes de iniciar</h2></div><div>{area.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className="related-section section-pad"><div className="container"><div className="section-heading"><p className="section-eyebrow">06 — Conexiones</p><h2>Prácticas relacionadas</h2></div><div className="related-grid">{related.map((item) => <Link key={item.slug} href={`/areas/${item.slug}`}><span>{item.eyebrow}</span><h3>{item.name}</h3><small>Explorar →</small></Link>)}</div></div></section>

      <section className="contact-section section-pad" id="consulta"><div className="container contact-grid"><div><p className="section-eyebrow">07 — Consulta</p><h2>Hablemos de tu situación.</h2><p>Comparte un contexto inicial. Evita adjuntar pruebas o información sensible antes de acordar un canal seguro con la firma.</p></div><ContactForm defaultArea={area.name} /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
