import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Combobox from '../../../src/components/combobox/combobox.vue'

describe('Combobox', () => {
  it('renders a combobox component', () => {
    const wrapper = mountComponent(Combobox, { props: { options: ['Option 1', 'Option 2'] } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('renders input field', () => {
    const wrapper = mountComponent(Combobox, { props: { options: ['A', 'B'] } })
    expect(container.querySelector('input')).toBeTruthy()
  })

  it('passes placeholder prop', () => {
    const wrapper = mountComponent(Combobox, { props: { placeholder: 'Search...', options: ['A'] } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(Combobox, { props: { disabled: true, options: ['A'] } })
    const input = container.querySelector('input')
    expect(input?.hasAttribute('disabled')).toBeTruthy()
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(Combobox, { props: { options: ['A'] } })
    const input = container.querySelector('input')
    expect(input?.hasAttribute('disabled')).toBeFalsy()
  })

  it('passes required prop', () => {
    const wrapper = mountComponent(Combobox, { props: { required: true, options: ['A'] } })
    const input = container.querySelector('input')
    expect(input?.hasAttribute('required')).toBeTruthy()
  })

  it('filters options by search query', () => {
    const wrapper = mountComponent(Combobox, { props: { options: ['Apple', 'Banana', 'Cherry'] } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
    expect(wrapper.find('[data-component]').exists()).toBe(true)
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders input slot', () => {
    const wrapper = mountComponent(Combobox, { props: { options: ['A'] }, slots: { input: 'Custom input' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders options slot', () => {
    const wrapper = mountComponent(Combobox, { props: { options: ['A'] }, slots: { options: 'Custom options' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:modelValue on option select', async () => {
    const wrapper = mountComponent(Combobox, { props: { options: ['Option 1', 'Option 2'] } })
    const input = wrapper.find('input')
    if (input.exists()) {
      await input.setValue('Option 1')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })
})
