/**
 * Sheet compound component — wraps v0 Dialog primitives with Tailwind styling.
 */
import Sheet from './sheet.vue'
import SheetTrigger from './sheet-trigger.vue'
import SheetContent from './sheet-content.vue'
import SheetTitle from './sheet-title.vue'
import SheetDescription from './sheet-description.vue'
import SheetClose from './sheet-close.vue'

Sheet.Trigger = SheetTrigger
Sheet.Content = SheetContent
Sheet.Title = SheetTitle
Sheet.Description = SheetDescription
Sheet.Close = SheetClose

export default Sheet
export { SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose }
