import Link from 'next/link';

export default function NotFound() {
  return <main id="contenido" className="not-found"><div className="container"><p className="eyebrow">Error 404</p><h1>Esta página no está disponible.</h1><p>El contenido pudo cambiar de ubicación o todavía no ha sido publicado.</p><Link className="button button-accent" href="/">Volver al inicio</Link></div></main>;
}
