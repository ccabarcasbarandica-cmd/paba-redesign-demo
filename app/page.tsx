import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import { editorials, mediaCoverage, practiceAreas, publicCases } from '@/lib/content';

export default function Home() {
  const featuredCase = publicCases[0];
  return (
    <main id="contenido">
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">Firma jurídica · Bogotá y toda Colombia</p>
            <h1>Claridad jurídica para decisiones que no admiten improvisación.</h1>
            <p className="hero-lede">Defensa y asesoría estratégica para personas, empresas y organizaciones ante asuntos legales complejos.</p>
            <div className="hero-actions">
              <Link className="button button-accent" href="/contacto">Hablar con un abogado</Link>
              <Link className="text-link" href="/areas">Explorar áreas de práctica <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <figure className="hero-visual">
            <Image src="/hero-office.jpg" alt="Profesionales revisando documentación durante una reunión" width={618} height={842} priority sizes="(max-width: 720px) 100vw, 38vw" />
            <figcaption><span>01</span>Estrategia antes que reacción</figcaption>
          </figure>
        </div>
        <div className="hero-footer container" aria-label="Principios de la firma">
          <p><span>Enfoque</span> Multidisciplinario</p>
          <p><span>Cobertura</span> Nacional</p>
          <p><span>Compromiso</span> Ética y discreción</p>
        </div>
      </section>

      <section className="statement section-pad">
        <div className="container statement-grid">
          <p className="section-index">01 — La firma</p>
          <div>
            <p className="display-copy">Un asunto jurídico complejo necesita más que una respuesta rápida: exige perspectiva, método y una estrategia que puedas entender.</p>
            <Link className="arrow-link dark" href="/firma">Conocer la firma <span>→</span></Link>
          </div>
          <div className="fact-stack">
            <p><strong>10+</strong><span>Años de experiencia publicados por la firma</span></p>
            <p><strong>7</strong><span>Frentes de práctica integrados</span></p>
            <p><strong>CO</strong><span>Atención desde Bogotá para Colombia</span></p>
          </div>
        </div>
      </section>

      <section className="areas-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="02 — Capacidades" title="Áreas de práctica" intro="Una mirada conectada para asuntos que rara vez pertenecen a una sola categoría." />
          <div className="area-list">
            {practiceAreas.map((area, index) => (
              <Link className="area-row" href={`/areas/${area.slug}`} key={area.slug}>
                <span className="area-number">{String(index + 1).padStart(2, '0')}</span>
                <span><strong>{area.name}</strong><small>{area.summary}</small></span>
                <span className="area-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="need-section section-pad">
        <div className="container need-grid">
          <SectionHeading eyebrow="03 — Orientación" title="¿Qué situación estás enfrentando?" intro="Empieza por el problema. Te llevamos a la práctica adecuada o al canal de contacto." />
          <div className="need-options">
            {practiceAreas.map((area) => <Link key={area.slug} href={`/areas/${area.slug}`}>{area.shortName}<span>→</span></Link>)}
            <Link href="/contacto?area=otro">Otro<span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="case-feature section-pad">
        <div className="container case-feature-grid">
          <div className="case-mark"><span>Caso público</span><strong>01</strong></div>
          <div className="case-copy">
            <p className="section-eyebrow">04 — Experiencia documentada</p>
            <h2>{featuredCase.title}</h2>
            <p>{featuredCase.summary}</p>
            <Link className="arrow-link" href={`/casos/${featuredCase.slug}`}>Leer ficha documental <span>→</span></Link>
          </div>
          <div className="case-note">
            <p>La confidencialidad es parte del trabajo.</p>
            <span>Solo publicamos información que ya aparece en fuentes abiertas vinculadas por la firma.</span>
          </div>
        </div>
      </section>

      <section className="media-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="05 — Autoridad pública" title="La experiencia también se documenta" intro="Cobertura periodística enlazada por el sitio vigente de Paba & Asociados." />
          <div className="media-grid">
            {mediaCoverage.map((item) => (
              <a href={item.url} key={`${item.outlet}-${item.title}`} target="_blank" rel="noreferrer" className="media-card">
                <span>{item.outlet}</span><h3>{item.title}</h3><small>Ver fuente externa ↗</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="team-teaser section-pad">
        <div className="container team-grid">
          <div className="team-image"><Image src="/firma.jpg" alt="Profesionales saludándose al iniciar una reunión" width={720} height={720} sizes="(max-width: 900px) 100vw, 50vw" /></div>
          <div className="team-copy">
            <p className="section-eyebrow">06 — Equipo</p>
            <h2>El caso correcto, en manos de la práctica correcta.</h2>
            <p>La firma trabaja desde una visión multidisciplinaria y un acompañamiento cercano. Los perfiles individuales se publicarán cuando su información profesional y fotografías sean validadas por la firma.</p>
            <Link className="arrow-link dark" href="/abogados">Conocer cómo trabaja el equipo <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="07 — Método" title="Cómo trabajamos" intro="Un proceso claro reduce incertidumbre y permite decidir con criterio." />
          <ol className="process-grid">
            <li><span>01</span><h3>Escuchamos</h3><p>Entendemos hechos, urgencias y objetivos sin asumir respuestas genéricas.</p></li>
            <li><span>02</span><h3>Diagnosticamos</h3><p>Revisamos la información disponible, los riesgos y el marco jurídico aplicable.</p></li>
            <li><span>03</span><h3>Diseñamos</h3><p>Presentamos una ruta de trabajo con prioridades, alcance y próximos pasos.</p></li>
            <li><span>04</span><h3>Acompañamos</h3><p>Ejecutamos la estrategia y mantenemos comunicación sobre el avance.</p></li>
          </ol>
        </div>
      </section>

      <section className="editorial-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="08 — Conocimiento" title="Editorial Paba & Asociados" intro="Contexto jurídico explicado con claridad para tomar mejores decisiones." />
          <div className="editorial-grid">
            {editorials.map((item, index) => (
              <article className={index === 0 ? 'editorial-card featured' : 'editorial-card'} key={item.slug}>
                <Link href={`/editorial/${item.slug}`} className="editorial-image"><Image src={item.image} alt={item.imageAlt} width={720} height={450} sizes="(max-width: 720px) 100vw, 50vw" /></Link>
                <p>{item.category} · <time dateTime={item.date}>{item.displayDate}</time></p>
                <h3><Link href={`/editorial/${item.slug}`}>{item.title}</Link></h3>
                <Link className="arrow-link dark" href={`/editorial/${item.slug}`}>Leer editorial <span>→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-pad">
        <div className="container contact-grid">
          <div>
            <p className="section-eyebrow">09 — Primer contacto</p>
            <h2>Cuéntanos tu caso.</h2>
            <p>Comparte solo la información inicial necesaria. La firma revisará tu solicitud antes de definir cualquier actuación.</p>
            <div className="direct-contact">
              <a href="tel:+573185481492">+57 318 548 1492</a>
              <a href="mailto:info@pabayasociados.com.co">info@pabayasociados.com.co</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
