---
outline: deep
---

<script setup>
import { ref } from 'vue'
import DemoSliderBasic from './demo/slider-basic.vue'
import DemoSliderLabeled from './demo/slider-labeled.vue'
import DemoSliderRange from './demo/slider-range.vue'
import DemoSliderCustom from './demo/slider-custom.vue'
import DemoSliderDisabled from './demo/slider-disabled.vue'
</script>

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

<DemoSliderBasic />

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const value = ref([50])
</script>

<template>
  <Slider v-model="value" :max="100" />
</template>
```

### With Label and Value Display

<DemoSliderLabeled />

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const volume = ref([50])
</script>

<template>
  <div class="space-y-2">
    <label class="text-sm font-medium">Volume</label>
    <Slider v-model="volume" :max="100" />
    <p class="text-sm text-muted-foreground">{{ volume }}%</p>
  </div>
</template>
```

### Range (Multiple Values)

<DemoSliderRange />

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const range = ref([20, 80])
</script>

<template>
  <Slider v-model="range" :max="100" :step="5" />
</template>
```

### With Custom Max and Step

<DemoSliderCustom />

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const price = ref([100, 800])
</script>

<template>
  <Slider v-model="price" :max="1000" :step="10" />
</template>
```

### Disabled

<DemoSliderDisabled />

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const brightness = ref([75])
</script>

<template>
  <Slider v-model="brightness" :max="100" disabled />
</template>
```

## Composition

Use the following composition to build a Slider:

```
Slider
├── Slider.Track
│   ├── Slider.Range
│   └── Slider.Thumbs
│       └── Slider.Thumb (x1+)
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
| `default` | Content rendered inside the slider track |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `number[]` | Emitted when the value changes |
