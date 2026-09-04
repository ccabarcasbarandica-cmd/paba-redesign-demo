import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import {
  confidentialityNotice,
  editorials,
  legalAnalysisCategories,
  practiceAreas,
  professionals,
  publicActuations,
  siteFaqs,
  whyPaba,
  workProcess,
} from '@/lib/content';

export default function Home() {
  const featuredEditorial = editorials[0];
  const featuredProfessional = professionals[0];
  const featuredActuation = publicActuations[0];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteFaqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  };

  return (
    <main id="contenido">
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">Paba & Asociados Abogados Consultores S.A.S.</p>
            <h1>Litigio estratégico y asesoría jurídica de alta complejidad</h1>
            <p className="hero-lede hero-subtitle">Experiencia, estrategia y rigor jurídico para la defensa de sus derechos e intereses.</p>
            <p className="hero-institutional">Brindamos representación judicial y asesoría jurídica especializada a personas, organizaciones y empresas. Nuestra práctica integra experiencia litigiosa, análisis jurídico riguroso y construcción estratégica de cada asunto.</p>
            <div className="hero-actions">
              <Link className="button button-accent" href="/contacto">Solicite una valoración jurídica</Link>
              <Link className="text-link" href="/areas">Conozca nuestras áreas de práctica <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <figure className="hero-visual">
            <Image src="/hero-office.jpg" alt="Espacio de trabajo para el análisis jurídico" width={618} height={842} priority sizes="(max-width: 720px) 100vw, 38vw" />
            <figcaption><span>01</span>Estrategia, análisis y representación</figcaption>
          </figure>
        </div>
        <div className="hero-footer container" aria-label="Enfoque de la firma">
          <p><span>Práctica</span> Litigio estratégico</p>
          <p><span>Sede</span> Bogotá D. C.</p>
          <p><span>Atención</span> Diferentes regiones de Colombia</p>
        </div>
      </section>

      <section className="why-section section-pad" aria-labelledby="why-title">
        <div className="container">
          <SectionHeading eyebrow="01 — La diferencia" title="¿Por qué Paba & Asociados?" intro="Los asuntos jurídicos complejos requieren algo más que conocimiento normativo. Exigen capacidad de análisis, experiencia procesal, estrategia probatoria y comprensión integral del conflicto." />
          <div className="pillar-grid">
            {whyPaba.map((pillar, index) => <article key={pillar.title} className={index === 0 ? 'pillar-featured' : ''}><span>{String(index + 1).padStart(2, '0')}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="areas-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="02 — Capacidades" title="Áreas de práctica" intro="Seis áreas articuladas para intervenir en litigios, relaciones con el Estado, asuntos laborales, justicia transicional, relaciones privadas y controversias." />
          <div className="area-list">
            {practiceAreas.map((area, index) => <Link className="area-row" href={`/areas/${area.slug}`} key={area.slug}><span className="area-number">{String(index + 1).padStart(2, '0')}</span><span><strong>{area.name}</strong><small>{area.summary}</small></span><span className="area-arrow" aria-hidden="true">↗</span></Link>)}
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="03 — Metodología" title="Nuestra forma de trabajo" intro="Estrategia jurídica construida para cada asunto." />
          <ol className="process-grid five">{workProcess.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </div>
      </section>

      <section className="experience-section section-pad">
        <div className="container experience-grid">
          <p className="section-index">04 — Experiencia</p>
          <div><h2>Experiencia que respalda nuestra estrategia</h2><p>La experiencia profesional de nuestros abogados comprende la participación en litigios y asuntos jurídicos de diversa complejidad ante autoridades judiciales y administrativas.</p><p>La firma y sus profesionales han intervenido en asuntos relacionados con Derecho Penal, Derechos Humanos, Derecho Público, Derecho Laboral y Justicia Transicional, algunos de los cuales han tenido relevancia pública y cobertura en medios nacionales.</p><p>Nuestro compromiso consiste en asumir cada representación con independencia profesional, confidencialidad, preparación jurídica y respeto por las garantías constitucionales y procesales.</p></div>
        </div>
      </section>

      <section className="case-feature section-pad">
        <div className="container case-feature-grid">
          <div className="case-mark"><span>Actuación pública</span><strong>01</strong></div>
          <div className="case-copy"><p className="section-eyebrow">05 — Información pública</p><h2>Experiencia y actuaciones de interés</h2><h3>{featuredActuation.title}</h3><p>{featuredActuation.summary}</p><p className="actuation-meta">{featuredActuation.area} · {featuredActuation.date}</p><Link className="arrow-link" href={`/experiencia-y-actuaciones/${featuredActuation.slug}`}>Ver actuación <span aria-hidden="true">→</span></Link></div>
          <div className="case-note"><p>Reserva profesional</p><span>{confidentialityNotice}</span></div>
        </div>
      </section>

      <section className="firm-section section-pad">
        <div className="container firm-home-grid">
          <div><p className="section-eyebrow">06 — La firma</p><h2>Paba & Asociados Abogados Consultores</h2></div>
          <div><p className="display-copy">Somos una firma colombiana dedicada al litigio estratégico, la representación judicial y la asesoría jurídica especializada.</p><p>Representamos personas, organizaciones y empresas ante autoridades judiciales y administrativas, desarrollando estrategias orientadas a la protección efectiva de sus derechos e intereses.</p><Link className="arrow-link dark" href="/firma">Conocer la firma <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="team-feature section-pad">
        <div className="container team-profile-grid">
          <div className="neutral-portrait" role="img" aria-label="Espacio reservado para fotografía profesional de Jeison Orlando Paba Reyes"><span>JP</span><small>Fotografía profesional pendiente</small></div>
          <div><p className="section-eyebrow">07 — Equipo</p><h2>Profesionales detrás de cada estrategia</h2><p className="team-lede">Los asuntos complejos requieren abogados capaces de combinar conocimiento jurídico, experiencia práctica y pensamiento estratégico.</p><article className="featured-professional"><p>{featuredProfessional.role}</p><h3>{featuredProfessional.name}</h3><p>{featuredProfessional.biography[0]}</p><div className="tag-list">{featuredProfessional.areas.map((area) => <span key={area}>{area}</span>)}</div><Link className="button button-dark" href={`/abogados/${featuredProfessional.slug}`}>Ver perfil completo</Link></article></div>
        </div>
      </section>

      <section className="editorial-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="08 — Editorial mensual" title="Editorial Paba & Asociados" intro="Pieza institucional de opinión y análisis, diferenciada de la biblioteca permanente de Análisis Jurídico." />
          <article className="editorial-feature"><Link href={`/editorial/${featuredEditorial.slug}`} className="editorial-image"><Image src={featuredEditorial.image} alt={featuredEditorial.imageAlt} width={900} height={560} sizes="(max-width: 900px) 100vw, 55vw" /></Link><div><p>{featuredEditorial.category} · <time dateTime={featuredEditorial.date}>{featuredEditorial.displayDate}</time></p><h3><Link href={`/editorial/${featuredEditorial.slug}`}>{featuredEditorial.title}</Link></h3><p>{featuredEditorial.summary}</p><Link className="arrow-link dark" href={`/editorial/${featuredEditorial.slug}`}>Leer editorial <span aria-hidden="true">→</span></Link></div></article>
        </div>
      </section>

      <section className="analysis-home section-pad">
        <div className="container analysis-home-grid">
          <div><p className="section-eyebrow">09 — Biblioteca permanente</p><h2>Análisis Jurídico</h2><p className="analysis-subtitle">Derecho, jurisprudencia y actualidad</p><p>En este espacio nuestros profesionales analizan decisiones judiciales, reformas legislativas y problemas jurídicos relevantes para el ejercicio profesional y la sociedad colombiana.</p><Link className="button button-accent" href="/analisis-juridico">Explorar Análisis Jurídico</Link></div>
          <div className="category-list">{legalAnalysisCategories.map((category, index) => <p key={category}><span>{String(index + 1).padStart(2, '0')}</span>{category}</p>)}</div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="container faq-grid"><div><p className="section-eyebrow">10 — Información inicial</p><h2>Preguntas frecuentes</h2></div><div>{siteFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="contact-section section-pad" id="contacto">
        <div className="container contact-grid">
          <div><p className="section-eyebrow">11 — Contacto</p><h2>Analicemos su situación jurídica</h2><p>Cada asunto requiere comprender los hechos antes de definir una estrategia.</p><p>Comuníquese con nuestro equipo para solicitar una valoración jurídica inicial.</p><div className="direct-contact"><a href="tel:+573185481492">+57 318 548 1492</a><a href="mailto:info@pabayasociados.com.co">info@pabayasociados.com.co</a><span>Calle 54 # 10-81, Oficina 902 · Bogotá D. C.</span></div><a className="button button-outline" href="https://wa.me/573185481492?text=Hola%2C%20visit%C3%A9%20el%20sitio%20de%20Paba%20%26%20Asociados%20y%20deseo%20solicitar%20una%20valoraci%C3%B3n%20jur%C3%ADdica%20inicial." target="_blank" rel="noreferrer">Contactar por WhatsApp</a></div>
          <ContactForm />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
