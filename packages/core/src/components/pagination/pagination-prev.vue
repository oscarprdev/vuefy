<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  disabled?: boolean
  class?: string
}>()

const emit = defineEmits<{
  click: []
}>()

const resolvedClass = computed(() => {
  const base = 'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 cursor-pointer transition-colors'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <button type="button" :class="resolvedClass" :disabled="props.disabled" @click="emit('click')">
    <Icon icon="lucide:chevron-left" class="h-4 w-4" />
  </button>
</template>
