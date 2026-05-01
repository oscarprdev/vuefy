# Plan: Vuefy — Vue Design System (shadcn/ui equivalent for Vue)

> Source PRD: docs/PRD.md

## Architectural decisions

Durable decisions that apply across all phases:

- **Monorepo**: pnpm workspaces with `packages/cli` (published as `vuefy`), `packages/core` (published as `@vuefy/core`), `docs/` (VitePress)
- **Component model**: Every component is a single `.vue` SFC using `<script setup lang="ts">` with a `<template>` block. No `defineComponent` wrappers, no `h()` render functions. Compound components are directories with one `.vue` file per sub-component plus an `index.ts` for namespace re-exports (`Dialog.Trigger`, `Dialog.Content`, etc.). Props declared required in interfaces — `withDefaults` handles defaults. Static lookup objects use `as const` with `as keyof typeof` indexing.
- **Headless layer**: Wrappers around vuetify0 (`@vuetify/v0`) primitives. Users never import v0 directly.
- **Styling**: Tailwind CSS v4 with CSS-first configuration (`@import "tailwindcss"` + `@theme` blocks). No `tailwind.config.js`. Single global CSS file with design tokens as CSS custom properties.
- **Theme variants**: Light, Dark, System (follows `prefers-color-scheme`). Dual default token sets (dark-first, light-first) — user picks on init.
- **Configuration**: `components.json` tracks framework, theme variant, import path prefix, Tailwind CSS file path, package manager. Same format as shadcn's `components.json`.
- **Distribution**: CLI copies component source files into user projects. User owns every line. Components import via `@/components/ui/<name>.vue` path alias.
- **TypeScript**: Full strict mode (`strict: true`, `noUncheckedIndexedAccess`, `noImplicitOverride`). Types via `defineProps<T>()` and `defineSlots<T>()`.
- **Two-way binding**: All components use `v-model` convention (e.g., `v-model:open="open"`).
- **Validation**: Native HTML5 attributes only (`required`, `pattern`, `data-invalid`, `aria-invalid`). No external validation library.
- **Overlay system**: v0's `useStack` + `Portal` handles z-index stacking, focus trapping, scroll locking automatically.
- **Icons**: Iconify with Lucide as default set (150k+ icons across 100+ sets).
- **Animation**: Emil Kowalski principles — ease-out defaults, 200-300ms, transform + opacity only, hardware-accelerated.
- **CSS logical properties**: `ms-`, `me-`, `ps-`, `pe-` for RTL support.
- **Testing**: Vitest + Vue Test Utils. Tests cover external behavior only: props, emits, rendered output, keyboard interactions, ARIA attributes.
- **Out of scope v1**: i18n, RTL testing, visual regression testing, standalone composables, SSR testing, chart components.

---

## Phase 1: Monorepo scaffold + CLI init

**User stories**: 1, 3, 4, 15, 17, 20, 22, 30

### What to build

Set up the monorepo structure and implement the `vuefy init` command. The CLI scaffolds a user's project with Tailwind v4 CSS setup, design tokens, `components.json`, and framework detection (Vite or Nuxt). Users run `npx vuefy@latest` with no global install.

### Acceptance criteria

- [ ] `pnpm init` creates workspace with `packages/cli`, `packages/core`, `docs/`
- [ ] `vuefy init` prompts for framework (Vite/Nuxt), theme (dark/light/system), import path
- [ ] Generates `components.json` with detected framework, theme variant, import alias
- [ ] Generates global CSS with `@theme` block and selected token set (dark-first or light-first)
- [ ] Generates Tailwind v4 setup (`@import "tailwindcss"` in CSS, no `tailwind.config.js`)
- [ ] Generates `DESIGN.md` template for documenting design tokens
- [ ] `vuefy init` works via `npx vuefy@latest` with no global install

### How to test

- CLI unit tests: mock filesystem, assert `components.json` content, CSS token correctness, framework detection logic
- Registry schema tests: validate `components.json` shape
- Integration test: run `vuefy init` against a temp directory, verify all files written and correct

---

## Phase 2: Single component end-to-end (Button)

**User stories**: 2, 9, 13, 18, 28, 30

### What to build

Implement `Button` as a registry template in `@vuefy/core` and wire `vuefy add button` to copy it into a scaffolded project. This proves the full copy → use pipeline. Button uses `<script setup>` + `<template>`, wraps v0 primitives, supports variants, slots for icon/loading, and Iconify integration.

### Acceptance criteria

- [ ] `@vuefy/core` contains `button.vue` registry template wrapping v0 primitives via `<script setup>` + `<template>`
- [ ] `vuefy add button` copies `button.vue` to `@/components/ui/button.vue` in user project
- [ ] Component uses `v-model` for two-way binding, TypeScript strict types via `defineProps<T>()`/`defineSlots<T>()`
- [ ] Icons via Iconify (lucide default), slots for `#icon`, `#loading`, `#default`
- [ ] Multiple variants (primary, outline, ghost, secondary, destructive)
- [ ] Generated component imports via `@/components/ui/button.vue` path alias

### How to test

- Component unit tests: render with default props, click emits, variant classes applied, icon slot renders, loading state
- CLI tests: `vuefy add button` writes file to correct path, file content matches registry template
- E2E smoke: scaffold a project, add button, verify it renders in a test component

---

## Phase 3: Overlay components (Dialog, Popover, Sheet, AlertDialog)

**User stories**: 7, 9, 11, 12, 19

### What to build

Implement compound overlay components that wrap v0 primitives with hard-coded skeletons. Each component exposes namespace sub-components and slots at predefined points. Portal, z-index stacking, focus trapping, and scroll locking are handled internally with zero user awareness.

### Acceptance criteria

- [ ] Each component is a wrapper SFC with namespace sub-components (`Dialog.Trigger`, `Dialog.Content`, etc.)
- [ ] Hard-coded v0 skeleton — slots exposed at predefined points, user cannot break ARIA structure
- [ ] Auto-wrapping: `#trigger` content wrapped in `V0Dialog.Trigger`, `#title` in `V0DialogTitle`, etc.
- [ ] Portal, z-index stacking, focus trapping, scroll locking handled internally (zero user awareness)
- [ ] `v-model:open` / `v-model:content` two-way binding on all overlay components
- [ ] Auto-dependency resolution: adding `select` prompts for `popover` dependency

### How to test

- Component tests: open/close via v-model, keyboard Escape closes, focus trapped inside overlay, scroll locked on body, ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`)
- Component structure: sub-components are separate `.vue` files re-exported with namespace properties, slot content wrapped correctly
- CLI tests: `vuefy add dialog popover` copies both files, dependency resolution prompts for popover when adding select

---

## Phase 4: Form primitives (Input, Select, Checkbox, Switch, Radio, NumberField, Combobox)

**User stories**: 7, 9, 10, 18

### What to build

Implement form field components with native HTML5 validation, v-model binding, and consistent prop APIs. Select uses Popover internally. Combobox has filtering. RadioGroup uses compound pattern. All fields use `data-invalid`/`aria-invalid` for error states without external validation libraries.

### Acceptance criteria

- [ ] All form fields use native HTML5 attributes: `required`, `pattern`, `data-invalid`, `aria-invalid`
- [ ] No external validation library — validation works via browser native validation
- [ ] v-model binding on all fields, consistent prop API across components
- [ ] Select uses Popover internally for dropdown, Combobox has filtering
- [ ] NumberField has increment/decrement buttons, label slot, input slot
- [ ] RadioGroup uses compound pattern with `RadioItem`, `RadioLabel`, `RadioIndicator`

### How to test

- Component tests: v-model updates propagate, `required` attribute present, `data-invalid` set on validation failure, `aria-invalid` mirrors validity, keyboard navigation in RadioGroup, Select dropdown opens/closes, Combobox filters options
- CLI tests: `vuefy add select` auto-prompts for `popover` dependency

---

## Phase 5: Compound data components (Tabs, ExpansionPanel, Treeview, Collapsible)

**User stories**: 9, 12, 19

### What to build

Implement compound components that use `createContext` for state sharing between root and children. Keyboard navigation (arrow keys, Enter/Space) is supported. Collapsible uses Vue `<Transition>` for animations. Treeview supports nested expandable items.

### Acceptance criteria

- [ ] Compound pattern: `Tabs` with `Tabs.Item` and `Tabs.Panel` sub-components, slots `#tabs` and `#panels`
- [ ] `createContext` for state sharing between root and children (no prop drilling)
- [ ] `v-model` binding on Tabs (active tab value), ExpansionPanel (open panels array)
- [ ] Keyboard navigation: arrow keys between tabs, Enter/Space to toggle panels
- [ ] Treeview supports nested items with expand/collapse triggers
- [ ] Collapsible uses `<Transition>` for expand/collapse animation

### How to test

- Component tests: active tab changes via v-model, arrow key navigation cycles items, Enter toggles panel, tree expand/collapse state, collapsible transition plays (check CSS classes added/removed), ARIA roles (`role="tablist"`, `role="tab"`, `role="tabpanel"`)
- Context tests: child sub-components receive correct state via inject

---

## Phase 6: Remaining semantic components (Avatar, Breadcrumbs, Carousel, Pagination, Snackbar, Splitter, Rating, Slider, Toggle)

**User stories**: 9, 13, 18

### What to build

Batch of simpler non-overlay components following the same wrapper pattern. Each uses `<script setup>` + `<template>`, TypeScript types, and slot APIs. Carousel has prev/next navigation. Pagination has item sub-components. Snackbar auto-dismisses. Splitter has resizable panels. Rating shows stars. Slider shows tooltips.

### Acceptance criteria

- [ ] All components follow the wrapper pattern with `<script setup>` + `<template>`, TypeScript types, slot APIs
- [ ] Carousel has prev/next navigation, slide slots
- [ ] Pagination has prev/next/item sub-components
- [ ] Snackbar auto-dismisses, has action slot
- [ ] Splitter has resizable panels with handle
- [ ] Rating shows icon stars, Slider shows tooltip on hover

### How to test

- Component tests: each component renders correctly, slots project content, interactive elements respond to clicks/keyboard
- Carousel: prev/next navigation, slide transitions
- Pagination: page change emits, correct page numbers rendered
- Snackbar: appears, auto-dismisses after timeout, action button works

---

## Phase 7: Form compound component (Form)

**User stories**: 9, 10, 12

### What to build

Implement the `Form` compound component with `FormField`, `FormSubmit`, and `FormMessage` sub-components. FormMessage displays native validation errors. FormSubmit triggers native validation. The `@submit` event fires only when validation passes.

### Acceptance criteria

- [ ] `Form` compound component with `FormField`, `FormSubmit`, `FormMessage` sub-components
- [ ] `FormField` accepts `name`, `label`, `required`, and field type props
- [ ] `FormMessage` displays native validation errors from browser
- [ ] `FormSubmit` triggers native form validation on click
- [ ] `@submit` event fires only when native validation passes

### How to test

- Component tests: form submits when valid, `FormMessage` shows error on invalid field, `FormSubmit` triggers validation, native `preventDefault` on submit, field names propagate to browser validation

---

## Phase 8: Smart updates (`vuefy update`)

**User stories**: 6, 8

### What to build

Implement the `vuefy update` command that lists installed components with available upstream versions. Supports `--dry-run` (no writes), `--diff` (unified diff output), and smart merge that preserves local customizations (user-added classes, slot content, props).

### Acceptance criteria

- [ ] `vuefy update` lists all installed components with available upstream versions
- [ ] `--dry-run` shows what would change without writing files
- [ ] `--diff` shows a unified diff between local file and upstream version
- [ ] Smart merge preserves local customizations (user-added classes, slot content, props)
- [ ] Update respects `components.json` paths and framework settings

### How to test

- CLI tests: dry-run outputs diff to stdout without writing, update command reads upstream registry, merge algorithm preserves added classes in rendered output, diff output matches expected unified diff format
- Integration test: modify a copied component, run update, verify customizations survive

---

## Phase 9: Documentation site (VitePress)

**User stories**: 21

### What to build

VitePress documentation site with getting started guide, live examples for every component, and API reference pages (props, slots, sub-components per component). Theme section showing dark/light/system variants.

### Acceptance criteria

- [ ] VitePress site with getting started guide (install, init, add)
- [ ] Live example for every component in `@vuefy/core`
- [ ] Component API reference (props, slots, sub-components per component)
- [ ] Theme section showing dark/light/system variants
- [ ] Site builds and serves locally via `npm run dev`

### How to test

- Build test: `npm run build` succeeds, no broken links
- Manual review: every component has at least one live example, API tables match component definitions

---

## Phase 10: CI/CD + full test coverage

**User stories**: 20, 24, 25

### What to build

GitHub Actions workflow that runs lint, test, and typecheck on every PR. Changesets configured for automated versioning and npm publishing. Vitest + Vue Test Utils test suite covering all ~28-30 components and CLI commands.

### Acceptance criteria

- [ ] GitHub Actions workflow: runs on every PR, executes lint, test, typecheck
- [ ] Vitest + Vue Test Utils test suite for all ~28-30 components
- [ ] CLI tests for init, add, update commands
- [ ] Changesets configured for automated versioning and npm publishing
- [ ] `strict: true`, `noUncheckedIndexedAccess`, `noImplicitOverride` enforced in tsconfig

### How to test

- CI test: push a PR, verify workflow runs all three jobs (lint, test, typecheck) and passes
- Test coverage: `vitest run --coverage` shows all components tested, CLI commands tested
- Changesets test: `npx changeset` creates a changeset, `changeset version` bumps version correctly
