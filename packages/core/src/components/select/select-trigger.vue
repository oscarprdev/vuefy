<script setup lang="ts">
import { Select } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  disabled?: boolean
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Select.Activator :class="resolvedClass" :disabled="props.disabled" as-child>
    <slot />
  </Select.Activator>
</template>
