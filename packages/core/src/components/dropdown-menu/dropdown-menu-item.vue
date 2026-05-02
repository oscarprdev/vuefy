<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
  disabled?: boolean
  inset?: boolean
}>()

const resolvedClass = computed(() => {
  const base = 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
  const insetClass = props.inset ? 'pl-8' : ''
  const disabledClass = props.disabled ? 'pointer-events-none opacity-50' : ''
  return `${base} ${insetClass} ${disabledClass} ${props.class || ''}`
})
</script>

<template>
  <li :class="resolvedClass">
    <slot />
  </li>
</template>
