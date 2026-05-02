// Mock for @vuetify/v0/components - loaded directly without Vite transform
const Vue = require('vue')
const h = Vue.h
const defineComponent = Vue.defineComponent

const makeComp = (name, tag, extraProps = {}) =>
  defineComponent({
    name,
    props: { class: String, asChild: Boolean, ...extraProps },
    render() {
      return h(tag, { 'data-component': name, class: this.class }, this.$slots.default?.())
    },
  })

const makeSub = (name, tag = 'div', extraProps = {}) =>
  defineComponent({
    name,
    props: { class: String, asChild: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, open: { type: Boolean, default: undefined }, defaultOpen: { type: Boolean, default: undefined }, value: { type: null, default: undefined }, 'data-state': { type: String, default: undefined }, ...extraProps },
    render() {
      return h(tag, { 'data-sub-component': name, class: this.class }, this.$slots.default?.())
    },
  })

const primitives = ['Button', 'Checkbox', 'Switch', 'Dialog', 'Popover', 'Select', 'RadioGroup', 'Tabs', 'ExpansionPanel', 'Slider', 'Splitter', 'Breadcrumbs', 'Avatar', 'Treeview']
const components = {}

for (const name of primitives) {
  components[name] = makeComp(name, 'div')
}

for (const root of primitives) {
  for (const sub of ['Root', 'Content', 'Title', 'Description', 'Close', 'Activator', 'Trigger']) {
    components[`${root}.${sub}`] = makeSub(`${root}.${sub}`)
  }
}

components['ExpansionPanel.Header'] = components['ExpansionPanel.Activator']
components['ExpansionPanel.Content'] = makeSub('ExpansionPanel.Content')
components['Tabs.List'] = makeSub('Tabs.List')
components['Tabs.Panel'] = makeSub('Tabs.Panel')
components['Tabs.Item'] = makeSub('Tabs.Item', 'button', { value: { type: null }, disabled: Boolean })
components['Select.Value'] = makeSub('Select.Value', 'span', { placeholder: String })
components['Select.Item'] = makeSub('Select.Item', 'div', { value: String, disabled: Boolean })
components['RadioGroup.Item'] = makeSub('RadioGroup.Item', 'div', { value: String, disabled: Boolean })
components['RadioGroup.Label'] = makeSub('RadioGroup.Label', 'label')
components['RadioGroup.Indicator'] = makeSub('RadioGroup.Indicator')
components['Treeview.Label'] = makeSub('Treeview.Label')
components['Treeview.Indicator'] = makeSub('Treeview.Indicator')
components['Breadcrumbs.Item'] = makeSub('Breadcrumbs.Item', 'div', { 'aria-current': String })
components['Breadcrumbs.Link'] = makeSub('Breadcrumbs.Link', 'a', { href: String })
components['Slider.Track'] = makeSub('Slider.Track')
components['Slider.Range'] = makeSub('Slider.Range')
components['Slider.Thumb'] = makeSub('Slider.Thumb')
components['Splitter.Panel'] = makeSub('Splitter.Panel', 'div', { size: Number, 'min-size': Number, 'data-panel-type': String })
components['Splitter.Handle'] = makeSub('Splitter.Handle', 'div', { disabled: Boolean })
components['Avatar.Root'] = makeSub('Avatar.Root')
components['Avatar.Image'] = makeSub('Avatar.Image', 'img', { src: String, alt: String })
components['Avatar.Fallback'] = makeSub('Avatar.Fallback', 'span')
components['Dialog.Content'] = makeSub('Dialog.Content')
components['Dialog.Title'] = makeSub('Dialog.Title', 'h2')
components['Dialog.Description'] = makeSub('Dialog.Description')
components['Dialog.Close'] = makeSub('Dialog.Close', 'button')
components['Popover.Content'] = makeSub('Popover.Content', 'div', { side: String, 'side-offset': Number })
components['Popover.Close'] = makeSub('Popover.Close', 'button')

module.exports = { ...components, default: components }
