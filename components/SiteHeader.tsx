import Link from 'next/link';
import Image from 'next/image';

const nav = [
  { href: '/firma', label: 'La firma' },
  { href: '/areas', label: 'Áreas de práctica' },
  { href: '/experiencia-y-actuaciones', label: 'Experiencia' },
  { href: '/abogados', label: 'Equipo' },
  { href: '/editorial', label: 'Editorial' },
  { href: '/analisis-juridico', label: 'Análisis Jurídico' },
];

export function SiteHeader() {
  return (
    <header className="global-header">
      <div className="utility-bar">
        <div className="container"><span>Bogotá D. C. — Colombia</span><a href="tel:+573185481492">+57 318 548 1492</a></div>
      </div>
      <div className="site-header container">
        <Link className="brand" href="/" aria-label="Paba & Asociados, inicio">
          <Image src="/logo-paba.png" alt="Paba & Asociados Abogados Consultores" width={250} height={58} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button-light header-cta" href="/contacto">Solicitar valoración</Link>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú de navegación"><span /><span /></summary>
          <nav aria-label="Navegación móvil">
            {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <a className="mobile-phone" href="tel:+573185481492">+57 318 548 1492</a>
            <Link className="button button-accent" href="/contacto">Solicitar valoración jurídica</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
