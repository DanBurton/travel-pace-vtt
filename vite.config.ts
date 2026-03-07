import { defineConfig } from 'vite'

const repositoryBasePath = '/travel-pace-vtt/'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? repositoryBasePath : '/',
})