// eslint.config.mjs
import nextConfig from 'eslint-config-next';

const config = [
  {
    ignores: ['**/node_modules/**', '.next/**', '.next_stale_*/**', '.open-next/**', '.vercel/**', 'dist/**', 'coverage/**', '.kilo/**'],
  },
  ...nextConfig,
];

export default config;
