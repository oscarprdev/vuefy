<script setup lang="ts">
import { Treeview } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  id?: string
  label?: string
  expanded?: boolean
  disabled?: boolean
  class?: string
}>()

const emit = defineEmits<{
  select: [id: string]
  expand: [id: string]
}>()

const resolvedClass = computed(() => {
  const base = 'flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Treeview.Item :class="resolvedClass" :id="props.id" :disabled="props.disabled">
    <Treeview.Activator as-child>
      <button
        class="inline-flex items-center gap-2"
        @click="emit('expand', props.id || '')"
      >
        <slot name="label">
          {{ props.label }}
        </slot>
      </button>
    </Treeview.Activator>
    <slot />
  </Treeview.Item>
</template>
