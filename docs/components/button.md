---
outline: deep
---

# Button

Displays a button or a component that looks like a button.

## Installation

Run the following command to add the Button component to your project:

```bash
npx vuefy@latest add button
```

## Usage

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

## Examples

### Variants

Use the `variant` prop to change the visual style of the button.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex gap-2">
    <Button>Primary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
</template>
```

### Sizes

Use the `size` prop to change the size of the button.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex items-center gap-2">
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
  </div>
</template>
```

### Loading State

Use the `loading` prop to show a loading spinner.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button loading>
    Saving...
  </Button>
</template>
```

You can also customize the loading icon with the `loading` slot:

```vue
<Button loading>
  <template #loading>
    <LucideSpinner class="h-4 w-4 animate-spin" />
  </template>
  Processing
</Button>
```

### With Icon

Use the `icon` slot to add an icon inside the button.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { LucidePlus } from 'lucide-vue-next'
</script>

<template>
  <Button>
    <template #icon>
      <LucidePlus />
    </template>
    Create
  </Button>
</template>
```

### Disabled

Use the `disabled` prop to disable the button.

```vue
<Button disabled>Disabled</Button>
```

The button is also automatically disabled when `loading` is `true`.

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary"` \| `"outline"` \| `"ghost"` \| `"secondary"` \| `"destructive"` | `"primary"` | Visual variant of the button |
| `size` | `"sm"` \| `"default"` \| `"lg"` | `"default"` | Size variant of the button |
| `loading` | `boolean` | `false` | Shows a loading spinner and disables the button |
| `disabled` | `boolean` | `false` | Disables the button |

### Slots

| Slot | Description |
|---|---|
| `default` | Button text content |
| `icon` | Icon to display before the button text |
| `loading` | Custom loading indicator (replaces default spinner) |

### Emits

| Event | Payload | Description |
|---|---|---|
| `click` | `MouseEvent` | Emitted when the button is clicked |
