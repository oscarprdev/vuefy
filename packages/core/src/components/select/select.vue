<script setup lang="ts">
import { Select } from '@vuetify/v0/components'

const props = defineProps<{
  modelValue?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <Select
    v-model="props.modelValue"
    :default-value="props.defaultValue"
    :disabled="props.disabled"
    :required="props.required"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </Select>
</template>
