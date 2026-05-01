<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  open?: boolean
  defaultOpen?: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const isOpen = ref(props.defaultOpen || false)

function toggle() {
  isOpen.value = !isOpen.value
  emit('update:open', isOpen.value)
}

const resolvedTriggerClass = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground'
  return base
})
</script>

<template>
  <div class="space-y-2">
    <button
      :class="resolvedTriggerClass"
      @click="toggle"
    >
      <slot name="trigger">
        <Icon
          icon="lucide:chevron-down"
          class="h-4 w-4 transition-transform duration-200 ease-out"
          :class="{ 'rotate-180': isOpen }"
        />
        <slot />
      </slot>
    </button>
    <Transition
      name="collapsible"
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-200 ease-out"
    >
      <div
        v-if="isOpen"
        class="overflow-hidden"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
