<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'text-sm font-semibold leading-none tracking-tight'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Dialog.Title :class="resolvedClass">
    <slot />
  </Dialog.Title>
</template>
