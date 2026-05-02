<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value?: number
  max?: number
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'relative h-4 w-full overflow-hidden rounded-full bg-secondary'
  return `${base} ${props.class || ''}`
})

const fillClass = computed(() => {
  const percentage = Math.min((props.value || 0) / (props.max || 100) * 100, 100)
  return {
    base: 'h-full w-full flex-1 bg-primary transition-all duration-300',
    style: { transform: `translateX(-${100 - percentage}%)` },
  }
})
</script>

<template>
  <div data-component="progress" :class="resolvedClass" role="progressbar" :aria-valuenow="props.value" aria-valuemax="100">
    <div :class="fillClass.base" :style="fillClass.style" />
  </div>
</template>
