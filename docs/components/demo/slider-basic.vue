<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const value = ref([50])
</script>

<template>
  <div class="w-64">
    <Slider v-model="value" :max="100" />
  </div>
</template>
