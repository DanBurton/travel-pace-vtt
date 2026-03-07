import { defineConfig } from 'vite'

const repositoryBasePath = '/travel-pace-vtt/'

export default defineConfig(({ command }) => ({
  base: command === 'build' && process.env.GITHUB_PAGES_BUILD ? repositoryBasePath : '/',
}))
