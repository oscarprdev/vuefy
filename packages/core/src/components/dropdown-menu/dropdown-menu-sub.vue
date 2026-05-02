<script setup lang="ts">
import { computed, type VNode } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'relative'
  return `${base} ${props.class || ''}`
})

defineSlots<{
  trigger: () => VNode
  content: () => VNode
}>()
</script>

<template>
  <li :class="resolvedClass">
    <slot name="trigger" />
    <slot name="content" />
  </li>
</template>
