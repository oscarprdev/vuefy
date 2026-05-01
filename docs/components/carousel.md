---
outline: deep
---

# Carousel

A content carousel with navigation controls and optional snap scrolling.

## Installation

```bash
npx vuefy@latest add carousel
```

## Usage

```vue
<script setup lang="ts">
import { Carousel } from '@/components/ui/carousel'
</script>

<template>
  <Carousel>
    <template #slides>
      <div class="min-w-0 shrink-0 grow-0 basis-full bg-primary/10 p-8 text-center">
        Slide 1
      </div>
      <div class="min-w-0 shrink-0 grow-0 basis-full bg-primary/20 p-8 text-center">
        Slide 2
      </div>
      <div class="min-w-0 shrink-0 grow-0 basis-full bg-primary/30 p-8 text-center">
        Slide 3
      </div>
    </template>
  </Carousel>
</template>
```

## Examples

### Horizontal (Default)

```vue
<Carousel>
  <template #slides>
    <div class="min-w-0 shrink-0 grow-0 basis-full bg-muted p-8">1</div>
    <div class="min-w-0 shrink-0 grow-0 basis-full bg-muted p-8">2</div>
    <div class="min-w-0 shrink-0 grow-0 basis-full bg-muted p-8">3</div>
  </template>
</Carousel>
```

### Vertical

```vue
<Carousel orientation="vertical">
  <template #slides>
    <div class="min-w-0 shrink-0 grow-0 basis-full bg-muted p-8">Top</div>
    <div class="min-w-0 shrink-0 grow-0 basis-full bg-muted p-8">Middle</div>
    <div class="min-w-0 shrink-0 grow-0 basis-full bg-muted p-8">Bottom</div>
  </template>
</Carousel>
```

### With Snap Scrolling

```vue
<Carousel snap>
  <template #slides>
    <div class="min-w-0 shrink-0 grow-0 basis-full snap-start bg-primary/10 p-8">
      Snap Slide 1
    </div>
    <div class="min-w-0 shrink-0 grow-0 basis-full snap-start bg-primary/20 p-8">
      Snap Slide 2
    </div>
  </template>
</Carousel>
```

### With Custom Navigation

```vue
<Carousel>
  <template #slides>
    <div class="p-8 bg-muted">Content 1</div>
    <div class="p-8 bg-muted">Content 2</div>
  </template>
  <template #prev>
    <LucideChevronLeft class="h-6 w-6" />
  </template>
  <template #next>
    <LucideChevronRight class="h-6 w-6" />
  </template>
</Carousel>
```

### With Images

```vue
<Carousel>
  <template #slides>
    <img src="/slide1.jpg" class="w-full h-64 object-cover" alt="Slide 1" />
    <img src="/slide2.jpg" class="w-full h-64 object-cover" alt="Slide 2" />
    <img src="/slide3.jpg" class="w-full h-64 object-cover" alt="Slide 3" />
  </template>
</Carousel>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Carousel direction |
| `snap` | `boolean` | `false` | Enables CSS snap scrolling |

### Slots

| Slot | Description |
|---|---|
| `slides` | Carousel slide content (default slot) |
| `prev` | Custom previous button content |
| `next` | Custom next button content |

### Emits

| Event | Payload | Description |
|---|---|---|
| `prev` | — | Emitted when previous button is clicked |
| `next` | — | Emitted when next button is clicked |
