---
outline: deep
---

# Card

Displays a card with header, title, description, content, and footer sections.

## Installation

```bash
npx vuefy@latest add card
```

## Usage

```vue
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description</CardDescription>
    </CardHeader>
    <CardContent>
      Card content goes here.
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
</template>
```

## Examples

### Basic Card

```vue
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card content goes here.</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
</template>
```

### Without Header

```vue
<Card>
  <CardContent class="pt-6">
    <p>This card has no header sections.</p>
  </CardContent>
</Card>
```

### With Form

```vue
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Create Project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <div>
          <label class="text-sm font-medium">Name</label>
          <Input placeholder="Project name" />
        </div>
      </div>
    </CardContent>
    <CardFooter class="justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>
```

## Composition

Use the following composition to build a Card:

```
Card
├── CardHeader
│   ├── CardTitle
│   └── CardDescription
├── CardContent
└── CardFooter
```

## API Reference

### Card (Root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### Slots

| Slot | Description |
|---|---|
| `header` | Card header section |
| `title` | Card title |
| `description` | Card description |
| `content` | Card main content |
| `footer` | Card footer section |

### CardHeader

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### CardTitle

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### CardDescription

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### CardContent

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |

### CardFooter

| Prop | Type | Default | Description |
|---|---|---|---|
| `class` | `string` | — | Custom CSS classes |
