<script setup lang="ts">
import { Popover } from '@vuetify/v0/components'
import { computed, type VNode } from 'vue'

const props = defineProps<{
  open?: boolean
  defaultOpen?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const isOpen = computed({
  get: () => props.open ?? props.defaultOpen ?? false,
  set: (val: boolean) => emit('update:open', val),
})

const contentClass = computed(() => {
  const base = 'z-50 min-w-[8rem] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
  return base
})

const slots = defineSlots<{
  trigger: () => VNode
  content: () => VNode
  close?: () => VNode
}>()
</script>

<template>
  <Popover
    :open="isOpen"
    :default-open="props.defaultOpen"
    :side="props.side"
    :side-offset="props.sideOffset"
    @update:open="isOpen = $event"
  >
    <slot name="trigger" />

    <Popover.Content :class="contentClass" :side="props.side" :side-offset="props.sideOffset" as-child>
      <slot name="content" />

      <slot name="close" />
    </Popover.Content>
  </Popover>
</template>
