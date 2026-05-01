<script setup lang="ts">
import { Switch } from '@vuetify/v0/components'
import { computed } from 'vue'

const props = defineProps<{
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  required?: boolean
  class?: string
}>()

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()

const resolvedClass = computed(() => {
  const base = 'inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input'
  const thumbClass = 'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
  return { base: `${base} ${props.class || ''}`, thumbClass }
})
</script>

<template>
  <Switch
    v-model:checked="props.checked"
    :disabled="props.disabled"
    :required="props.required"
    @update:checked="emit('update:checked', $event)"
  >
    <Switch.Thumb :class="resolvedClass.thumbClass">
      <slot name="indicator" />
    </Switch.Thumb>
    <slot name="label" />
    <slot />
  </Switch>
</template>
