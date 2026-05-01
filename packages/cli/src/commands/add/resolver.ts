export const registry: Record<string, string> = {
  button: './components/button/button.vue',
}

export type ComponentName = keyof typeof registry

export function resolveComponent(name: string): { name: string; path: string } | null {
  const path = registry[name]
  if (path) {
    return { name, path }
  }
  return null
}
