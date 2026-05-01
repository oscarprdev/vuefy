// Registry
export { registry, dependencies } from './components/index'
export type { ComponentName } from './components/index'

// Simple components
export { default as Button } from './components/button/button.vue'
export { default as Input } from './components/input/input.vue'
export { default as Checkbox } from './components/checkbox/checkbox.vue'
export { default as Switch } from './components/switch/switch.vue'
export { default as NumberField } from './components/number-field/number-field.vue'
export { default as Rating } from './components/rating/rating.vue'
export { default as Collapsible } from './components/collapsible/collapsible.vue'
export { default as Snackbar } from './components/snackbar/snackbar.vue'
export { default as Combobox } from './components/combobox/combobox.vue'

// Compound components (slot-based roots)
export { default as Dialog } from './components/dialog/dialog.vue'
export { default as Popover } from './components/popover/popover.vue'
export { default as Sheet } from './components/sheet/sheet.vue'
export { default as AlertDialog } from './components/alert-dialog/alert-dialog.vue'
export { default as RadioGroup } from './components/radio-group/radio-group.vue'
export { default as Select } from './components/select/select.vue'
export { default as Tabs } from './components/tabs/tabs.vue'
export { default as ExpansionPanel } from './components/expansion-panel/expansion-panel.vue'
export { default as Treeview } from './components/treeview/treeview.vue'
export { default as Avatar } from './components/avatar/avatar.vue'
export { default as Breadcrumbs } from './components/breadcrumbs/breadcrumbs.vue'
export { default as Carousel } from './components/carousel/carousel.vue'
export { default as Pagination } from './components/pagination/pagination.vue'
export { default as Slider } from './components/slider/slider.vue'
export { default as Splitter } from './components/splitter/splitter.vue'

// Dialog standalone primitives
export { default as DialogTitle } from './components/dialog/dialog-title.vue'
export { default as DialogDescription } from './components/dialog/dialog-description.vue'
export { default as DialogClose } from './components/dialog/dialog-close.vue'

// Popover standalone primitives
export { default as PopoverClose } from './components/popover/popover-close.vue'

// Sheet standalone primitives
export { default as SheetTitle } from './components/sheet/sheet-title.vue'
export { default as SheetDescription } from './components/sheet/sheet-description.vue'
export { default as SheetClose } from './components/sheet/sheet-close.vue'

// AlertDialog standalone primitives
export { default as AlertDialogTitle } from './components/alert-dialog/alert-dialog-title.vue'
export { default as AlertDialogDescription } from './components/alert-dialog/alert-dialog-description.vue'
export { default as AlertDialogAction } from './components/alert-dialog/alert-dialog-action.vue'
export { default as AlertDialogCancel } from './components/alert-dialog/alert-dialog-cancel.vue'

// Select standalone components
export { default as SelectValue } from './components/select/select-value.vue'
export { default as SelectItem } from './components/select/select-item.vue'

// ExpansionPanel standalone components
export { default as ExpansionPanelItem } from './components/expansion-panel/expansion-panel-item.vue'

// Tabs standalone components
export { default as TabsItem } from './components/tabs/tabs-item.vue'
