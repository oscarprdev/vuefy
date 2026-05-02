<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'p-6 pt-0'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <div data-component="card.content" :class="resolvedClass">
    <slot />
  </div>
</template>
