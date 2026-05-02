<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const volume = ref([50])
</script>

<template>
  <div class="w-64 space-y-2">
    <label class="text-sm font-medium">Volume</label>
    <Slider v-model="volume" :max="100" />
    <p class="text-sm text-muted-foreground">{{ volume }}%</p>
  </div>
</template>
