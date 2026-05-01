<script setup lang="ts">
import { Treeview } from '@vuetify/v0/components'

const props = defineProps<{
  disabled?: boolean
}>()

defineEmits<{
  select: [id: string]
  expand: [id: string]
}>()
</script>

<template>
  <Treeview.Root :disabled="props.disabled">
    <slot />
  </Treeview.Root>
</template>
