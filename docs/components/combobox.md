---
outline: deep
---

# Combobox

A searchable select input that filters options as you type.

## Installation

```bash
npx vuefy@latest add combobox
```

## Usage

```vue
<script setup lang="ts">
import { Combobox } from '@/components/ui/combobox'

const selected = ref('')
const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
</script>

<template>
  <Combobox
    v-model="selected"
    placeholder="Search fruit..."
    :options="options"
  />
</template>
```

## Examples

### With Placeholder

```vue
<Combobox
  v-model="selected"
  placeholder="Select an option..."
  :options="['Option A', 'Option B', 'Option C']"
/>
```

### With Custom Options Slot

Use the `options` slot to render custom option elements.

```vue
<script setup lang="ts">
import { Combobox } from '@/components/ui/combobox'
import { LucideCheck, LucideUser, LucideStar } from 'lucide-vue-next'

const selected = ref('')
</script>

<template>
  <Combobox v-model="selected" placeholder="Choose..." :options="['User', 'Star', 'Check']">
    <template #options="{ options: filtered }">
      <div
        v-for="option in filtered"
        :key="option"
        class="flex items-center gap-2 px-2 py-1.5 text-sm"
        @click="selected = option"
      >
        <LucideCheck v-if="selected === option" class="h-4 w-4" />
        <LucideUser v-if="option === 'User'" class="h-4 w-4" />
        <LucideStar v-if="option === 'Star'" class="h-4 w-4" />
        {{ option }}
      </div>
    </template>
  </Combobox>
</template>
```

### Disabled

```vue
<Combobox
  v-model="selected"
  :options="['A', 'B', 'C']"
  disabled
/>
```

### Required

```vue
<Combobox
  v-model="selected"
  :options="['A', 'B', 'C']"
  required
/>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `""` | Selected option value (v-model) |
| `placeholder` | `string` | `""` | Placeholder text for the search input |
| `disabled` | `boolean` | `false` | Disables the combobox |
| `required` | `boolean` | `false` | Marks the combobox as required |
| `options` | `string[]` | `[]` | Array of options to filter and select from |

### Slots

| Slot | Description |
|---|---|
| `default` | Content rendered inside the input wrapper |
| `input` | Custom input element |
| `options` | Custom option list rendering |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when the selected value changes |
