import Link from 'next/link';

export function PageHero({ eyebrow, title, description, backHref, backLabel }: { eyebrow: string; title: string; description: string; backHref?: string; backLabel?: string }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        {backHref && <Link className="back-link" href={backHref}>← {backLabel ?? 'Volver'}</Link>}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
