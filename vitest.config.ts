import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@vuefy/core': path.resolve(__dirname, 'packages/core/src'),
    },
    dedupe: ['vue', '@vuefy/core', '@vuetify/v0', '@iconify/vue'],
  },
  optimizeDeps: {
    include: ['vue'],
  },
  ssr: {
    noExternal: ['vue'],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['packages/**/*.{test,spec}.ts'],
    setupFiles: ['./packages/core/tests/setup.ts'],
  },
})
