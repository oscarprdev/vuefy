<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'ml-auto flex h-5 items-center text-xs leading-none opacity-60'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <span :class="resolvedClass">
    <slot />
  </span>
</template>
