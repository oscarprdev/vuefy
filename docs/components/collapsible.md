---
outline: deep
---

# Collapsible

A collapsible content section that expands and collapses with animation.

## Installation

```bash
npx vuefy@latest add collapsible
```

## Usage

```vue
<script setup lang="ts">
import { Collapsible } from '@/components/ui/collapsible'

const open = ref(false)
</script>

<template>
  <Collapsible v-model:open="open">
    <template #trigger>
      Click to {{ open ? 'close' : 'open' }}
    </template>
    <p>Collapsible content goes here.</p>
  </Collapsible>
</template>
```

## Examples

### Basic

```vue
<Collapsible v-model:open="open">
  <template #trigger>
    Toggle Content
  </template>
  <p>This content is collapsible with a smooth animation.</p>
</Collapsible>
```

### Open by Default

```vue
<Collapsible default-open>
  <template #trigger>Toggle Content</template>
  <p>This starts open.</p>
</Collapsible>
```

### With Custom Trigger

```vue
<Collapsible v-model:open="open">
  <template #trigger>
    <button class="inline-flex items-center gap-2">
      <LucideChevronDown class="h-4 w-4 transition-transform" :class="{ 'rotate-180': open }" />
      Details
    </button>
  </template>
  <p>Full details content here.</p>
</Collapsible>
```

### With Button Trigger

```vue
<Collapsible v-model:open="open">
  <template #trigger>
    <Button variant="outline">Show More</Button>
  </template>
  <div class="mt-4 space-y-2">
    <p>Additional content that was hidden.</p>
  </div>
</Collapsible>
```

### Nested

```vue
<Collapsible v-model:open="outer">
  <template #trigger>Outer</template>
  <p>Outer content</p>
  <Collapsible v-model:open="inner">
    <template #trigger>Inner</template>
    <p>Inner content</p>
  </Collapsible>
</Collapsible>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |

### Slots

| Slot | Description |
|---|---|
| `trigger` | Trigger button content. Receives `open` state for conditional styling |
| `default` | Collapsible content (shown when open) |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |
