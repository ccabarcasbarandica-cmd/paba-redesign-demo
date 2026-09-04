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
    const subject = encodeURIComponent(`Solicitud de valoración jurídica · ${form.get('area')}`);
    const body = encodeURIComponent(lines.join('\n'));
    setSent(true);
    window.location.href = `mailto:info@pabayasociados.com.co?subject=${subject}&body=${body}`;
  }

  return (
    <form className="case-form" onSubmit={handleSubmit} aria-describedby="form-legal-note">
      <h3>Solicitar valoración jurídica</h3>
      <div className="form-grid">
        <label>Área de práctica
          <select name="area" defaultValue={defaultArea} required>
            <option value="" disabled>Seleccione una opción</option>
            {practiceAreas.map((area) => <option key={area.slug} value={area.name}>{area.name}</option>)}
            <option value="Otro asunto jurídico">Otro asunto jurídico</option>
          </select>
        </label>
        <label>Nombre completo<input name="nombre" autoComplete="name" required /></label>
        <label>Teléfono<input name="telefono" type="tel" autoComplete="tel" inputMode="tel" required /></label>
        <label>Correo electrónico<input name="correo" type="email" autoComplete="email" required /></label>
        <label>Ciudad<input name="ciudad" autoComplete="address-level2" required /></label>
        <label className="field-wide">Descripción inicial
          <textarea name="descripcion" rows={5} required placeholder="Describa brevemente su situación. Evite incluir datos sensibles o adjuntar documentos en este primer contacto." />
        </label>
      </div>
      <label className="consent">
        <input type="checkbox" required />
        <span>Autorizo el tratamiento de estos datos exclusivamente para atender mi solicitud y declaro haber leído la información sobre el alcance de este contacto.</span>
      </label>
      <p className="form-legal" id="form-legal-note">El envío de información no garantiza la aceptación del asunto. No crea automáticamente una relación abogado-cliente. La firma deberá revisar previamente su viabilidad, alcance y posibles conflictos de interés.</p>
      <button className="button button-accent" type="submit">Preparar solicitud por correo</button>
      {sent && <p className="form-note" role="status">Se abrió su aplicación de correo. Revise el mensaje antes de enviarlo.</p>}
      <p className="form-note">La información se prepara en su dispositivo y no se almacena en este sitio.</p>
    </form>
  );
}
