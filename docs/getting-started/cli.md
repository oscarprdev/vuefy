---
outline: deep
---

# CLI

The Vuefy CLI makes it easy to initialize and manage components in your project.

## Commands

### `init`

Initialize Vuefy in your project:

```bash
npx vuefy@latest init
```

This command:

1. **Detects your framework** — Automatically identifies Vite or Nuxt projects
2. **Detects your package manager** — pnpm, npm, yarn, or bun
3. **Detects your CSS path** — Finds your global CSS file
4. **Generates configuration** — Creates `components.json`
5. **Generates theme CSS** — Adds Tailwind `@theme` blocks for light and dark modes
6. **Generates DESIGN.md** — A template design system document for your team

### `add`

Add individual components to your project:

```bash
npx vuefy@latest add button dialog tabs
```

You can specify multiple components at once. They will all be copied into `@/components/ui/`.

#### Auto-dependency resolution

Some components depend on others. For example, `select` depends on `popover`. When you add `select`, the CLI will prompt you to also add `popover`:

```
The select component depends on popover. Would you like to add it? (Y/n)
```

### `add` Flags

| Flag | Description |
|---|---|
| `--dry-run` | Preview changes without writing files |
| `--diff` | Show a diff of what would change |
| `--overwrite` | Overwrite existing component files |

## components.json

The `components.json` file stores your Vuefy configuration:

```json
{
  "style": "default",
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "slate"
  },
  "aliases": {
    "components": "@/components/ui",
    "utils": "@/lib/utils"
  },
  "vuetify0": {
    "version": "0.1.0"
  }
}
```

| Field | Description |
|---|---|
| `style` | Visual style preset (currently `default`) |
| `tailwind.css` | Path to your global CSS file |
| `tailwind.baseColor` | Base color for the default theme |
| `aliases.components` | Path alias for component imports |

## Component Registry

Vuefy ships with ~28 components organized into categories:

### Actions

- **Button** — Versatile button with variants and sizes

### Forms

- **Checkbox** — Accessible checkbox input
- **Combobox** — Searchable dropdown select
- **Input** — Text input with label, prefix, suffix slots
- **NumberField** — Number input with increment/decrement buttons
- **Radio Group** — Group of radio button options
- **Rating** — Star-based rating widget
- **Select** — Dropdown select menu
- **Slider** — Range slider input
- **Switch** — Toggle switch

### Disclosure

- **Alert Dialog** — Confirmation dialog for destructive actions
- **Collapsible** — Expandable content section
- **Dialog** — Modal dialog overlay
- **Expansion Panel** — Accordion-style expandable panels
- **Popover** — Floating content overlay
- **Tabs** — Tabbed content panels
- **Treeview** — Hierarchical tree navigation

### Semantic

- **Avatar** — User avatar with image and fallback
- **Breadcrumbs** — Navigation breadcrumb trail
- **Carousel** — Content carousel with navigation
- **Pagination** — Page navigation controls
- **Snackbar** — Auto-dismissing notification toast
- **Splitter** — Resizable split panes

## Updating Components

To update a component to its latest version:

```bash
npx vuefy@latest add button --overwrite
```

Use `--dry-run` to preview changes first:

```bash
npx vuefy@latest add button --dry-run
```

Or see what would change with `--diff`:

```bash
npx vuefy@latest add button --diff
```
