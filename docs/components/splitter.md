---
outline: deep
---

# Splitter

A resizable split pane layout for dividing content into adjustable sections.

## Installation

```bash
npx vuefy@latest add splitter
```

## Usage

```vue
<script setup lang="ts">
import { Splitter } from '@/components/ui/splitter'
</script>

<template>
  <Splitter class="h-96">
    <Splitter.Panel>
      <div class="p-4">Sidebar</div>
    </Splitter.Panel>
    <Splitter.Handle />
    <Splitter.Panel>
      <div class="p-4">Main content</div>
    </Splitter.Panel>
  </Splitter>
</template>
```

## Examples

### Two Panels

```vue
<Splitter class="h-96">
  <Splitter.Panel>
    <div class="h-full p-4 bg-muted/50">Left Panel</div>
  </Splitter.Panel>
  <Splitter.Handle />
  <Splitter.Panel>
    <div class="h-full p-4">Right Panel</div>
  </Splitter.Panel>
</Splitter>
```

### Three Panels

```vue
<Splitter class="h-96">
  <Splitter.Panel>
    <div class="h-full p-4">Panel 1</div>
  </Splitter.Panel>
  <Splitter.Handle />
  <Splitter.Panel>
    <div class="h-full p-4">Panel 2</div>
  </Splitter.Panel>
  <Splitter.Handle />
  <Splitter.Panel>
    <div class="h-full p-4">Panel 3</div>
  </Splitter.Panel>
</Splitter>
```

### With Custom Handle

```vue
<Splitter class="h-96">
  <Splitter.Panel>
    <div class="p-4">Content</div>
  </Splitter.Panel>
  <Splitter.Handle>
    <div class="w-1 bg-border" />
  </Splitter.Handle>
  <Splitter.Panel>
    <div class="p-4">Content</div>
  </Splitter.Panel>
</Splitter>
```

### Vertical Splitter

```vue
<Splitter orientation="vertical" class="h-96">
  <Splitter.Panel>
    <div class="p-4">Top</div>
  </Splitter.Panel>
  <Splitter.Handle />
  <Splitter.Panel>
    <div class="p-4">Bottom</div>
  </Splitter.Panel>
</Splitter>
```

### With Initial Size

```vue
<Splitter class="h-96">
  <Splitter.Panel :min-size="0.2">
    <div class="p-4">Narrow sidebar</div>
  </Splitter.Panel>
  <Splitter.Handle />
  <Splitter.Panel :min-size="0.3">
    <div class="p-4">Main area</div>
  </Splitter.Panel>
</Splitter>
```

## API Reference

### Splitter (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Split direction |
| `class` | `string` | — | Additional CSS classes |

### Sub-Components

#### Splitter.Panel

A resizable panel.

| Prop | Type | Default | Description |
|---|---|---|---|
| `min-size` | `number` | `0.1` | Minimum size as fraction (0-1) |

```vue
<Splitter.Panel>
  <div>Panel content</div>
</Splitter.Panel>
```

#### Splitter.Handle

The resizable drag handle between panels.

```vue
<Splitter.Handle />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Additional CSS classes |

### Slots

| Slot | Description |
|---|---|
| `default` | Splitter.Panel and Splitter.Handle components |
