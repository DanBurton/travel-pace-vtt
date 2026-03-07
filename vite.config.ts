import { defineConfig } from 'vitest/config'

const repositoryBasePath = '/travel-pace-vtt/'

export default defineConfig(({ command }) => ({
  base: command === 'build' && process.env.GITHUB_PAGES_BUILD ? repositoryBasePath : '/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
}))
