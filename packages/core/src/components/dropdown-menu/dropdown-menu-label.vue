<script setup lang="ts">
import { computed, type VNode } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'px-2 py-1.5 text-sm font-semibold'
  return `${base} ${props.class || ''}`
})

defineSlots<{
  label: () => VNode
}>()
</script>

<template>
  <li :class="resolvedClass">
    <slot name="label" />
  </li>
</template>
