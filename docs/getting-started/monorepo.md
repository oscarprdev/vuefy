---
outline: deep
---

# Monorepo

Using Vuefy in a monorepo setup.

## Project Structure

Vuefy works well with pnpm workspaces and monorepo architectures:

```
my-monorepo/
├── packages/
│   ├── web/              → Frontend app
│   │   ├── components/
│   │   │   └── ui/       → Vuefy components
│   │   └── components.json
│   └── ui/               → Shared UI package
│       ├── components/
│       │   └── ui/       → Vuefy components
│       └── components.json
├── pnpm-workspace.yaml
└── package.json
```

## Setup

### 1. Initialize Vuefy in Each Package

Run `vuefy init` in each package that needs components:

```bash
cd packages/web
npx vuefy@latest init

cd ../ui
npx vuefy@latest init
```

### 2. Configure Import Paths

Make sure each package has its own `components.json` with the correct aliases:

```json
{
  "aliases": {
    "components": "@/components/ui"
  }
}
```

### 3. Share Theme Configuration

Put shared theme tokens in a common CSS file and import it in each package:

```css
/* packages/ui/styles/theme.css */
@theme {
  --color-primary: #6366f1;
  --color-background: #ffffff;
  /* ... */
}
```

```css
/* packages/web/src/style.css */
@import "../../ui/styles/theme.css";
@import "tailwindcss";
```

## Adding Components

Run the add command from each package independently:

```bash
cd packages/web
npx vuefy@latest add button dialog

cd ../ui
npx vuefy@latest add button
```

## Best Practices

- **Shared components** — Put components used across multiple packages in a shared `ui` package
- **App-specific components** — Keep components used only in one package within that package
- **Consistent themes** — Share theme tokens to ensure visual consistency across the monorepo
- **Version alignment** — Keep `@vuetify/v0` versions aligned across packages
