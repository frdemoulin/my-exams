// eslint.config.mjs
import nextConfig from 'eslint-config-next';

const config = [
  {
    ignores: ['**/node_modules/**', '.next/**', '.open-next/**', '.vercel/**', 'dist/**', 'coverage/**'],
  },
  ...nextConfig,
];

export default config;
