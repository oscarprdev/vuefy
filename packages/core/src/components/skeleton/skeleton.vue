<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
  variant?: 'rectangular' | 'rounded'
}>()

const resolvedClass = computed(() => {
  const base = 'animate-pulse bg-muted'
  const roundedClass = props.variant === 'rounded' ? 'rounded-full' : 'rounded-md'
  return `${base} ${roundedClass} ${props.class || ''}`
})
</script>

<template>
  <div data-component="skeleton" :class="resolvedClass">
    <slot />
  </div>
</template>
