import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

/**
 * Detects the package manager by checking for lockfiles in the given directory.
 */
export function detectPackageManager(baseDir: string): 'pnpm' | 'npm' | 'yarn' {
  const lockfiles = [
    { file: 'pnpm-lock.yaml', manager: 'pnpm' as const },
    { file: 'package-lock.json', manager: 'npm' as const },
    { file: 'yarn.lock', manager: 'yarn' as const },
  ]

  for (const { file, manager } of lockfiles) {
    if (existsSync(resolve(baseDir, file))) {
      return manager
    }
  }

  return 'pnpm'
}

/**
 * Detects the framework by checking for config files in the given directory.
 */
export function detectFramework(baseDir: string): 'vite' | 'nuxt' {
  const viteConfigPatterns = [
    'vite.config.ts',
    'vite.config.js',
    'vite.config.mts',
    'vite.config.mjs',
  ]

  const nuxtConfigPatterns = [
    'nuxt.config.ts',
    'nuxt.config.js',
    'nuxt.config.mts',
    'nuxt.config.mjs',
  ]

  for (const pattern of viteConfigPatterns) {
    if (existsSync(resolve(baseDir, pattern))) {
      return 'vite'
    }
  }

  for (const pattern of nuxtConfigPatterns) {
    if (existsSync(resolve(baseDir, pattern))) {
      return 'nuxt'
    }
  }

  return 'vite'
}

/**
 * Detects the CSS file path for Tailwind v4 setup.
 */
export function detectCssPath(baseDir: string): string {
  const cssPatterns = [
    'src/style.css',
    'src/assets/css/main.css',
    'styles/main.css',
    'assets/css/tailwind.css',
    'src/index.css',
    'style.css',
  ]

  for (const pattern of cssPatterns) {
    if (existsSync(resolve(baseDir, pattern))) {
      return pattern
    }
  }

  return 'src/style.css'
}
