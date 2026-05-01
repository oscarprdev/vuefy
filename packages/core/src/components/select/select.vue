<script setup lang="ts">
import { Select } from '@vuetify/v0/components'
import { computed, type VNode } from 'vue'

const props = defineProps<{
  modelValue?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const contentClass = computed(() => {
  const base = 'relative z-50 max-h-96 min-w-[8rem] overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
  return base
})

const triggerClass = computed(() => {
  const base = 'inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start'
  return base
})

const slots = defineSlots<{
  trigger: () => VNode
  content: () => VNode
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
    <Select.Activator :class="triggerClass" :disabled="props.disabled" as-child>
      <slot name="trigger" />
    </Select.Activator>

    <Select.Content :class="contentClass" as-child>
      <slot name="content" />
    </Select.Content>
  </Select>
</template>
