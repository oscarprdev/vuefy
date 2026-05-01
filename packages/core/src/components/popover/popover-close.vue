<script setup lang="ts">
import { Popover } from '@vuetify/v0/components'
</script>

<template>
  <Popover.Close as-child>
    <slot />
  </Popover.Close>
</template>
