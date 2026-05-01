<script setup lang="ts">
import { Dialog } from '@vuetify/v0/components'
</script>

<template>
  <Dialog.Close as-child>
    <slot />
  </Dialog.Close>
</template>
