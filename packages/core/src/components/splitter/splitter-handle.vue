<script setup lang="ts">
import { Splitter } from '@vuetify/v0/components'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  disabled?: boolean
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'flex items-center justify-center bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Splitter.Handle :class="resolvedClass" :disabled="props.disabled">
    <slot>
      <div class="h-8 w-1 rounded-full bg-border">
        <Icon icon="lucide:grip-vertical" class="h-3 w-3 text-muted-foreground" />
      </div>
    </slot>
  </Splitter.Handle>
</template>
