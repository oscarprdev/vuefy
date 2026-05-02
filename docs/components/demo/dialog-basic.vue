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
        <Button>Edit Profile</Button>
      </template>

      <template #content>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here.
        </DialogDescription>

        <div class="flex justify-end gap-2 mt-4">
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save</Button>
        </div>
      </template>
    </Dialog>
  </div>
</template>
