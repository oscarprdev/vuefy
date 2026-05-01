<script setup lang="ts">
import { Tabs } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  value?: string | number
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Tabs.Panel :class="resolvedClass" :value="String(props.value)">
    <slot />
  </Tabs.Panel>
</template>
