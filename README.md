# Buen Plan

Sitio web para una consultora de planes de salud en Chile, enfocado en captar leads, resolver dudas frecuentes y administrar contenido del blog desde un panel privado.

**Sitio:** [buenplansalud.cl](https://www.buenplansalud.cl)

## Resumen

Buen Plan centraliza la presentación comercial del servicio, el formulario de captación de clientes y un pequeño CMS para publicar contenido relacionado con Isapres y salud. El proyecto está construido con Next.js y usa Firebase como base para autenticación y almacenamiento.

## Funcionalidades

- Landing page con secciones de hero, beneficios, proceso, comparador y testimonios
- Formulario de contacto para solicitar asesoría gratuita
- Blog con listado de artículos y vista de detalle por publicación
- Panel administrativo protegido para revisar formularios y gestionar posts
- Editor enriquecido con TipTap para crear contenido
- Exportación de artículos a PDF
- Página de preguntas frecuentes con datos estructurados para SEO
- Sitemap y `robots.txt` generados para indexación

## Stack

| Área | Tecnología |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Estilos | Tailwind CSS 3 |
| Base de datos | Firebase Firestore |
| Autenticación | Firebase Auth |
| Email | EmailJS |
| Editor | TipTap |
| PDF | jsPDF + jspdf-autotable |
| SEO | Metadata API + JSON-LD + next-sitemap |

## Rutas principales

- `/` — página principal
- `/blog` — listado de artículos
- `/blog/post/[id]` — detalle de artículo
- `/faq` — preguntas frecuentes
- `/adminbp` — panel de administración
- `/adminbp/blog` — gestión del blog

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

La aplicación quedará disponible en `http://localhost:3000`.

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estructura del proyecto

```text
src/app/
├── adminbp/               # Panel administrativo
├── blog/                  # Blog público y componentes del CMS
├── components/client/     # Componentes visuales del sitio
├── context/               # Contexto de autenticación
├── faq/                   # Página de preguntas frecuentes
├── firebase/              # Configuración de Firebase
├── HomePageContent.jsx    # Composición de la home
├── layout.js              # Layout global y metadata
└── page.js                # Entrada de la página principal
```

## Integraciones

- **Firebase Firestore** para formularios y publicaciones
- **Firebase Auth** para acceso al panel privado
- **EmailJS** para notificaciones del formulario
- **next-sitemap** para generar sitemap y `robots.txt`

## Estado actual de validación

Se intentó ejecutar `npm run lint` y `npm run build`, pero en el entorno actual fallan porque `next` no está instalado todavía; primero debe ejecutarse `npm install`.

## Autor

**José Pedro Valdés**  
- GitHub: [Pepeoawvh](https://github.com/Pepeoawvh)
- Portafolio: [joseangelportfolio.vercel.app](https://joseangelportfolio.vercel.app)
