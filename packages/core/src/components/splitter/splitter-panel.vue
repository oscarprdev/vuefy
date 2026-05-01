<script setup lang="ts">
import { Splitter } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  size?: number
  minSize?: number
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'relative flex min-h-0 min-w-0 data-[panel-type=resize]:flex'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Splitter.Panel :class="resolvedClass" :size="props.size" :min-size="props.minSize">
    <slot />
  </Splitter.Panel>
</template>
