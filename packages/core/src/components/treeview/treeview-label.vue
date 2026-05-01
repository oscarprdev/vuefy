<script setup lang="ts">
import { Treeview } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'text-sm font-medium'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Treeview.Label :class="resolvedClass" as-child>
    <slot />
  </Treeview.Label>
</template>
