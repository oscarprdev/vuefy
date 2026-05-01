/**
 * Registry mapping component CLI names to their template file paths.
 * Used by the `vui add` CLI command to locate component templates.
 */
export const registry: Record<string, string> = {
  button: './components/button/button.vue',
}

export type ComponentName = keyof typeof registry
