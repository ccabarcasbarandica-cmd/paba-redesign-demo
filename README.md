# Paba & Asociados — Redesign Demo

Demo de rediseño web actualizada con el documento institucional suministrado por Paba & Asociados el 4 de septiembre de 2026.

Este proyecto no corresponde al sitio oficial ni se encuentra desplegado en producción.

## Aislamiento de la demo pública

El proyecto Vercel de demostración utiliza `PABA_DEMO_MODE=1`. Este modo añade `noindex, nofollow` a la metadata, envía la cabecera `X-Robots-Tag`, evita publicar en `robots.txt` el sitemap del dominio oficial y muestra el aviso visual de demo. `robots.txt` permite el rastreo de forma intencional para que los buscadores puedan leer y respetar la directiva `noindex`.

Al migrar el proyecto al dominio oficial se debe eliminar `PABA_DEMO_MODE` del entorno de producción y volver a desplegar. No es necesario modificar los canonical, el sitemap ni la arquitectura SEO oficial.

## Tecnologías

- Next.js
- React
- TypeScript
- CSS

## Validación local

```bash
npm run build
npm run lint
npx tsc --noEmit
```

El contenido estructurado y sus campos pendientes se documentan en `content/README.md`.
