import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import type { ComponentsConfig } from '../commands/init/prompts.js'
import type { GeneratedFile } from '../commands/init/generator.js'

/**
 * Writes a generated file to disk, creating parent directories as needed.
 */
export async function writeGeneratedFile(baseDir: string, file: GeneratedFile): Promise<void> {
  const fullPath = resolve(baseDir, file.path)

  await mkdir(dirname(fullPath), { recursive: true })
  await writeFile(fullPath, file.content, 'utf-8')
}

/**
 * Reads and parses components.json if it exists.
 */
export async function readComponentsConfig(
  baseDir: string,
): Promise<ComponentsConfig | null> {
  const configPath = resolve(baseDir, 'components.json')

  try {
    const content = await readFile(configPath, 'utf-8')
    return JSON.parse(content) as ComponentsConfig
  }
  catch {
    return null
  }
}
