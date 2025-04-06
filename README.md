# Legend Billiard Club - Official Website

A modern website for the legendary billiard club, built with Nuxt 3 using Content, i18n, and SEO optimizations.

## Project Features

- **Multilingual** - Russian and English language support
- **SEO optimization** - Meta tags, Open Graph, Schema.org markup
- **Content system** - Content management via Markdown
- **Responsive design** - Optimization for all devices
- **Performance** - Optimization of images and fonts
- **Galleries** - Photo galleries with lightbox functionality

## Tech Stack

- **Nuxt 3** - Vue.js framework for building modern web applications
- **@nuxt/content** - Content management system using Markdown format
- **@nuxtjs/i18n** - Internationalization and localization (Russian and English)
- **@nuxtjs/seo** - Comprehensive SEO optimization
- **@nuxt/image** - Image optimization
- **@nuxt/fonts** - Google Fonts optimization
- **TailwindCSS** - Utility-first CSS framework for styling
- **PhotoSwipe** - Lightbox gallery for images

## Project Structure

```

legendbc.ru/
├── app/ # Main application components
│ ├── components/ # Vue components
│ │ ├── content/ # Components for Markdown rendering
│ │ ├── SiteHeader.vue # Website header
│ │ ├── SiteFooter.vue # Website footer
│ │ ├── HeaderNav.vue # Navigation menu
│ │ ├── YaMap.vue # Yandex Map integration
│ │ └── ...
│ ├── pages/ # Routes and pages
│ └── error.vue # Error page
├── content/ # Markdown content
│ ├── en/ # English version
│ └── ru/ # Russian version
├── i18n/ # Localization
│ └── locales/ # Translation files
├── public/ # Public static files
│ ├── images/ # Images
│ ├── browserconfig.xml # Windows configuration
│ └── site.webmanifest # Web App Manifest
├── assets/ # Source assets
│ └── css/ # CSS styles
├── nuxt.config.ts # Nuxt configuration
└── content.config.ts # Content configuration

```

## Setup and Development

### Installing Dependencies

```bash
# pnpm (recommended)
pnpm install

# npm
npm install
```

### Development

```bash
# Start development server on http://localhost:3000
pnpm dev
```

### Build and Deployment

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

The project is configured for deployment via Vercel, Netlify, or NodeJS hosting.

## Contact

Developer: Denis Semenov  
Website: [denisemenov.com](https://denisemenov.com)
