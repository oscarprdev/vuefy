---
outline: deep
---

# Separator

Visually or semantically separates content.

## Installation

```bash
npx vuefy@latest add separator
```

## Usage

```vue
<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div>
    <div>Content before</div>
    <Separator />
    <div>Content after</div>
  </div>
</template>
```

## Examples

### Horizontal

```vue
<Separator />
```

### Vertical

```vue
<Separator side="left" />
```

### With Label

```vue
<div class="relative">
  <h3 class="text-sm font-medium">Tags</h3>
  <Separator class="absolute inset-x-0 top-full" />
</div>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"bottom"` | Orientation of the separator |
| `class` | `string` | — | Custom CSS classes |

### Slots

| Slot | Description |
|---|---|
| `label` | Label content for the separator |
