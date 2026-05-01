<script setup lang="ts">
import { Slider } from '@vuetify/v0/components'

const props = defineProps<{
  modelValue?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>

<template>
  <Slider
    v-model="props.modelValue"
    :default-value="props.defaultValue"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    :disabled="props.disabled"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </Slider>
</template>
