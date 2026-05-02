<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = '[&:not(:last-child)]:border-b'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <thead data-component="table.head" :class="resolvedClass">
    <slot />
  </thead>
</template>
