<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  open?: boolean
  defaultOpen?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
}>(), {
  side: 'right',
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const sideClasses = computed(() => {
  const map: Record<string, string> = {
    bottom: 'inset-x-0 bottom-0 flex-row rounded-t-xl border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
    right: 'inset-y-0 end-0 flex-col rounded-r-xl border-r data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
    top: 'inset-x-0 top-0 flex-row rounded-b-xl border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
    left: 'inset-y-0 start-0 flex-col rounded-l-xl border-l data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
  }
  return map[props.side] || map.right
})
</script>

<template>
  <Dialog
    v-model:open="props.open"
    :default-open="props.defaultOpen"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </Dialog>
</template>
