<script setup lang="ts">
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
</script>

<template>
  <Popover
    v-model:open="props.open"
    :default-open="props.defaultOpen"
    :side="props.side"
    :side-offset="props.sideOffset"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </Popover>
</template>
