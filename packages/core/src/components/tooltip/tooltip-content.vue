<script setup lang="ts">
import { computed, type VNode } from 'vue'

defineSlots<{
  default: () => VNode
}>()
</script>

<template>
  <div class="absolute inset-x-0 bottom-full mx-auto mb-2">
    <slot />
  </div>
</template>
