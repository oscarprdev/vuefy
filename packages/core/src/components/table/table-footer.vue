<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'flex w-full justify-between gap-2 py-5 text-sm font-medium text-foreground items-center'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <tfoot data-component="table.footer" :class="resolvedClass">
    <slot />
  </tfoot>
</template>
