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
import { SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Sheet v-model:open="open">
    <template #trigger>
      <Button>Open Sheet</Button>
    </template>

    <template #content>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        Sheet description goes here.
      </SheetDescription>
    </template>
  </Sheet>
</template>
```

## Examples

### Right Side (Default)

```vue
<Sheet v-model:open="open">
  <template #trigger><Button>Right</Button></template>
  <template #content>
    <SheetTitle>Right Sheet</SheetTitle>
    <SheetDescription>Slides in from the right.</SheetDescription>
    <SheetClose><Button variant="outline">Close</Button></SheetClose>
  </template>
</Sheet>
```

### Left Side

```vue
<Sheet v-model:open="open" side="left">
  <template #trigger><Button>Left</Button></template>
  <template #content>
    <SheetTitle>Left Sheet</SheetTitle>
    <SheetDescription>Slides in from the left.</SheetDescription>
  </template>
</Sheet>
```

### Top Side

```vue
<Sheet v-model:open="open" side="top">
  <template #trigger><Button>Top</Button></template>
  <template #content>
    <SheetTitle>Top Sheet</SheetTitle>
    <SheetDescription>Slides in from the top.</SheetDescription>
  </template>
</Sheet>
```

### Bottom Side

```vue
<Sheet v-model:open="open" side="bottom">
  <template #trigger><Button>Bottom</Button></template>
  <template #content>
    <SheetTitle>Bottom Sheet</SheetTitle>
    <SheetDescription>Slides in from the bottom.</SheetDescription>
  </template>
</Sheet>
```

### With Form

```vue
<Sheet v-model:open="open">
  <template #trigger>
    <Button>Edit Profile</Button>
  </template>

  <template #content>
    <SheetTitle>Edit Profile</SheetTitle>
    <SheetDescription>
      Make changes to your profile here.
    </SheetDescription>

    <div class="space-y-4 py-4">
      <Input v-model="name" placeholder="Name">
        <template #label>Name</template>
      </Input>
      <Input v-model="email" placeholder="Email">
        <template #label>Email</template>
      </Input>
    </div>

    <div class="flex justify-end gap-2">
      <SheetClose>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <Button>Save</Button>
    </div>
  </template>
</Sheet>
```

### With Scrollable Content

```vue
<Sheet v-model:open="open">
  <template #content>
    <SheetTitle>Long Content</SheetTitle>
    <SheetDescription>Scrollable content area.</SheetDescription>

    <div class="max-h-[80vh] overflow-y-auto py-4">
      <!-- long content -->
    </div>

    <div class="flex justify-end">
      <SheetClose><Button>Close</Button></SheetClose>
    </div>
  </template>
</Sheet>
```

## API Reference

### Sheet (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls sheet open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"right"` | Side to slide from |

### Slots

| Slot | Description |
|---|---|
| `trigger` | Element that opens the sheet |
| `content` | The sheet overlay panel |
| `close` | Optional close button |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |

### Standalone Components

#### SheetTitle

Sheet title text.

```vue
<SheetTitle>Edit Profile</SheetTitle>
```

#### SheetDescription

Sheet description/helper text.

```vue
<SheetDescription>Make changes here.</SheetDescription>
```

#### SheetClose

Closes the sheet when clicked.

```vue
<SheetClose><Button variant="outline">Close</Button></SheetClose>
```
