<script setup lang="ts">
import { Popover } from '@vuetify/v0/components'
</script>

<template>
  <Popover.Activator as-child>
    <slot />
  </Popover.Activator>
</template>
