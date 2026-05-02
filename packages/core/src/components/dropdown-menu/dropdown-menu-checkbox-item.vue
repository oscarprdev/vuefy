<script setup lang="ts">
import { computed, type VNode } from 'vue'

const props = defineProps<{
  class?: string
  checked?: boolean
  disabled?: boolean
  inset?: boolean
}>()

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()

const resolvedClass = computed(() => {
  const base = 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
  const insetClass = props.inset ? 'pl-8' : ''
  return `${base} ${insetClass} ${props.class || ''}`
})
</script>

<template>
  <li
    :class="resolvedClass"
    role="menuitemcheckbox"
    :aria-checked="props.checked"
    :data-checked="props.checked"
    :disabled="props.disabled"
    @click="emit('update:checked', !props.checked)"
  >
    <span class="absolute start-1.5 flex h-3.5 w-3.5 items-center justify-center">
      <span v-if="props.checked" class="h-4 w-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    </span>
    <slot />
  </li>
</template>
