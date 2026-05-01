/**
 * RadioGroup compound component — wraps v0 RadioGroup primitives with Tailwind styling.
 */
import RadioGroup from './radio-group.vue'
import RadioItem from './radio-item.vue'
import RadioLabel from './radio-label.vue'
import RadioIndicator from './radio-indicator.vue'

RadioGroup.Item = RadioItem
RadioGroup.Label = RadioLabel
RadioGroup.Indicator = RadioIndicator

export default RadioGroup
export { RadioItem, RadioLabel, RadioIndicator }
