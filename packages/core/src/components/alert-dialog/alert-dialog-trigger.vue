<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
</script>

<template>
  <Dialog.Activator as-child>
    <slot />
  </Dialog.Activator>
</template>
