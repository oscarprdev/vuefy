import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './index.css'
import ComponentShowcase from './components/ComponentShowcase.vue'
import Features from './components/Features.vue'
import StatsBar from './components/StatsBar.vue'

// Component names that appear in markdown but aren't registered
// These are either custom web components or component references in docs
const docComponentNames = [
  'Badge',
  'Button',
  'Input',
  'Textarea',
  'Checkbox',
  'Switch',
  'NumberField',
  'Rating',
  'Select',
  'Combobox',
  'RadioGroup',
  'Slider',
  'Dialog',
  'Popover',
  'Sheet',
  'AlertDialog',
  'Tabs',
  'ExpansionPanel',
  'Treeview',
  'Collapsible',
  'Avatar',
  'Breadcrumbs',
  'Carousel',
  'Pagination',
  'Snackbar',
  'Splitter',
  'Skeleton',
  'Progress',
  'Separator',
  'Table',
  'DropdownMenu',
  'Tooltip',
  'Toast',
  'Card',
  'Playground',
  'CodeBlock',
]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentShowcase', ComponentShowcase)
    app.component('Features', Features)
    app.component('StatsBar', StatsBar)

    // Register all doc component names as stub components to prevent
    // Vue compiler errors when parsing markdown files
    for (const name of docComponentNames) {
      app.component(name, {
        template: `<slot />`,
      })
    }
  },
}
