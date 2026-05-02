<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'rounded-lg border bg-card text-card-foreground shadow-sm'
  return `${base} ${props.class || ''}`
})

defineSlots<{
  header?: () => unknown
  title?: () => unknown
  description?: () => unknown
  content?: () => unknown
  footer?: () => unknown
}>()
</script>

<template>
  <div data-component="card" :class="resolvedClass">
    <slot name="header" />
    <slot name="title" />
    <slot name="description" />
    <slot name="content" />
    <slot name="footer" />
  </div>
</template>
