import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Abogados',
  description: 'Conoce el enfoque de trabajo del equipo jurídico de Paba & Asociados.',
  alternates: { canonical: '/abogados' },
};

export default function LawyersPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Equipo" title="Experiencia articulada alrededor de cada asunto." description="La arquitectura está preparada para perfiles individuales; solo se publicarán nombres, estudios, cargos y fotografías después de validarlos con la firma." />
      <section className="section-pad">
        <div className="container team-principles">
          <article><span>01</span><h2>Asignación por experiencia</h2><p>Cada consulta se relaciona con el frente jurídico pertinente y, cuando es necesario, se aborda de forma interdisciplinaria.</p></article>
          <article><span>02</span><h2>Comunicación directa</h2><p>El cliente conoce el alcance, los siguientes pasos y la evolución de la estrategia acordada.</p></article>
          <article><span>03</span><h2>Información verificada</h2><p>Esta demo omite perfiles que aparecían como contenido de plantilla en el sitio previo para no atribuir identidades o credenciales sin validación.</p></article>
        </div>
      </section>
      <section className="verification-band"><div className="container"><p>Perfiles profesionales</p><h2>Listos para publicar cuando la firma entregue fotografías, biografías, estudios y enlaces confirmados.</h2><Link className="arrow-link" href="/contacto">Contactar a la firma <span>→</span></Link></div></section>
    </main>
  );
}
