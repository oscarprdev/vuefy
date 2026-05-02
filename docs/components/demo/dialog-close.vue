<script setup lang="ts">
import { ref } from 'vue'
import { Dialog } from '@/components/ui/dialog'
import { DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const isOpen = ref(false)
</script>

<template>
  <div>
    <Dialog v-model:open="isOpen">
      <template #trigger>
        <Button>Confirm Action</Button>
      </template>

      <template #content>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogDescription>
          Are you sure you want to proceed? This action cannot be undone.
        </DialogDescription>
        <div class="flex justify-between items-center mt-4">
          <DialogClose>
            <Button variant="ghost" size="sm">✕</Button>
          </DialogClose>
          <div class="flex gap-2">
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Destruct</Button>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>
