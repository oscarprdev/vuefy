<script setup lang="ts">
import { Avatar } from '@vuetify/v0/components'
import { computed, ref } from 'vue'

const props = defineProps<{
  src?: string
  alt?: string
  fallback?: string
}>()

defineEmits<{
  error: []
}>()

const imageLoaded = ref(false)

const resolvedClass = computed(() => {
  const base = 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
  return base
})
</script>

<template>
  <Avatar.Root :class="resolvedClass">
    <Avatar.Image
      v-if="props.src"
      :src="props.src"
      :alt="props.alt"
      class="h-full w-full object-cover"
      @load="imageLoaded = true"
      @error="imageLoaded = false"
    >
      <slot name="image" />
    </Avatar.Image>
    <Avatar.Fallback
      v-if="!imageLoaded || !props.src"
      class="flex h-full w-full items-center justify-center bg-muted"
    >
      <slot name="fallback">
        {{ props.fallback || props.alt?.charAt(0) || '?' }}
      </slot>
    </Avatar.Fallback>
  </Avatar.Root>
</template>
