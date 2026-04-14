# Buen Plan — Plataforma de Asesoría en Planes de Salud

Sitio web profesional para una consultora de planes de salud (Isapres) en Chile. Next.js App Router, orientado a captar clientes mediante asesoría personalizada gratuita.

**🌐 [buenplansalud.cl](https://www.buenplansalud.cl)**

---

## Descripción

Buen Plan conecta a usuarios con asesores certificados por la Superintendencia de Salud de Chile. El sitio permite acceder a comparacion de planes de isapre, resolver dudas frecuentes y solicitar asesoría personalizada sin costo.

---

## Stack tecnológico

| Área | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + Tailwind CSS 3 |
| Backend / DB | Firebase Firestore |
| Autenticación | Firebase Auth |
| Email | EmailJS (@emailjs/browser) |
| Editor de texto enriquecido | TipTap (blog) |
| Generación de PDF | jsPDF + jspdf-autotable |
| Animaciones | tailwindcss-animated |
| SEO | next-sitemap, schema.org JSON-LD |
| Despliegue | Vercel |

---

## Características principales

### Frontend
- **Landing page** con hero section, carrusel de beneficios, comparador de Isapres, sección "¿Cómo funciona?" y testimonios
- **Diseño responsive** optimizado para mobile, tablet y desktop
- **Paleta de colores institucional** con variables CSS y tokens Tailwind personalizados (azul confianza + verde bienestar)
- **Formulario de contacto** con EmailJS — envío de notificaciones al equipo sin backend propio
- **Lazy loading** de todos los componentes pesados con `React.Suspense`
- **Animaciones de entrada** con tailwindcss-animated

### SEO (Google Search Central guidelines)
- Metadata API de Next.js App Router en todas las páginas (título, descripción, Open Graph, Twitter Cards)
- **JSON-LD estructurado**: `ProfessionalService` en el layout global, `FAQPage` en preguntas frecuentes
- Sitemap XML automático con `next-sitemap` y prioridades diferenciadas
- `robots.txt` con exclusión del panel de administración
- Alt texts descriptivos en todas las imágenes
- URLs canónicas por página

### Blog con CMS propio
- Panel de administración privado protegido con Firebase Auth
- Editor de contenido enriquecido con **TipTap** (negrita, cursiva, color, imágenes, vínculos)
- 4 plantillas de artículo disponibles
- Exportación de artículos a **PDF** con jsPDF
- Almacenamiento de posts en Firestore con ordenamiento por fecha

### Páginas
- `/` — Homepage (Hero, Banner, Cómo funciona, Isapres, Formulario, Testimonios, Acerca de)
- `/blog` — Listado de artículos
- `/blog/post/[id]` — Artículo individual con plantilla dinámica
- `/faq` — Preguntas frecuentes con formulario de contacto integrado

---

## Arquitectura

```
src/app/
├── layout.js          # Root layout con metadata global y JSON-LD
├── page.js            # Server Component homepage (metadata única)
├── HomePageContent.jsx # Client Component con todos los lazy imports
├── blog/              # Listado y posts del blog
├── faq/               # FAQ con schema FAQPage
├── adminbp/           # Panel de administración protegido
├── components/
│   └── client/        # Componentes React del sitio (navbar, hero, contact, etc.)
├── context/           # AuthProvider (Firebase Auth)
└── firebase/          # Configuración de Firebase
```

---

## Autor

**José Pedro Valdés** — Desarrollador Web Full Stack  
[GitHub](https://github.com/Pepeoawvh)
[Portafolio](https://joseangelportfolio.vercel.app)

