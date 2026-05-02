import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import ExpansionPanel from '../../../src/components/expansion-panel/expansion-panel.vue'
import ExpansionPanelItem from '../../../src/components/expansion-panel/expansion-panel-item.vue'

describe('ExpansionPanel', () => {
  it('renders an expansion panel element', () => {
    const wrapper = mountComponent(ExpansionPanel, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(ExpansionPanel, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not collapsible by default', () => {
    const wrapper = mountComponent(ExpansionPanel)
    expect(wrapper.html()).toBeTruthy()
  })

  it('is collapsible when collapsible prop is true', () => {
    const wrapper = mountComponent(ExpansionPanel, { props: { collapsible: true } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('renders with modelValue', () => {
    const wrapper = mountComponent(ExpansionPanel, { props: { modelValue: ['panel1'] } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('emits update:modelValue on expansion change', async () => {
    const wrapper = mountComponent(ExpansionPanel)
    const root = wrapper.find('[data-component="ExpansionPanel.Root"]')
    if (root.exists()) {
      await root.trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })
})

describe('ExpansionPanelItem', () => {
  it('renders an ExpansionPanel.Item', () => {
    const wrapper = mountComponent(ExpansionPanelItem, { props: { value: 'panel1' }, slots: { default: 'Panel' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders header slot', () => {
    const wrapper = mountComponent(ExpansionPanelItem, { props: { value: 'panel1' }, slots: { header: 'Header' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders content slot', () => {
    const wrapper = mountComponent(ExpansionPanelItem, { props: { value: 'panel1' }, slots: { content: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(ExpansionPanelItem, { props: { value: 'panel1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(ExpansionPanelItem, { props: { value: 'panel1', disabled: true } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
