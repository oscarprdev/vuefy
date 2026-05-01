<script setup lang="ts">
import { h, computed, defineComponent } from 'vue'
import { Button as V0Button } from '@vuetify/v0/components'
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'VuiButton',
})

interface ButtonProps {
  variant: 'primary' | 'outline' | 'ghost' | 'secondary' | 'destructive'
  size: 'sm' | 'default' | 'lg'
  loading: boolean
  disabled: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'default',
  loading: false,
  disabled: false,
})

const emits = defineEmits<{
  click: [event: MouseEvent]
}>()

defineSlots<{
  default(): any
  icon(): any
  loading(): any
}>()

// Variant class map — keyed by exact union type for TS strictness
const variantClasses: Record<ButtonProps['variant'], string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
}

// Size class map
const sizeClasses: Record<ButtonProps['size'], string> = {
  sm: 'h-8 px-3 text-xs',
  default: 'h-10 px-4 py-2',
  lg: 'h-11 px-8 text-base',
}

const resolvedClass = computed(() => {
  const base = 'vui-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  return `${base} ${variantClasses[props.variant]} ${sizeClasses[props.size]}`
})

// Default loading spinner rendered via Iconify
const DefaultLoadingSpinner = defineComponent({
  setup() {
    return () => h(Icon, {
      icon: 'lucide:loader-circle',
      class: 'h-4 w-4 animate-spin',
    })
  },
})

const Button = defineComponent({
  setup(_, { slots }) {
    return () => {
      const iconSlot = slots.icon
      const loadingSlot = slots.loading
      const defaultSlot = slots.default

      // Loading state: disable and show spinner or loading slot
      if (props.loading) {
        return h(V0Button, {
          class: resolvedClass.value,
          disabled: true,
          'aria-busy': 'true',
        }, {
          default: () => {
            const children: any[] = []
            if (loadingSlot) {
              children.push(loadingSlot())
            } else {
              children.push(h(DefaultLoadingSpinner))
            }
            return children
          },
        })
      }

      // Normal state
      const children: any[] = []
      if (iconSlot) {
        children.push(h('span', { class: 'vui-button-icon' }, iconSlot()))
      }
      if (defaultSlot) {
        children.push(defaultSlot())
      }

      return h(V0Button, {
        class: resolvedClass.value,
        disabled: props.disabled,
        onClick: (e: MouseEvent) => emits('click', e),
      }, {
        default: () => children,
      })
    }
  },
})

export default Button
</script>
