'use client';

import { usePathname } from 'next/navigation';

const messages: Record<string, string> = {
  '/areas/derecho-penal': 'Hola, vengo de la sección de Derecho Penal de Paba & Asociados y quisiera consultar mi caso.',
  '/areas/derecho-laboral': 'Hola, vengo de la sección de Derecho Laboral de Paba & Asociados y quisiera consultar mi caso.',
  '/areas/derecho-disciplinario': 'Hola, vengo de la sección de Derecho Disciplinario de Paba & Asociados y quisiera hacer una consulta.',
  '/areas/derecho-electoral': 'Hola, vengo de la sección de Derecho Electoral de Paba & Asociados y quisiera hacer una consulta.',
  '/areas/litigio-jep': 'Hola, vengo de la sección de litigio ante la JEP de Paba & Asociados y quisiera recibir orientación.',
  '/areas/derecho-publico': 'Hola, vengo de la sección de Derecho Público de Paba & Asociados y quisiera hacer una consulta.',
  '/areas/derecho-empresarial': 'Hola, vengo de la sección de Derecho Empresarial de Paba & Asociados y quisiera recibir asesoría.',
};

export function WhatsAppButton() {
  const pathname = usePathname();
  const message = messages[pathname] ?? 'Hola, visité el sitio de Paba & Asociados y quisiera consultar mi caso.';
  const href = `https://wa.me/573185481492?text=${encodeURIComponent(message)}`;

  return (
    <a className="whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
      <span aria-hidden="true">WA</span>
      <span className="whatsapp-label">Consultar</span>
    </a>
  );
}
