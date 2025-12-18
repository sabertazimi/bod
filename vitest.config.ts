import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['packages/bod'],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
    },
  },
})

