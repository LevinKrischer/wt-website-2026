// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Optional: Wenn du später MDX nutzen willst
// import mdx from '@astrojs/mdx';

// Optional: Wenn du Image-Optimierung nutzen willst
// import image from '@astrojs/image';

// Optional: Wenn du React/Svelte/Vue nutzen willst
// import react from '@astrojs/react';
// import svelte from '@astrojs/svelte';
// import vue from '@astrojs/vue';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // Saubere Imports für dein Design-System
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@styles': '/src/styles',
        '@lib': '/src/lib',
        '@data': '/src/data',
      },
    },
  },

  // Optional aktivierbar, falls du es brauchst:
  // integrations: [
  //   mdx(),
  //   image(),
  //   react(),
  //   svelte(),
  //   vue(),
  // ],

  // Saubere Basis-URL (falls du später deployst)
  site: 'https://example.com',

  // Output-Optionen (z. B. für SSR)
  // output: 'static',
});
