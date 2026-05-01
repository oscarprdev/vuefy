<script setup lang="ts">
import { Slider } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'relative h-2 w-full grow overflow-hidden rounded-full bg-muted'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Slider.Track :class="resolvedClass">
    <Slider.Range class="absolute h-full bg-primary" />
    <slot />
  </Slider.Track>
</template>
