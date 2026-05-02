/**
 * Tooltip — non-interactive delayed popup for displaying text information.
 */
import Tooltip from './tooltip.vue'
import TooltipTrigger from './tooltip-trigger.vue'
import TooltipContent from './tooltip-content.vue'
import TooltipClose from './tooltip-close.vue'

Tooltip.Trigger = TooltipTrigger
Tooltip.Content = TooltipContent
Tooltip.Close = TooltipClose

export default Tooltip
export { TooltipTrigger, TooltipContent, TooltipClose }
