import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: 'My-practices-in-the-frontend-mentor/demo/junior/product-list-with-cart-main-demo',

  plugins: [
    react({
      include: ['**/*.jsx', '**/*.js'],
    }),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    checker({
      stylelint: {
        lintCommand: 'stylelint "./src/**/*.scss"',
      },
    }),
  ],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/style/'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@iconsComponent': path.resolve(__dirname, './src/components/ui/icons'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@data': path.resolve(__dirname, './src/data'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
