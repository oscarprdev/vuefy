# PRD: Vuefy — Vue Design System (shadcn/ui equivalent for Vue)

## Problem Statement

The Vue ecosystem lacks a shadcn/ui-equivalent design system. React developers can use shadcn/ui to copy headless UI components (built on Radix UI) as source code into their projects, customize them freely with Tailwind CSS, and own their UI layer completely. Vue developers currently have only two options:

1. **Installable UI frameworks** (Vuetify, Element Plus, Quasar) — full npm packages that must be installed, updated as a unit, and are hard to customize deeply. Developers don't own the source code.
2. **Hand-built component libraries** — teams spend months building basic components (buttons, dialogs, forms, tables) from scratch, resulting in inconsistent quality and wasted effort.

This creates a gap: Vue developers who want headless primitives, Tailwind styling, source-code ownership, and a CLI-driven component registry have no equivalent to shadcn/ui. The vuetify0 library provides 36 headless Vue 3 primitives with WAI-ARIA semantics but ships with zero styling — it's a logic-only layer that needs a styling and component composition layer on top.

## Solution

**Vuefy** (CLI: `vui`) — a CLI-driven, source-code-copy design system for Vue 3 that brings the shadcn/ui experience to the Vue ecosystem.

Vuefy wraps vuetify0's headless primitives with production-ready Tailwind CSS styling and ships them as a CLI registry. Developers run `vui init` to set up their project, then `vui add button dialog tabs` to copy individual component source files into their project. They own every line of generated code — customize it, extend it, delete it.

The system consists of:
- **`@vui/cli`** — the CLI tool that scaffolds projects and copies components
- **`@vui/core`** — the component registry containing all ~28-30 UI component templates and their metadata
- **VitePress documentation site** with live examples

Each component is a single `.vue` SFC that wraps v0 headless primitives internally and exposes a clean, slot-based API. The user never interacts with v0 primitives directly — they only use the vui wrapper's props, slots, and sub-components.

## User Stories

1. As a Vue developer, I want to run a single CLI command to initialize a design system in my project, so that I can start building UIs without writing boilerplate.
2. As a Vue developer, I want to selectively add only the UI components I need (e.g., `vui add button dialog`), so that I don't bloat my project with unused code.
3. As a Vue developer, I want the CLI to automatically detect whether I'm using Vite or Nuxt, so that the setup is tailored to my framework without manual configuration.
4. As a Vue developer, I want to choose between a dark-first and light-first color theme during initialization, so that the default tokens match my project's aesthetic.
5. As a Vue developer, I want to modify the generated CSS tokens after initialization, so that I can customize colors, spacing, and typography to match my brand without fighting the system.
6. As a Vue developer, I want to preview what a component will look like before installing it (using `--dry-run` and `--diff`), so that I can evaluate components without committing to them.
7. As a Vue developer, I want the CLI to automatically resolve and install component dependencies (e.g., adding `select` also prompts to add `popover`), so that I don't run into missing component errors.
8. As a Vue developer, I want to update installed components when new versions are available upstream, with the CLI smart-merging my local customizations, so that I can stay up-to-date without losing my changes.
9. As a Vue developer, I want all components to use `v-model` for two-way binding, so that the API feels idiomatic and consistent with Vue conventions.
10. As a Vue developer, I want components to use native HTML5 validation attributes (`required`, `pattern`, `data-invalid`, `aria-invalid`) instead of requiring a separate validation library, so that forms work out of the box without extra dependencies.
11. As a Vue developer, I want overlay components (dialog, sheet, drawer, popover) to handle z-index stacking, focus trapping, and scroll locking automatically, so that I don't have to implement these complex accessibility features myself.
12. As a Vue developer, I want all components to follow WAI-ARIA compound component patterns via vuetify0, so that my UI is accessible to screen readers and keyboard navigation by default.
13. As a Vue developer, I want icons to work through Iconify with lucide as the default set, so that I have access to 150k+ icons across 100+ icon sets without bundling unused icon libraries.
14. As a Vue developer, I want animations to use Tailwind's built-in transition utilities combined with Vue's `<Transition>` component for enter/leave animations, so that motion is performant (transform + opacity only) and follows established best practices.
15. As a Vue developer, I want the project to use Tailwind CSS v4 with CSS-first configuration (`@import "tailwindcss"` and `@theme` blocks), so that I don't need a separate `tailwind.config.js` file.
16. As a Vue developer, I want components to use CSS logical properties (`ms-`, `me-`, `ps-`, `pe-`) instead of left/right values, so that my UI supports RTL languages without extra work.
17. As a Vue developer, I want the CLI to generate a `components.json` config file that tracks my project settings (framework, theme variant, import paths), so that subsequent CLI commands know my project structure.
18. As a Vue developer, I want all generated components to use strict TypeScript (`strict: true`, `noUncheckedIndexedAccess`), so that I get maximum type safety from day one.
19. As a Vue developer, I want compound components to use a clean slot-based API with namespace sub-components (`Tabs.Item`, `Dialog.Footer`), so that I never need to know about the underlying v0 primitives.
20. As a Vue developer, I want the monorepo to use pnpm workspaces with changesets for versioning, so that the CLI and core packages are versioned consistently and releases are automated.
21. As a Vue developer, I want a VitePress documentation site with live examples for every component, so that I can learn and reference components easily.
22. As a Vue developer, I want the CLI to use interactive prompts during initialization (framework selection, theme variant, path confirmation), so that setup is guided and error-free.
23. As a Vue developer, I want the `add` command to show a confirmation before writing files, so that I have full awareness of what's being added to my project.
24. As a Vue developer, I want unit tests for all components using Vitest and Vue Test Utils, so that I can trust component behavior and catch regressions.
25. As a Vue developer, I want GitHub Actions CI/CD that runs lint, test, and typecheck on every PR and automates publishing via changesets, so that the project maintains quality and releases are reliable.
26. As a Vue developer working on data-heavy dashboards, I want a dark-first default theme variant, so that my UI is optimized for long viewing sessions with data visualization.
27. As a Vue developer, I want infrastructure primitives (Atom, Portal, Presence) to be available from vuetify0 directly rather than shipped as vui components, so that vui focuses on UI-level components that end users interact with.
28. As a Vue developer, I want to import components from `@/components/ui/button.vue` using my project's path alias, so that imports are consistent with the rest of my codebase.
29. As a Vue developer, I want no i18n in v1, so that the initial scope stays focused and I can add localization through my own means if needed.
30. As a Vue developer, I want the CLI tool to be runnable via `npx vui@latest` without installing it globally, so that I can use it in any project without polluting my global node_modules.

## Implementation Decisions

### Architecture
- **CLI codegen model** (not a runtime package): Components are copied as source code into the user's project. The user owns every line. This is the core shadcn/ui philosophy.
- **Registry-based distribution**: The CLI fetches component templates from the `@vui/core` npm package (JSON registry + source files). Users add components individually.
- **Monorepo structure**: pnpm workspaces with `packages/cli` (the CLI tool, published as `vui` via bin field), `packages/core` (component registry), and `docs/` (VitePress documentation).

### Component Model

#### Wrapper Pattern

Every vui component is a **wrapper around v0 headless primitives**. The wrapper hides v0 internals and exposes a clean, intuitive API. The user never imports or interacts with v0 primitives directly.

Each component is a single `.vue` SFC using `<script setup lang="ts">` with **render functions** (`h()`) in `setup()`. The file exports the main component as default and attaches sub-components as namespace properties.

**TypeScript types** are defined inline using `defineProps<T>()` and `defineSlots<T>()` inside the SFC.

**Example — Dialog:**

```vue
<!-- @/components/ui/dialog.vue -->
<script setup lang="ts">
import { Dialog as V0Dialog } from '@vuetify/v0/components'

const props = defineProps<DialogProps>()
const emits = defineEmits<DialogEmits>()

// Sub-components defined as separate defineComponent blocks
const DialogTrigger = defineComponent({
  setup(_, { slots }) {
    return () => h(V0Dialog.Trigger, { asChild: true }, {
      default: () => slots.trigger?.()
    })
  }
})

const DialogContent = defineComponent({
  setup(_, { slots }) {
    return () => h(V0Dialog.Content, {}, {
      default: () => [
        h(DialogTitle, {}, { default: slots.title?. }),
        h(DialogDescription, {}, { default: slots.description?. }),
        slots.default?.(),
        h(DialogClose),
        h('div', { class: 'vui-dialog-footer' }, slots.footer?.)
      ]
    })
  }
})

// ... more sub-components

// Main component with namespace sub-components attached
const Dialog = defineComponent({
  setup(props, { slots }) {
    return () => h(V0Dialog.Root, { ...forwarded }, {
      default: () => [
        h(DialogTrigger, {}, { default: slots.trigger }),
        h(DialogContent, {}, { default: slots.default })
      ]
    })
  }
})

Dialog.Trigger = DialogTrigger
Dialog.Content = DialogContent
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription
Dialog.Close = DialogClose
Dialog.Footer = DialogFooter

export default Dialog
</script>
```

**User-facing API:**

```vue
<Dialog v-model:open="open">
  <template #trigger>
    <Button variant="outline">Open Dialog</Button>
  </template>

  <template #title>Dialog Title</template>
  <template #description>A beautiful dialog with full accessibility.</template>

  <template #default>
    <p>This is the free content area.</p>
  </template>

  <template #footer>
    <Button variant="secondary" @click="open = false">Cancel</Button>
    <Button @click="open = false">Confirm</Button>
  </template>
</Dialog>
```

#### Wrapper Design Principles

- **Hard-coded structure**: The wrapper fixes the v0 component skeleton. Slots are exposed at predefined points within that structure. This ensures ARIA semantics and accessibility stay correct.
- **Auto-wrapping in v0 primitives**: Slot content is automatically wrapped in the appropriate v0 sub-component. The user never sees v0 primitives — `#trigger` content is wrapped in `V0Dialog.Trigger` internally.
- **Fully automatic Portal and as-child**: Overlay components handle z-index stacking, focus trapping, scroll locking, and `as-child` behavior internally. The user has zero awareness of these mechanisms.
- **Explicit props only**: All v0 props are re-declared explicitly with TypeScript. Full type safety and autocomplete. The wrapper maps `v-model:open` to v0's `v-model:open` (matching v0's modifier names).
- **Full v0 context in slots**: Scoped slots receive the full v0 context object, giving access to state like `selected`, `active`, `open` for data-driven slot content.

#### Component Map

| Component | Sub-components exported | Key slots |
|---|---|---|
| **Dialog** | Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogFooter | `#trigger`, `#title`, `#description`, `#default`, `#footer` |
| **AlertDialog** | AlertDialog, AlertDialogAction, AlertDialogCancel | `#trigger`, `#title`, `#description`, `#action`, `#cancel` |
| **Popover** | Popover, PopoverClose | `#trigger`, `#title`, `#description`, `#default` |
| **Sheet** | Sheet, SheetClose | `#trigger`, `#title`, `#description`, `#default`, `#footer` |
| **Drawer** | Drawer, DrawerClose | `#trigger`, `#title`, `#description`, `#default`, `#footer` |
| **Tabs** | Tabs, TabsItem, TabsPanel | `#tabs`, `#panels` |
| **Collapsible** | — | `#trigger`, `#default` |
| **ExpansionPanel** | ExpansionPanel, ExpansionPanelItem, ExpansionPanelTrigger | `#panels` |
| **Treeview** | Treeview, TreeViewItem, TreeviewTrigger | `#items` |
| **Select** | Select, SelectOption, SelectValue | `#trigger`, `#content`, `#options` |
| **Combobox** | Combobox, ComboboxOption | `#input`, `#options` |
| **Form** | Form, FormField, FormSubmit, FormMessage | `#fields` |
| **Checkbox** | — | `#label`, `#indicator`, `#default` |
| **Radio** | RadioGroup, RadioItem, RadioLabel, RadioIndicator | `#items`, `#label`, `#indicator` |
| **Switch** | — | `#label`, `#indicator` |
| **Rating** | — | `#default`, `#icon` |
| **Slider** | — | `#default`, `#tooltip` |
| **NumberField** | — | `#input`, `#increment`, `#decrement`, `#label` |
| **Input** | — | `#label`, `#helper`, `#prefix`, `#suffix`, `#icon` |
| **Button** | — | `#default`, `#icon`, `#loading` |
| **Toggle** | — | `#default`, `#icon` |
| **Avatar** | Avatar, AvatarImage, AvatarFallback | `#image`, `#fallback` |
| **Breadcrumbs** | Breadcrumbs, BreadcrumbItem, BreadcrumbLink | `#items` |
| **Carousel** | Carousel, CarouselSlide, CarouselPrev, CarouselNext | `#slides` |
| **Pagination** | Pagination, PaginationPrev, PaginationNext, PaginationItem | `#items` |
| **Snackbar** | — | `#default`, `#action` |
| **Splitter** | Splitter, SplitterPanel, SplitterHandle | `#panels` |

#### Compound Components (Items/Slices)

For compound components that have items, options, or slides, vui exports its own sub-components that wrap v0 equivalents:

```vue
<Tabs v-model="active">
  <template #tabs>
    <Tabs.Item value="overview">Overview</Tabs.Item>
    <Tabs.Item value="details">Details</Tabs.Item>
  </template>
  <template #panels>
    <Tabs.Panel value="overview">Overview content</Tabs.Panel>
    <Tabs.Panel value="details">Details content</Tabs.Panel>
  </template>
</Tabs>
```

The user uses `Tabs.Item` and `Tabs.Panel` — these are vui wrappers, not v0 primitives.

#### Simple Components

Simple (non-compound) components are also wrappers with dedicated slots for common customization points:

```vue
<Button variant="primary">
  <template #icon><LucidePlus /></template>
  Click me
</Button>
```

#### Form Component

Form uses a compound pattern with `FormField`, `FormSubmit`, and `FormMessage` sub-components:

```vue
<Form @submit="handleSubmit">
  <FormField name="email" label="Email" required />
  <FormField name="password" label="Password" type="password" />
  <FormSubmit>Submit</FormSubmit>
</Form>
```

#### Context Sharing

Each sub-component directly injects from v0 via `createContext`. The v0 primitives handle state sharing between Root and children; the vui wrapper's role is to apply styling and expose slots.

### Registry

- **Full wrapper SFCs in registry**: `@vui/core` contains complete, hand-written wrapper SFCs. The CLI copies them as-is into the user's project. The user owns and modifies them directly.
- **Registry format**: Component templates are `.vue` files stored in the `@vui/core` npm package alongside a JSON registry with metadata (dependencies, slots, props).

### Styling & Theming
- **Tailwind CSS v4** with CSS-first configuration (`@import "tailwindcss"`). No `tailwind.config.js`.
- **Single global CSS file** with `@theme` blocks defining all design tokens as CSS custom properties.
- **3 color theme variants**: Light, Dark, System (follows `prefers-color-scheme`).
- **Dual default token sets**: dark-first and light-first neutral palettes. User picks on init.
- **User-modifiable tokens**: After init, users edit the generated CSS file directly to customize colors, spacing, typography.
- **Emil Kowalski animation principles** guide all animation values: ease-out defaults, 200-300ms durations, transform + opacity only.
- **Tailwind transitions** for micro-interactions, **Vue `<Transition>`** for enter/leave animations.
- **CSS logical properties** (`ms-`, `me-`, `ps-`, `pe-`) for RTL support.
- **All Tailwind utility classes** in render functions — no CSS files per component.

### Overlay System
- **v0 primitives + Portal** for z-index stacking, focus trapping, and scroll locking. vuetify0's `useStack`, `Portal`, and focus management handle the complexity.
- **Fully automatic**: The wrapper handles Portal and `as-child` internally. The user has zero awareness of these mechanisms.

### Accessibility
- **WAI-ARIA semantics** via vuetify0's compound component implementation. vui's role is to apply Tailwind classes without breaking focus styles or screen reader behavior.
- **Hard-coded structure** ensures ARIA relationships stay correct — the wrapper fixes the v0 skeleton so users can't accidentally break semantics.

### CLI Behavior
- **`vui init`**: Interactive prompts for framework (Vite/Nuxt), theme variant (dark/light), import path. Generates: global CSS with `@theme`, `components.json`, Tailwind setup, DESIGN.md template.
- **`vui add <components>`**: Copies component files from registry to project. Confirms with user before writing.
- **`vui add <component> --dry-run --diff --overwrite`**: Full update support with **smart diff-based merge** that preserves local customizations.
- **Auto-dependency resolution**: When adding a component that depends on others (e.g., `select` needs `popover`), the CLI prompts to add them.

### Configuration
- **`components.json`**: Tracks framework, theme variant, import path prefix, Tailwind CSS file path, package manager. Same format as shadcn's `components.json`.

### Quality & DX
- **TypeScript**: Full strict mode (`strict: true`, `noUncheckedIndexedAccess`, `noImplicitOverride`). Types defined inline with `defineProps<T>()` and `defineSlots<T>()`.
- **Testing**: Vitest + Vue Test Utils for unit tests.
- **Documentation**: VitePress site with live examples.
- **CI/CD**: GitHub Actions — lint, test, typecheck on PR. Changesets for automated versioning and publishing.
- **No i18n in v1** — focused scope.
- **Framework support**: Vite and Nuxt (auto-detected during init).

## Testing Decisions

### Testing Approach
- **Vitest + Vue Test Utils** as the primary testing framework. This is the industry standard for Vue component testing.
- Tests should focus on **external behavior only**: props, emits, rendered output, keyboard interactions, and ARIA attribute correctness. Never test internal implementation details (which v0 composable is called, internal state shape).
- A good test answers: "Does this component behave correctly from the user's perspective?" not "Does this component call X composable?"

### Modules to Test
1. **All ~28-30 UI components** — each component gets unit tests covering:
   - Rendering with default props
   - v-model two-way binding (value updates, user input)
   - Keyboard navigation (for interactive components like Tabs, Dialog, Select)
   - ARIA attribute correctness (roles, states, labels)
   - Validation states (`data-invalid`, `aria-invalid` on error)
   - Slot/content projection
   - Event emissions

2. **CLI package** — tests for:
   - `init` command: config file generation, framework detection, CSS token generation
   - `add` command: file copying, dependency resolution, dry-run output
   - Registry parsing: correct resolution of component metadata

3. **Registry schema** — tests for:
   - Component dependency graph resolution
   - Registry JSON validation

### Testing Priorities
- **Highest priority**: All UI components (external behavior, keyboard nav, A11y)
- **High priority**: CLI init and add commands
- **Medium priority**: Registry schema and dependency resolution
- **Lower priority**: Infrastructure-level helpers (these are tested via the components that use them)

### Prior Art
- shadcn/ui's evals directory provides a reference for component test patterns
- vuetify0's own test suite (if available) provides patterns for testing compound components
- Vue Test Utils documentation provides patterns for testing `<Transition>`, keyboard events, and slot content

## Out of Scope

- **i18n / internationalization**: No built-in locale support, date/number formatting, or localized component strings in v1. Users handle this themselves.
- **RTL full testing**: While CSS logical properties are used for RTL support, dedicated RTL testing is out of scope for v1.
- **Visual regression testing**: No Playwright or Percy-based visual tests in v1. Unit tests cover behavior; visual verification is manual or via Storybook in a future iteration.
- **Composition API composables**: vui does not export standalone composables (e.g., `useDialog`, `useForm`). Internal v0 composables are encapsulated within components.
- **Server-side rendering (SSR) testing**: While components should work with Nuxt SSR, comprehensive SSR test coverage is out of scope for v1.
- **DESIGN.md AI parsing**: The natural language DESIGN.md → CSS token parser is deferred. Users modify generated CSS tokens directly after init.
- **Custom icon library integration beyond Iconify**: No custom icon system. Iconify with lucide default is the only supported approach.
- **Form validation library integration**: No vee-validate, Zod, or Yup integration. Native HTML5 validation only.
- **Chart components**: Charts are out of scope. vui does not ship charting components.
- **Mobile-specific components**: No swipe gestures, touch-specific interactions, or mobile-only components in v1.
- **Performance benchmarks**: No formal performance budgets or benchmarking infrastructure in v1.

## Further Notes

### Why vuetify0 and not another headless library?
vuetify0 provides 36 headless components and 63 composables with WAI-ARIA semantics, covering the full range of UI patterns needed for a design system. It's the direct Vue equivalent of Radix UI (which shadcn is built on). The v0 team maintains it through Vuetify 4 minor releases, ensuring long-term stability.

### Why Tailwind CSS v4?
Tailwind v4's CSS-first configuration (`@import "tailwindcss"` + `@theme` blocks) aligns perfectly with the vui philosophy: tokens defined in a single CSS file, utilities applied directly in templates, no config file overhead. This is the same approach shadcn adopted for their v4 migration.

### Why not ship as an installable package?
The shadcn model (copy as source) gives developers full ownership and customization freedom. An installable package creates a dependency boundary that makes deep customization harder. For a design system meant to be the foundation of a project, ownership matters.

### Why wrapper components over direct v0 usage?
The wrapper pattern provides a significantly better developer experience:
- **No v0 knowledge required**: Users never import or interact with v0 primitives
- **Consistent API**: Props, slots, and sub-components follow vui conventions
- **Safe structure**: Hard-coded v0 skeleton prevents users from accidentally breaking ARIA semantics
- **Automatic complexity**: Portal, z-index stacking, focus trapping, `as-child` — all handled internally
- **Cleaner DX**: `<Dialog><template #trigger><Button/></template></Dialog>` vs `<Dialog.Root><Dialog.Trigger as-child><Button/></Dialog.Trigger><Dialog.Content>...`

### Scope reality check
Shipping ~28-30 polished, tested components is a significant undertaking. Each component requires: wrapper SFC implementation with render functions, Tailwind styling, keyboard navigation, ARIA attributes, unit tests, and documentation. The team should be prepared for a substantial initial development effort.

### Name: Vuefy
The name "Vuefy" follows the pattern of "make it Vue" and is distinct enough from "Vuetify" in context. The CLI is published as `vui` to avoid any naming confusion on npm.
