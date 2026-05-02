<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'text-sm text-muted-foreground'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <p data-component="card.description" :class="resolvedClass">
    <slot />
  </p>
</template>
