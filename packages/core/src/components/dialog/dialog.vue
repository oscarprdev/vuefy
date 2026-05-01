<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
import { computed } from 'vue'

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
</script>

<template>
  <Dialog
    :open="isOpen"
    :default-open="props.defaultOpen"
    @update:open="isOpen = $event"
  >
    <slot />
  </Dialog>
</template>
