/**
 * Popover compound component — wraps v0 Popover primitives with Tailwind styling.
 */
import Popover from './popover.vue'
import PopoverTrigger from './popover-trigger.vue'
import PopoverContent from './popover-content.vue'
import PopoverClose from './popover-close.vue'

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent
Popover.Close = PopoverClose

export default Popover
export { PopoverTrigger, PopoverContent, PopoverClose }
