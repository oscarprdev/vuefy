<script setup lang="ts">
import { ref } from 'vue'
import { Dialog } from '@/components/ui/dialog'
import { DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const isOpen = ref(false)
const username = ref('')
const email = ref('')
</script>

<template>
  <div>
    <Dialog v-model:open="isOpen">
      <template #trigger>
        <Button>Add User</Button>
      </template>

      <template #content>
        <DialogTitle>Add New User</DialogTitle>
        <DialogDescription>
          Enter the details for the new user.
        </DialogDescription>

        <div class="space-y-4 py-4">
          <div class="space-y-1">
            <label class="text-sm font-medium">Username</label>
            <Input v-model="username" placeholder="johndoe">
              <template #label>Username</template>
            </Input>
          </div>
          <div class="space-y-1">
            <label class="text-sm font-medium">Email</label>
            <Input v-model="email" type="email" placeholder="john@example.com">
              <template #label>Email</template>
            </Input>
          </div>
        </div>

        <div class="flex justify-end gap-2 mt-4">
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button @click="isOpen = false">Create</Button>
        </div>
      </template>
    </Dialog>
  </div>
</template>
