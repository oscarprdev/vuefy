/**
 * Dialog compound component — wraps v0 Dialog primitives with Tailwind styling.
 */
import Dialog from './dialog.vue'
import DialogTrigger from './dialog-trigger.vue'
import DialogContent from './dialog-content.vue'
import DialogTitle from './dialog-title.vue'
import DialogDescription from './dialog-description.vue'
import DialogClose from './dialog-close.vue'

Dialog.Trigger = DialogTrigger
Dialog.Content = DialogContent
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription
Dialog.Close = DialogClose

export default Dialog
export { DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose }
