<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Snackbar } from '@vuetify/v0/components'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  duration?: number
  visible?: boolean
  actionLabel?: string
}>()

const emit = defineEmits<{
  'update:visible': [value: boolean]
  action: []
}>()

const show = ref(props.visible)
let timer: ReturnType<typeof setTimeout> | null = null

watch(() => props.visible, (val) => {
  show.value = val
  if (val) {
    startTimer()
  }
})

function startTimer() {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    show.value = false
    emit('update:visible', false)
  }, props.duration || 5000)
}

function dismiss() {
  if (timer) clearTimeout(timer)
  show.value = false
  emit('update:visible', false)
}

function handleAction() {
  emit('action')
  dismiss()
}

const resolvedClass = computed(() => {
  const base = 'fixed bottom-4 end-4 z-50 flex items-center gap-2 rounded-md border bg-background px-4 py-3 shadow-lg transition-all duration-300 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-bottom-0 data-[state=open]:slide-in-from-bottom-4 max-w-[90vw] sm:max-w-md'
  return base
})

const resolvedActionClass = computed(() => {
  const base = 'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground'
  return base
})
</script>

<template>
  <Snackbar.Root v-if="show">
    <Snackbar.Portal>
      <div :class="resolvedClass" role="status" aria-live="polite">
        <slot />
        <div class="flex items-center gap-2 ms-auto">
          <slot name="action">
            <button :class="resolvedActionClass" @click="handleAction">
              {{ props.actionLabel || 'Dismiss' }}
            </button>
          </slot>
          <button class="inline-flex items-center justify-center rounded-r-sm opacity-70 hover:opacity-100" @click="dismiss">
            <Icon icon="lucide:x" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </Snackbar.Portal>
  </Snackbar.Root>
</template>
