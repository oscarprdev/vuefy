---
outline: deep
---

# Dropdown Menu

Displays a menu to the user with actions, options, or sub-menus.

## Installation

```bash
npx vuefy@latest add dropdown-menu
```

## Usage

```vue
<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
</script>

<template>
  <DropdownMenu>
    <template #trigger>
      <Button variant="outline">Options</Button>
    </template>

    <template #content>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>duplicate</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Archive</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </template>
  </DropdownMenu>
</template>
```

## Examples

### Basic Dropdown Menu

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const isOpen1 = ref(false)
</script>

<template>
  <DropdownMenu v-model:open="isOpen1">
    <template #trigger>
      <Button variant="outline">Options</Button>
    </template>

    <template #content>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>duplicate</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Archive</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </template>
  </DropdownMenu>
</template>
```

### With Checkbox Items

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'

const showName = ref(true)
const showEmail = ref(true)
const showRole = ref(true)
</script>

<template>
  <DropdownMenu v-model:open="isOpen">
    <template #trigger>
      <Button variant="outline">View Options</Button>
    </template>

    <template #content>
      <DropdownMenuCheckboxItem v-model:checked="showName">Name</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model:checked="showEmail">Email</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model:checked="showRole">Role</DropdownMenuCheckboxItem>
    </template>
  </DropdownMenu>
</template>
```

### With Radio Items

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenu,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu'

const theme = ref('system')
</script>

<template>
  <DropdownMenu v-model:open="isOpen">
    <template #trigger>
      <Button variant="outline">Select Theme</Button>
    </template>

    <template #content>
      <DropdownMenuRadioItem group-value="theme" value="light" @select="theme = 'light'">Light</DropdownMenuRadioItem>
      <DropdownMenuRadioItem group-value="theme" value="dark" @select="theme = 'dark'">Dark</DropdownMenuRadioItem>
      <DropdownMenuRadioItem group-value="theme" value="system" @select="theme = 'system'">System</DropdownMenuRadioItem>
    </template>
  </DropdownMenu>
</template>
```

### With Groups and Shortcuts

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu'

const isOpen4 = ref(false)
</script>

<template>
  <DropdownMenu v-model:open="isOpen4">
    <template #trigger>
      <Button variant="outline">Menu</Button>
    </template>

    <template #content>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>Share</DropdownMenuItem>
      </DropdownMenuGroup>
    </template>
  </DropdownMenu>
</template>
```

## Composition

Use the following composition to build a DropdownMenu:

```
DropdownMenu
├── #trigger slot
└── #content slot
    ├── DropdownMenuLabel (optional)
    ├── DropdownMenuGroup
    │   └── DropdownMenuItem
    │       └── DropdownMenuShortcut (optional)
    ├── DropdownMenuCheckboxItem
    ├── DropdownMenuRadioItem
    ├── DropdownMenuSeparator
    └── DropdownMenuSub
```

## API Reference

### DropdownMenu (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls menu open state (v-model) |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"bottom"` | Side to open the menu on |
| `sideOffset` | `number` | `4` | Distance from the trigger |

### Slots

| Slot | Description |
|---|---|
| `trigger` | Element that opens the menu |
| `content` | Menu content panel |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:open` | `boolean` | Emitted when open state changes |

### DropdownMenuItem

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables the item |
| `inset` | `boolean` | `false` | Adds left padding for nested items |
| `class` | `string` | — | Custom CSS classes |

### DropdownMenuSeparator

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### DropdownMenuLabel

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### DropdownMenuShortcut

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### DropdownMenuCheckboxItem

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Checked state (v-model) |
| `disabled` | `boolean` | `false` | Disables the item |
| `inset` | `boolean` | `false` | Adds left padding |

### DropdownMenuRadioItem

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Radio value |
| `groupValue` | `string` | — | Current group value |
| `disabled` | `boolean` | `false` | Disables the item |
| `inset` | `boolean` | `false` | Adds left padding |

### Emits

| Event | Payload | Description |
|---|---|---|
| `select` | `string` | Emitted when radio item is selected |
