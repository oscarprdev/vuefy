<script setup lang="ts">
import { Tabs } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Tabs.List :class="resolvedClass">
    <slot />
  </Tabs.List>
</template>
