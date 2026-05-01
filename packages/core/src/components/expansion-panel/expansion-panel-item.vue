<script setup lang="ts">
import { ExpansionPanel } from '@vuetify/v0/components'

const props = defineProps<{
  value?: string
  disabled?: boolean
}>()
</script>

<template>
  <ExpansionPanel.Item :value="props.value" :disabled="props.disabled">
    <slot />
  </ExpansionPanel.Item>
</template>
