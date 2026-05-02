import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const src = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': src,
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  css: {
    postcss: {},
  },
  test: {
    globals: false,
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/components/**/*.{ts,vue}'],
      exclude: [
        'src/**/*.d.ts',
        'src/index.ts',
        'src/vite-env.d.ts',
        'src/components/index.ts',
        '**/tests/**',
      ],
    },
    restoreMocks: true,
    clearMocks: true,
    mockReset: true,
    testTimeout: 10000,
  },
})
