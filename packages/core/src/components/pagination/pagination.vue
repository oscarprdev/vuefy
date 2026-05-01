<script setup lang="ts">
import { computed } from 'vue'

import PaginationItem from './pagination-item.vue'
import PaginationPrev from './pagination-prev.vue'
import PaginationNext from './pagination-next.vue'

const props = defineProps<{
  modelValue?: number
  total?: number
  pageSize?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const totalPages = computed(() => Math.max(1, Math.ceil((props.total || 0) / (props.pageSize || 10))))

const resolvedClass = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2'
  return base
})

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:modelValue', page)
  }
}
</script>

<template>
  <div :class="resolvedClass">
    <PaginationPrev :disabled="modelValue <= 1" @click="goToPage(modelValue - 1)" />
    <slot name="items">
      <template v-for="page in totalPages" :key="page">
        <PaginationItem
          :value="page"
          :active="modelValue === page"
          @click="goToPage(page)"
        >
          {{ page }}
        </PaginationItem>
      </template>
    </slot>
    <PaginationNext :disabled="modelValue >= totalPages" @click="goToPage(modelValue + 1)" />
  </div>
</template>
