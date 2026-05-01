<script setup lang="ts">
import { ref, computed } from 'vue'
import { Popover } from '@vuetify/v0/components'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  options?: string[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const searchQuery = ref('')
const isOpen = ref(false)

const filteredOptions = computed(() => {
  const options = props.options || []
  if (!searchQuery.value) return options
  return options.filter(opt =>
    opt.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

function selectOption(value: string) {
  emit('update:modelValue', value)
  searchQuery.value = value
  isOpen.value = false
}

function onClear() {
  emit('update:modelValue', '')
  searchQuery.value = ''
}
</script>

<template>
  <Popover v-model:open="isOpen" side="bottom" side-offset="4">
    <div class="relative">
      <div class="flex h-10 w-full items-center gap-2 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <Icon
          v-if="!searchQuery"
          icon="lucide:search"
          class="h-4 w-4 text-muted-foreground"
        >
          <slot name="input" />
        </Icon>
        <input
          :value="searchQuery"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :required="props.required"
          class="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          @input="searchQuery = ($event.target as HTMLInputElement).value"
          @focus="isOpen = true"
        >
        <button
          v-if="searchQuery"
          class="inline-flex items-center justify-center rounded-sm text-xs hover:bg-accent hover:text-accent-foreground"
          @click="onClear"
        >
          <Icon icon="lucide:x" class="h-3 w-3" />
        </button>
      </div>
    </div>

    <Popover.Content
      v-if="filteredOptions.length"
      class="z-50 min-w-[var(--radix-popover-trigger-width)] max-h-96 overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
      as-child
    >
      <slot name="options">
        <div
          v-for="option in filteredOptions"
          :key="option"
          class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
          :class="{ 'bg-accent text-accent-foreground': modelValue === option }"
          @click="selectOption(option)"
        >
          <Icon
            v-if="modelValue === option"
            icon="lucide:check"
            class="me-2 h-4 w-4"
          />
          {{ option }}
        </div>
      </slot>
    </Popover.Content>
  </Popover>
</template>
