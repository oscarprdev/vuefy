---
outline: deep
---

# Breadcrumbs

A navigation breadcrumb trail for indicating the current page location.

## Installation

```bash
npx vuefy@latest add breadcrumbs
```

## Usage

```vue
<script setup lang="ts">
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
</script>

<template>
  <Breadcrumbs>
    <Breadcrumbs.Item href="/">
      <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item href="/docs">
      <Breadcrumbs.Link href="/docs">Docs</Breadcrumbs.Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item current>Breadcrumbs</Breadcrumbs.Item>
  </Breadcrumbs>
</template>
```

## Examples

### Basic

```vue
<Breadcrumbs>
  <Breadcrumbs.Item href="/">
    <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item current>Current Page</Breadcrumbs.Item>
</Breadcrumbs>
```

### With Custom Separator

```vue
<Breadcrumbs separator="›">
  <Breadcrumbs.Item href="/">
    <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item href="/docs">
    <Breadcrumbs.Link href="/docs">Docs</Breadcrumbs.Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item current>Current</Breadcrumbs.Item>
</Breadcrumbs>
```

### With Icon

```vue
<Breadcrumbs>
  <Breadcrumbs.Item href="/">
    <Breadcrumbs.Link href="/">
      <LucideHome class="h-4 w-4" />
    </Breadcrumbs.Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item current>
    <LucideFile class="h-4 w-4" />
    Current Page
  </Breadcrumbs.Item>
</Breadcrumbs>
```

### Multiple Levels

```vue
<Breadcrumbs>
  <Breadcrumbs.Item href="/">
    <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item href="/products">
    <Breadcrumbs.Link href="/products">Products</Breadcrumbs.Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item href="/products/electronics">
    <Breadcrumbs.Link href="/products/electronics">Electronics</Breadcrumbs.Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item current>Headphones</Breadcrumbs.Item>
</Breadcrumbs>
```

### With Custom Item Styling

```vue
<Breadcrumbs>
  <Breadcrumbs.Item href="/" class="text-sm">
    <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item current class="font-medium">
    Current Page
  </Breadcrumbs.Item>
</Breadcrumbs>
```

## API Reference

### Breadcrumbs (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `separator` | `string` | `/` | Separator between items |

### Sub-Components

#### Breadcrumbs.Item

A single breadcrumb item.

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link URL |
| `current` | `boolean` | `false` | Marks as the current page |
| `class` | `string` | — | Additional CSS classes |

```vue
<Breadcrumbs.Item href="/docs" current>
  Breadcrumbs
</Breadcrumbs.Item>
```

#### Breadcrumbs.Link

A clickable breadcrumb link.

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link URL (required) |
| `class` | `string` | — | Additional CSS classes |

```vue
<Breadcrumbs.Link href="/docs">Docs</Breadcrumbs.Link>
```

### Slots

| Slot | Description |
|---|---|
| `default` | Breadcrumbs.Item components |
