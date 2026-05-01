---
outline: deep
---

# NumberField

A number input with increment and decrement buttons and clamping support.

## Installation

```bash
npx vuefy@latest add number-field
```

## Usage

```vue
<script setup lang="ts">
import { NumberField } from '@/components/ui/number-field'

const value = ref(0)
</script>

<template>
  <NumberField v-model="value" :min="0" :max="100" />
</template>
```

## Examples

### Basic

```vue
<NumberField v-model="value" />
```

### With Min/Max

Values are automatically clamped to the specified range.

```vue
<NumberField
  v-model="value"
  :min="0"
  :max="100"
  :step="5"
/>
```

### With Step

```vue
<NumberField
  v-model="value"
  :step="0.5"
  :min="0"
  :max="10"
/>
```

### With Label and Helper

```vue
<NumberField v-model="quantity" :min="1" :max="10">
  <template #label>
    Quantity
  </template>
  <template #helper>
    Maximum 10 items per order
  </template>
</NumberField>
```

### Custom Increment/Decrement Icons

```vue
<NumberField v-model="value">
  <template #increment>
    <LucidePlus class="h-3 w-3" />
  </template>
  <template #decrement>
    <LucideMinus class="h-3 w-3" />
  </template>
</NumberField>
```

### Disabled

```vue
<NumberField v-model="value" disabled />
```

### Required

```vue
<NumberField v-model="value" required :min="1" />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `number` | `0` | Current value (v-model) |
| `min` | `number` | `0` | Minimum allowed value |
| `max` | `number` | `100` | Maximum allowed value |
| `step` | `number` | `1` | Step increment/decrement amount |
| `disabled` | `boolean` | `false` | Disables the field |
| `required` | `boolean` | `false` | Marks the field as required |

### Slots

| Slot | Description |
|---|---|
| `label` | Label rendered above the field |
| `default` | Content rendered inside the field wrapper |
| `increment` | Custom increment button content |
| `decrement` | Custom decrement button content |
| `helper` | Helper text rendered below the field |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `number` | Emitted when the value changes |
