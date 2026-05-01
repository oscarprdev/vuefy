/**
 * Treeview compound component — wraps v0 Treeview primitives with Tailwind styling.
 */
import Treeview from './treeview.vue'
import TreeViewItem from './treeview-item.vue'
import TreeviewLabel from './treeview-label.vue'
import TreeviewIndicator from './treeview-indicator.vue'

Treeview.Item = TreeViewItem
Treeview.Label = TreeviewLabel
Treeview.Indicator = TreeviewIndicator

export default Treeview
export { TreeViewItem, TreeviewLabel, TreeviewIndicator }
