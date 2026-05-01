<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'


const props = defineProps<{
  orientation?: 'horizontal' | 'vertical'
  snap?: boolean
  maxHeight?: string
}>()

const emit = defineEmits<{
  prev: []
  next: []
}>()

const currentSlide = ref(0)
const containerRef = ref<HTMLElement | null>(null)

function scrollToSlide(index: number) {
  if (!containerRef.value) return
  const scrollAmount = index * (containerRef.value.children[0]?.getBoundingClientRect().width || 0)
  containerRef.value.scrollTo({
    left: props.orientation === 'horizontal' ? scrollAmount : 0,
    top: props.orientation === 'vertical' ? scrollAmount : 0,
    behavior: 'smooth',
  })
}

function prev() {
  if (currentSlide.value > 0) {
    currentSlide.value--
    scrollToSlide(currentSlide.value)
    emit('prev')
  }
}

function next() {
  if (containerRef.value && currentSlide.value < containerRef.value.children.length - 1) {
    currentSlide.value++
    scrollToSlide(currentSlide.value)
    emit('next')
  }
}

const resolvedPrevClass = computed(() => {
  const base = 'absolute z-10 inline-flex items-center justify-center rounded-full bg-background/80 p-2 shadow-sm backdrop-blur-sm hover:bg-background transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:pointer-events-none'
  const positionClass = props.orientation === 'horizontal'
    ? 'inset-y-0 start-0'
    : 'inset-x-0 top-0'
  return `${base} ${positionClass}`
})

const resolvedNextClass = computed(() => {
  const base = 'absolute z-10 inline-flex items-center justify-center rounded-full bg-background/80 p-2 shadow-sm backdrop-blur-sm hover:bg-background transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:pointer-events-none'
  const positionClass = props.orientation === 'horizontal'
    ? 'inset-y-0 end-0'
    : 'inset-x-0 bottom-0'
  return `${base} ${positionClass}`
})

const resolvedContentClass = computed(() => {
  const base = 'flex overflow-hidden'
  const snapClass = props.snap ? (props.orientation === 'horizontal' ? 'snap-x snap-mandatory' : 'snap-y snap-mandatory') : ''
  return `${base} ${snapClass}`
})

const resolvedItemClass = computed(() => {
  const base = 'min-w-0 shrink-0 grow-0 flex-shrink-0 transition-transform'
  const snapClass = props.snap ? (props.orientation === 'horizontal' ? 'snap-start' : 'snap-center') : ''
  return `${base} ${snapClass}`
})
</script>

<template>
  <div class="group relative">
    <div
      ref="containerRef"
      :class="resolvedContentClass"
      :style="props.orientation === 'vertical' ? { maxHeight: props.maxHeight || '400px' } : undefined"
    >
      <slot name="slides" />
    </div>
    <Button
      :class="resolvedPrevClass"
      variant="ghost"
      size="sm"
      @click="prev"
    >
      <slot name="prev">
        <Icon :icon="orientation === 'horizontal' ? 'lucide:chevron-left' : 'lucide:chevron-up'" class="h-4 w-4" />
      </slot>
    </Button>
    <Button
      :class="resolvedNextClass"
      variant="ghost"
      size="sm"
      @click="next"
    >
      <slot name="next">
        <Icon :icon="orientation === 'horizontal' ? 'lucide:chevron-right' : 'lucide:chevron-down'" class="h-4 w-4" />
      </slot>
    </Button>
  </div>
</template>
