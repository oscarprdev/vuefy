<script setup lang="ts">
import { RadioGroup } from '@vuetify/v0/components'

const props = defineProps<{
  modelValue?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  orientation?: 'horizontal' | 'vertical'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <RadioGroup
    v-model="props.modelValue"
    :default-value="props.defaultValue"
    :disabled="props.disabled"
    :required="props.required"
    :orientation="props.orientation"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </RadioGroup>
</template>
