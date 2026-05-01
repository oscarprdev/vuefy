---
outline: deep
---

# Dialog

A window overlaid on either the primary window or another dialog, rendering the content underneath inert.

## Installation

```bash
npx vuefy@latest add dialog
```

## Usage

```vue
<script setup lang="ts">
import { Dialog } from '@/components/ui/dialog'
import { DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Dialog v-model:open="open">
    <template #trigger>
      <Button>Open Dialog</Button>
    </template>

    <template #content>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        A beautiful dialog with full accessibility.
      </DialogDescription>
    </template>
  </Dialog>
</template>
```

## Examples

### With Header and Footer

```vue
<Dialog v-model:open="open">
  <template #trigger>
    <Button>Open</Button>
  </template>

  <template #content>
    <DialogTitle>Edit Profile</DialogTitle>
    <DialogDescription>
      Make changes to your profile here.
    </DialogDescription>

    <div class="space-y-4 py-4">
      <!-- form fields -->
    </div>

    <div class="flex justify-end gap-2">
      <DialogClose>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save</Button>
    </div>
  </template>
</Dialog>
```

### With Form

```vue
<script setup lang="ts">
import { Dialog } from '@/components/ui/dialog'
import { DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const open = ref(false)
const name = ref('')
</script>

<template>
  <Dialog v-model:open="open">
    <template #trigger>
      <Button>Add User</Button>
    </template>

    <template #content>
      <DialogTitle>Add New User</DialogTitle>
      <DialogDescription>
        Enter the details for the new user.
      </DialogDescription>

      <div class="space-y-4 py-4">
        <Input v-model="name" placeholder="Username">
          <template #label>Username</template>
        </Input>
      </div>

      <div class="flex justify-end gap-2">
        <DialogClose>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button @click="open = false">Create</Button>
      </div>
    </template>
  </Dialog>
</template>
```

### Trigger with Custom Element

```vue
<Dialog v-model:open="open">
  <template #trigger>
    <a href="#" @click.prevent="open = true">Open dialog</a>
  </template>

  <template #content>
    <DialogTitle>Custom Trigger</DialogTitle>
    <DialogDescription>Triggered by a link.</DialogDescription>
    <DialogClose><Button variant="outline">Close</Button></DialogClose>
  </template>
</Dialog>
```

### Close Button

```vue
<Dialog v-model:open="open">
  <template #content>
    <DialogTitle>Dialog</DialogTitle>
    <DialogDescription>Content goes here.</DialogDescription>
    <DialogClose>
      <Button variant="ghost" size="sm">✕</Button>
    </DialogClose>
  </template>
</Dialog>
```

## Composition

Use the following composition to build a Dialog:

```
Dialog
├── #trigger slot
└── #content slot
    ├── DialogTitle (standalone)
    ├── DialogDescription (standalone)
    └── DialogClose (standalone)
```

## API Reference

### Dialog (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls dialog open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |

### Slots

| Slot | Description |
|---|---|
| `trigger` | Element that opens the dialog |
| `content` | Dialog overlay content panel |
| `close` | Optional close button |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |

### Standalone Components

#### DialogTitle

Dialog title with Radix `aria-labelledby` linking.

```vue
<DialogTitle>My Dialog</DialogTitle>
```

#### DialogDescription

Dialog description/helper text with Radix `aria-describedby` linking.

```vue
<DialogDescription>More info here.</DialogDescription>
```

#### DialogClose

Closes the dialog when clicked.

```vue
<DialogClose><Button>Close</Button></DialogClose>
```
