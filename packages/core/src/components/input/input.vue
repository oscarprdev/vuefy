<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  type?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  pattern?: string
  modelValue?: string | number
  class?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const hasError = ref(false)

watch(
  () => props.modelValue,
  () => {
    if (inputRef.value) {
      hasError.value = !inputRef.value.checkValidity()
    }
  },
)

const resolvedClass = computed(() => {
  const base = 'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  const errorClass = hasError.value ? 'border-destructive focus-visible:ring-destructive' : 'border-input'
  return `${base} ${errorClass} ${props.class || ''}`
})
</script>

<template>
  <div class="space-y-2">
    <slot name="label" />
    <div class="flex items-center gap-2">
      <slot name="prefix" />
      <input
        ref="inputRef"
        :type="props.type"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :required="props.required"
        :pattern="props.pattern"
        :class="resolvedClass"
        :value="props.modelValue"
        :aria-invalid="hasError"
        :data-invalid="hasError"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
      <slot name="suffix" />
      <slot name="icon" />
    </div>
    <slot name="helper" />
  </div>
</template>
