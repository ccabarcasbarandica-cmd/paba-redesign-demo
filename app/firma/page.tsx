import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'La firma',
  description: 'Conoce el enfoque estratégico, ético y cercano de Paba & Asociados, firma jurídica con sede en Bogotá.',
  alternates: { canonical: '/firma' },
};

export default function FirmPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="La firma" title="Estrategia jurídica con criterio, cercanía y discreción." description="Una firma con sede en Bogotá que acompaña a personas, empresas y organizaciones en asuntos complejos, dentro y fuera de los tribunales." />
      <section className="section-pad">
        <div className="container split-editorial">
          <div><p className="section-index">01 — Quiénes somos</p></div>
          <div className="rich-intro">
            <p className="display-copy">Cada caso merece una solución pensada, no una respuesta genérica.</p>
            <p>Paba & Asociados combina conocimiento jurídico multidisciplinario con atención directa. La firma publica experiencia en derecho penal, laboral, disciplinario, electoral, público, privado y justicia transicional ante la JEP.</p>
            <p>Su enfoque busca proteger derechos, comprender riesgos y construir alternativas concretas con responsabilidad, ética y respeto por la verdad.</p>
          </div>
        </div>
      </section>
      <section className="philosophy section-pad">
        <div className="container philosophy-grid">
          <div className="portrait-frame"><Image src="/firma.jpg" alt="Reunión profesional y saludo de trabajo" width={720} height={720} sizes="(max-width: 900px) 100vw, 45vw" /></div>
          <div>
            <SectionHeading eyebrow="02 — Filosofía" title="Más que representación: aliados para decidir." />
            <div className="value-list">
              <div><span>01</span><h3>Lectura integral</h3><p>Los problemas complejos se analizan conectando hechos, riesgos y distintas áreas del derecho.</p></div>
              <div><span>02</span><h3>Comunicación clara</h3><p>La estrategia debe poder explicarse, entenderse y revisarse durante el proceso.</p></div>
              <div><span>03</span><h3>Responsabilidad</h3><p>Discreción, preparación y respeto por la información de cada persona u organización.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="firm-facts section-pad">
        <div className="container">
          <SectionHeading eyebrow="03 — Alcance" title="Una práctica conectada" />
          <div className="fact-grid">
            <div><strong>10+</strong><p>Años de experiencia declarados en el sitio vigente.</p></div>
            <div><strong>07</strong><p>Frentes jurídicos organizados en una sola arquitectura de servicio.</p></div>
            <div><strong>CO</strong><p>Atención desde Bogotá para clientes en todo el país.</p></div>
          </div>
          <p className="source-note">Las cifras anteriores provienen de información publicada por la propia firma; no se presentan porcentajes de éxito ni resultados no verificables.</p>
        </div>
      </section>
      <section className="final-cta section-pad"><div className="container final-cta-inner"><h2>Cuéntanos qué necesitas resolver.</h2><Link className="button button-accent" href="/contacto">Iniciar una conversación</Link></div></section>
    </main>
  );
}
