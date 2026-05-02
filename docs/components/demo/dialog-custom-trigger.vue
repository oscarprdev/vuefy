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
        <a href="#" @click.prevent="isOpen = true" class="text-primary underline">
          Open dialog
        </a>
      </template>

      <template #content>
        <DialogTitle>Custom Trigger</DialogTitle>
        <DialogDescription>
          This dialog is triggered by a link instead of a button.
        </DialogDescription>
        <div class="flex justify-end mt-4">
          <DialogClose>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </template>
    </Dialog>
  </div>
</template>
