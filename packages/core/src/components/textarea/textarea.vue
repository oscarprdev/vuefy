<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  rows?: number
  minRows?: number
  maxRows?: number
  resize?: 'vertical' | 'horizontal' | 'both' | 'none'
  class?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)

const resolvedClass = computed(() => {
  const base = 'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  const resizeClass = {
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
    none: 'resize-none',
  }[props.resize || 'vertical']
  return `${base} ${resizeClass} ${props.class || ''}`
})

function autoResize() {
  if (!textareaRef.value) return
  const el = textareaRef.value
  const computedStyle = window.getComputedStyle(el)
  const lineHeight = parseInt(computedStyle.lineHeight, 10) || 24
  const padding = parseInt(computedStyle.paddingTop, 10) + parseInt(computedStyle.paddingBottom, 10)
  const border = 2

  if (props.minRows) {
    el.style.height = `${lineHeight * props.minRows + padding + border}px`
  }

  if (props.maxRows) {
    el.addEventListener('input', () => {
      el.style.height = 'auto'
      const scrollHeight = el.scrollHeight
      const maxHeight = lineHeight * props.maxRows + padding + border
      el.style.height = `${Math.min(scrollHeight, maxHeight)}px`
    })
  }
}

function onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <textarea
    data-component="textarea"
    ref="textareaRef"
    :class="resolvedClass"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    @input="onInput"
    @mounted="autoResize"
  />
</template>
