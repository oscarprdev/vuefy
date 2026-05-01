---
outline: deep
---

# Radio Group

A set of radio buttons where only one option can be selected at a time.

## Installation

```bash
npx vuefy@latest add radio-group
```

## Usage

```vue
<script setup lang="ts">
import { RadioGroup } from '@/components/ui/radio-group'

const selected = ref('apple')
</script>

<template>
  <RadioGroup v-model="selected">
    <RadioGroup.Item value="apple">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
    <RadioGroup.Label>Apple</RadioGroup.Label>

    <RadioGroup.Item value="banana">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
    <RadioGroup.Label>Banana</RadioGroup.Label>
  </RadioGroup>
</template>
```

## Examples

### Vertical Layout (Default)

```vue
<RadioGroup v-model="selected">
  <RadioGroup.Item value="a">
    <RadioGroup.Indicator />
  </RadioGroup.Item>
  <RadioGroup.Label>Option A</RadioGroup.Label>

  <RadioGroup.Item value="b">
    <RadioGroup.Indicator />
  </RadioGroup.Item>
  <RadioGroup.Label>Option B</RadioGroup.Label>
</RadioGroup>
```

### Horizontal Layout

Use the `orientation` prop to lay out options horizontally.

```vue
<RadioGroup v-model="selected" orientation="horizontal">
  <RadioGroup.Item value="a">
    <RadioGroup.Indicator />
  </RadioGroup.Item>
  <RadioGroup.Label>Left</RadioGroup.Label>

  <RadioGroup.Item value="b">
    <RadioGroup.Indicator />
  </RadioGroup.Item>
  <RadioGroup.Label>Right</RadioGroup.Label>
</RadioGroup>
```

### With Default Value

```vue
<RadioGroup default-value="apple">
  <!-- ... -->
</RadioGroup>
```

### Disabled

```vue
<RadioGroup v-model="selected" disabled>
  <RadioGroup.Item value="a">
    <RadioGroup.Indicator />
  </RadioGroup.Item>
  <RadioGroup.Label>Disabled</RadioGroup.Label>
</RadioGroup>
```

### Required

```vue
<RadioGroup v-model="selected" required>
  <RadioGroup.Item value="a">
    <RadioGroup.Indicator />
  </RadioGroup.Item>
  <RadioGroup.Label>Required</RadioGroup.Label>
</RadioGroup>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `""` | Selected value (v-model) |
| `defaultValue` | `string` | `""` | Initial selected value |
| `disabled` | `boolean` | `false` | Disables all items |
| `required` | `boolean` | `false` | Marks as required |
| `orientation` | `"horizontal"` \| `"vertical"` | `"vertical"` | Layout direction |

### Sub-Components

#### RadioGroup.Item

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | The value of this option |
| `disabled` | `boolean` | `false` | Disables this item |
| `class` | `string` | — | Additional CSS classes |

#### RadioGroup.Label

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Additional CSS classes |

#### RadioGroup.Indicator

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Additional CSS classes |

### Slots

| Slot | Description |
|---|---|
| `default` | RadioGroup.Item and RadioGroup.Label components |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when the selected value changes |
