import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Rolling Glory Gifts',
        short_name: "RGB",
        description: "Rolling Glory Assessment",
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo-dummy.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-dummy.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
