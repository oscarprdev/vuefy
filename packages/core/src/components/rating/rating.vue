<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  modelValue?: number
  max?: number
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const hoverValue = ref(0)

function setRating(value: number) {
  if (!props.disabled) {
    emit('update:modelValue', value)
  }
}

const resolvedStarClass = computed(() => {
  const base = 'inline-flex cursor-pointer transition-colors'
  return base
})

function getStarFilled(index: number) {
  if (props.disabled) return index <= (props.modelValue || 0)
  return index <= (hoverValue.value || 0)
}
</script>

<template>
  <div class="inline-flex items-center gap-1">
    <button
      v-for="index in max || 5"
      :key="index"
      type="button"
      :class="resolvedStarClass"
      :disabled="props.disabled"
      :aria-label="`Rate ${index} out of ${max || 5}`"
      @click="setRating(index)"
      @mouseenter="hoverValue = index"
      @mouseleave="hoverValue = 0"
    >
      <slot name="icon">
        <Icon
          :icon="getStarFilled(index) ? 'lucide:star' : 'lucide:star-off'"
          class="h-5 w-5 transition-colors"
          :class="getStarFilled(index) ? 'fill-current text-amber-400' : 'text-muted-foreground'"
        />
      </slot>
    </button>
  </div>
</template>
