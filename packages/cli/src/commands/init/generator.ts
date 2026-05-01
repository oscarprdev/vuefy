import type { ComponentsConfig } from './prompts'

export interface GeneratedFile {
  path: string
  content: string
}

export function generateFiles(config: ComponentsConfig): GeneratedFile[] {
  return [
    {
      path: 'components.json',
      content: JSON.stringify(config, null, 2),
    },
    {
      path: config.tailwindCssPath,
      content: globalCssTemplate(config),
    },
    {
      path: 'DESIGN.md',
      content: designMdTemplate(),
    },
  ]
}

function globalCssTemplate(config: ComponentsConfig): string {
  const isDarkFirst = config.tokenSet === 'dark-first'

  return `@import "tailwindcss";

@theme {
  --color-background: ${isDarkFirst ? '#000000' : '#ffffff'};
  --color-foreground: ${isDarkFirst ? '#ffffff' : '#000000'};
  --color-card: ${isDarkFirst ? '#0a0a0a' : '#ffffff'};
  --color-card-foreground: ${isDarkFirst ? '#ffffff' : '#000000'};
  --color-popover: ${isDarkFirst ? '#0a0a0a' : '#ffffff'};
  --color-popover-foreground: ${isDarkFirst ? '#ffffff' : '#000000'};
  --color-primary: ${isDarkFirst ? '#ffffff' : '#000000'};
  --color-primary-foreground: ${isDarkFirst ? '#000000' : '#ffffff'};
  --color-secondary: ${isDarkFirst ? '#1a1a1a' : '#f5f5f5'};
  --color-secondary-foreground: ${isDarkFirst ? '#ffffff' : '#000000'};
  --color-muted: ${isDarkFirst ? '#1a1a1a' : '#f5f5f5'};
  --color-muted-foreground: ${isDarkFirst ? '#a0a0a0' : '#737373'};
  --color-accent: ${isDarkFirst ? '#1a1a1a' : '#f5f5f5'};
  --color-accent-foreground: ${isDarkFirst ? '#ffffff' : '#000000'};
  --color-destructive: ${isDarkFirst ? '#3b1616' : '#7f1d1d'};
  --color-destructive-foreground: ${isDarkFirst ? '#ffffff' : '#ffffff'};
  --color-border: ${isDarkFirst ? '#1a1a1a' : '#e5e5e5'};
  --color-input: ${isDarkFirst ? '#2a2a2a' : '#e5e5e5'};
  --color-ring: ${isDarkFirst ? '#3b3b3b' : '#e5e5e5'};
  --color-chart-1: ${isDarkFirst ? '#3b82f6' : '#3b82f6'};
  --color-chart-2: ${isDarkFirst ? '#6366f1' : '#6366f1'};
  --color-chart-3: ${isDarkFirst ? '#8b5cf6' : '#8b5cf6'};
  --color-chart-4: ${isDarkFirst ? '#a855f7' : '#a855f7'};
  --color-chart-5: ${isDarkFirst ? '#d946ef' : '#d946ef'};
  --color-radius: 0.5rem;
}

${
  config.themeVariant === 'system'
    ? `@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: #000000;
    --color-foreground: #ffffff;
    --color-card: #0a0a0a;
    --color-card-foreground: #ffffff;
    --color-popover: #0a0a0a;
    --color-popover-foreground: #ffffff;
    --color-primary: #ffffff;
    --color-primary-foreground: #000000;
    --color-secondary: #1a1a1a;
    --color-secondary-foreground: #ffffff;
    --color-muted: #1a1a1a;
    --color-muted-foreground: #a0a0a0;
    --color-accent: #1a1a1a;
    --color-accent-foreground: #ffffff;
    --color-destructive: #3b1616;
    --color-destructive-foreground: #ffffff;
    --color-border: #1a1a1a;
    --color-input: #2a2a2a;
    --color-ring: #3b3b3b;
  }
}`
    : ''
}
`
}

function designMdTemplate(): string {
  return `# Design Tokens

This file documents the design tokens used in the project.

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| \`--color-background\` | | Page background |
| \`--color-foreground\` | | Default text color |
| \`--color-card\` | | Card backgrounds |
| \`--color-primary\` | | Primary actions |
| \`--color-secondary\` | | Secondary actions |
| \`--color-muted\` | | Muted text, backgrounds |
| \`--color-accent\` | | Accent highlights |
| \`--color-destructive\` | | Error/danger states |
| \`--color-border\` | | Borders, dividers |
| \`--color-input\` | | Input field backgrounds |

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| \`--radius-sm\` | 0.25rem | Small border radius |
| \`--radius-md\` | 0.5rem | Default border radius |
| \`--radius-lg\` | 1rem | Large border radius |

## Typography

| Token | Value | Usage |
|-------|-------|-------|
| \`--font-sans\` | | Default font family |
| \`--font-mono\` | | Monospace font family |
`
}
