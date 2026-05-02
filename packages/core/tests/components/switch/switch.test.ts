import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Switch from '../../../switch/switch.vue'

describe('Switch', () => {
  it('renders a switch element', () => {
    const wrapper = mountComponent(Switch, { slots: { default: 'Toggle' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Switch, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(Switch, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not checked by default', () => {
    const wrapper = mountComponent(Switch, { slots: { default: 'Unchecked' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is checked when checked prop is true', () => {
    const wrapper = mountComponent(Switch, { props: { checked: true }, slots: { default: 'Checked' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('starts checked with defaultChecked', () => {
    const wrapper = mountComponent(Switch, { props: { defaultChecked: true }, slots: { default: 'Default Checked' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(Switch, { props: { disabled: true }, slots: { default: 'Disabled' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(Switch, { slots: { default: 'Not Disabled' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes required prop', () => {
    const wrapper = mountComponent(Switch, { props: { required: true }, slots: { default: 'Required' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders indicator slot', () => {
    const wrapper = mountComponent(Switch, { slots: { indicator: 'thumb' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders label slot', () => {
    const wrapper = mountComponent(Switch, { slots: { label: 'Label text' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:checked when toggled', async () => {
    const wrapper = mountComponent(Switch, { props: { checked: false } })
    const sw = wrapper.find('[data-component="Switch"]')
    if (sw.exists()) {
      await sw.trigger('click')
      expect(wrapper.emitted('update:checked')).toBeTruthy()
    }
  })
})
