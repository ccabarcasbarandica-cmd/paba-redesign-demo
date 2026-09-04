import Link from 'next/link';
import Image from 'next/image';

const nav = [
  { href: '/firma', label: 'La firma' },
  { href: '/areas', label: 'Áreas de práctica' },
  { href: '/abogados', label: 'Abogados' },
  { href: '/casos', label: 'Casos' },
  { href: '/editorial', label: 'Editorial' },
  { href: '/actualidad', label: 'Actualidad' },
];

export function SiteHeader() {
  return (
    <header className="global-header">
      <div className="site-header container">
        <Link className="brand" href="/" aria-label="Paba & Asociados, inicio">
          <Image src="/logo-paba.png" alt="Paba & Asociados" width={250} height={58} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button-light header-cta" href="/contacto">Hablar con un abogado</Link>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><span /><span /></summary>
          <nav aria-label="Navegación móvil">
            {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link className="button button-accent" href="/contacto">Hablar con un abogado</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
