---
outline: deep
---

# Tabs

A set of layered sections of content—tab panels—each visible with its own tab header.

## Installation

```bash
npx vuefy@latest add tabs
```

## Usage

```vue
<script setup lang="ts">
import { Tabs } from '@/components/ui/tabs'
import { TabsItem } from '@/components/ui/tabs'

const activeTab = ref('overview')
</script>

<template>
  <Tabs v-model="activeTab">
    <template #list>
      <TabsItem value="overview">Overview</TabsItem>
      <TabsItem value="details">Details</TabsItem>
      <TabsItem value="settings">Settings</TabsItem>
    </template>

    <template #panels>
      <TabsItem value="overview">
        Overview content
        <template #panel>Overview content</TabsItem>
      </TabsItem>
      <TabsItem value="details">
        Details content
        <template #panel>Details content</TabsItem>
      </TabsItem>
    </template>
  </Tabs>
</template>
```

## Examples

### Default Active Tab

```vue
<Tabs default-value="details">
  <template #list>
    <TabsItem value="overview">Overview</TabsItem>
    <TabsItem value="details">Details</TabsItem>
  </template>
  <template #panels>
    <TabsItem value="overview">Overview</TabsItem>
    <TabsItem value="details">Details</TabsItem>
  </template>
</Tabs>
```

### With Vertical Tabs

```vue
<div class="flex gap-8">
  <Tabs default-value="a" class="w-auto">
    <template #list>
      <TabsItem value="a">Tab A</TabsItem>
      <TabsItem value="b">Tab B</TabsItem>
      <TabsItem value="c">Tab C</TabsItem>
    </template>
    <template #panels>
      <TabsItem value="a">Content A</TabsItem>
      <TabsItem value="b">Content B</TabsItem>
      <TabsItem value="c">Content C</TabsItem>
    </template>
  </Tabs>
  <div class="flex-1">
    <!-- panel content rendered here -->
  </div>
</div>
```

### With Forms Inside Tabs

```vue
<Tabs v-model="activeTab">
  <template #list>
    <TabsItem value="profile">Profile</TabsItem>
    <TabsItem value="account">Account</TabsItem>
  </template>
  <template #panels>
    <TabsItem value="profile">
      <Input v-model="name" placeholder="Name">
        <template #label>Name</template>
      </Input>
    </TabsItem>
    <TabsItem value="account">
      <Input v-model="email" placeholder="Email">
        <template #label>Email</template>
      </Input>
    </TabsItem>
  </template>
</Tabs>
```

### Programmatic Tab Switching

```vue
<script setup lang="ts">
import { Tabs } from '@/components/ui/tabs'
import { ref } from 'vue'

const activeTab = ref('overview')

function switchTo(tab: string) {
  activeTab.value = tab
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-2">
      <Button @click="switchTo('overview')">Overview</Button>
      <Button @click="switchTo('details')">Details</Button>
    </div>
    <Tabs v-model="activeTab">
      <template #panels>
        <TabsItem value="overview">Overview</TabsItem>
        <TabsItem value="details">Details</TabsItem>
      </template>
    </Tabs>
  </div>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string \| number` | — | Active tab value (v-model) |
| `defaultValue` | `string \| number` | — | Initial active tab |
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Tab orientation |

### Slots

| Slot | Description |
|---|---|
| `list` | Tab buttons (`TabsItem` components) |
| `panels` | Tab panel content (`TabsItem` components with `#panel` slot) |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string \| number` | Emitted when active tab changes |

### TabsItem

A tab button with an associated panel.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string \| number` | — | Unique identifier for this tab |
| `disabled` | `boolean` | `false` | Disables this tab |
| `class` | `string` | — | Additional CSS classes |

```vue
<TabsItem value="overview">Overview</TabsItem>
```

#### TabsItem Slots

| Slot | Description |
|---|---|
| `default` | Tab label/button text |
| `panel` | Panel content for this tab |
