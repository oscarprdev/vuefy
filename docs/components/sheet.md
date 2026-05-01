---
outline: deep
---

# Sheet

A sheet component that slides in from any edge of the screen.

## Installation

```bash
npx vuefy@latest add sheet
```

## Usage

```vue
<script setup lang="ts">
import { Sheet } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Sheet v-model:open="open">
    <Sheet.Trigger>
      <Button>Open Sheet</Button>
    </Sheet.Trigger>

    <Sheet.Content>
      <Sheet.Title>Sheet Title</Sheet.Title>
      <Sheet.Description>
        Sheet description goes here.
      </Sheet.Description>
    </Sheet.Content>
  </Sheet>
</template>
```

## Examples

### Right Side (Default)

```vue
<Sheet v-model:open="open">
  <Sheet.Trigger><Button>Right</Button></Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Title>Right Sheet</Sheet.Title>
    <Sheet.Description>Slides in from the right.</Sheet.Description>
    <Sheet.Close><Button variant="outline">Close</Button></Sheet.Close>
  </Sheet.Content>
</Sheet>
```

### Left Side

```vue
<Sheet v-model:open="open" side="left">
  <Sheet.Trigger><Button>Left</Button></Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Title>Left Sheet</Sheet.Title>
    <Sheet.Description>Slides in from the left.</Sheet.Description>
  </Sheet.Content>
</Sheet>
```

### Top Side

```vue
<Sheet v-model:open="open" side="top">
  <Sheet.Trigger><Button>Top</Button></Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Title>Top Sheet</Sheet.Title>
    <Sheet.Description>Slides in from the top.</Sheet.Description>
  </Sheet.Content>
</Sheet>
```

### Bottom Side

```vue
<Sheet v-model:open="open" side="bottom">
  <Sheet.Trigger><Button>Bottom</Button></Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Title>Bottom Sheet</Sheet.Title>
    <Sheet.Description>Slides in from the bottom.</Sheet.Description>
  </Sheet.Content>
</Sheet>
```

### With Form

```vue
<Sheet v-model:open="open">
  <Sheet.Trigger>
    <Button>Edit Profile</Button>
  </Sheet.Trigger>

  <Sheet.Content>
    <Sheet.Title>Edit Profile</Sheet.Title>
    <Sheet.Description>
      Make changes to your profile here.
    </Sheet.Description>

    <div class="space-y-4 py-4">
      <Input v-model="name" placeholder="Name">
        <template #label>Name</template>
      </Input>
      <Input v-model="email" placeholder="Email">
        <template #label>Email</template>
      </Input>
    </div>

    <div class="flex justify-end gap-2">
      <Sheet.Close>
        <Button variant="outline">Cancel</Button>
      </Sheet.Close>
      <Button>Save</Button>
    </div>
  </Sheet.Content>
</Sheet>
```

### With Scrollable Content

```vue
<Sheet v-model:open="open">
  <Sheet.Content>
    <Sheet.Title>Long Content</Sheet.Title>
    <Sheet.Description>Scrollable content area.</Sheet.Description>

    <div class="max-h-[80vh] overflow-y-auto py-4">
      <!-- long content -->
    </div>

    <div class="flex justify-end">
      <Sheet.Close><Button>Close</Button></Sheet.Close>
    </div>
  </Sheet.Content>
</Sheet>
```

## API Reference

### Sheet (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls sheet open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"right"` | Side to slide from |

### Sub-Components

#### Sheet.Trigger

Wraps a child element to trigger the sheet.

```vue
<Sheet.Trigger><Button>Open</Button></Sheet.Trigger>
```

#### Sheet.Content

The sheet overlay panel.

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | — | Override side |
| `class` | `string` | — | Additional CSS classes |

```vue
<Sheet.Content>
  <Sheet.Title>...</Sheet.Title>
  <Sheet.Description>...</Sheet.Description>
</Sheet.Content>
```

#### Sheet.Title

Sheet title text.

```vue
<Sheet.Title>Edit Profile</Sheet.Title>
```

#### Sheet.Description

Sheet description/helper text.

```vue
<Sheet.Description>Make changes here.</Sheet.Description>
```

#### Sheet.Close

Closes the sheet when clicked.

```vue
<Sheet.Close><Button variant="outline">Close</Button></Sheet.Close>
```

### Slots

| Slot | Description |
|---|---|
| `default` | Sheet.Content component |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |
