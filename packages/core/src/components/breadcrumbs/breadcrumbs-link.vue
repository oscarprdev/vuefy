<script setup lang="ts">
import { Breadcrumbs } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  href: string
  class?: string
}>()

const resolvedClass = computed(() => {
  const base = 'transition-colors hover:text-foreground text-sm'
  return `${base} ${props.class || ''}`
})
</script>

<template>
  <Breadcrumbs.Link :class="resolvedClass" :href="props.href" as-child>
    <slot />
  </Breadcrumbs.Link>
</template>
