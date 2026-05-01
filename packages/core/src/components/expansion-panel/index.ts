/**
 * ExpansionPanel compound component — wraps v0 ExpansionPanel primitives with Tailwind styling.
 */
import ExpansionPanel from './expansion-panel.vue'
import ExpansionPanelItem from './expansion-panel-item.vue'
import ExpansionPanelHeader from './expansion-panel-header.vue'
import ExpansionPanelContent from './expansion-panel-content.vue'

ExpansionPanel.Item = ExpansionPanelItem
ExpansionPanel.Header = ExpansionPanelHeader
ExpansionPanel.Content = ExpansionPanelContent

export default ExpansionPanel
export { ExpansionPanelItem, ExpansionPanelHeader, ExpansionPanelContent }
