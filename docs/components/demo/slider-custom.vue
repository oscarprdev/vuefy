<script setup lang="ts">
import { Slider } from '@/components/ui/slider'

const price = ref([100, 800])
</script>

<template>
  <div class="w-64 space-y-2">
    <label class="text-sm font-medium">Price range</label>
    <Slider v-model="price" :max="1000" :step="10" />
    <p class="text-sm text-muted-foreground">${{ price[0] }} - ${{ price[1] }}</p>
  </div>
</template>
