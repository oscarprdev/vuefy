---
outline: deep
---

# Slider

A range slider for selecting a value from a continuous range.

## Installation

```bash
npx vuefy@latest add slider
```

## Usage

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const value = ref([50])
</script>

<template>
  <Slider v-model="value" :max="100" :step="1" />
</template>
```

## Examples

### Basic

```vue
<Slider v-model="value" :max="100" />
```

### Range (Multiple Sliders)

```vue
<Slider v-model="value" :max="100" :step="1" />
```

### With Custom Max and Step

```vue
<Slider v-model="value" :max="1000" :step="10" />
```

### With Label

```vue
<div class="space-y-2">
  <label class="text-sm font-medium">Volume</label>
  <Slider v-model="value" :max="100" />
  <p class="text-sm text-muted-foreground">{{ value }}%</p>
</div>
```

### Disabled

```vue
<Slider v-model="value" disabled />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `number[]` | `[0]` | Current slider value(s) (v-model) |
| `max` | `number` | `100` | Maximum value |
| `min` | `number` | `0` | Minimum value |
| `step` | `number` | `1` | Step increment |
| `disabled` | `boolean` | `false` | Disables the slider |

### Slots

| Slot | Description |
|---|---|
| `default` | Content rendered inside the slider |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `number[]` | Emitted when the value changes |
