<script setup lang="ts">
import { ExpansionPanel } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>button]:rotate-180'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <ExpansionPanel.Header :class="resolvedClass" as-child>
    <slot />
  </ExpansionPanel.Header>
</template>
