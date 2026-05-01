---
outline: deep
---

# Input

A text input field with support for labels, prefixes, suffixes, and helper text.

## Installation

```bash
npx vuefy@latest add input
```

## Usage

```vue
<script setup lang="ts">
import { Input } from '@/components/ui/input'

const value = ref('')
</script>

<template>
  <Input v-model="value" placeholder="Type here..." />
</template>
```

## Examples

### Label

Use the `label` slot to add a label above the input.

```vue
<Input v-model="value" placeholder="Enter your name">
  <template #label>
    Name
  </template>
</Input>
```

### Prefix and Suffix

Use the `prefix` and `suffix` slots to add elements before or after the input.

```vue
<Input v-model="email" placeholder="you@example.com">
  <template #prefix>
    <span class="text-muted-foreground">@</span>
  </template>
  <template #suffix>
    <span class="text-muted-foreground">.com</span>
  </template>
</Input>
```

### Helper Text

Use the `helper` slot to add helper or hint text below the input.

```vue
<Input v-model="value" placeholder="Enter your email">
  <template #helper>
    We'll never share your email with anyone else.
  </template>
</Input>
```

### Error State

The input automatically detects validation errors based on the `pattern` and HTML5 validation.

```vue
<Input
  v-model="value"
  type="email"
  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  placeholder="Enter a valid email"
/>
```

When validation fails, the input shows a red border and the `data-invalid` attribute is set.

### With Icon

Use the `icon` slot to add an icon inside the input.

```vue
<Input v-model="search" placeholder="Search...">
  <template #icon>
    <LucideSearch class="h-4 w-4 text-muted-foreground" />
  </template>
</Input>
```

### Different Types

```vue
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Age" />
<Input type="date" />
<Input type="file" />
```

### Disabled and Required

```vue
<Input disabled placeholder="Read-only" />
<Input required placeholder="Required field" />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` \| `number` | `""` | Input value (v-model) |
| `type` | `string` | `"text"` | HTML input type |
| `placeholder` | `string` | `""` | Placeholder text |
| `disabled` | `boolean` | `false` | Disables the input |
| `required` | `boolean` | `false` | Marks the input as required |
| `pattern` | `string` | `""` | Regex pattern for validation |
| `class` | `string` | — | Additional CSS classes |

### Slots

| Slot | Description |
|---|---|
| `label` | Label rendered above the input |
| `default` | Content rendered inside the input wrapper |
| `prefix` | Element rendered before the input |
| `suffix` | Element rendered after the input |
| `icon` | Icon rendered inside the input |
| `helper` | Helper text rendered below the input |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` \| `number` | Emitted when the input value changes |
