<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  side?: 'top' | 'right' | 'bottom' | 'left'
  class?: string
}>(), {
  side: 'right',
})

const sideClasses = computed(() => {
  const map: Record<string, string> = {
    bottom: 'inset-x-0 bottom-0 flex-row rounded-t-xl border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
    right: 'inset-y-0 end-0 flex-col rounded-r-xl border-r data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
    top: 'inset-x-0 top-0 flex-row rounded-b-xl border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
    left: 'inset-y-0 start-0 flex-col rounded-l-xl border-l data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
  }
  return map[props.side] || map.right
})

const resolvedClass = computed(() => {
  const base = 'fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500'
  return `${base} ${sideClasses.value} ${props.class || ''}`
})
</script>

<template>
  <Dialog.Content :class="resolvedClass" as-child>
    <slot />
  </Dialog.Content>
</template>
