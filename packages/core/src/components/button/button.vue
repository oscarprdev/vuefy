<script setup lang="ts">
import { h } from 'vue'

defineOptions({
  name: 'VuiButton',
})

defineSlots<{
  default(): any
}>()

// Render function using h() — placeholder for T005+
const _render = () =>
  h(
    'button',
    { class: 'vui-button' },
    {
      default: () => [],
    },
  )
</script>
