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

const activeTab = ref('overview')
</script>

<template>
  <Tabs v-model="activeTab">
    <template #tabs>
      <Tabs.Item value="overview">Overview</Tabs.Item>
      <Tabs.Item value="details">Details</Tabs.Item>
      <Tabs.Item value="settings">Settings</Tabs.Item>
    </template>

    <template #panels>
      <Tabs.Panel value="overview">Overview content</Tabs.Panel>
      <Tabs.Panel value="details">Details content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings content</Tabs.Panel>
    </template>
  </Tabs>
</template>
```

## Examples

### Default Active Tab

```vue
<Tabs default-value="details">
  <template #tabs>
    <Tabs.Item value="overview">Overview</Tabs.Item>
    <Tabs.Item value="details">Details</Tabs.Item>
  </template>
  <template #panels>
    <Tabs.Panel value="overview">Overview</Tabs.Panel>
    <Tabs.Panel value="details">Details</Tabs.Panel>
  </template>
</Tabs>
```

### With Vertical Tabs

```vue
<div class="flex gap-8">
  <Tabs default-value="a" class="w-auto">
    <template #tabs>
      <Tabs.Item value="a">Tab A</Tabs.Item>
      <Tabs.Item value="b">Tab B</Tabs.Item>
      <Tabs.Item value="c">Tab C</Tabs.Item>
    </template>
    <template #panels>
      <Tabs.Panel value="a">Content A</Tabs.Panel>
      <Tabs.Panel value="b">Content B</Tabs.Panel>
      <Tabs.Panel value="c">Content C</Tabs.Panel>
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
  <template #tabs>
    <Tabs.Item value="profile">Profile</Tabs.Item>
    <Tabs.Item value="account">Account</Tabs.Item>
  </template>
  <template #panels>
    <Tabs.Panel value="profile">
      <Input v-model="name" placeholder="Name">
        <template #label>Name</template>
      </Input>
    </Tabs.Panel>
    <Tabs.Panel value="account">
      <Input v-model="email" placeholder="Email">
        <template #label>Email</template>
      </Input>
    </Tabs.Panel>
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
        <Tabs.Panel value="overview">Overview</Tabs.Panel>
        <Tabs.Panel value="details">Details</Tabs.Panel>
      </template>
    </Tabs>
  </div>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `""` | Active tab value (v-model) |
| `defaultValue` | `string` | `""` | Initial active tab |

### Sub-Components

#### Tabs.Item

A tab button.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Unique identifier for this tab |

```vue
<Tabs.Item value="overview">Overview</Tabs.Item>
```

#### Tabs.Panel

A tab panel content area.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Must match a Tabs.Item value |

```vue
<Tabs.Panel value="overview">Content</Tabs.Panel>
```

### Slots

| Slot | Description |
|---|---|
| `tabs` | Tabs.Item components |
| `panels` | Tabs.Panel components |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when active tab changes |
