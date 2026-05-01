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
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Dialog v-model:open="open">
    <Dialog.Trigger>
      <Button>Open Dialog</Button>
    </Dialog.Trigger>

    <Dialog.Content>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Description>
        A beautiful dialog with full accessibility.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog>
</template>
```

## Examples

### With Header and Footer

```vue
<Dialog v-model:open="open">
  <Dialog.Trigger>
    <Button>Open</Button>
  </Dialog.Trigger>

  <Dialog.Content>
    <Dialog.Title>Edit Profile</Dialog.Title>
    <Dialog.Description>
      Make changes to your profile here.
    </Dialog.Description>

    <div class="space-y-4 py-4">
      <!-- form fields -->
    </div>

    <div class="flex justify-end gap-2">
      <Dialog.Close>
        <Button variant="outline">Cancel</Button>
      </Dialog.Close>
      <Button>Save</Button>
    </div>
  </Dialog.Content>
</Dialog>
```

### With Form

```vue
<script setup lang="ts">
import { Dialog } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const open = ref(false)
const name = ref('')
</script>

<template>
  <Dialog v-model:open="open">
    <Dialog.Trigger>
      <Button>Add User</Button>
    </Dialog.Trigger>

    <Dialog.Content>
      <Dialog.Title>Add New User</Dialog.Title>
      <Dialog.Description>
        Enter the details for the new user.
      </Dialog.Description>

      <div class="space-y-4 py-4">
        <Input v-model="name" placeholder="Username">
          <template #label>Username</template>
        </Input>
      </div>

      <div class="flex justify-end gap-2">
        <Dialog.Close>
          <Button variant="outline">Cancel</Button>
        </Dialog.Close>
        <Button @click="open = false">Create</Button>
      </div>
    </Dialog.Content>
  </Dialog>
</template>
```

### Trigger with Custom Element

```vue
<Dialog v-model:open="open">
  <Dialog.Trigger>
    <a href="#" @click.prevent="open = true">Open dialog</a>
  </Dialog.Trigger>

  <Dialog.Content>
    <Dialog.Title>Custom Trigger</Dialog.Title>
    <Dialog.Description>Triggered by a link.</Dialog.Description>
    <Dialog.Close><Button variant="outline">Close</Button></Dialog.Close>
  </Dialog.Content>
</Dialog>
```

### Close Button

```vue
<Dialog v-model:open="open">
  <Dialog.Content>
    <Dialog.Title>Dialog</Dialog.Title>
    <Dialog.Description>Content goes here.</Dialog.Description>
    <Dialog.Close>
      <Button variant="ghost" size="sm">✕</Button>
    </Dialog.Close>
  </Dialog.Content>
</Dialog>
```

## Composition

Use the following composition to build a Dialog:

```
Dialog
├── DialogTrigger
└── DialogContent
    ├── DialogTitle
    └── DialogDescription
    └── DialogClose
```

## API Reference

### Dialog (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls dialog open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |

### Sub-Components

#### Dialog.Trigger

Wraps a child element to trigger the dialog.

```vue
<Dialog.Trigger><Button>Open</Button></Dialog.Trigger>
```

#### Dialog.Content

The dialog overlay content panel.

```vue
<Dialog.Content>
  <Dialog.Title>...</Dialog.Title>
  <Dialog.Description>...</Dialog.Description>
</Dialog.Content>
```

#### Dialog.Title

Dialog title text.

```vue
<Dialog.Title>My Dialog</Dialog.Title>
```

#### Dialog.Description

Dialog description/helper text.

```vue
<Dialog.Description>More info here.</Dialog.Description>
```

#### Dialog.Close

Closes the dialog when clicked.

```vue
<Dialog.Close><Button>Close</Button></Dialog.Close>
```

### Slots

| Slot | Description |
|---|---|
| `default` | Dialog.Content component |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |
