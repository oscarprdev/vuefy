<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
}>()

const sideClasses = {
  top: 'inset-x-0 top-0',
  right: 'inset-y-0 end-0',
  bottom: 'inset-x-0 bottom-0',
  left: 'inset-y-0 start-0',
} as const

const resolvedClass = computed(() => {
  const base = 'shrink-0 border-border'
  const side = sideClasses[props.side || 'bottom']
  const orientationClass = ['top', 'bottom'].includes(props.side || 'bottom')
    ? 'h-[1px] w-full'
    : 'w-[1px] h-full'
  return `${base} ${side} ${orientationClass} ${props.class || ''}`
})

defineSlots<{
  label?: () => unknown
}>()
</script>

<template>
  <div data-component="separator" :class="resolvedClass">
    <slot name="label" />
  </div>
</template>
