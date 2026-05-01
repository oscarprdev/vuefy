---
outline: deep
---

# Popover

A floating content overlay positioned relative to a trigger element.

## Installation

```bash
npx vuefy@latest add popover
```

## Usage

```vue
<script setup lang="ts">
import { Popover } from '@/components/ui/popover'
import { PopoverClose } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Popover v-model:open="open">
    <template #trigger>
      <Button>Open Popover</Button>
    </template>

    <template #content>
      <p>Popover content goes here.</p>
    </template>
  </Popover>
</template>
```

## Examples

### With Form

```vue
<Popover v-model:open="open">
  <template #trigger>
    <Button variant="outline">Settings</Button>
  </template>

  <template #content class="w-80">
    <div class="space-y-4">
      <h4 class="font-medium">Popper Settings</h4>
      <Input placeholder="Enter value" />
      <div class="flex justify-end">
        <Button>Apply</Button>
      </div>
    </div>
  </template>
</Popover>
```

### With Custom Side

Use the `side` prop to position the popover.

```vue
<Popover v-model:open="open" side="top">
  <template #trigger><Button>Top</Button></template>
  <template #content>Positioned above</template>
</Popover>
```

Available sides: `top`, `right`, `bottom`, `left`.

### With Custom Side Offset

```vue
<Popover v-model:open="open" :side-offset="10">
  <template #trigger><Button>Offset</Button></template>
  <template #content>10px offset from trigger</template>
</Popover>
```

### With Close Button

```vue
<Popover v-model:open="open">
  <template #trigger>
    <Button>Open</Button>
  </template>

  <template #content>
    <p>Content here.</p>
    <PopoverClose>
      <Button variant="ghost" size="sm" class="ml-auto">Close</Button>
    </PopoverClose>
  </template>
</Popover>
```

### Rich Content

```vue
<Popover v-model:open="open">
  <template #trigger>
    <Button variant="outline">User Info</Button>
  </template>

  <template #content class="w-80 space-y-3">
    <div class="flex items-center gap-3">
      <Avatar src="/user.jpg" alt="User" />
      <div>
        <p class="font-medium">John Doe</p>
        <p class="text-sm text-muted-foreground">john@example.com</p>
      </div>
    </div>
    <div class="text-sm text-muted-foreground">
      Last active 2 minutes ago
    </div>
  </template>
</Popover>
```

## API Reference

### Popover (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls popover open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"bottom"` | Side to position the popover |
| `sideOffset` | `number` | `0` | Offset from the trigger |

### Slots

| Slot | Description |
|---|---|
| `trigger` | Element that opens the popover |
| `content` | The floating content panel |
| `close` | Optional close button |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |

### Standalone Components

#### PopoverClose

Closes the popover when clicked.

```vue
<PopoverClose><Button>Close</Button></PopoverClose>
```
