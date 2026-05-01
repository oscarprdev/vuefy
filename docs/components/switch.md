---
outline: deep
---

# Switch

A toggle switch control for binary on/off states.

## Installation

```bash
npx vuefy@latest add switch
```

## Usage

```vue
<script setup lang="ts">
import { Switch } from '@/components/ui/switch'

const enabled = ref(false)
</script>

<template>
  <Switch v-model:checked="enabled" />
</template>
```

## Examples

### Basic

```vue
<Switch v-model:checked="enabled" />
```

### With Label

```vue
<div class="flex items-center gap-2">
  <Switch v-model:checked="enabled" />
  <span class="text-sm">Notifications</span>
</div>
```

### Checked by Default

```vue
<Switch default-checked />
```

### Disabled

```vue
<Switch v-model:checked="enabled" disabled />
```

### With Custom Class

```vue
<Switch v-model:checked="enabled" class="data-[state=checked]:bg-primary" />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the switch is on (v-model) |
| `defaultChecked` | `boolean` | `false` | Initial checked state |
| `disabled` | `boolean` | `false` | Disables the switch |
| `required` | `boolean` | `false` | Marks as required |
| `class` | `string` | — | Additional CSS classes on the root |

### Slots

| Slot | Description |
|---|---|
| `default` | Content rendered inside the switch |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:checked` | `boolean` | Emitted when checked state changes |
