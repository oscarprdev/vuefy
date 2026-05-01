<script setup lang="ts">
import { Tabs } from '@vuetify/v0/components'

const props = defineProps<{
  modelValue?: string | number
  defaultValue?: string | number
  orientation?: 'horizontal' | 'vertical'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()
</script>

<template>
  <Tabs
    v-model="props.modelValue"
    :default-value="props.defaultValue"
    :orientation="props.orientation"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </Tabs>
</template>
