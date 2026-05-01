<script setup lang="ts">
import { Treeview } from '@vuetify/v0/components'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'inline-flex items-center justify-center'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Treeview.Indicator :class="resolvedClass">
    <Icon icon="lucide:chevron-right" class="h-4 w-4 transition-transform data-[state=open]:rotate-90" />
    <slot />
  </Treeview.Indicator>
</template>
