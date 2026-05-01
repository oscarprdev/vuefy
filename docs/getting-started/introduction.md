---
outline: deep
---

# Introduction

Vuefy is a **source-code-copy design system** for Vue 3. It wraps [vuetify0](https://0.vuetifyjs.com) headless primitives with production-ready [Tailwind CSS v4](https://tailwindcss.com) styling and delivers components via a CLI that copies source code into your project. **You own every line.**

## Philosophy

Unlike component libraries that you install as dependencies, Vuefy gives you full ownership of your UI code. Components are copied into your project where you can inspect, modify, and extend them without being bound by upstream releases.

## Key Features

- **Source code ownership** — Components live in your project. Customize, extend, or delete anything.
- **Clean slot-based API** — Wraps v0 headless primitives internally. Use props, slots, and sub-components without ever touching v0.
- **CLI-driven** — `vuefy init` to set up, `vuefy add button dialog tabs` to pick what you need.
- **Tailwind CSS v4** — CSS-first configuration with `@theme` blocks. No `tailwind.config.js`.
- **Dark + Light themes** — Dual default token sets. Modify CSS directly after init.
- **Full accessibility** — WAI-ARIA compound components via vuetify0. Keyboard navigation out of the box.
- **~28 UI components** — Buttons, forms, dialogs, overlays, data display, navigation, and more.
- **Iconify integration** — 150k+ icons across 100+ sets. Lucide as the default.
- **Smart updates** — `--dry-run`, `--diff`, `--overwrite` with smart merge that preserves your customizations.
- **Auto-dependency resolution** — Add `select` and the CLI prompts to also add `popover`.

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
| Docs | VitePress |
| Monorepo | pnpm workspaces |

## Architecture

```
Vuefy Monorepo
├── packages/cli        → vuefy CLI tool (published as vuefy)
├── packages/core       → Component registry & templates (published as @vuefy/core)
└── docs/               → VitePress documentation site
```

## What's Out of Scope (v1)

- i18n / internationalization
- Form validation libraries (vee-validate, Zod)
- Chart components
- Visual regression testing
- Mobile-specific touch interactions
- Performance benchmarks
