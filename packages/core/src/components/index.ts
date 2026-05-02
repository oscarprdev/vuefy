/**
 * Registry mapping component CLI names to their template file paths.
 * Used by the `vuefy add` CLI command to locate component templates.
 */
export const registry: Record<string, string> = {
  // Simple components
  button: './components/button/button.vue',
  input: './components/input/input.vue',
  checkbox: './components/checkbox/checkbox.vue',
  switch: './components/switch/switch.vue',
  'number-field': './components/number-field/number-field.vue',
  rating: './components/rating/rating.vue',
  collapsible: './components/collapsible/collapsible.vue',
  snackbar: './components/snackbar/snackbar.vue',
  combobox: './components/combobox/combobox.vue',

  // Compound components (directory-based)
  dialog: './components/dialog/dialog.vue',
  popover: './components/popover/popover.vue',
  sheet: './components/sheet/sheet.vue',
  'alert-dialog': './components/alert-dialog/alert-dialog.vue',
  'radio-group': './components/radio-group/radio-group.vue',
  select: './components/select/select.vue',
  tabs: './components/tabs/tabs.vue',
  'expansion-panel': './components/expansion-panel/expansion-panel.vue',
  treeview: './components/treeview/treeview.vue',
  avatar: './components/avatar/avatar.vue',
  breadcrumbs: './components/breadcrumbs/breadcrumbs.vue',
  carousel: './components/carousel/carousel.vue',
  pagination: './components/pagination/pagination.vue',
  slider: './components/slider/slider.vue',
  splitter: './components/splitter/splitter.vue',

  // New components
  table: './components/table/table.vue',
  tooltip: './components/tooltip/tooltip.vue',
  toast: './components/toast/toast.vue',
  'dropdown-menu': './components/dropdown-menu/dropdown-menu.vue',
  badge: './components/badge/badge.vue',
  card: './components/card/card.vue',
  textarea: './components/textarea/textarea.vue',
  separator: './components/separator/separator.vue',
  progress: './components/progress/progress.vue',
  skeleton: './components/skeleton/skeleton.vue',
}

// Dependency map for auto-resolution during `vuefy add`
export const dependencies: Record<string, string[]> = {
  select: ['popover'],
  combobox: ['popover'],
  carousel: [],
  'alert-dialog': [],
  dialog: [],
  popover: [],
  sheet: [],
  'radio-group': [],
  tabs: [],
  'expansion-panel': [],
  treeview: [],
  avatar: [],
  breadcrumbs: [],
  pagination: [],
  slider: [],
  splitter: [],
  collapsible: [],
  snackbar: [],
  input: [],
  checkbox: [],
  switch: [],
  'number-field': [],
  rating: [],
  button: [],

  // New components
  table: [],
  tooltip: [],
  toast: [],
  'dropdown-menu': [],
  badge: [],
  card: [],
  textarea: [],
  separator: [],
  progress: [],
  skeleton: [],
}

export type ComponentName = keyof typeof registry
