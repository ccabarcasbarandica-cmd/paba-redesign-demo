import type { Metadata } from 'next';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { practiceAreas } from '@/lib/content';
import { isDemoDeployment } from '@/lib/deployment';
import './globals.css';

const siteTitle = 'Paba & Asociados | Litigio estratégico y asesoría jurídica';
const siteDescription = 'Litigio estratégico y asesoría jurídica de alta complejidad. Experiencia, estrategia y rigor jurídico para la defensa de sus derechos e intereses.';

export const metadata: Metadata = {
  metadataBase: new URL('https://pabayasociados.com.co'),
  title: { default: siteTitle, template: '%s | Paba & Asociados' },
  description: siteDescription,
  applicationName: 'Paba & Asociados Abogados Consultores S.A.S.',
  authors: [{ name: 'Paba & Asociados Abogados Consultores S.A.S.' }],
  creator: 'Paba & Asociados Abogados Consultores S.A.S.',
  publisher: 'Paba & Asociados Abogados Consultores S.A.S.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'es_CO', siteName: 'Paba & Asociados', title: siteTitle, description: siteDescription, url: '/', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Paba & Asociados — Litigio estratégico y asesoría jurídica de alta complejidad' }] },
  twitter: { card: 'summary_large_image', title: siteTitle, description: siteDescription, images: ['/og.png'] },
  icons: { icon: '/logo-mark.png', apple: '/logo-mark.png' },
  robots: isDemoDeployment
    ? {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      }
    : { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://pabayasociados.com.co/#firma',
    name: 'Paba & Asociados Abogados Consultores S.A.S.',
    url: 'https://pabayasociados.com.co',
    logo: 'https://pabayasociados.com.co/logo-paba.png',
    image: 'https://pabayasociados.com.co/og.png',
    telephone: '+57 318 548 1492',
    email: 'info@pabayasociados.com.co',
    address: { '@type': 'PostalAddress', streetAddress: 'Calle 54 # 10-81, Oficina 902', addressLocality: 'Bogotá D. C.', addressCountry: 'CO' },
    areaServed: { '@type': 'Country', name: 'Colombia' },
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Áreas de práctica', itemListElement: practiceAreas.map((area) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: area.name, url: `https://pabayasociados.com.co/areas/${area.slug}` } })) },
  };
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader />{children}<SiteFooter /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
