---
outline: deep
---

# Expansion Panel

An accordion-style component where multiple panels can be open simultaneously.

## Installation

```bash
npx vuefy@latest add expansion-panel
```

## Usage

```vue
<script setup lang="ts">
import { ExpansionPanel } from '@/components/ui/expansion-panel'

const openPanels = ref(['panel-1'])
</script>

<template>
  <ExpansionPanel v-model="openPanels">
    <ExpansionPanel.Item value="panel-1">
      <ExpansionPanel.Header>Panel 1</ExpansionPanel.Header>
      <ExpansionPanel.Content>
        <p>Content for panel 1.</p>
      </ExpansionPanel.Content>
    </ExpansionPanel.Item>

    <ExpansionPanel.Item value="panel-2">
      <ExpansionPanel.Header>Panel 2</ExpansionPanel.Header>
      <ExpansionPanel.Content>
        <p>Content for panel 2.</p>
      </ExpansionPanel.Content>
    </ExpansionPanel.Item>
  </ExpansionPanel>
</template>
```

## Examples

### Single Select (Collapsible)

Use `collapsible` prop to allow closing all panels.

```vue
<ExpansionPanel v-model="openPanels" collapsible>
  <ExpansionPanel.Item value="a">
    <ExpansionPanel.Header>Section A</ExpansionPanel.Header>
    <ExpansionPanel.Content>
      <p>Content A</p>
    </ExpansionPanel.Content>
  </ExpansionPanel.Item>
</ExpansionPanel>
```

### Multiple Panels Open

By default, multiple panels can be open simultaneously.

```vue
<ExpansionPanel v-model="openPanels">
  <ExpansionPanel.Item value="a">
    <ExpansionPanel.Header>Section A</ExpansionPanel.Header>
    <ExpansionPanel.Content>Content A</ExpansionPanel.Content>
  </ExpansionPanel.Item>

  <ExpansionPanel.Item value="b">
    <ExpansionPanel.Header>Section B</ExpansionPanel.Header>
    <ExpansionPanel.Content>Content B</ExpansionPanel.Content>
  </ExpansionPanel.Item>

  <ExpansionPanel.Item value="c">
    <ExpansionPanel.Header>Section C</ExpansionPanel.Header>
    <ExpansionPanel.Content>Content C</ExpansionPanel.Content>
  </ExpansionPanel.Item>
</ExpansionPanel>
```

### With Default Value

```vue
<ExpansionPanel default-value="a">
  <ExpansionPanel.Item value="a">
    <ExpansionPanel.Header>Section A</ExpansionPanel.Header>
    <ExpansionPanel.Content>Content A</ExpansionPanel.Content>
  </ExpansionPanel.Item>

  <ExpansionPanel.Item value="b">
    <ExpansionPanel.Header>Section B</ExpansionPanel.Header>
    <ExpansionPanel.Content>Content B</ExpansionPanel.Content>
  </ExpansionPanel.Item>
</ExpansionPanel>
```

### Disabled Items

```vue
<ExpansionPanel v-model="openPanels">
  <ExpansionPanel.Item value="a">
    <ExpansionPanel.Header>Section A</ExpansionPanel.Header>
    <ExpansionPanel.Content>Content A</ExpansionPanel.Content>
  </ExpansionPanel.Item>

  <ExpansionPanel.Item value="b" disabled>
    <ExpansionPanel.Header>Disabled Section</ExpansionPanel.Header>
    <ExpansionPanel.Content>Cannot be expanded</ExpansionPanel.Content>
  </ExpansionPanel.Item>
</ExpansionPanel>
```

### Custom Header Content

```vue
<ExpansionPanel.Item value="a">
  <ExpansionPanel.Header>
    <div class="flex items-center gap-2">
      <LucideBook class="h-4 w-4" />
      <span>Section Title</span>
    </div>
  </ExpansionPanel.Header>
  <ExpansionPanel.Content>
    <p>Rich content with custom header.</p>
  </ExpansionPanel.Content>
</ExpansionPanel.Item>
```

## API Reference

### ExpansionPanel (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string[]` | — | Array of open panel values (v-model) |
| `defaultValue` | `string[]` | `[]` | Initial open panels |
| `collapsible` | `boolean` | `false` | Allow all panels to close |

### Sub-Components

#### ExpansionPanel.Item

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Unique identifier for this panel |
| `disabled` | `boolean` | `false` | Disables this panel |

#### ExpansionPanel.Header

The clickable header of a panel.

```vue
<ExpansionPanel.Header>
  Panel Title
</ExpansionPanel.Header>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Additional CSS classes |

#### ExpansionPanel.Content

The expandable content area.

```vue
<ExpansionPanel.Content>
  <p>Panel content</p>
</ExpansionPanel.Content>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Additional CSS classes |

### Slots

| Slot | Description |
|---|---|
| `default` | ExpansionPanel.Item components |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string[]` | Emitted when open panels change |
