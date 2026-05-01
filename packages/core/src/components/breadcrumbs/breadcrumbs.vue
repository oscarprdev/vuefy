<script setup lang="ts">
import { Breadcrumbs } from '@vuetify/v0/components'

const props = defineProps<{
  separator?: string
}>()
</script>

<template>
  <Breadcrumbs.Root :separator="props.separator" aria-label="breadcrumb">
    <slot />
  </Breadcrumbs.Root>
</template>
