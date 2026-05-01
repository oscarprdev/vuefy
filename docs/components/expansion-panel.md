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
import { ExpansionPanelItem } from '@/components/ui/expansion-panel'

const openPanels = ref(['panel-1'])
</script>

<template>
  <ExpansionPanel v-model="openPanels">
    <ExpansionPanelItem value="panel-1">
      <template #header>Panel 1</template>
      <template #content>
        <p>Content for panel 1.</p>
      </template>
    </ExpansionPanelItem>

    <ExpansionPanelItem value="panel-2">
      <template #header>Panel 2</template>
      <template #content>
        <p>Content for panel 2.</p>
      </template>
    </ExpansionPanelItem>
  </ExpansionPanel>
</template>
```

## Examples

### Single Select (Collapsible)

Use `collapsible` prop to allow closing all panels.

```vue
<ExpansionPanel v-model="openPanels" collapsible>
  <ExpansionPanelItem value="a">
    <template #header>Section A</template>
    <template #content>
      <p>Content A</p>
    </template>
  </ExpansionPanelItem>
</ExpansionPanel>
```

### Multiple Panels Open

By default, multiple panels can be open simultaneously.

```vue
<ExpansionPanel v-model="openPanels">
  <ExpansionPanelItem value="a">
    <template #header>Section A</template>
    <template #content>Content A</template>
  </ExpansionPanelItem>

  <ExpansionPanelItem value="b">
    <template #header>Section B</template>
    <template #content>Content B</template>
  </ExpansionPanelItem>

  <ExpansionPanelItem value="c">
    <template #header>Section C</template>
    <template #content>Content C</template>
  </ExpansionPanelItem>
</ExpansionPanel>
```

### With Default Value

```vue
<ExpansionPanel default-value="a">
  <ExpansionPanelItem value="a">
    <template #header>Section A</template>
    <template #content>Content A</template>
  </ExpansionPanelItem>

  <ExpansionPanelItem value="b">
    <template #header>Section B</template>
    <template #content>Content B</template>
  </ExpansionPanelItem>
</ExpansionPanel>
```

### Disabled Items

```vue
<ExpansionPanel v-model="openPanels">
  <ExpansionPanelItem value="a">
    <template #header>Section A</template>
    <template #content>Content A</template>
  </ExpansionPanelItem>

  <ExpansionPanelItem value="b" disabled>
    <template #header>Disabled Section</template>
    <template #content>Cannot be expanded</template>
  </ExpansionPanelItem>
</ExpansionPanel>
```

### Custom Header Content

```vue
<ExpansionPanelItem value="a">
  <template #header>
    <div class="flex items-center gap-2">
      <LucideBook class="h-4 w-4" />
      <span>Section Title</span>
    </div>
  </template>
  <template #content>
    <p>Rich content with custom header.</p>
  </template>
</ExpansionPanelItem>
```

## API Reference

### ExpansionPanel (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string[]` | — | Array of open panel values (v-model) |
| `defaultValue` | `string[]` | `[]` | Initial open panels |
| `collapsible` | `boolean` | `false` | Allow all panels to close |

### ExpansionPanelItem

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Unique identifier for this panel |
| `disabled` | `boolean` | `false` | Disables this panel |

### Slots

| Slot | Description |
|---|---|
| `default` | ExpansionPanelItem components |

#### ExpansionPanelItem Slots

| Slot | Description |
|---|---|
| `header` | Clickable header of the panel |
| `content` | Expandable content area |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string[]` | Emitted when open panels change |
