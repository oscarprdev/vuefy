---
outline: deep
---

# Pagination

A navigation control for paginated content.

## Installation

```bash
npx vuefy@latest add pagination
```

## Usage

```vue
<script setup lang="ts">
import { Pagination } from '@/components/ui/pagination'

const currentPage = ref(1)
const total = 100
const pageSize = 10
</script>

<template>
  <Pagination
    v-model="currentPage"
    :total="total"
    :page-size="pageSize"
  />
</template>
```

## Examples

### Basic

```vue
<Pagination v-model="page" :total="100" :page-size="10" />
```

### With Custom Items Slot

Use the `items` slot to render custom pagination controls.

```vue
<Pagination v-model="page" :total="100" :page-size="10">
  <template #items="{ pages }">
    <div class="flex gap-1">
      <button
        v-for="p in pages"
        :key="p"
        class="px-3 py-1 rounded"
        :class="{ 'bg-primary text-primary-foreground': page === p }"
        @click="page = p"
      >
        {{ p }}
      </button>
    </div>
  </template>
</Pagination>
```

### With Previous/Next Buttons

```vue
<Pagination v-model="page" :total="50" :page-size="10">
  <template #items>
    <Pagination.Prev :disabled="page <= 1" @click="page--" />
    <template v-for="p in totalPages" :key="p">
      <Pagination.Item :value="p" :active="page === p">
        {{ p }}
      </Pagination.Item>
    </template>
    <Pagination.Next :disabled="page >= totalPages" @click="page++" />
  </template>
</Pagination>
```

### Standalone Prev/Next

```vue
<div class="flex gap-2">
  <Pagination.Prev
    :disabled="currentPage <= 1"
    @click="currentPage--"
  />
  <span class="flex items-center text-sm">
    Page {{ currentPage }} of {{ totalPages }}
  </span>
  <Pagination.Next
    :disabled="currentPage >= totalPages"
    @click="currentPage++"
  />
</div>
```

### Item with Custom Content

```vue
<Pagination v-model="page" :total="100" :page-size="10">
  <template #items="{ pages }">
    <template v-for="p in pages" :key="p">
      <Pagination.Item :value="p" :active="page === p">
        <LucideBook v-if="p === 1" class="h-4 w-4" />
        {{ p }}
      </Pagination.Item>
    </template>
  </template>
</Pagination>
```

## API Reference

### Pagination (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `number` | `1` | Current page (v-model) |
| `total` | `number` | `0` | Total number of items |
| `pageSize` | `number` | `10` | Items per page |

### Sub-Components

#### Pagination.Item

A page number button.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Page number |
| `active` | `boolean` | `false` | Is this the current page |
| `class` | `string` | — | Additional CSS classes |

```vue
<Pagination.Item :value="1" :active="page === 1">1</Pagination.Item>
```

#### Pagination.Prev

Previous page button.

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables the button |
| `class` | `string` | — | Additional CSS classes |

```vue
<Pagination.Prev :disabled="page <= 1" @click="page--" />
```

#### Pagination.Next

Next page button.

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables the button |
| `class` | `string` | — | Additional CSS classes |

```vue
<Pagination.Next :disabled="page >= totalPages" @click="page++" />
```

### Slots

| Slot | Description |
|---|---|
| `items` | Custom pagination items rendering. Receives `pages` array |

### Emits

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `number` | Emitted when current page changes |
