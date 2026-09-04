# Arquitectura de contenidos

El contenido público se administra en `lib/content.ts` mediante colecciones tipadas. El documento oficial recibido el 4 de septiembre de 2026 es la fuente principal para lenguaje institucional, áreas, biografía, preguntas frecuentes y datos de contacto.

## Áreas de práctica

`practiceAreas` contiene exclusivamente las seis áreas aprobadas. `legacyAreaRedirects` conserva compatibilidad con las URLs anteriores sin incluirlas en navegación ni sitemap.

## Editorial mensual

`editorials` conserva la publicación institucional mensual. Cada registro admite slug, título, categoría, fecha, autor, cargo, resumen, portada, tiempo de lectura, cuerpo y cita. Las rutas y metadata se generan automáticamente.

## Análisis Jurídico

`legalAnalyses` es una biblioteca independiente. Cada artículo admite título, autor, cargo, fecha, área, tiempo de lectura, portada, contenido, SEO, relacionados y CTA. La colección permanece vacía hasta recibir artículos validados.

## Experiencia y actuaciones de interés

`publicActuations` admite nombre, intervención profesional, medio, enlace, fecha, área y profesionales relacionados. Solo deben incorporarse actuaciones de conocimiento público con fuentes verificables.

## Equipo

`professionals` contiene exclusivamente perfiles aprobados. Los campos de formación, experiencia detallada y publicaciones permanecen vacíos cuando el documento oficial no aporta información suficiente.

## Contenido pendiente

- Fotografía profesional de Jeison Orlando Paba Reyes.
- Nombres, cargos, biografías, áreas, formación y fotografías de los demás integrantes.
- Formación académica, experiencia desglosada y publicaciones de Jeison Orlando Paba Reyes.
- Artículos para la biblioteca de Análisis Jurídico.
- Textos jurídicos aprobados para las tres páginas legales del footer.
- Fechas faltantes de algunas publicaciones externas incluidas en la actuación pública.

Después de cualquier publicación se debe ejecutar `npm run build`, revisar sitemap, metadata, enlaces y responsive.
