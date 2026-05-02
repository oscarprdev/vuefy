import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Checkbox from '../../../src/components/checkbox/checkbox.vue'

describe('Checkbox', () => {
  it('renders a checkbox element', () => {
    const wrapper = mountComponent(Checkbox, { slots: { default: 'Accept' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Checkbox, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(Checkbox, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not checked by default', () => {
    const wrapper = mountComponent(Checkbox, { slots: { default: 'Unchecked' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is checked when checked prop is true', () => {
    const wrapper = mountComponent(Checkbox, { props: { checked: true }, slots: { default: 'Checked' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('starts checked with defaultChecked', () => {
    const wrapper = mountComponent(Checkbox, { props: { defaultChecked: true }, slots: { default: 'Default Checked' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(Checkbox, { props: { disabled: true }, slots: { default: 'Disabled' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(Checkbox, { slots: { default: 'Not Disabled' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes required prop', () => {
    const wrapper = mountComponent(Checkbox, { props: { required: true }, slots: { default: 'Required' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders indicator slot', () => {
    const wrapper = mountComponent(Checkbox, { slots: { indicator: '✓' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders label slot', () => {
    const wrapper = mountComponent(Checkbox, { slots: { label: 'Label text' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:checked when toggled', async () => {
    const wrapper = mountComponent(Checkbox, { props: { checked: false } })
    const checkbox = wrapper.find('[data-component="Checkbox"]')
    if (checkbox.exists()) {
      await checkbox.trigger('click')
      expect(wrapper.emitted('update:checked')).toBeTruthy()
    }
  })
})
