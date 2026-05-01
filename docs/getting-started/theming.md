---
outline: deep
---

# Theming

Vuefy uses Tailwind CSS v4's CSS-first `@theme` blocks for design tokens. No `tailwind.config.js` required.

## Default Theme

When you run `vuefy init`, it generates a global CSS file with default light and dark theme tokens:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-background: #ffffff;
  --color-foreground: #030712;
  --color-muted: #f1f5f9;
  --color-muted-foreground: #64748b;
  --color-popover: #ffffff;
  --color-popover-foreground: #030712;
  --color-primary: #6366f1;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f1f5f9;
  --color-secondary-foreground: #0f172a;
  --color-destructive: #ef4444;
  --color-destructive-foreground: #ffffff;
  --color-border: #e2e8f0;
  --color-input: #e2e8f0;
  --color-ring: #6366f1;
  --color-accent: #f1f5f9;
  --color-accent-foreground: #0f172a;

  /* Typography */
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: #030712;
    --color-foreground: #f8fafc;
    --color-muted: #1e293b;
    --color-muted-foreground: #94a3b8;
    --color-popover: #030712;
    --color-popover-foreground: #f8fafc;
    --color-primary: #818cf8;
    --color-primary-foreground: #0f172a;
    --color-secondary: #1e293b;
    --color-secondary-foreground: #f8fafc;
    --color-destructive: #f87171;
    --color-destructive-foreground: #0f172a;
    --color-border: #1e293b;
    --color-input: #1e293b;
    --color-ring: #818cf8;
    --color-accent: #1e293b;
    --color-accent-foreground: #f8fafc;
  }
}
```

## Customizing Colors

Override any token by redefining it in your CSS:

```css
@theme {
  --color-primary: #ec4899;
  --color-primary-foreground: #ffffff;
}
```

## Customizing Spacing and Sizing

You can also customize spacing, radii, and other design tokens:

```css
@theme {
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}
```

## Dark Mode

Vuefy supports both automatic dark mode (via `prefers-color-scheme`) and manual toggling.

### Automatic Dark Mode

The default theme uses `@media (prefers-color-scheme: dark)` to automatically switch tokens.

### Manual Dark Mode Toggle

To manually toggle dark mode, use a CSS class approach:

```css
@theme {
  --color-background: #ffffff;
  --color-foreground: #030712;
  /* ... other light tokens ... */
}

.dark {
  --color-background: #030712;
  --color-foreground: #f8fafc;
  /* ... other dark tokens ... */
}
```

Then toggle the `dark` class on your root element:

```vue
<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const isDark = ref(false)

watchEffect(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <button @click="isDark = !isDark">
    Toggle theme
  </button>
</template>
```

## Token Reference

| Token | Description | Default (Light) | Default (Dark) |
|---|---|---|---|
| `--color-background` | Page background | `#ffffff` | `#030712` |
| `--color-foreground` | Default text | `#030712` | `#f8fafc` |
| `--color-primary` | Primary brand color | `#6366f1` | `#818cf8` |
| `--color-primary-foreground` | Text on primary | `#ffffff` | `#0f172a` |
| `--color-secondary` | Secondary background | `#f1f5f9` | `#1e293b` |
| `--color-muted` | Muted background | `#f1f5f9` | `#1e293b` |
| `--color-muted-foreground` | Muted text | `#64748b` | `#94a3b8` |
| `--color-destructive` | Error/destructive | `#ef4444` | `#f87171` |
| `--color-border` | Borders | `#e2e8f0` | `#1e293b` |
| `--color-input` | Input borders | `#e2e8f0` | `#1e293b` |
| `--color-ring` | Focus ring | `#6366f1` | `#818cf8` |
| `--color-accent` | Accent background | `#f1f5f9` | `#1e293b` |
