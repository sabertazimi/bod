import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
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
      'temp',
      '.temp',
    ],
  },
})
