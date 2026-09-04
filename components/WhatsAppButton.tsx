'use client';

import { usePathname } from 'next/navigation';

const messages: Record<string, string> = {
  '/areas/derecho-penal-y-litigio-penal-estrategico': 'Hola, visité la sección de Derecho Penal y Litigio Penal Estratégico de Paba & Asociados y deseo solicitar una valoración jurídica inicial.',
  '/areas/derecho-publico': 'Hola, visité la sección de Derecho Público de Paba & Asociados y deseo solicitar una valoración jurídica inicial.',
  '/areas/derecho-laboral-y-seguridad-social': 'Hola, visité la sección de Derecho Laboral y Seguridad Social de Paba & Asociados y deseo solicitar una valoración jurídica inicial.',
  '/areas/justicia-transicional-y-jep': 'Hola, visité la sección de Justicia Transicional y JEP de Paba & Asociados y deseo solicitar una valoración jurídica inicial.',
  '/areas/derecho-privado-y-corporativo': 'Hola, visité la sección de Derecho Privado y Corporativo de Paba & Asociados y deseo solicitar una valoración jurídica inicial.',
  '/areas/solucion-estrategica-de-controversias': 'Hola, visité la sección de Solución Estratégica de Controversias de Paba & Asociados y deseo solicitar una valoración jurídica inicial.',
};

export function WhatsAppButton() {
  const pathname = usePathname();
  const message = messages[pathname] ?? 'Hola, visité el sitio de Paba & Asociados y deseo solicitar una valoración jurídica inicial.';
  const href = `https://wa.me/573185481492?text=${encodeURIComponent(message)}`;
  return <a className="whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Solicitar valoración jurídica por WhatsApp"><span aria-hidden="true">WA</span><span className="whatsapp-label">WhatsApp</span></a>;
}
