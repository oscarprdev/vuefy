<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value?: number
  active?: boolean
  class?: string
}>()

const emit = defineEmits<{
  click: []
}>()

const resolvedClass = computed(() => {
  const base = 'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 cursor-pointer transition-colors'
  const activeClass = props.active ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground border-primary' : ''
  return `${base} ${activeClass} ${props.class || ''}`
})
</script>

<template>
  <button :class="resolvedClass" @click="emit('click')">
    <slot />
  </button>
</template>
