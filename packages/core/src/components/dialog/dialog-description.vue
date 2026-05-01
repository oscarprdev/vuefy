<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'text-sm text-muted-foreground'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Dialog.Description :class="resolvedClass" as-child>
    <slot />
  </Dialog.Description>
</template>
