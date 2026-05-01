---
outline: deep
---

# Checkbox

A control that allows the user to toggle between checked and not checked.

## Installation

```bash
npx vuefy@latest add checkbox
```

## Usage

```vue
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'

const checked = ref(false)
</script>

<template>
  <Checkbox v-model:checked="checked" />
</template>
```

## Examples

### Basic

```vue
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'

const accepted = ref(false)
</script>

<template>
  <Checkbox v-model:checked="accepted" />
</template>
```

### With Label

Use the `label` slot to add a label next to the checkbox.

```vue
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'

const accepted = ref(false)
</script>

<template>
  <Checkbox v-model:checked="accepted">
    <template #label>
      I agree to the terms and conditions
    </template>
  </Checkbox>
</template>
```

### With Custom Indicator

Use the `indicator` slot to customize the checked state icon.

```vue
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { LucideCheck } from 'lucide-vue-next'

const checked = ref(false)
</script>

<template>
  <Checkbox v-model:checked="checked">
    <template #indicator>
      <LucideCheck class="h-3 w-3" />
    </template>
  </Checkbox>
</template>
```

### Disabled

```vue
<Checkbox disabled />
```

### Required

```vue
<Checkbox required />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the checkbox is checked (v-model) |
| `defaultChecked` | `boolean` | `false` | Initial checked state |
| `disabled` | `boolean` | `false` | Disables the checkbox |
| `required` | `boolean` | `false` | Marks the checkbox as required |
| `class` | `string` | — | Additional CSS classes |

### Slots

| Slot | Description |
|---|---|
| `default` | Content rendered inside the checkbox |
| `label` | Label text rendered next to the checkbox |
| `indicator` | Custom checked indicator icon |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:checked` | `boolean` | Emitted when checked state changes |
