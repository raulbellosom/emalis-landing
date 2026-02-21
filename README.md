# EMALIS Dental Landing Page

Este proyecto es una landing page moderna, profesional y altamente animada para la clínica dental EMALIS Dental. Construida con React, Vite y Tailwind CSS v4, incluye transiciones suaves con Framer Motion y una excelente experiencia de usuario enfocado en dispositivos móviles.

## Tecnologías

- **React + Vite**
- **Tailwind CSS v4** (con `@tailwindcss/vite`)
- **Framer Motion** (Animaciones)
- **React Icons** (Íconos)
- **clsx + tailwind-merge** (Utilidades de clases condicionales)

## Requisitos Previos

- Node.js (v18+)
- npm o pnpm

## Instalación y Ejecución Local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en el navegador: `http://localhost:5173` o el puerto indicado en la terminal.

## Personalización de Contenido

Todo el contenido textual de la página web (servicios, preguntas frecuentes, testimonios, configuraciones de contacto) se encuentra centralizado en un solo archivo para facilitar su modificación.

Puedes editar el archivo: `src/data/siteContent.js`

## Construcción para Producción

Para generar la versión optimizada para producción:

```bash
npm run build
```

Esto creará una carpeta `dist/` lista para ser desplegada en cualquier servicio de hosting estático (Vercel, Netlify, Github Pages, etc).
