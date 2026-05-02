---
outline: deep
---

# Toast

A concise message that provides temporary feedback about an operation. Shows at the bottom right of the screen.

## Installation

```bash
npx vuefy@latest add toast
```

## Usage

```vue
<script setup lang="ts">
import { Toast } from '@/components/ui/toast'
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <Toast v-model:visible="show">
    Changes saved successfully!
  </Toast>
</template>
```

## Examples

### Basic Toast

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Toast } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'

const showToast = ref(false)

function showToast1() {
  showToast.value = true
}
</script>

<template>
  <Button @click="showToast1">Show Toast</Button>
  <Toast v-model:visible="showToast" duration="3000">
    Changes saved successfully!
  </Toast>
</template>
```

### With Action

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Toast } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'

const showToast2 = ref(false)

function undo() {
  showToast2.value = false
}
</script>

<template>
  <Button @click="showToast2">Delete File</Button>
  <Toast v-model:visible="showToast2" action-label="Undo" @action="undo()">
    File deleted.
  </Toast>
</template>
```

### Destructive

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Toast } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'

const showToast3 = ref(false)
</script>

<template>
  <Button variant="destructive" @click="showToast3">Delete</Button>
  <Toast v-model:visible="showToast3" variant="destructive">
    Item has been deleted.
  </Toast>
</template>
```

### Different Durations

```vue
<Toast v-model:visible="show" :duration="2000">
  Short notification
</Toast>

<Toast v-model:visible="show" :duration="10000">
  Longer notification
</Toast>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `false` | Controls visibility (v-model) |
| `duration` | `number` | `5000` | Auto-dismiss delay in milliseconds |
| `actionLabel` | `string` | — | Label for the action button |
| `variant` | `"default"` \| `"destructive"` | `"default"` | Visual variant |

### Slots

| Slot | Description |
|---|---|
| `default` | Toast message content |
| `action` | Custom action button |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:visible` | `boolean` | Emitted when visibility changes |
| `action` | — | Emitted when action button is clicked |
