<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Button } from '@vuetify/v0/components'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  modelValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  required?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const hasError = ref(false)

function clamp(value: number) {
  return Math.min(props.max || 100, Math.max(props.min || 0, value))
}

function increment() {
  const newValue = clamp((props.modelValue || 0) + (props.step || 1))
  emit('update:modelValue', newValue)
}

function decrement() {
  const newValue = clamp((props.modelValue || 0) - (props.step || 1))
  emit('update:modelValue', newValue)
}

function onInputChange(event: Event) {
  const target = event.target as HTMLInputElement
  const value = Number(target.value)
  if (!isNaN(value)) {
    emit('update:modelValue', clamp(value))
  }
}

watch(
  () => props.modelValue,
  () => {
    if (inputRef.value) {
      hasError.value = !inputRef.value.checkValidity()
    }
  },
)

const resolvedInputClass = computed(() => {
  const base = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  const errorClass = hasError.value ? 'border-destructive focus-visible:ring-destructive' : ''
  return `${base} ${errorClass}`
})

const resolvedButtonClass = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8'
  return base
})
</script>

<template>
  <div class="space-y-2">
    <slot name="label" />
    <div class="flex items-center gap-2">
      <Button
        :class="resolvedButtonClass"
        variant="outline"
        size="sm"
        :disabled="disabled || (modelValue || 0) <= (min || 0)"
        @click="decrement"
      >
        <slot name="decrement">
          <Icon icon="lucide:minus" class="h-3 w-3" />
        </slot>
      </Button>
      <input
        ref="inputRef"
        type="number"
        :value="props.modelValue"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        :disabled="props.disabled"
        :required="props.required"
        :class="resolvedInputClass"
        @change="onInputChange"
        :aria-invalid="hasError"
        :data-invalid="hasError"
      >
      <Button
        :class="resolvedButtonClass"
        variant="outline"
        size="sm"
        :disabled="disabled || (modelValue || 0) >= (max || 100)"
        @click="increment"
      >
        <slot name="increment">
          <Icon icon="lucide:plus" class="h-3 w-3" />
        </slot>
      </Button>
    </div>
    <slot name="helper" />
  </div>
</template>
