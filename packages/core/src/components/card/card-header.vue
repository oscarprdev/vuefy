<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'flex min-h-[80px] w-full flex-col gap-1.5 border-b px-5 py-4'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <div data-component="card.header" :class="resolvedClass">
    <slot />
  </div>
</template>
