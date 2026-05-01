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
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <AlertDialog v-model:open="open">
    <AlertDialog.Trigger>
      <Button variant="destructive">Delete</Button>
    </AlertDialog.Trigger>

    <AlertDialog.Content>
      <AlertDialog.Title>Are you sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialog.Description>

      <div class="flex justify-end gap-2">
        <AlertDialog.Cancel>
          <Button variant="outline">Cancel</Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="destructive">Delete</Button>
        </AlertDialog.Action>
      </div>
    </AlertDialog.Content>
  </AlertDialog>
</template>
```

## Examples

### Trigger with Button

```vue
<AlertDialog v-model:open="open">
  <AlertDialog.Trigger>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialog.Trigger>

  <AlertDialog.Content>
    <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
    <AlertDialog.Description>
      All your data will be permanently removed. This action cannot be undone.
    </AlertDialog.Description>

    <div class="flex justify-end gap-2">
      <AlertDialog.Cancel>
        <Button variant="outline">Cancel</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="destructive">Delete</Button>
      </AlertDialog.Action>
    </div>
  </AlertDialog.Content>
</AlertDialog>
```

### Trigger with Custom Element

```vue
<AlertDialog v-model:open="open">
  <AlertDialog.Trigger>
    <a href="#" @click.prevent="open = true">Delete item</a>
  </AlertDialog.Trigger>

  <AlertDialog.Content>
    <AlertDialog.Title>Confirm</AlertDialog.Title>
    <AlertDialog.Description>Are you sure?</AlertDialog.Description>
    <AlertDialog.Cancel><Button variant="outline">Cancel</Button></AlertDialog.Cancel>
    <AlertDialog.Action><Button variant="destructive">Confirm</Button></AlertDialog.Action>
  </AlertDialog.Content>
</AlertDialog>
```

### With Custom Close Button

```vue
<AlertDialog v-model:open="open">
  <AlertDialog.Content>
    <AlertDialog.Title>Close Alert</AlertDialog.Title>
    <AlertDialog.Description>
      You have unsaved changes.
    </AlertDialog.Description>
    <AlertDialog.Cancel>
      <Button @click="open = false">Close</Button>
    </AlertDialog.Cancel>
  </AlertDialog.Content>
</AlertDialog>
```

## API Reference

### AlertDialog (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls dialog open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |

### Sub-Components

#### AlertDialog.Trigger

Wraps a child element to trigger the dialog.

```vue
<AlertDialog.Trigger>
  <Button>Open</Button>
</AlertDialog.Trigger>
```

#### AlertDialog.Content

The dialog overlay content.

```vue
<AlertDialog.Content>
  <!-- title, description, actions -->
</AlertDialog.Content>
```

#### AlertDialog.Title

Dialog title text.

```vue
<AlertDialog.Title>Are you sure?</AlertDialog.Title>
```

#### AlertDialog.Description

Dialog description text.

```vue
<AlertDialog.Description>This cannot be undone.</AlertDialog.Description>
```

#### AlertDialog.Action

The primary action button (e.g., "Delete").

```vue
<AlertDialog.Action>
  <Button variant="destructive">Delete</Button>
</AlertDialog.Action>
```

#### AlertDialog.Cancel

The cancel/close button.

```vue
<AlertDialog.Cancel>
  <Button variant="outline">Cancel</Button>
</AlertDialog.Cancel>
```

### Slots

| Slot | Description |
|---|---|
| `default` | AlertDialog.Content component |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |
