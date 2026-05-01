<script setup lang="ts">
import { Popover } from '@vuetify/v0/components'
import { computed } from 'vue'

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
</script>

<template>
  <Popover
    :open="isOpen"
    :default-open="props.defaultOpen"
    :side="props.side"
    :side-offset="props.sideOffset"
    @update:open="isOpen = $event"
  >
    <slot />
  </Popover>
</template>
