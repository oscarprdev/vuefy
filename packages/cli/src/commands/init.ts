import { defineCommand } from 'citty'
import { resolve, relative, sep } from 'node:path'
import { existsSync } from 'node:fs'
import { select, input, confirm } from '@inquirer/prompts'
import type { ComponentsConfig } from './init/prompts.js'
import { generateFiles } from './init/generator.js'
import { writeGeneratedFile } from '../utils/file-utils.js'
import { detectPackageManager, detectFramework, detectCssPath } from '../utils/fs.js'

export function sanitizePath(baseDir: string, userPath: string): string {
  const resolved = resolve(baseDir, userPath)
  const relativePath = relative(baseDir, resolved)

  if (relativePath.startsWith('..' + sep) || relativePath.startsWith('..')) {
    throw new Error(`Path "${userPath}" escapes the target directory`)
  }

  return relativePath
}

export default defineCommand({
  meta: {
    name: 'init',
    description: 'Scaffold a project with Tailwind v4, design tokens, and components.json',
  },
  args: {
    dir: {
      type: 'string',
      description: 'Target directory to scaffold',
    },
  },
  async run({ args }) {
    try {
      const targetDir = (args.dir ?? process.cwd()) as string

      // Check if components.json already exists
      const existingConfigPath = resolve(targetDir, 'components.json')
      if (existsSync(existingConfigPath)) {
        console.log('\nA components.json file already exists in this directory.')
        const overwrite = await confirm({
          message: 'Would you like to overwrite it?',
          default: false,
        })

        if (!overwrite) {
          console.log('Init aborted. Your existing configuration was preserved.')
          return
        }
      }

      // Auto-detect package manager
      const packageManager = detectPackageManager(targetDir)

      // Auto-detect framework
      const detectedFramework = detectFramework(targetDir)

      // Auto-detect CSS path
      const detectedCssPath = detectCssPath(targetDir)

      // Interactive prompts
      const framework = await select({
        message: 'Which framework are you using?',
        choices: [
          { name: 'Vite', value: 'vite' },
          { name: 'Nuxt', value: 'nuxt' },
        ],
        default: detectedFramework,
      }) as 'vite' | 'nuxt'

      const themeVariant = await select({
        message: 'Choose a theme variant:',
        choices: [
          { name: 'Dark', value: 'dark' },
          { name: 'Light', value: 'light' },
          { name: 'System', value: 'system' },
        ],
        default: 'dark',
      }) as 'dark' | 'light' | 'system'

      const tokenSet = await select({
        message: 'Choose token set order:',
        choices: [
          { name: 'Dark-first — Dark tokens as base, light in media query', value: 'dark-first' },
          { name: 'Light-first — Light tokens as base, dark in media query', value: 'light-first' },
        ],
        default: 'dark-first',
      }) as 'dark-first' | 'light-first'

      const importPathPrefix = await input({
        message: 'Import path prefix:',
        default: '@/components',
      }) as string

      const tailwindCssPath = await input({
        message: 'Tailwind CSS file path:',
        default: detectedCssPath,
      }) as string

      // Sanitize paths to prevent traversal
      const safeCssPath = sanitizePath(targetDir, tailwindCssPath)

      // Build config
      const config: ComponentsConfig = {
        $schema: 'https://vuefy.dev/schema.json',
        framework,
        themeVariant,
        tokenSet,
        importPathPrefix,
        tailwindCssPath: safeCssPath,
        packageManager,
      }

      // Generate files
      const files = generateFiles(config)

      // Write files
      for (const file of files) {
        await writeGeneratedFile(targetDir, file)
      }

      console.log('\nProject scaffolded successfully!')
      console.log(`  Framework: ${framework}`)
      console.log(`  Theme: ${themeVariant} (${tokenSet})`)
      console.log(`  Import prefix: ${importPathPrefix}`)
      console.log(`  CSS path: ${safeCssPath}`)
      console.log(`  Package manager: ${packageManager}`)
      console.log('\nNext steps:')
      console.log(`  1. Tailwind v4 is configured in: ${safeCssPath}`)
      console.log('  2. Run "vuefy add <component>" to add components')
      console.log('  3. Customize tokens in your CSS file')
    }
    catch (error) {
      if (error instanceof Error && error.message === 'User force closed the prompt') {
        console.log('\nInit aborted.')
      }
      else {
        console.error('\nError:', error instanceof Error ? error.message : String(error))
      }
      process.exit(1)
    }
  },
})
