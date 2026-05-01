---
outline: deep
---

# Snackbar

An auto-dismissing notification toast that appears briefly on screen.

## Installation

```bash
npx vuefy@latest add snackbar
```

## Usage

```vue
<script setup lang="ts">
import { Snackbar } from '@/components/ui/snackbar'
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <Snackbar v-model:open="show" duration="3000">
    Changes saved successfully!
  </Snackbar>
</template>
```

## Examples

### Basic

```vue
<script setup lang="ts">
import { Snackbar } from '@/components/ui/snackbar'
import { ref } from 'vue'

const open = ref(false)

function showToast() {
  open.value = true
}
</script>

<template>
  <div>
    <Button @click="showToast">Show Toast</Button>
    <Snackbar v-model:open="open">
      Operation completed successfully!
    </Snackbar>
  </div>
</template>
```

### With Action

```vue
<Snackbar v-model:open="show">
  File deleted.
  <template #action>
    <Button variant="outline" size="sm" @click="undo()">Undo</Button>
  </template>
</Snackbar>
```

### Different Durations

```vue
<!-- Auto-dismiss after 3 seconds -->
<Snackbar v-model:open="show" :duration="3000">
  Short notification
</Snackbar>

<!-- Auto-dismiss after 5 seconds -->
<Snackbar v-model:open="show" :duration="5000">
  Longer notification
</Snackbar>
```

### With Custom Content

```vue
<Snackbar v-model:open="show">
  <div class="flex items-center gap-2">
    <LucideCheckCircle class="h-5 w-5 text-green-500" />
    <div>
      <p class="font-medium">Success!</p>
      <p class="text-sm text-muted-foreground">Your profile has been updated.</p>
    </div>
  </div>
</Snackbar>
```

### Multiple Snackbars

```vue
<template>
  <div class="space-y-2">
    <Snackbar v-model:open="toast1" duration="2000">
      First notification
    </Snackbar>
    <Snackbar v-model:open="toast2" duration="3000">
      Second notification
    </Snackbar>
    <Snackbar v-model:open="toast3" duration="4000">
      Third notification
    </Snackbar>
  </div>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls visibility (v-model) |
| `duration` | `number` | `3000` | Auto-dismiss delay in milliseconds |

### Slots

| Slot | Description |
|---|---|
| `default` | Notification message content |
| `action` | Action button rendered inside the snackbar |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when visibility changes |
