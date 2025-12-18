import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    environmentOptions: {
      url: 'http://localhost',
    },
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['json-summary', 'lcov', 'text', 'clover'],
      reportsDirectory: './coverage',
    },
    exclude: [
      'node_modules',
      '.cache',
      'build',
      'dist',
      'coverage',
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

