import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Solicite una valoración jurídica a Paba & Asociados Abogados Consultores en Bogotá D. C.',
  alternates: { canonical: '/contacto' },
  openGraph: { title: 'Contacto | Paba & Asociados', description: 'Analicemos su situación jurídica.', images: [] },
  twitter: { card: 'summary', title: 'Contacto | Paba & Asociados', description: 'Analicemos su situación jurídica.', images: [] },
};

const whatsappMessage = encodeURIComponent('Hola, visité el sitio de Paba & Asociados y deseo solicitar una valoración jurídica inicial.');

export default function ContactPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Contacto" title="Analicemos su situación jurídica" description="Cada asunto requiere comprender los hechos antes de definir una estrategia." />
      <section className="section-pad"><div className="container contact-page-grid"><aside className="contact-details"><div><span>Firma</span><p>PABA & ASOCIADOS ABOGADOS CONSULTORES S.A.S.</p></div><div><span>Teléfono</span><a href="tel:+573185481492">+57 318 548 1492</a></div><div><span>WhatsApp</span><a href={`https://wa.me/573185481492?text=${whatsappMessage}`} target="_blank" rel="noreferrer">Contactar por WhatsApp ↗</a></div><div><span>Correo</span><a href="mailto:info@pabayasociados.com.co">info@pabayasociados.com.co</a></div><div><span>Dirección</span><a href="https://maps.google.com/?q=Calle+54+10-81+Oficina+902+Bogota" target="_blank" rel="noreferrer">Calle 54 # 10-81, Oficina 902<br />Bogotá D. C. — Colombia</a></div></aside><div><h2>Solicitar valoración jurídica</h2><p className="form-intro">Comuníquese con nuestro equipo mediante este formulario o por los canales directos. Evite enviar documentos o información sensible en el primer contacto.</p><ContactForm /></div></div></section>
    </main>
  );
}
