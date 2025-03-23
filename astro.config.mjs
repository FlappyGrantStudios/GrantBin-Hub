// @ts-check
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    react(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})