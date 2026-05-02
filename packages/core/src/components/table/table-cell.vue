<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'flex whitespace-nowrap px-4 py-2 text-sm text-foreground even:bg-muted'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <td data-component="table.cell" :class="resolvedClass">
    <slot />
  </td>
</template>
