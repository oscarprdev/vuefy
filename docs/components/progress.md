---
outline: deep
---

# Progress

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

## Installation

```bash
npx vuefy@latest add progress
```

## Usage

```vue
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { ref } from 'vue'

const value = ref(30)
</script>

<template>
  <Progress :value="value" />
</template>
```

## Examples

### Basic

```vue
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { ref } from 'vue'

const value = ref(30)
</script>

<template>
  <Progress :value="value" />
</template>
```

### Different Values

```vue
<Progress :value="30" />
<Progress :value="75" />
<Progress :value="100" />
```

### Custom Height

```vue
<Progress :value="50" class="h-2" />
<Progress :value="70" class="h-3" />
<Progress :value="85" class="h-4" />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Current progress value (0-100) |
| `max` | `number` | `100` | Maximum progress value |
| `class` | `string` | — | Custom CSS classes |

### Slots

| Slot | Description |
|---|---|
| `default` | Optional content overlay |
