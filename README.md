# Portfolio App

A modern, responsive portfolio web application built with Vue 3, Vite, and Tailwind CSS. Showcases your skills, experience, projects, and more, with support for dark mode and mobile-friendly design.

## Features

- **Responsive Design:** Looks great on all devices.
- **Dark Mode:** Toggle between light and dark themes.
- **Skills Section:** Clean, visually appealing skills display.
- **Experience & Education:** Timeline of your professional and academic background.
- **Project Showcase:** Card-based UI with images, tech stack, GitHub, and live links.
- **Smooth Navigation:** Sticky header, smooth scrolling, and section highlighting.
- **Easy Customization:** All content is component-driven and easy to update.

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
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
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Project Structure

- `src/components/` — Vue components for each section (Header, About, Skills, Experience, Education, Projects, Showcase, etc.)
- `src/assets/` — Local images and assets (for development; public images go in `public/`)
- `public/` — Static assets (project images, favicon, etc.)
- `src/composables/` — Reusable logic (e.g., loader composable)
- `src/scss/` — Custom SCSS (if needed)

## Customization

- **Skills, Experience, Projects:**
  - Edit the arrays in their respective components to update content.
- **Images:**
  - Place project images in the `public/` folder and reference them with `/your-image.png`.
- **Theme:**
  - Tailwind config and classes make it easy to adjust colors and spacing.

## Deployment

- Easily deploy to [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or any static hosting provider.
- For Netlify, no special configuration is needed—just connect your repo and deploy.

## License

MIT
