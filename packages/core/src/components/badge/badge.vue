<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  class?: string
}>()

const variantClasses = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline: 'text-foreground border border-input hover:bg-accent hover:text-accent-foreground',
} as const

const resolvedClass = computed(() => {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
  return `${base} ${variantClasses[props.variant || 'default']} ${props.class || ''}`.trim()
})
</script>

<template>
  <span data-component="badge" :class="resolvedClass">
    <slot />
  </span>
</template>
