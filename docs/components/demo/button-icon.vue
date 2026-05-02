<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { LucidePlus, LucideHeart } from 'lucide-vue-next'
</script>

<template>
  <div class="flex gap-2">
    <Button>
      <template #icon>
        <LucidePlus />
      </template>
      Create
    </Button>
    <Button variant="outline">
      <template #icon>
        <LucideHeart />
      </template>
      Like
    </Button>
  </div>
</template>
