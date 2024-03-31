import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.VITE_REACT_APP_VERSION': JSON.stringify(packageJson.version),
  },
  server: {
    port: 3005,
    host: 'localhost',
    fs: {
      allow: ['..'],
    },
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  build: {
    minify: 'terser',
    brotliSize: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@stripe/stripe-js')) {
            return '@stripe/stripe-js';
          } else if (id.includes('@mui/material')) {
            return 'mui-material';
          } else if (id.includes('react-boilerplate-app')) {
            return 'react-boilerplate-app';
          } else if (id.includes('react-boilerplate-md')) {
            return 'react-boilerplate-md';
          }
        },
      },
    },
  },
  plugins: [
    react(),
    eslint(),
    viteTsconfigPaths({
      root: './',
    }),
    svgrPlugin(),
  ],
});
