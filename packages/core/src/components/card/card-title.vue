<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'text-2xl font-semibold leading-none tracking-tight'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <h3 data-component="card.title" :class="resolvedClass">
    <slot />
  </h3>
</template>
