/**
 * Select compound component — wraps v0 Select primitives with Tailwind styling.
 */
import Select from './select.vue'
import SelectTrigger from './select-trigger.vue'
import SelectValue from './select-value.vue'
import SelectContent from './select-content.vue'
import SelectItem from './select-item.vue'

Select.Trigger = SelectTrigger
Select.Value = SelectValue
Select.Content = SelectContent
Select.Item = SelectItem

export default Select
export { SelectTrigger, SelectValue, SelectContent, SelectItem }
