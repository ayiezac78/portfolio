import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { FontaineTransform } from 'fontaine'
import UnheadVite from '@unhead/addons/vite'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
const options = {
  fallbacks: ['Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria'],
  // You may need to resolve assets like `/fonts/Roboto.woff2` to a particular directory
  resolvePath: id => `/fonts/${id}`,
  // overrideName: (originalName) => `${name} override`
  sourcemap: false,
  skipFontFaceGeneration: (fallbackName) => fallbackName === 'Roboto override'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    [FontaineTransform.vite(options)],
    UnheadVite(),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  }
})
