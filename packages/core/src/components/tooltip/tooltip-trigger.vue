<script setup lang="ts">
import { Tooltip } from '@vuetify/v0/components'
import { computed, type VNode } from 'vue'

defineSlots<{
  default: () => VNode
}>()
</script>

<template>
  <Tooltip.Trigger as-child>
    <slot />
  </Tooltip.Trigger>
</template>
