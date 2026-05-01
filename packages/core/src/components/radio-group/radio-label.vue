<script setup lang="ts">
import { RadioGroup } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <RadioGroup.Label :class="resolvedClass" as-child>
    <slot />
  </RadioGroup.Label>
</template>
