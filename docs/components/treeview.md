---
outline: deep
---

# Treeview

A hierarchical tree navigation component for displaying nested data.

## Installation

```bash
npx vuefy@latest add treeview
```

## Usage

```vue
<script setup lang="ts">
import { Treeview } from '@/components/ui/treeview'

const selected = ref('file-1')
</script>

<template>
  <Treeview v-model="selected">
    <Treeview.Item value="folder-1">
      <Treeview.Label>Documents</Treeview.Label>
      <Treeview.Item value="file-1">
        <Treeview.Label>report.pdf</Treeview.Label>
      </Treeview.Item>
      <Treeview.Item value="file-2">
        <Treeview.Label>notes.txt</Treeview.Label>
      </Treeview.Item>
    </Treeview.Item>

    <Treeview.Item value="folder-2">
      <Treeview.Label>Images</Treeview.Label>
      <Treeview.Item value="file-3">
        <Treeview.Label>photo.jpg</Treeview.Label>
      </Treeview.Item>
    </Treeview.Item>
  </Treeview>
</template>
```

## Examples

### Flat Tree

```vue
<Treeview v-model="selected">
  <Treeview.Item value="a">
    <Treeview.Label>Item A</Treeview.Label>
  </Treeview.Item>
  <Treeview.Item value="b">
    <Treeview.Label>Item B</Treeview.Label>
  </Treeview.Item>
  <Treeview.Item value="c">
    <Treeview.Label>Item C</Treeview.Label>
  </Treeview.Item>
</Treeview>
```

### With Default Value

```vue
<Treeview default-value="file-1">
  <Treeview.Item value="file-1">
    <Treeview.Label>Selected by default</Treeview.Label>
  </Treeview.Item>
</Treeview>
```

### With Custom Label Content

```vue
<Treeview v-model="selected">
  <Treeview.Item value="folder">
    <Treeview.Label>
      <div class="flex items-center gap-2">
        <LucideFolder class="h-4 w-4 text-amber-500" />
        <span>My Folder</span>
      </div>
    </Treeview.Label>
  </Treeview.Item>
</Treeview>
```

### Nested Tree

```vue
<Treeview v-model="selected">
  <Treeview.Item value="root">
    <Treeview.Label>Project</Treeview.Label>
    <Treeview.Item value="src">
      <Treeview.Label>src</Treeview.Label>
      <Treeview.Item value="components">
        <Treeview.Label>components</Treeview.Label>
        <Treeview.Item value="button">
          <Treeview.Label>Button.vue</Treeview.Label>
        </Treeview.Item>
        <Treeview.Item value="input">
          <Treeview.Label>Input.vue</Treeview.Label>
        </Treeview.Item>
      </Treeview.Item>
      <Treeview.Item value="app">
        <Treeview.Label>App.vue</Treeview.Label>
      </Treeview.Item>
    </Treeview.Item>
  </Treeview.Item>
</Treeview>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `""` | Selected item value (v-model) |
| `defaultValue` | `string` | `""` | Initial selected value |

### Sub-Components

#### Treeview.Item

A tree node that can contain children.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Unique identifier |

```vue
<Treeview.Item value="file-1">
  <Treeview.Label>File name</Treeview.Label>
</Treeview.Item>
```

#### Treeview.Label

The label text for a tree node.

```vue
<Treeview.Label>My File</Treeview.Label>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Additional CSS classes |

### Slots

| Slot | Description |
|---|---|
| `default` | Treeview.Item components |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when selected item changes |
