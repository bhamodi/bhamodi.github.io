import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// baraa.ca is served from the domain root (custom domain via CNAME),
// so the base path is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
