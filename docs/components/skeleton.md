---
outline: deep
---

# Skeleton

Use to show a placeholder while content is loading.

## Installation

```bash
npx vuefy@latest add skeleton
```

## Usage

```vue
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <Skeleton class="h-4 w-[200px]" />
</template>
```

## Examples

### Card Skeleton

```vue
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="rounded-lg border bg-card p-5 shadow-sm">
    <div class="space-y-3">
      <Skeleton class="h-5 w-1/2" />
      <Skeleton class="h-4 w-3/4" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-5/6" />
    </div>
  </div>
</template>
```

### Avatar Skeleton

```vue
<div class="flex items-center gap-4">
  <Skeleton class="h-12 w-12 rounded-full" />
  <div class="space-y-2">
    <Skeleton class="h-4 w-[150px]" />
    <Skeleton class="h-4 w-[100px]" />
  </div>
</div>
```

### List Skeleton

```vue
<div class="space-y-3">
  <div class="flex items-center gap-3">
    <Skeleton class="h-10 w-10 rounded-full" />
    <div class="space-y-1.5">
      <Skeleton class="h-4 w-[200px]" />
      <Skeleton class="h-3 w-[150px]" />
    </div>
  </div>
</div>
```

### Rounded Variant

```vue
<Skeleton class="h-4 w-1/2 rounded-full" variant="rounded" />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes (use Tailwind utilities for sizing) |
| `variant` | `"rectangular"` \| `"rounded"` | `"rectangular"` | Border radius variant |

### Slots

| Slot | Description |
|---|---|
| `default` | Optional content overlay |
