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
  const base = 'fixed inset-0 z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
  return base
})

const slots = defineSlots<{
  trigger: () => VNode
  content: () => VNode
  action?: () => VNode
  cancel?: () => VNode
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

      <slot name="action" />
      <slot name="cancel" />
    </Dialog.Content>
  </Dialog>
</template>
