# Arquitectura editorial

El contenido público vive en `lib/content.ts` como colecciones tipadas. La solución no usa base de datos ni CMS: es económica, auditable y se genera junto con el sitio para favorecer velocidad y SEO.

## Publicar una editorial mensual

Agrega un elemento a `editorials` con `slug`, título, categoría, fecha ISO, autor verificado, resumen, imagen, texto alternativo, párrafos y cita opcional. La ruta, los metadatos, Open Graph, datos estructurados y las lecturas relacionadas se generan automáticamente.

## Publicar un caso

Agrega un elemento a `publicCases` con contexto, reto, criterio/estrategia, resultado verificable, fuentes, abogados relacionados y editoriales relacionadas. Anonimiza información sensible antes de incorporar el contenido.

## Publicar un perfil profesional

Agrega un elemento a `professionals` únicamente cuando nombre, cargo, fotografía, estudios, experiencia y enlaces hayan sido validados por la firma. La colección permanece vacía intencionalmente para no reutilizar identidades que parecían contenido de plantilla en el sitio anterior.

Después de cualquier publicación, ejecuta `npm run build` y revisa la URL generada.
