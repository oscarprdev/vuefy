---
outline: deep
---

# Rating

A star-based rating widget for collecting user ratings.

## Installation

```bash
npx vuefy@latest add rating
```

## Usage

```vue
<script setup lang="ts">
import { Rating } from '@/components/ui/rating'

const score = ref(3)
</script>

<template>
  <Rating v-model="score" />
</template>
```

## Examples

### Basic

```vue
<Rating v-model="score" />
```

### Custom Max

Change the maximum number of stars.

```vue
<Rating v-model="score" :max="10" />
```

### Disabled

When disabled, the rating can only show the current value — users cannot interact.

```vue
<Rating v-model="score" disabled />
```

### Custom Star Icon

Use the `icon` slot to customize the star icon.

```vue
<script setup lang="ts">
import { Rating } from '@/components/ui/rating'
import { LucideHeart } from 'lucide-vue-next'
</script>

<template>
  <Rating v-model="score">
    <template #icon="{ filled }">
      <LucideHeart
        class="h-5 w-5 transition-colors"
        :class="filled ? 'fill-current text-red-500' : 'text-muted-foreground'"
      />
    </template>
  </Rating>
</template>
```

### Interactive Rating Flow

```vue
<script setup lang="ts">
import { Rating } from '@/components/ui/rating'
import { ref } from 'vue'

const score = ref(0)

function submitRating() {
  console.log('Submitted rating:', score.value)
}
</script>

<template>
  <div class="space-y-4">
    <Rating v-model="score" :max="5" />
    <p class="text-sm text-muted-foreground">
      Your rating: {{ score || 'Not rated' }}
    </p>
  </div>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `number` | `0` | Current rating (v-model) |
| `max` | `number` | `5` | Maximum number of stars |
| `disabled` | `boolean` | `false` | Disables interaction |

### Slots

| Slot | Description |
|---|---|
| `icon` | Custom star icon. Receives `{ filled: boolean }` as slot props |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `number` | Emitted when the rating changes |
