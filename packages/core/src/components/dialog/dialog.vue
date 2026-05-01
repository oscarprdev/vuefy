<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
import { computed, type VNode } from 'vue'

const props = defineProps<{
  open?: boolean
  defaultOpen?: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const isOpen = computed({
  get: () => props.open ?? props.defaultOpen ?? false,
  set: (val: boolean) => emit('update:open', val),
})

const contentClass = computed(() => {
  const base = 'fixed inset-x-0 bottom-0 z-50 flex max-h-screen w-full flex-col gap-4 overflow-auto border bg-background p-6 shadow-lg animate-in sm:rounded-b-lg sm:fill-y-in data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom'
  return base
})

const slots = defineSlots<{
  trigger: () => VNode
  content: () => VNode
  close?: () => VNode
}>()
</script>

<template>
  <Dialog
    :open="isOpen"
    :default-open="props.defaultOpen"
    @update:open="isOpen = $event"
  >
    <slot name="trigger" />

    <Dialog.Content :class="contentClass" as-child>
      <slot name="content" />

      <slot name="close" />
    </Dialog.Content>
  </Dialog>
</template>
