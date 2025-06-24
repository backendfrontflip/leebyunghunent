import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/leebyunghunent/', // 👈 Match your GitHub repo name
  plugins: [react()],
});
