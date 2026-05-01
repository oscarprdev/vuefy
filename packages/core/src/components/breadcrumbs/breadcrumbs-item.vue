<script setup lang="ts">
import { Breadcrumbs } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  href?: string
  current?: boolean
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'inline-flex items-center gap-1.5 text-sm'
  const currentClass = props.current ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
  return `${base} ${currentClass} ${props.class || ''}`
})
</script>

<template>
  <Breadcrumbs.Item :class="resolvedClass" :aria-current="props.current ? 'page' : undefined">
    <slot />
  </Breadcrumbs.Item>
</template>
