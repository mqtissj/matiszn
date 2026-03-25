import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages path for this repo (example: https://mqtissj.github.io/matiszn/)
  base: process.env.NODE_ENV === 'production' ? '/matiszn/' : '/',
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
