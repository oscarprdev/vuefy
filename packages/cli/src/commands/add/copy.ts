import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { resolve, dirname, isAbsolute } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export interface ComponentTemplate {
  name: string
  path: string
}

export async function copyComponent(
  registryPath: string,
  targetDir: string,
  importPathPrefix: string,
): Promise<string> {
  const corePackagePath = resolve(__dirname, '..', '..', '..', 'core', 'src')
  const fullPath = isAbsolute(registryPath)
    ? registryPath
    : resolve(corePackagePath, registryPath)

  const content = await readFile(fullPath, 'utf-8')

  const uiDir = resolve(targetDir, 'components', 'ui')
  const fileName = `${registryPath.split('/').pop()!.replace('.vue', '')}.vue`
  const targetPath = resolve(uiDir, fileName)

  await mkdir(dirname(targetPath), { recursive: true })
  await writeFile(targetPath, content, 'utf-8')

  return targetPath
}
