<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Icon } from '@iconify/vue'

interface ToastProps {
  visible?: boolean
  duration?: number
  actionLabel?: string
  variant?: 'default' | 'destructive'
}

const props = withDefaults(defineProps<ToastProps>(), {
  visible: false,
  duration: 5000,
  variant: 'default',
})

const emit = defineEmits<{
  'update:visible': [value: boolean]
  action: []
}>()

const show = ref(props.visible)

watch(() => props.visible, (val) => {
  show.value = val
})

function dismiss() {
  show.value = false
  emit('update:visible', false)
}

function handleAction() {
  emit('action')
  dismiss()
}

const resolvedClass = computed(() => {
  const base = 'fixed bottom-4 end-4 z-[100] flex items-center gap-2 rounded-md border bg-background px-4 py-3 shadow-lg transition-all duration-300 ease-out max-w-[90vw] sm:max-w-md'
  const variantClass = props.variant === 'destructive'
    ? 'border-destructive/50 text-destructive dark:border-destructive'
    : 'border-border'
  return `${base} ${variantClass}`
})

const resolvedActionClass = computed(() => {
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  return base
})
</script>

<template>
  <div v-show="show" data-component="toast" :class="resolvedClass" role="status" aria-live="polite">
    <slot />
    <div class="ml-auto flex items-center gap-2">
      <slot name="action">
        <button v-if="props.actionLabel" :class="resolvedActionClass" @click="handleAction">
          {{ props.actionLabel }}
        </button>
      </slot>
      <button class="inline-flex items-center justify-center rounded-sm opacity-70 hover:opacity-100" @click="dismiss">
        <Icon icon="lucide:x" class="h-3 w-3" />
      </button>
    </div>
  </div>
</template>
