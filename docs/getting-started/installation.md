---
outline: deep
---

# Installation

How to install and set up Vuefy in your project.

## Prerequisites

- **Node.js** 18+
- **Vue 3.5+** project
- **Tailwind CSS v4** installed and configured
- **pnpm**, npm, yarn, or bun

## New Project

If you're starting from scratch, create a new Vite + Vue project first:

```bash
pnpm create vite my-app --template vue-ts
cd my-app
pnpm install
```

Then install Tailwind CSS v4:

```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

Add the Tailwind import to your CSS:

```css
/* src/style.css */
@import "tailwindcss";
```

Update your `vite.config.ts` to include the Tailwind plugin:

```ts
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```

## Initialize Vuefy

Run the Vuefy init command to scaffold your project:

```bash
npx vuefy@latest init
```

The CLI will guide you through setup:

1. **Detect your framework** — Automatically detects Vite or Nuxt
2. **Detect your package manager** — pnpm, npm, yarn, or bun
3. **Configure import alias** — Sets up `@/components/ui/` path
4. **Generate theme tokens** — Creates CSS with `@theme` blocks for light/dark modes
5. **Generate DESIGN.md** — A template design system document for your team

## Add Components

After initialization, add only the components you need:

```bash
npx vuefy@latest add button dialog tabs
```

You can add multiple components at once. Vuefy will automatically resolve and prompt for dependencies (e.g., adding `select` will also suggest `popover`).

Components land in `@/components/ui/` and are ready to import:

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
</script>
```

## Manual Setup (Existing Project)

If you already have a Vue + Tailwind project, follow these steps:

### 1. Install dependencies

```bash
pnpm add @vuetify/v0 @iconify/vue
```

### 2. Configure path alias

Make sure your `tsconfig.json` has the `@` alias:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 3. Run the CLI

```bash
npx vuefy@latest init
```

### 4. Add components

```bash
npx vuefy@latest add button
```

## Project Structure

After initialization, your project will look like this:

```
my-app/
├── components.json          # Vuefy configuration
├── src/
│   ├── components/
│   │   └── ui/              # Copied component source files
│   │       ├── button/
│   │       ├── dialog/
│   │       └── ...
│   ├── styles/
│   │   └── globals.css      # Tailwind + Vuefy theme tokens
│   └── App.vue
└── DESIGN.md                # Design system documentation
```
