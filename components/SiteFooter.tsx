import Link from 'next/link';
import Image from 'next/image';
import { practiceAreas } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Image src="/logo-paba.png" alt="Paba & Asociados Abogados Consultores" width={250} height={58} />
          <p>Paba & Asociados Abogados Consultores S.A.S.</p>
          <span>Litigio estratégico y asesoría jurídica especializada.</span>
        </div>
        <div>
          <p className="footer-label">Firma</p>
          <nav aria-label="Navegación del pie">
            <Link href="/firma">Nosotros</Link>
            <Link href="/abogados">Equipo</Link>
            <Link href="/experiencia-y-actuaciones">Experiencia y actuaciones</Link>
            <Link href="/editorial">Editorial</Link>
            <Link href="/analisis-juridico">Análisis Jurídico</Link>
          </nav>
        </div>
        <div>
          <p className="footer-label">Áreas de práctica</p>
          <nav aria-label="Áreas de práctica">
            {practiceAreas.map((area) => <Link key={area.slug} href={`/areas/${area.slug}`}>{area.shortName}</Link>)}
          </nav>
        </div>
        <div>
          <p className="footer-label">Contacto</p>
          <address>
            <a href="tel:+573185481492">+57 318 548 1492</a>
            <a href="mailto:info@pabayasociados.com.co">info@pabayasociados.com.co</a>
            <a href="https://maps.google.com/?q=Calle+54+10-81+Oficina+902+Bogota" target="_blank" rel="noreferrer">Calle 54 # 10-81, Oficina 902<br />Bogotá D. C. — Colombia</a>
          </address>
          <Link className="footer-cta" href="/contacto">Solicitar valoración jurídica →</Link>
        </div>
      </div>
      <div className="container footer-legal">
        <nav aria-label="Información legal">
          <Link href="/politica-de-tratamiento-de-datos">Política de tratamiento de datos</Link>
          <Link href="/politica-de-privacidad">Política de privacidad</Link>
          <Link href="/terminos-y-condiciones">Términos y condiciones</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Paba & Asociados Abogados Consultores S.A.S. Todos los derechos reservados.</p>
        <p>La información de este sitio es general y no constituye asesoría jurídica.</p>
      </div>
    </footer>
  );
}
