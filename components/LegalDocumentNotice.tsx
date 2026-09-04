import Link from 'next/link';

export function LegalDocumentNotice({ title }: { title: string }) {
  return <main id="contenido"><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow">Información legal</p><h1>{title}</h1><p>El documento definitivo se publicará una vez sea suministrado y aprobado por Paba & Asociados Abogados Consultores S.A.S.</p></div></section><section className="section-pad"><div className="container legal-pending"><span>Contenido pendiente de aprobación institucional</span><h2>No se ha incorporado texto provisional para evitar publicar condiciones jurídicas no validadas.</h2><p>Para consultas relacionadas con el tratamiento de información o el sitio web, puede comunicarse con <a href="mailto:info@pabayasociados.com.co">info@pabayasociados.com.co</a>.</p><Link className="button button-dark" href="/contacto">Contactar a la firma</Link></div></section></main>;
}
