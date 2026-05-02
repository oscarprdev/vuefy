---
outline: deep
---

# Textarea

Displays a multi-line text input field.

## Installation

```bash
npx vuefy@latest add textarea
```

## Usage

```vue
<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <Textarea placeholder="Type your message here." />
</template>
```

## Examples

### Basic Textarea

```vue
<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <Textarea placeholder="Type your message here." />
</template>
```

### With Label

```vue
<div class="space-y-2">
  <label class="text-sm font-medium">Message</label>
  <Textarea placeholder="Enter your message" />
</div>
```

### Disabled

```vue
<Textarea disabled placeholder="This textarea is disabled" />
```

### With Resize Options

```vue
<Textarea resize="vertical" />
<Textarea resize="none" />
<Textarea resize="both" />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | — | Value of the textarea (v-model) |
| `placeholder` | `string` | — | Placeholder text |
| `disabled` | `boolean` | `false` | Disables the textarea |
| `required` | `boolean` | `false` | Makes the field required |
| `rows` | `number` | — | Number of rows |
| `minRows` | `number` | — | Minimum rows for auto-resize |
| `maxRows` | `number` | — | Maximum rows for auto-resize |
| `resize` | `"vertical"` \| `"horizontal"` \| `"both"` \| `"none"` | `"vertical"` | Resize behavior |
| `class` | `string` | — | Custom CSS classes |

### Slots

| Slot | Description |
|---|---|
| `default` | Textarea content |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when value changes |
