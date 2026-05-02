<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = '-mx-1 my-1 h-px bg-muted'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <li :class="resolvedClass" role="separator">
    <slot />
  </li>
</template>
