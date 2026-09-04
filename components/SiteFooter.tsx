import Link from 'next/link';
import Image from 'next/image';
import { practiceAreas } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Image src="/logo-paba.png" alt="Paba & Asociados" width={250} height={58} />
          <p>Defensa y asesoría jurídica estratégica, ética y cercana desde Bogotá para toda Colombia.</p>
        </div>
        <div>
          <p className="footer-label">Explorar</p>
          <nav aria-label="Navegación del pie">
            <Link href="/firma">La firma</Link>
            <Link href="/abogados">Abogados</Link>
            <Link href="/casos">Casos</Link>
            <Link href="/editorial">Editorial</Link>
            <Link href="/actualidad">Actualidad</Link>
          </nav>
        </div>
        <div>
          <p className="footer-label">Áreas</p>
          <nav aria-label="Áreas de práctica">
            {practiceAreas.slice(0, 5).map((area) => <Link key={area.slug} href={`/areas/${area.slug}`}>{area.shortName}</Link>)}
          </nav>
        </div>
        <div>
          <p className="footer-label">Contacto</p>
          <address>
            <a href="tel:+573185481492">+57 318 548 1492</a>
            <a href="mailto:info@pabayasociados.com.co">info@pabayasociados.com.co</a>
            <a href="https://maps.app.goo.gl/humVtybdrmSooRXWA" target="_blank" rel="noreferrer">Calle 54 # 10-81, oficina 902<br />Edificio San Jorge, Bogotá D.C.</a>
            <span>Lunes a viernes · 8:00 a. m.–5:00 p. m.</span>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Paba & Asociados S.A.S.</p>
        <p>La información de este sitio es general y no constituye asesoría jurídica.</p>
      </div>
    </footer>
  );
}
