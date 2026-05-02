<script setup lang="ts">
import { computed, type VNode } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'list-none p-1'
  return `${base} ${props.class || ''}`
})

defineSlots<{
  default: () => VNode
}>()
</script>

<template>
  <ul :class="resolvedClass" role="group">
    <slot />
  </ul>
</template>
