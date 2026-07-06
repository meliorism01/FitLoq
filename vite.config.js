import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
  alias: {
    '@': '/src',
    '@components': '/src/components',
    '@pages': '/src/pages',
    '@layouts': '/src/layouts',
    '@context': '/src/context',
    '@services': '/src/services',
    '@hooks': '/src/hooks',
    '@utils': '/src/utils',
    '@constants': '/src/constants',
    '@data': '/src/data',
    '@assets': '/src/assets',
    '@styles': '/src/styles',
    '@schemas': '/src/schemas',
    '@guards': '/src/guards',
  },
},
})
