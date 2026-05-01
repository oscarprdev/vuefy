<script setup lang="ts">
import { ExpansionPanel } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'animate-collapse overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <ExpansionPanel.Content :class="resolvedClass">
    <div class="pb-4">
      <slot />
    </div>
  </ExpansionPanel.Content>
</template>
