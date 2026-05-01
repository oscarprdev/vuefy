<script setup lang="ts">
import { Select } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  placeholder?: string
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'text-sm'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Select.Value :class="resolvedClass" :placeholder="props.placeholder" />
</template>
