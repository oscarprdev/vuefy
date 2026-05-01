<script setup lang="ts">
import { ExpansionPanel } from '@vuetify/v0/components'
import { computed, type VNode } from 'vue'

const props = defineProps<{
  value?: string
  disabled?: boolean
}>()

const headerClass = computed(() => {
  const base = 'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>button]:rotate-180'
  return base
})

const contentClass = computed(() => {
  const base = 'animate-collapse overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
  return base
})

defineSlots<{
  header: () => VNode
  content: () => VNode
}>()
</script>

<template>
  <ExpansionPanel.Item :value="props.value" :disabled="props.disabled">
    <ExpansionPanel.Header :class="headerClass">
      <slot name="header" />
    </ExpansionPanel.Header>
    <ExpansionPanel.Content :class="contentClass">
      <div class="pb-4">
        <slot name="content" />
      </div>
    </ExpansionPanel.Content>
  </ExpansionPanel.Item>
</template>
