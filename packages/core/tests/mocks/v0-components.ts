// Mock for @vuetify/v0/components
import { defineComponent } from 'vue'

const makeComp = (name: string, tag: string) =>
  defineComponent({
    name,
    props: { class: String, asChild: Boolean },
    template: `<${tag} :data-component="name" :class="class"><slot /></${tag}>`,
  })

const makeSub = (name: string, tag = 'div') =>
  defineComponent({
    name,
    props: { class: String, asChild: Boolean, disabled: Boolean, open: Boolean, defaultOpen: Boolean, value: null, 'data-state': String },
    template: `<${tag} :data-sub-component="name" :class="class"><slot /></${tag}>`,
  })

const primitives = ['Button', 'Checkbox', 'Switch', 'Dialog', 'Popover', 'Select', 'RadioGroup', 'Tabs', 'ExpansionPanel', 'Slider', 'Splitter', 'Breadcrumbs', 'Avatar', 'Treeview']
const components: Record<string, any> = {}

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
components['Tabs.Item'] = makeSub('Tabs.Item', 'button')
components['Select.Value'] = makeSub('Select.Value', 'span')
components['Select.Item'] = makeSub('Select.Item', 'div')
components['RadioGroup.Item'] = makeSub('RadioGroup.Item', 'div')
components['RadioGroup.Label'] = makeSub('RadioGroup.Label', 'label')
components['RadioGroup.Indicator'] = makeSub('RadioGroup.Indicator')
components['Treeview.Label'] = makeSub('Treeview.Label')
components['Treeview.Indicator'] = makeSub('Treeview.Indicator')
components['Breadcrumbs.Item'] = makeSub('Breadcrumbs.Item', 'div')
components['Breadcrumbs.Link'] = makeSub('Breadcrumbs.Link', 'a')
components['Slider.Track'] = makeSub('Slider.Track')
components['Slider.Range'] = makeSub('Slider.Range')
components['Slider.Thumb'] = makeSub('Slider.Thumb')
components['Splitter.Panel'] = makeSub('Splitter.Panel', 'div')
components['Splitter.Handle'] = makeSub('Splitter.Handle', 'div')
components['Avatar.Root'] = makeSub('Avatar.Root')
components['Avatar.Image'] = makeSub('Avatar.Image', 'img')
components['Avatar.Fallback'] = makeSub('Avatar.Fallback', 'span')
components['Dialog.Content'] = makeSub('Dialog.Content')
components['Dialog.Title'] = makeSub('Dialog.Title', 'h2')
components['Dialog.Description'] = makeSub('Dialog.Description')
components['Dialog.Close'] = makeSub('Dialog.Close', 'button')
components['Popover.Content'] = makeSub('Popover.Content', 'div')
components['Popover.Close'] = makeSub('Popover.Close', 'button')

export const { Button, Checkbox, Switch, Dialog, Popover, Select, RadioGroup, Tabs, ExpansionPanel, Slider, Splitter, Breadcrumbs, Avatar, Treeview } = components
export default components
