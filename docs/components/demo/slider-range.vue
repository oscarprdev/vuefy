<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const range = ref([20, 80])
</script>

<template>
  <div class="w-64 space-y-2">
    <label class="text-sm font-medium">Temperature range</label>
    <Slider v-model="range" :max="100" :step="5" />
    <div class="flex justify-between text-sm text-muted-foreground">
      <span>{{ range[0] }}°</span>
      <span>{{ range[1] }}°</span>
    </div>
  </div>
</template>
