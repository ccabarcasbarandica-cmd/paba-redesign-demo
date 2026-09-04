import type { Metadata } from 'next';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://pabayasociados.com.co'),
  title: {
    default: 'Paba & Asociados | Defensa jurídica estratégica',
    template: '%s | Paba & Asociados',
  },
  description:
    'Firma jurídica en Bogotá con asesoría y representación estratégica en derecho penal, laboral, público, corporativo y justicia transicional.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Paba & Asociados',
    title: 'Paba & Asociados | Defensa jurídica estratégica',
    description: 'Defensa y asesoría jurídica estratégica desde Bogotá para toda Colombia.',
    images: [{ url: '/hero-office.jpg', width: 618, height: 842, alt: 'Paba & Asociados, defensa jurídica estratégica' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero-office.jpg'] },
  icons: { icon: '/logo-mark.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Paba & Asociados S.A.S.',
            url: 'https://pabayasociados.com.co',
            telephone: '+57 318 548 1492',
            email: 'info@pabayasociados.com.co',
            address: { '@type': 'PostalAddress', streetAddress: 'Calle 54 # 10-81, oficina 902, Edificio San Jorge', addressLocality: 'Bogotá D.C.', addressCountry: 'CO' },
            areaServed: 'Colombia',
          }) }}
        />
      </body>
    </html>
  );
}
