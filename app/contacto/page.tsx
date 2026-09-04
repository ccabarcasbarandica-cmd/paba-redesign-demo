import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta a Paba & Asociados en Bogotá para una valoración inicial de tu situación jurídica.',
  alternates: { canonical: '/contacto' },
};

export default function ContactPage() {
  return (
    <main id="contenido">
      <PageHero eyebrow="Contacto" title="Una buena estrategia empieza por escuchar." description="Comparte la información inicial necesaria o comunícate directamente con la firma. Evita enviar documentos o datos sensibles en el primer mensaje." />
      <section className="section-pad">
        <div className="container contact-page-grid">
          <aside className="contact-details">
            <div><span>Teléfono y WhatsApp</span><a href="tel:+573185481492">+57 318 548 1492</a></div>
            <div><span>Correo</span><a href="mailto:info@pabayasociados.com.co">info@pabayasociados.com.co</a></div>
            <div><span>Dirección</span><a href="https://maps.app.goo.gl/humVtybdrmSooRXWA" target="_blank" rel="noreferrer">Calle 54 # 10-81, oficina 902<br />Edificio San Jorge · Bogotá D.C.</a></div>
            <div><span>Horario</span><p>Lunes a viernes<br />8:00 a. m.–5:00 p. m.</p></div>
          </aside>
          <div><h2>Cuéntanos tu caso</h2><p className="form-intro">El formulario prepara un correo en tu dispositivo. Nada se almacena en esta demo.</p><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}
