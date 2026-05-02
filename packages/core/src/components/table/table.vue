<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
  captionSide?: 'top' | 'bottom'
}>()

const resolvedClass = computed(() => {
  const base = 'w-full caption-bottom text-sm text-muted-foreground'
  return `${base} ${props.class || ''}`
})

const captionClass = computed(() => {
  const base = 'sr-only'
  return base
})

defineSlots<{
  caption?: () => unknown
}>()
</script>

<template>
  <table data-component="table" :class="resolvedClass">
    <slot />
    <caption v-if="$slots.caption" :class="captionClass">
      <slot name="caption" />
    </caption>
  </table>
</template>
