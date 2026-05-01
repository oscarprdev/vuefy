<script setup lang="ts">
import { Tabs } from '@vuetify/v0/components'
import { computed, type VNode } from 'vue'

const props = defineProps<{
  modelValue?: string | number
  defaultValue?: string | number
  orientation?: 'horizontal' | 'vertical'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const listClass = computed(() => {
  const base = 'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'
  return base
})

defineSlots<{
  list: () => VNode
  panels: () => VNode
}>()
</script>

<template>
  <Tabs
    v-model="props.modelValue"
    :default-value="props.defaultValue"
    :orientation="props.orientation"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <Tabs.List :class="listClass">
      <slot name="list" />
    </Tabs.List>

    <slot name="panels" />
  </Tabs>
</template>
