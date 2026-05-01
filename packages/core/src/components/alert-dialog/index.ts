/**
 * AlertDialog compound component — wraps v0 Dialog primitives with Tailwind styling.
 * A confirmation dialog for destructive actions.
 */
import AlertDialog from './alert-dialog.vue'
import AlertDialogTrigger from './alert-dialog-trigger.vue'
import AlertDialogContent from './alert-dialog-content.vue'
import AlertDialogTitle from './alert-dialog-title.vue'
import AlertDialogDescription from './alert-dialog-description.vue'
import AlertDialogAction from './alert-dialog-action.vue'
import AlertDialogCancel from './alert-dialog-cancel.vue'

AlertDialog.Trigger = AlertDialogTrigger
AlertDialog.Content = AlertDialogContent
AlertDialog.Title = AlertDialogTitle
AlertDialog.Description = AlertDialogDescription
AlertDialog.Action = AlertDialogAction
AlertDialog.Cancel = AlertDialogCancel

export default AlertDialog
export { AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel }
