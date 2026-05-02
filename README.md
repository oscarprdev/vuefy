<div align="center">

# Vuefy

> Headless UI components for Vue 3 — styled with Tailwind CSS v4, delivered via CLI.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vue 3.5+](https://img.shields.io/badge/Vue-3.5%2B-646CFF.svg)](https://vuejs.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-full-blue.svg)](https://typescriptlang.org)
[![pnpm](https://img.shields.io/badge/pnpm-≥9.0-6C6CE3.svg)](https://pnpm.io)
[![vuetify0](https://img.shields.io/badge/v0-0.1.0-6366f1.svg)](https://0.vuetifyjs.com)

[Documentation](https://vuefy.dev) · [Components](https://vuefy.dev/components/button) · [CLI Reference](https://vuefy.dev/getting-started/cli)

</div>

---

Vuefy is a **source-code-copy design system** for Vue 3. It wraps [vuetify0](https://0.vuetifyjs.com) headless primitives with production-ready [Tailwind CSS v4](https://tailwindcss.com) styling and delivers components via a CLI that copies source code into your project. **You own every line.**

Unlike component libraries you install as dependencies, Vuefy gives you full ownership of your UI code. Components live in your project where you can inspect, modify, and extend them without being bound by upstream releases.

## Quick Start

```bash
# Initialize Vuefy in your Vite or Nuxt project
npx vuefy@latest init

# Add individual components (as many as you need)
npx vuefy@latest add button dialog tabs select form
```

Components land in `@/components/ui/` and are ready to import. That's it.

## Example

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

[See full component docs →](https://vuefy.dev/components/dialog)

## Philosophy

| Principle | What it means |
|---|---|
| **Source ownership** | Components are copied into your project — not installed as dependencies. Customize anything. |
| **Headless by default** | Logic is provided by vuetify0. You get clean, styled wrappers with zero headless complexity. |
| **Composition over inheritance** | Props, slots, and sub-components. Build complex UIs by composing small, focused pieces. |
| **Accessible first** | Every component ships with WAI-ARIA compound patterns, keyboard navigation, and focus management. |
| **CSS-first styling** | Tailwind CSS v4 `@theme` blocks replace config files. Design tokens live in CSS, not JS. |

## Key Features

- **Source code ownership** — Components are copied into your project. Customize, extend, or delete anything.
- **Clean slot-based API** — Wraps v0 headless primitives internally. Use props, slots, and sub-components without ever touching v0.
- **CLI-driven** — `vuefy init` to set up, `vuefy add button dialog tabs` to pick what you need.
- **Tailwind CSS v4** — CSS-first configuration with `@theme` blocks. No `tailwind.config.js`.
- **Dark + Light themes** — Dual default token sets with system preference support. Modify CSS directly after init.
- **Full accessibility** — WAI-ARIA compound components via vuetify0. Keyboard navigation out of the box.
- **24 UI components** — Buttons, forms, dialogs, overlays, data display, navigation, and more.
- **Iconify integration** — 150k+ icons across 100+ sets. Lucide as the default.
- **Smart updates** — `--dry-run`, `--diff`, `--overwrite` with smart merge that preserves your customizations.
- **Auto-dependency resolution** — Add `select` and the CLI prompts to also add `popover`.

## CLI Reference

### `vuefy init`

Scaffold a new Vuefy project with theme configuration, design tokens, and component registry.

```bash
npx vuefy@latest init [directory]
```

**Interactive prompts:**

| Prompt | Options | Default |
|---|---|---|
| Framework | Vite / Nuxt | Auto-detected |
| Theme Variant | Dark / Light / System | Dark |
| Token Set Order | Dark-first / Light-first | Dark-first |
| Import Path Prefix | Free text | `@/components` |
| Tailwind CSS File Path | Free text | Auto-detected |

**Generated files:**

| File | Purpose |
|---|---|
| `components.json` | Configuration tracking framework, theme, paths, and package manager |
| `globals.css` | Global styles with `@theme` design token blocks |
| `DESIGN.md` | Template design system documentation for your team |

### `vuefy add`

Copy components from the Vuefy registry into your project.

```bash
npx vuefy@latest add button dialog tabs
```

**Flags:**

| Flag | Description |
|---|---|
| `--dry-run` | Preview changes without writing files |
| `--diff` | Show a diff of what would change |
| `--overwrite` | Overwrite existing component files |

**Auto-dependency resolution:** Some components depend on others. When you add `select` or `combobox`, the CLI prompts to also add `popover`.

## Component Inventory

### Actions

| Component | Description |
|---|---|
| [Button](https://vuefy.dev/components/button) | Versatile button with 5 variants, 3 sizes, loading state, and icon slot |

### Forms

| Component | Description |
|---|---|
| [Checkbox](https://vuefy.dev/components/checkbox) | Accessible checkbox with indicator and label slots |
| [Combobox](https://vuefy.dev/components/combobox) | Searchable dropdown with client-side filtering |
| [Input](https://vuefy.dev/components/input) | Text input with label, prefix, suffix, and icon slots |
| [NumberField](https://vuefy.dev/components/number-field) | Number input with increment/decrement buttons and clamping |
| [Radio Group](https://vuefy.dev/components/radio-group) | Compound radio button group |
| [Rating](https://vuefy.dev/components/rating) | Star-based rating widget with hover preview |
| [Select](https://vuefy.dev/components/select) | Dropdown select menu backed by popover |
| [Slider](https://vuefy.dev/components/slider) | Range slider with thumb and track sub-components |
| [Switch](https://vuefy.dev/components/switch) | Toggle switch with thumb animation |

### Disclosure

| Component | Description |
|---|---|
| [Alert Dialog](https://vuefy.dev/components/alert-dialog) | Confirmation dialog for destructive actions |
| [Collapsible](https://vuefy.dev/components/collapsible) | Expandable content section with transition animation |
| [Dialog](https://vuefy.dev/components/dialog) | Modal dialog with portal, focus trap, and scroll lock |
| [Expansion Panel](https://vuefy.dev/components/expansion-panel) | Accordion-style expandable panels |
| [Popover](https://vuefy.dev/components/popover) | Floating content overlay with side placement |
| [Sheet](https://vuefy.dev/components/sheet) | Slide-in drawer with 4 side options |
| [Tabs](https://vuefy.dev/components/tabs) | Tabbed content with horizontal/vertical orientation |
| [Treeview](https://vuefy.dev/components/treeview) | Hierarchical tree navigation |

### Semantic

| Component | Description |
|---|---|
| [Avatar](https://vuefy.dev/components/avatar) | User avatar with image and text fallback |
| [Breadcrumbs](https://vuefy.dev/components/breadcrumbs) | Navigation breadcrumb trail with separator |
| [Carousel](https://vuefy.dev/components/carousel) | Content carousel with scroll snap and navigation |
| [Pagination](https://vuefy.dev/components/pagination) | Page navigation with prev/next controls |
| [Snackbar](https://vuefy.dev/components/snackbar) | Auto-dismissing notification toast with action |
| [Splitter](https://vuefy.dev/components/splitter) | Resizable split panes |

> **62 Vue single-file components** across 24 component directories. Infrastructure primitives (Atom, Portal, Presence, etc.) are available directly from `@vuetify/v0`.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 with `<script setup lang="ts">` |
| Headless primitives | [vuetify0](https://0.vuetifyjs.com) |
| Styling | Tailwind CSS v4 (CSS-first) |
| Icons | Iconify (Lucide default) |
| Animations | Tailwind transitions + Vue `<Transition>` |
| Forms | Native HTML5 validation + `data-invalid`/`aria-invalid` |
| Overlays | v0 `useStack` + `Portal` (z-index, focus trap, scroll lock) |
| Accessibility | WAI-ARIA compound components |
| Docs | [VitePress](https://vitepress.dev) |
| CI/CD | GitHub Actions + changesets |
| Monorepo | pnpm workspaces |

## Architecture

```
Vuefy Monorepo
├── packages/cli        → vuefy CLI tool (published as vuefy)
│   ├── commands/       → init, add commands
│   ├── utils/          → file utilities, fs detection
│   └── src/            → citty-based CLI entry point
├── packages/core       → Component registry & templates (published as @vuefy/core)
│   ├── components/     → 24 component directories (62 .vue files)
│   └── src/            → registry + dependency map
└── docs/               → VitePress documentation site
    ├── getting-started/  → Introduction, installation, theming, CLI, monorepo
    └── components/       → 24 component documentation pages
```

### Component Pattern

Every Vuefy component follows a consistent architecture:

- **Wrapper pattern** — Wraps `@vuetify/v0` headless primitives with accessible, styled markup
- **Composition API** — `<script setup lang="ts">` with typed props and emits
- **Slot-based API** — Flexible composition via named slots for trigger, content, footer, etc.
- **Compound components** — Complex components expose sub-components (e.g., `Dialog.Title`, `Dialog.Close`)
- **CSS-only styling** — All styling via Tailwind utility classes. No `<style>` blocks
- **Icon slots** — Consistent `#icon` slot pattern for Lucide icon integration
- **Two-way binding** — `v-model` convention for stateful components

## What's Out of Scope (v1)

- i18n / internationalization
- Form validation libraries (vee-validate, Zod)
- Chart components
- Visual regression testing
- Mobile-specific touch interactions
- Performance benchmarks

## Contributing

This project is in active development. See the [PRD](.agents/PRD.md) for the full product specification and the [VitePress docs](https://vuefy.dev/getting-started/introduction) for detailed component documentation.

## License

[MIT](LICENSE) — Copyright © 2025 Vuefy
