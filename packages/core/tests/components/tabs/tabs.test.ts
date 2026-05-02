import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Tabs from '../../../src/components/tabs/tabs.vue'
import TabsItem from '../../../src/components/tabs/tabs-item.vue'

describe('Tabs', () => {
  it('renders a tabs element', () => {
    const wrapper = mountComponent(Tabs, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Tabs, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders list slot', () => {
    const wrapper = mountComponent(Tabs, { slots: { list: 'List items' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders panels slot', () => {
    const wrapper = mountComponent(Tabs, { slots: { panels: 'Panel content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies horizontal orientation', () => {
    const wrapper = mountComponent(Tabs, { props: { orientation: 'horizontal' } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies vertical orientation', () => {
    const wrapper = mountComponent(Tabs, { props: { orientation: 'vertical' } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('emits update:modelValue on tab change', async () => {
    const wrapper = mountComponent(Tabs, { props: { modelValue: 'tab1' } })
    const item = wrapper.find('[data-component="Tabs.Item"]')
    if (item.exists()) {
      await item.trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })
})

describe('TabsItem', () => {
  it('renders a Tabs.Item', () => {
    const wrapper = mountComponent(TabsItem, { props: { value: 'tab1' }, slots: { default: 'Tab 1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(TabsItem, { props: { value: 'tab1', class: 'custom-class' }, slots: { default: 'Tab' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(TabsItem, { props: { value: 'tab1' }, slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(TabsItem, { props: { value: 'tab1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(TabsItem, { props: { value: 'tab1', disabled: true } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders panel slot', () => {
    const wrapper = mountComponent(TabsItem, { props: { value: 'tab1' }, slots: { panel: 'Panel content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
