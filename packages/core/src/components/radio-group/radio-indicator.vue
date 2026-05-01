<script setup lang="ts">
import { RadioGroup } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'flex items-center justify-center'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <RadioGroup.Indicator :class="resolvedClass">
    <slot />
  </RadioGroup.Indicator>
</template>
