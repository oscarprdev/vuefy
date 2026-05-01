/**
 * ExpansionPanel — slot-based API.
 * Item now has #header and #content slots.
 */
import ExpansionPanel from './expansion-panel.vue'
import ExpansionPanelItem from './expansion-panel-item.vue'

ExpansionPanel.Item = ExpansionPanelItem

export default ExpansionPanel
export { ExpansionPanelItem }
