import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, type ManifestOptions } from "vite-plugin-pwa"
import tsconfigPaths from "vite-tsconfig-paths"

const manifest: Partial<ManifestOptions> = {
  "theme_color": "#919191",
  "background_color": "#404040",
  "icons": [
    {
      "purpose": "maskable",
      "sizes": "512x512",
      "src": "icon512_maskable.png",
      "type": "image/png"
    },
    {
      "purpose": "any",
      "sizes": "512x512",
      "src": "icon512_rounded.png",
      "type": "image/png"
    }
  ],
  "screenshots": [
    {
      "src": "/screen/desktop.png",
      "type": "image/png",
      "sizes": "1900x909",
      "form_factor": "wide",
    },
    {
      "src": "/screen/mobile.png",
      "type": "image/png",
      "sizes": "491x802",
      "form_factor": "narrow",
    }
  ],
  "orientation": "any",
  "display": "standalone",
  "lang": "ru-RU",
  "name": "Read Later",
  "short_name": "readlater"
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    workbox: {
      globPatterns: ["**/*{html, css, js}"],
    },
    manifest: manifest,
  }),
  tsconfigPaths()
  ],
})
