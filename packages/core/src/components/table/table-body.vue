<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'w-full'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <tbody data-component="table.body" :class="resolvedClass">
    <slot />
  </tbody>
</template>
