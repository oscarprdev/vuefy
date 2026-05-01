<script setup lang="ts">
import { Tabs } from '@vuetify/v0/components'
import { computed, type VNode } from 'vue'

const props = defineProps<{
  value?: string | number
  disabled?: boolean
  class?: string
}>()

const itemClass = computed(() => {
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground'
  return `${base} ${props.class || ''}`
})

const panelClass = computed(() => {
  const base = 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
  return `${base} ${props.class || ''}`
})

defineSlots<{
  panel: () => VNode
}>()
</script>

<template>
  <Tabs.Item :class="itemClass" :value="String(props.value)" :disabled="props.disabled">
    <slot />

    <Tabs.Panel :class="panelClass" :value="String(props.value)">
      <slot name="panel" />
    </Tabs.Panel>
  </Tabs.Item>
</template>
