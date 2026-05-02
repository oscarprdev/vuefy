<script setup lang="ts">
import { computed, type VNode } from 'vue'
import { Popover } from '@vuetify/v0/components'

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
  const base = 'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
  return base
})

const sideClasses = {
  top: 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
  right: 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
  bottom: 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
  left: 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
} as const

const resolvedSideClass = computed(() => {
  return sideClasses[props.side || 'bottom']
})

defineSlots<{
  trigger: () => VNode
  content: () => VNode
}>()
</script>

<template>
  <Popover
    :open="isOpen"
    :default-open="props.defaultOpen"
    @update:open="isOpen = $event"
  >
    <slot name="trigger" />

    <Popover.Content
      :class="[contentClass, resolvedSideClass]"
      :side="props.side || 'bottom'"
      :side-offset="props.sideOffset || 4"
      as-child
    >
      <slot name="content" />
    </Popover.Content>
  </Popover>
</template>
