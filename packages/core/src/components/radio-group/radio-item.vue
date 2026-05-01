<script setup lang="ts">
import { RadioGroup } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  value?: string
  disabled?: boolean
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <RadioGroup.Item :class="resolvedClass" :value="props.value" :disabled="props.disabled">
    <slot />
  </RadioGroup.Item>
</template>
