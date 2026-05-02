<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, type VNode } from 'vue'

const props = defineProps<{
  open?: boolean
  defaultOpen?: boolean
  delay?: number
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const isOpen = ref(props.defaultOpen ?? false)
let timeout: ReturnType<typeof setTimeout> | null = null

function open() {
  if (props.disabled) return
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    isOpen.value = true
    emit('update:open', true)
  }, props.delay || 700)
}

function close() {
  if (timeout) clearTimeout(timeout)
  isOpen.value = false
  emit('update:open', false)
}

function toggle() {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

const contentClass = computed(() => {
  const base = 'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
  return base
})

defineSlots<{
  trigger: () => VNode
  content: () => VNode
  close?: () => VNode
}>()
</script>

<template>
  <div
    class="relative inline-block"
    @mouseenter="open"
    @mouseleave="close"
  >
    <slot name="trigger" />

    <Transition
      name="tooltip"
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-200 ease-out"
    >
      <div
        v-if="isOpen"
        class="absolute inset-x-0 bottom-full mx-auto mb-2"
        role="tooltip"
      >
        <slot name="content" />
        <slot name="close" />
      </div>
    </Transition>
  </div>
</template>
