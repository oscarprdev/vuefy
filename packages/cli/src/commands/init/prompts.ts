export interface ComponentsConfig {
  $schema: string;
  framework: 'vite' | 'nuxt';
  themeVariant: 'dark' | 'light' | 'system';
  tokenSet: 'dark-first' | 'light-first';
  importPathPrefix: string;
  tailwindCssPath: string;
  packageManager: 'pnpm' | 'npm' | 'yarn';
}
