---
outline: deep
---

# Tooltip

A popup that reveals information when a user hovers over an element.

## Installation

Run the following command to add the Tooltip component to your project:

```bash
npx vuefy@latest add tooltip
```

## Usage

```vue
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Tooltip v-model:open="open">
    <template #trigger>
      <Button>Hover me</Button>
    </template>

    <template #content>
      Add to library
    </template>
  </Tooltip>
</template>
```

## Examples

### Basic Tooltip

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const isOpen1 = ref(false)
</script>

<template>
  <Tooltip v-model:open="isOpen1">
    <template #trigger>
      <Button>Hover me</Button>
    </template>

    <template #content>
      Add to library
    </template>
  </Tooltip>
</template>
```

### With Icon

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const isOpen2 = ref(false)
</script>

<template>
  <Tooltip v-model:open="isOpen2">
    <template #trigger>
      <Button variant="outline">
        <LucideInfo class="h-4 w-4" />
      </Button>
    </template>

    <template #content>
      This is some helpful information
    </template>
  </Tooltip>
</template>
```

### Disabled

```vue
<TTooltip v-model:open="isOpen" :disabled="true">
  <template #trigger>
    <Button>Disabled tooltip</Button>
  </template>

  <template #content>
    This tooltip is disabled
  </template>
</Tooltip>
```

### With Icon

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const isOpen2 = ref(false)
</script>

<template>
  <Tooltip v-model:open="isOpen2">
    <template #trigger>
      <Button variant="outline">
        <LucideInfo class="h-4 w-4" />
      </Button>
    </template>

    <template #content>
      This is some helpful information
    </template>
  </Tooltip>
</template>
```

### Disabled

```vue
<TTooltip v-model:open="isOpen" :disabled="true">
  <template #trigger>
    <Button>Disabled tooltip</Button>
  </template>

  <template #content>
    This tooltip is disabled
  </template>
</Tooltip>
```

### Disabled

```vue
<TTooltip v-model:open="isOpen" :disabled="true">
  <template #trigger>
    <Button>Disabled tooltip</Button>
  </template>

  <template #content>
    This tooltip is disabled
  </template>
</Tooltip>
```

## Composition

Use the following composition to build a Tooltip:

```
Tooltip
├── #trigger slot
└── #content slot
    └── TooltipClose (optional)
```

## API Reference

### Tooltip (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls tooltip open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `delay` | `number` | `700` | Delay in ms before tooltip opens |
| `disabled` | `boolean` | `false` | Disables the tooltip |

### Slots

| Slot | Description |
|---|---|
| `trigger` | Element that triggers the tooltip |
| `content` | Tooltip content panel |
| `close` | Optional close button |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |

### Standalone Components

#### TooltipTrigger

Wraps the trigger element with the tooltip primitive.

```vue
<Tooltip v-model:open="isOpen">
  <template #trigger>
    <Button>Hover me</Button>
  </template>
</Tooltip>
```

#### TooltipContent

The tooltip content panel with animation and positioning.

```vue
<TooltipContent>Tooltip text</TooltipContent>
```

#### TooltipClose

Closes the tooltip when clicked.

```vue
<TooltipClose><Button>Close</Button></TooltipClose>
```
