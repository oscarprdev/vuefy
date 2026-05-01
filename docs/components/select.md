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

const selected = ref('')
</script>

<template>
  <Select v-model="selected">
    <Select.Trigger>
      <Select.Value placeholder="Select a fruit..." />
    </Select.Trigger>
    <Select.Content>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="banana">Banana</Select.Item>
      <Select.Item value="cherry">Cherry</Select.Item>
    </Select.Content>
  </Select>
</template>
```

## Examples

### With Placeholder

```vue
<Select v-model="selected">
  <Select.Trigger>
    <Select.Value placeholder="Choose an option..." />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="a">Option A</Select.Item>
    <Select.Item value="b">Option B</Select.Item>
    <Select.Item value="c">Option C</Select.Item>
  </Select.Content>
</Select>
```

### With Default Value

```vue
<Select default-value="apple">
  <!-- ... -->
</Select>
```

### Disabled

```vue
<Select v-model="selected" disabled>
  <Select.Trigger>
    <Select.Value placeholder="Disabled..." />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="a">Option A</Select.Item>
  </Select.Content>
</Select>
```

### Disabled Individual Items

```vue
<Select v-model="selected">
  <Select.Trigger>
    <Select.Value placeholder="Select..." />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="a">Active</Select.Item>
    <Select.Item value="b" disabled>Disabled Option</Select.Item>
    <Select.Item value="c">Also Active</Select.Item>
  </Select.Content>
</Select>
```

### Custom Trigger Content

```vue
<Select v-model="selected">
  <Select.Trigger>
    <div class="flex items-center gap-2">
      <span class="text-sm">Selected:</span>
      <Select.Value placeholder="Choose..." />
    </div>
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="banana">Banana</Select.Item>
  </Select.Content>
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

### Select.Trigger

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables the trigger |
| `class` | `string` | — | Additional CSS classes |

### Select.Value

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | `""` | Placeholder when nothing is selected |
| `class` | `string` | — | Additional CSS classes |

### Select.Content

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Additional CSS classes |

### Select.Item

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | The value of this option |
| `disabled` | `boolean` | `false` | Disables this item |
| `class` | `string` | — | Additional CSS classes |

### Slots

| Slot | Description |
|---|---|
| `default` | Select.Trigger and Select.Content components |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when the selected value changes |
