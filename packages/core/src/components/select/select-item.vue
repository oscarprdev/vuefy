<script setup lang="ts">
import { Select } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  value?: string
  disabled?: boolean
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Select.Item :class="resolvedClass" :value="props.value" :disabled="props.disabled">
    <slot />
  </Select.Item>
</template>
