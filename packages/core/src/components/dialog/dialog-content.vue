<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'fixed inset-x-0 bottom-0 z-50 flex max-h-screen w-full flex-col gap-4 overflow-auto border bg-background p-6 shadow-lg animate-in sm:rounded-b-lg sm:fill-y-in data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Dialog.Content :class="resolvedClass" as-child>
    <slot />
  </Dialog.Content>
</template>
