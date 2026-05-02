<script setup lang="ts">
import { computed, type VNode } from 'vue'

const props = defineProps<{
  class?: string
  value?: string
  groupValue?: string
  disabled?: boolean
  inset?: boolean
}>()

const emit = defineEmits<{
  select: [value: string]
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
    role="menuitemradio"
    :aria-checked="props.groupValue === props.value"
    :data-checked="props.groupValue === props.value"
    :disabled="props.disabled"
    @click="emit('select', props.value || '')"
  >
    <span class="absolute start-1.5 flex h-3.5 w-3.5 items-center justify-center">
      <template v-if="props.groupValue === props.value">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-2.5 w-2.5 fill-current">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </template>
    </span>
    <slot />
  </li>
</template>
