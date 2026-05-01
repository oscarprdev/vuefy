import { defineCommand } from 'citty'
import { resolve } from 'node:path'
import { resolveComponent, type ComponentName } from './add/resolver.js'
import { copyComponent } from './add/copy.js'
import { readComponentsConfig } from '../utils/file-utils.js'

export default defineCommand({
  meta: {
    name: 'add',
    description: 'Add a component from the Vuefy registry',
  },
  args: {
    component: {
      type: 'positional',
      description: 'Component name to add (e.g., button)',
    },
  },
  async run({ args }) {
    try {
      const componentName = (args.component ?? '') as string

      if (!componentName) {
        console.error('Error: Please specify a component name (e.g., "vuefy add button")')
        process.exit(1)
      }

      const targetDir = process.cwd()

      const config = await readComponentsConfig(targetDir)
      if (!config) {
        console.error(
          'Error: components.json not found. Please run "vuefy init" first.',
        )
        process.exit(1)
      }

      const resolved = resolveComponent(componentName)
      if (!resolved) {
        console.error(
          `Error: Component "${componentName}" not found in the Vuefy registry.`,
        )
        process.exit(1)
      }

      const targetPath = await copyComponent(
        resolved.path,
        targetDir,
        config.importPathPrefix,
      )

      console.log(`\nComponent "${componentName}" added successfully!`)
      console.log(`  Path: ${targetPath.replace(process.cwd(), '@')}`)
    }
    catch (error) {
      if (error instanceof Error && error.message === 'User force closed the prompt') {
        console.log('\nAdd aborted.')
      }
      else {
        console.error('\nError:', error instanceof Error ? error.message : String(error))
      }
      process.exit(1)
    }
  },
})
