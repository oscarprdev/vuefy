<script setup lang="ts">
import { ExpansionPanel } from '@vuetify/v0/components'

const props = defineProps<{
  modelValue?: string[]
  defaultValue?: string[]
  collapsible?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()
</script>

<template>
  <ExpansionPanel.Root
    :model-value="props.modelValue"
    :default-value="props.defaultValue"
    :collapsible="props.collapsible"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </ExpansionPanel.Root>
</template>
