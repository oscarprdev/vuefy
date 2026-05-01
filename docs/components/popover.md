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
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Popover v-model:open="open">
    <Popover.Trigger>
      <Button>Open Popover</Button>
    </Popover.Trigger>

    <Popover.Content>
      <p>Popover content goes here.</p>
    </Popover.Content>
  </Popover>
</template>
```

## Examples

### With Form

```vue
<Popover v-model:open="open">
  <Popover.Trigger>
    <Button variant="outline">Settings</Button>
  </Popover.Trigger>

  <Popover.Content class="w-80">
    <div class="space-y-4">
      <h4 class="font-medium">Popper Settings</h4>
      <Input placeholder="Enter value" />
      <div class="flex justify-end">
        <Button>Apply</Button>
      </div>
    </div>
  </Popover.Content>
</Popover>
```

### With Custom Side

Use the `side` prop to position the popover.

```vue
<Popover v-model:open="open" side="top">
  <Popover.Trigger><Button>Top</Button></Popover.Trigger>
  <Popover.Content>Positioned above</Popover.Content>
</Popover>
```

Available sides: `top`, `right`, `bottom`, `left`.

### With Custom Side Offset

```vue
<Popover v-model:open="open" :side-offset="10">
  <Popover.Trigger><Button>Offset</Button></Popover.Trigger>
  <Popover.Content>10px offset from trigger</Popover.Content>
</Popover>
```

### With Close Button

```vue
<Popover v-model:open="open">
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>

  <Popover.Content>
    <p>Content here.</p>
    <Popover.Close>
      <Button variant="ghost" size="sm" class="ml-auto">Close</Button>
    </Popover.Close>
  </Popover.Content>
</Popover>
```

### Rich Content

```vue
<Popover v-model:open="open">
  <Popover.Trigger>
    <Button variant="outline">User Info</Button>
  </Popover.Trigger>

  <Popover.Content class="w-80 space-y-3">
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
  </Popover.Content>
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

### Sub-Components

#### Popover.Trigger

Wraps a child element to trigger the popover.

```vue
<Popover.Trigger><Button>Open</Button></Popover.Trigger>
```

#### Popover.Content

The floating content panel.

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | — | Override side |
| `sideOffset` | `number` | — | Override offset |
| `class` | `string` | — | Additional CSS classes |

```vue
<Popover.Content class="w-80">
  Content here
</Popover.Content>
```

#### Popover.Close

Closes the popover when clicked.

```vue
<Popover.Close><Button>Close</Button></Popover.Close>
```

### Slots

| Slot | Description |
|---|---|
| `default` | Popover.Content component |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |
