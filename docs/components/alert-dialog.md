---
outline: deep
---

# Alert Dialog

A modal dialog that requires a decision before proceeding. Ideal for destructive actions.

## Installation

```bash
npx vuefy@latest add alert-dialog
```

## Usage

```vue
<script setup lang="ts">
import { AlertDialog } from '@/components/ui/alert-dialog'
import { AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <AlertDialog v-model:open="open">
    <template #trigger>
      <Button variant="destructive">Delete</Button>
    </template>

    <template #content>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>

      <div class="flex justify-end gap-2">
        <AlertDialogCancel>
          <Button variant="outline">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction>
          <Button variant="destructive">Delete</Button>
        </AlertDialogAction>
      </div>
    </template>
  </AlertDialog>
</template>
```

## Examples

### Trigger with Button

```vue
<AlertDialog v-model:open="open">
  <template #trigger>
    <Button variant="destructive">Delete Account</Button>
  </template>

  <template #content>
    <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
    <AlertDialogDescription>
      All your data will be permanently removed. This action cannot be undone.
    </AlertDialogDescription>

    <div class="flex justify-end gap-2">
      <AlertDialogCancel>
        <Button variant="outline">Cancel</Button>
      </AlertDialogCancel>
      <AlertDialogAction>
        <Button variant="destructive">Delete</Button>
      </AlertDialogAction>
    </div>
  </template>
</AlertDialog>
```

### Trigger with Custom Element

```vue
<AlertDialog v-model:open="open">
  <template #trigger>
    <a href="#" @click.prevent="open = true">Delete item</a>
  </template>

  <template #content>
    <AlertDialogTitle>Confirm</AlertDialogTitle>
    <AlertDialogDescription>Are you sure?</AlertDialogDescription>
    <AlertDialogCancel><Button variant="outline">Cancel</Button></AlertDialogCancel>
    <AlertDialogAction><Button variant="destructive">Confirm</Button></AlertDialogAction>
  </template>
</AlertDialog>
```

### With Custom Close Button

```vue
<AlertDialog v-model:open="open">
  <template #content>
    <AlertDialogTitle>Close Alert</AlertDialogTitle>
    <AlertDialogDescription>
      You have unsaved changes.
    </AlertDialogDescription>
    <AlertDialogCancel>
      <Button @click="open = false">Close</Button>
    </AlertDialogCancel>
  </template>
</AlertDialog>
```

## API Reference

### AlertDialog (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls dialog open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |

### Slots

| Slot | Description |
|---|---|
| `trigger` | Element that opens the alert dialog |
| `content` | Dialog overlay content |
| `action` | Primary action button |
| `cancel` | Cancel/close button |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |

### Standalone Components

#### AlertDialogTitle

```vue
<AlertDialogTitle>Are you sure?</AlertDialogTitle>
```

#### AlertDialogDescription

```vue
<AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
```

#### AlertDialogAction

The primary action button (e.g., "Delete").

```vue
<AlertDialogAction>
  <Button variant="destructive">Delete</Button>
</AlertDialogAction>
```

#### AlertDialogCancel

The cancel/close button.

```vue
<AlertDialogCancel>
  <Button variant="outline">Cancel</Button>
</AlertDialogCancel>
```
