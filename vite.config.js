import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    base:  '/ceramic_studio/',
        optimizeDeps: {
            include: ['jquery', 'slick-carousel'],
        },
    build: {
        outDir: 'dist', // Output directory
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'src/pages/about.html'),
                blog: resolve(__dirname, 'src/pages/blog.html'),
                catalog: resolve(__dirname, 'src/pages/catalog.html'),
            }
        },
    }
})