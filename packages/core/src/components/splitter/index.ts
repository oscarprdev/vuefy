/**
 * Splitter compound component — wraps v0 Splitter primitives with Tailwind styling.
 */
import Splitter from './splitter.vue'
import SplitterPanel from './splitter-panel.vue'
import SplitterHandle from './splitter-handle.vue'

Splitter.Panel = SplitterPanel
Splitter.Handle = SplitterHandle

export default Splitter
export { Splitter }
export { SplitterPanel, SplitterHandle }
