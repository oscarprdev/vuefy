<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const brightness = ref([75])
</script>

<template>
  <div class="w-64 space-y-2">
    <label class="text-sm font-medium">Brightness</label>
    <Slider v-model="brightness" :max="100" disabled />
    <p class="text-sm text-muted-foreground">{{ brightness }}%</p>
  </div>
</template>
