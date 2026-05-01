/**
 * Tabs compound component — wraps v0 Tabs primitives with Tailwind styling.
 */
import Tabs from './tabs.vue'
import TabsItem from './tabs-item.vue'
import TabsPanel from './tabs-panel.vue'
import TabsList from './tabs-list.vue'

Tabs.Item = TabsItem
Tabs.Panel = TabsPanel
Tabs.List = TabsList

export default Tabs
export { TabsItem, TabsPanel, TabsList }
