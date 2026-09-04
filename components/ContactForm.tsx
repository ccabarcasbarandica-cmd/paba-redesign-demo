'use client';

import { FormEvent, useState } from 'react';
import { practiceAreas } from '@/lib/content';

export function ContactForm({ defaultArea = '' }: { defaultArea?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `Área: ${form.get('area')}`,
      `Nombre: ${form.get('nombre')}`,
      `Teléfono: ${form.get('telefono')}`,
      `Correo: ${form.get('correo')}`,
      `Ciudad: ${form.get('ciudad')}`,
      '',
      `Descripción inicial: ${form.get('descripcion')}`,
    ];
    const subject = encodeURIComponent(`Consulta inicial · ${form.get('area')}`);
    const body = encodeURIComponent(lines.join('\n'));
    setSent(true);
    window.location.href = `mailto:info@pabayasociados.com.co?subject=${subject}&body=${body}`;
  }

  return (
    <form className="case-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Área
          <select name="area" defaultValue={defaultArea} required>
            <option value="" disabled>Selecciona una opción</option>
            {practiceAreas.map((area) => <option key={area.slug} value={area.name}>{area.name}</option>)}
            <option value="Otro">Otro</option>
          </select>
        </label>
        <label>Nombre
          <input name="nombre" autoComplete="name" required />
        </label>
        <label>Teléfono
          <input name="telefono" type="tel" autoComplete="tel" required />
        </label>
        <label>Correo
          <input name="correo" type="email" autoComplete="email" required />
        </label>
        <label>Ciudad
          <input name="ciudad" autoComplete="address-level2" required />
        </label>
        <label className="field-wide">Descripción
          <textarea name="descripcion" rows={5} required placeholder="Cuéntanos lo esencial. Evita incluir datos sensibles o documentos en este primer contacto." />
        </label>
      </div>
      <label className="consent">
        <input type="checkbox" required />
        <span>Autorizo el uso de estos datos exclusivamente para responder mi solicitud. Entiendo que enviar este formulario no crea una relación abogado-cliente.</span>
      </label>
      <button className="button button-dark" type="submit">Preparar correo de consulta</button>
      {sent && <p className="form-note" role="status">Se abrió tu aplicación de correo. Revisa el mensaje antes de enviarlo.</p>}
      <p className="form-note">La información se prepara en tu dispositivo y no se almacena en este sitio.</p>
    </form>
  );
}
