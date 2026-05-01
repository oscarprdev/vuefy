<script setup lang="ts">
import { Splitter } from '@vuetify/v0/components'

const props = defineProps<{
  modelValue?: number[]
  defaultValue?: number[]
  orientation?: 'horizontal' | 'vertical'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number[]]
}>()
</script>

<template>
  <Splitter.Root
    v-model="props.modelValue"
    :default-value="props.defaultValue"
    :orientation="props.orientation"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </Splitter.Root>
</template>
