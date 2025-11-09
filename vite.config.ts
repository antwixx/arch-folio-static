import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        contact: 'contact.html',
        about: 'about.html',
        services: 'services.html',
        projects: 'projects.html',
        projectsResidential: 'projects-residential.html',
        projectsCommercial: 'projects-commercial.html',
        projectsHealthcare: 'projects-healthcare.html',
      }
    }
  },
  server: {
    host: "::",
    port: 8080,
  },
  publicDir: 'public'
})
