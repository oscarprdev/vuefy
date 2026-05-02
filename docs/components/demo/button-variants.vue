<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex gap-2">
    <Button>Primary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
</template>
