---
outline: deep
---

# Table

A layout component that displays data in rows and columns.

## Installation

Run the following command to add the Table component to your project:

```bash
npx vuefy@latest add table
```

## Usage

```vue
<script setup lang="ts">
import { Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from '@/components/ui/table'
</script>

<template>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

## Examples

### Basic Table

```vue
<script setup lang="ts">
import { Table, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/table'
</script>

<template>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Role</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

### With Footer

```vue
<script setup lang="ts">
import { Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from '@/components/ui/table'
</script>

<template>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Product</TableCell>
        <TableCell>Price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Widget</TableCell>
        <TableCell>$9.99</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableCell>Total</TableCell>
      <TableCell>$34.98</TableCell>
    </TableFooter>
  </Table>
</template>
```

## Composition

Use the following composition to build a Table:

```
Table
├── TableHead
│   └── TableRow
│       └── TableCell
├── TableBody
│   └── TableRow
│       └── TableCell
└── TableFooter
    └── TableRow
        └── TableCell
```

## API Reference

### Table (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |
| `captionSide` | `"top"` \| `"bottom"` | `"bottom"` | Position of the caption |

### Slots

| Slot | Description |
|---|---|
| `default` | Table content (thead, tbody, tfoot) |
| `caption` | Table caption |

### TableHead

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### TableBody

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### TableRow

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### TableCell

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### TableFooter

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |
