---
outline: deep
---

# Avatar

An image element with a fallback for when the image fails to load.

## Installation

```bash
npx vuefy@latest add avatar
```

## Usage

```vue
<script setup lang="ts">
import { Avatar } from '@/components/ui/avatar'
</script>

<template>
  <Avatar src="/user.jpg" alt="John Doe" />
</template>
```

## Examples

### Basic

```vue
<Avatar src="/avatar.jpg" alt="John" />
```

### With Fallback Image

When the image fails to load, a fallback is shown automatically.

```vue
<Avatar
  src="https://example.com/nonexistent.jpg"
  alt="John Doe"
  fallback="JD"
/>
```

### Custom Fallback Content

Use the `fallback` slot to render custom fallback content.

```vue
<Avatar src="https://example.com/fail.jpg" alt="User">
  <template #fallback>
    <div class="bg-primary text-primary-foreground font-bold">U</div>
  </template>
</Avatar>
```

### Different Sizes

Wrap the avatar to control size, or use CSS classes.

```vue
<div class="flex items-center gap-4">
  <Avatar src="/small.jpg" alt="Small" />
  <Avatar src="/medium.jpg" alt="Medium" />
  <Avatar src="/large.jpg" alt="Large" class="h-16 w-16" />
</div>
```

### In a List

```vue
<div class="flex -space-x-2">
  <Avatar v-for="user in users" :key="user.id" :src="user.avatar" :alt="user.name" />
</div>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | `""` | Image URL |
| `alt` | `string` | `""` | Alt text for the image |
| `fallback` | `string` | `""` | Fallback text when image fails |

### Slots

| Slot | Description |
|---|---|
| `default` | Content rendered inside the avatar |
| `image` | Custom image element |
| `fallback` | Custom fallback content |

### Emits

| Event | Payload | Description |
|---|---|---|
| `error` | — | Emitted when the image fails to load |
