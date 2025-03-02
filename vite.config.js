import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
        optimizeDeps: {
            include: ['jquery', 'slick-carousel'],
        },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'catalog.html'),
                blog: resolve(__dirname, 'blog.html'),
            },
        },
    }
})