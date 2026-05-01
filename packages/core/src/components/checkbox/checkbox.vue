<script setup lang="ts">
import { Checkbox } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  required?: boolean
  class?: string
}>()

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()

const resolvedClass = computed(() => {
  const base = 'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
  return `${base} ${props.class || ''}`
})

const resolvedIndicatorClass = computed(() => {
  const base = 'flex items-center justify-center text-current'
  return base
})
</script>

<template>
  <Checkbox
    v-model:checked="props.checked"
    :disabled="props.disabled"
    :required="props.required"
    :class="resolvedClass"
    @update:checked="emit('update:checked', $event)"
  >
    <Checkbox.Indicator :class="resolvedIndicatorClass">
      <slot name="indicator" />
    </Checkbox.Indicator>
    <slot name="label" />
    <slot />
  </Checkbox>
</template>
