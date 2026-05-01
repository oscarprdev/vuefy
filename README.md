<div align="center">

# Vuefy

Headless UI components built on [vuetify0](https://0.vuetifyjs.com), styled with [Tailwind CSS v4](https://tailwindcss.com), and delivered via a CLI that copies source code into your project. You own every line.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3-green.svg)](https://vuejs.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-full-blue.svg)](https://typescriptlang.org)

</div>

---

## Key Features

- **Source code ownership** — Components are copied into your project. Customize, extend, or delete anything.
- **Clean slot-based API** — Wraps v0 headless primitives internally. Use props, slots, and sub-components without ever touching v0.
- **CLI-driven** — `vui init` to set up, `vui add button dialog tabs` to pick what you need.
- **Tailwind CSS v4** — CSS-first configuration with `@theme` blocks. No `tailwind.config.js`.
- **Dark + Light themes** — Dual default token sets. Modify CSS directly after init.
- **Full accessibility** — WAI-ARIA compound components via vuetify0. Keyboard navigation out of the box.
- **~28 UI components** — Buttons, forms, dialogs, overlays, data display, navigation, and more.
- **Iconify integration** — 150k+ icons across 100+ sets. Lucide as the default.
- **Smart updates** — `--dry-run`, `--diff`, `--overwrite` with smart merge that preserves your customizations.
- **Auto-dependency resolution** — Add `select` and the CLI prompts to also add `popover`.

## Quick Start

```bash
# Initialize Vuefy in your Vite or Nuxt project
npx vui@latest init

# Add individual components
npx vui@latest add button dialog tabs select form
```

That's it. Components land in `@/components/ui/` and you're ready to build.

## Example Usage

### Dialog

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'

const open = ref(false)
</script>

<template>
  <Dialog v-model:open="open">
    <template #trigger>
      <Button variant="outline">Open Dialog</Button>
    </template>

    <template #title>Dialog Title</template>
    <template #description>
      A beautiful dialog with full accessibility.
    </template>

    <template #default>
      <p>Dialog body content goes here.</p>
    </template>

    <template #footer>
      <Button variant="secondary" @click="open = false">Cancel</Button>
      <Button @click="open = false">Confirm</Button>
    </template>
  </Dialog>
</template>
```

### Tabs

```vue
<script setup lang="ts">
import { Tabs } from '@/components/ui/tabs'

const activeTab = ref('overview')
</script>

<template>
  <Tabs v-model="activeTab">
    <template #tabs>
      <Tabs.Item value="overview">Overview</Tabs.Item>
      <Tabs.Item value="details">Details</Tabs.Item>
    </template>
    <template #panels>
      <Tabs.Panel value="overview">Overview content</Tabs.Panel>
      <Tabs.Panel value="details">Details content</Tabs.Panel>
    </template>
  </Tabs>
</template>
```

### Button

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { LucidePlus } from 'lucide-vue-next'
</script>

<template>
  <Button variant="primary">
    <template #icon><LucidePlus /></template>
    Create
  </Button>
</template>
```

## Architecture

```
Vuefy Monorepo
├── packages/cli        → vui CLI tool (published as @vui/cli)
├── packages/core       → Component registry & templates (published as @vui/core)
└── docs/               → VitePress documentation site
```

- **vuetify0** — Headless Vue 3 primitives (36 components, 63 composables). Logic only, zero styling.
- **Tailwind CSS v4** — CSS-first styling with `@theme` blocks for design tokens.
- **Iconify** — On-demand icon rendering via `@iconify/vue`.

## Component Inventory

| Category | Components |
|---|---|
| **Actions** | Button, Toggle |
| **Forms** | Checkbox, Combobox, Form, Input, NumberField, Radio, Rating, Select, Slider, Switch |
| **Disclosure** | AlertDialog, Collapsible, Dialog, ExpansionPanel, Popover, Tabs, Treeview |
| **Semantic** | Avatar, Breadcrumbs, Carousel, Pagination, Snackbar, Splitter |

Infrastructure primitives (Atom, Portal, Presence, etc.) are available directly from `@vuetify/v0` and not shipped as vui components.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 with `<script setup lang="ts">` |
| Headless primitives | [vuetify0](https://0.vuetifyjs.com) |
| Styling | Tailwind CSS v4 (CSS-first) |
| Icons | Iconify (lucide default) |
| Animations | Tailwind transitions + Vue `<Transition>` |
| Forms | Native HTML5 validation + `data-invalid`/`aria-invalid` |
| Overlays | v0 `useStack` + `Portal` (z-index, focus trap, scroll lock) |
| Accessibility | WAI-ARIA compound components |
| Testing | Vitest + Vue Test Utils |
| Docs | VitePress |
| CI/CD | GitHub Actions + changesets |
| Monorepo | pnpm workspaces |

## What's Out of Scope (v1)

- i18n / internationalization
- Form validation libraries (vee-validate, Zod)
- Chart components
- Visual regression testing
- Mobile-specific touch interactions
- Performance benchmarks

## Contributing

This project is in active development. See the [PRD](docs/PRD.md) for the full product specification.

## License

MIT
