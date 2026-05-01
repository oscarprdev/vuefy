<script setup lang="ts">
import { computed } from 'vue'
import { Button } from '@vuetify/v0/components'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary' | 'destructive'
  size?: 'sm' | 'default' | 'lg'
  loading?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const variantClasses = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
} as const

const sizeClasses = {
  sm: 'h-8 px-3 text-xs',
  default: 'h-10 px-4 py-2',
  lg: 'h-11 px-8 text-base',
} as const

const resolvedClass = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  return `${base} ${variantClasses[props.variant || 'primary']} ${sizeClasses[props.size || 'default']}`
})
</script>

<template>
  <Button
    :class="resolvedClass"
    :disabled="loading || disabled"
    :aria-busy="loading"
    @click="emit('click', $event)"
  >
    <template v-if="loading">
      <slot name="loading" />
      <Icon
        v-if="!$slots.loading"
        icon="lucide:loader-circle"
        class="h-4 w-4 animate-spin"
      />
    </template>
    <template v-else>
      <slot v-if="$slots.icon" name="icon" />
      <slot />
    </template>
  </Button>
</template>
