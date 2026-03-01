# Portfolio App

A modern, responsive portfolio web application built with **Nuxt 3** and Tailwind CSS. Showcases skills, experience, projects, and services, featuring server-side rendering (SSR), optimized SEO, dark mode, and a mobile-friendly design.

## Features

- **Nuxt 3 Architecture:** Leverages Nuxt for full-stack Vue development, file-based routing, and SSR capabilities.
- **Advanced SEO:** Built-in `@nuxtjs/seo` integration for Schema.org rich results, dynamic Open Graph cards, sitemap generation, and robots.txt.
- **Responsive Design:** Looks great on all devices.
- **Buttery Dark Mode:** CSS-driven universal theme toggling between light and dark themes.
- **Skills Section:** Clean, visually appealing skills display.
- **Experience & Education:** Timeline of your professional and academic background.
- **Project Showcase:** Card-based UI with images, tech stack, GitHub, and live links.
- **Services Section:** Details on offered services including consulting, architecture, and custom tools.
- **Smooth Navigation:** Sticky header, smooth scrolling, and section highlighting.

## Tech Stack

- [Nuxt 3](https://nuxt.com/) & [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@nuxtjs/seo](https://nuxtseo.com/) (Open Graph, Schema, Sitemap)
- [Iconify](https://iconify.design/) (for icons)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Build statically for production:**
   ```sh
   npm run build
   ```
4. **Preview the production build:**
   ```sh
   npx serve dist
   ```

## Project Structure

- `src/pages/` — Nuxt page routes (`index.vue` and `services.vue`).
- `src/components/` — Vue view components separated by concern (sections, layout, company).
- `src/assets/` — Local SCSS styles and base CSS layers.
- `public/` — Static assets served at the root (Open Graph banners, favicons, etc.)
- `nuxt.config.ts` — Main Nuxt configuration governing SEO, styling, and static generation.

## Customization

- **SEO & Social Cards:**
  - Update `useSeoMeta()` in the respective `pages/*.vue` files. The global configuration is handled in `app.vue` and `nuxt.config.ts`.
  - Replace `public/og_banner_02.png` with your desired fallback social banner.
- **Skills, Experience, Projects:**
  - Edit the arrays in their respective components to update content.
- **Theme:**
  - Standard Tailwind configuration in `tailwind.config.js`.

## Deployment

- Nuxt is configured with `nitro: { output: { publicDir: 'dist' } }` to statically generate your site into the `dist/` directory.
- This maintains compatibility with traditional static hosts like GitHub Pages, Netlify, or Vercel.

## License

MIT
