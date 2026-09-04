import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { workProcess } from '@/lib/content';

export const metadata: Metadata = {
  title: 'La firma',
  description: 'Paba & Asociados Abogados Consultores: firma colombiana dedicada al litigio estratégico, la representación judicial y la asesoría jurídica especializada.',
  alternates: { canonical: '/firma' },
  openGraph: { title: 'La firma | Paba & Asociados', description: 'Litigio estratégico, representación judicial y asesoría jurídica especializada.', images: [] },
  twitter: { card: 'summary', title: 'La firma | Paba & Asociados', description: 'Litigio estratégico, representación judicial y asesoría jurídica especializada.', images: [] },
};

export default function FirmPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Paba & Asociados Abogados Consultores" title="Litigio estratégico, independencia profesional y rigor jurídico." description="Somos una firma colombiana dedicada al litigio estratégico, la representación judicial y la asesoría jurídica especializada." />
      <section className="section-pad"><div className="container split-editorial"><p className="section-index">01 — Quiénes somos</p><div className="rich-intro"><p className="display-copy">Los asuntos jurídicos complejos requieren conocimiento técnico, independencia profesional, estrategia y una comprensión integral de los hechos y de la prueba.</p><p>Representamos personas, organizaciones y empresas ante autoridades judiciales y administrativas, desarrollando estrategias orientadas a la protección efectiva de sus derechos e intereses.</p><p>Nuestra práctica se caracteriza por combinar experiencia litigiosa, investigación jurídica, análisis probatorio y estudio permanente de la jurisprudencia.</p></div></div></section>
      <section className="purpose-section section-pad"><div className="container purpose-grid"><article><span>02 — Misión</span><h2>Nuestra misión</h2><p>Brindar representación y asesoría jurídica especializada mediante soluciones construidas desde el rigor técnico, la estrategia, la ética profesional y la defensa de las garantías constitucionales.</p></article><article><span>03 — Visión</span><h2>Nuestra visión</h2><p>Consolidarnos como una firma reconocida por su capacidad para intervenir en litigios y controversias jurídicas complejas, particularmente en las áreas penal, pública, laboral, corporativa y de justicia transicional.</p></article></div></section>
      <section className="process-section section-pad"><div className="container"><SectionHeading eyebrow="04 — Metodología" title="Nuestra forma de trabajo" intro="Un método orientado a comprender los hechos, definir la estrategia y ejecutar las actuaciones necesarias." /><ol className="process-grid five">{workProcess.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
      <section className="approach-section section-pad"><div className="container approach-grid"><p className="section-index">05 — Enfoque</p><div><h2>Experiencia jurídica al servicio de cada asunto</h2><p>Abordamos cada representación desde el análisis individual de sus hechos, pruebas, riesgos, alternativas jurídicas y escenarios procesales.</p><p>La estrategia se construye con preparación jurídica, comunicación clara, confidencialidad y respeto por las garantías constitucionales y procesales.</p></div></div></section>
      <section className="final-cta section-pad"><div className="container final-cta-inner"><h2>Cada asunto requiere comprender los hechos antes de definir una estrategia.</h2><Link className="button button-accent" href="/contacto">Solicitar valoración jurídica</Link></div></section>
    </main>
  );
}
