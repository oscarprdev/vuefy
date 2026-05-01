---
outline: deep
---

# Select

A dropdown select menu for choosing a single value from a list of options.

## Installation

```bash
npx vuefy@latest add select
```

## Usage

```vue
<script setup lang="ts">
import { Select } from '@/components/ui/select'
import { SelectValue, SelectItem } from '@/components/ui/select'

const selected = ref('')
</script>

<template>
  <Select v-model="selected">
    <template #trigger>
      <SelectValue placeholder="Select a fruit..." />
    </template>
    <template #content>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="cherry">Cherry</SelectItem>
    </template>
  </Select>
</template>
```

## Examples

### With Placeholder

```vue
<Select v-model="selected">
  <template #trigger>
    <SelectValue placeholder="Choose an option..." />
  </template>
  <template #content>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
    <SelectItem value="c">Option C</SelectItem>
  </template>
</Select>
```

### With Default Value

```vue
<Select default-value="apple">
  <template #trigger>
    <SelectValue />
  </template>
  <template #content>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </template>
</Select>
```

### Disabled

```vue
<Select v-model="selected" disabled>
  <template #trigger>
    <SelectValue placeholder="Disabled..." />
  </template>
  <template #content>
    <SelectItem value="a">Option A</SelectItem>
  </template>
</Select>
```

### Disabled Individual Items

```vue
<Select v-model="selected">
  <template #trigger>
    <SelectValue placeholder="Select..." />
  </template>
  <template #content>
    <SelectItem value="a">Active</SelectItem>
    <SelectItem value="b" disabled>Disabled Option</SelectItem>
    <SelectItem value="c">Also Active</SelectItem>
  </template>
</Select>
```

### Custom Trigger Content

```vue
<Select v-model="selected">
  <template #trigger>
    <div class="flex items-center gap-2">
      <span class="text-sm">Selected:</span>
      <SelectValue placeholder="Choose..." />
    </div>
  </template>
  <template #content>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </template>
</Select>
```

## API Reference

### Select (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `""` | Selected value (v-model) |
| `defaultValue` | `string` | `""` | Initial selected value |
| `disabled` | `boolean` | `false` | Disables the select |
| `required` | `boolean` | `false` | Marks as required |

### Slots

| Slot | Description |
|---|---|
| `trigger` | Select trigger area — place `SelectValue` here |
| `content` | Dropdown content — place `SelectItem` components here |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when the selected value changes |

### Standalone Components

#### SelectValue

Place inside `#trigger` to display the selected value or placeholder.

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | `""` | Placeholder when nothing is selected |
| `class` | `string` | — | Additional CSS classes |

```vue
<template #trigger>
  <SelectValue placeholder="Choose..." />
</template>
```

#### SelectItem

Place inside `#content` for each option.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | The value of this option |
| `disabled` | `boolean` | `false` | Disables this item |
| `class` | `string` | — | Additional CSS classes |

```vue
<template #content>
  <SelectItem value="apple">Apple</SelectItem>
</template>
```
