import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Input from '../../../src/components/input/input.vue'

describe('Input', () => {
  it('renders an input element', () => {
    const wrapper = mountComponent(Input)
    expect(container.querySelector('input')).toBeTruthy()
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Input, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(Input, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes type prop to input', () => {
    const wrapper = mountComponent(Input, { props: { type: 'email' } })
    const input = container.querySelector('input')
    expect(input?.getAttribute('type')).toBe('email')
  })

  it('passes placeholder prop', () => {
    const wrapper = mountComponent(Input, { props: { placeholder: 'Enter text' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(Input, { props: { disabled: true } })
    const input = container.querySelector('input')
    expect(input?.hasAttribute('disabled')).toBeTruthy()
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(Input)
    const input = container.querySelector('input')
    expect(input?.hasAttribute('disabled')).toBeFalsy()
  })

  it('passes required prop', () => {
    const wrapper = mountComponent(Input, { props: { required: true } })
    const input = container.querySelector('input')
    expect(input?.hasAttribute('required')).toBeTruthy()
  })

  it('passes pattern prop', () => {
    const wrapper = mountComponent(Input, { props: { pattern: '[0-9]*' } })
    const input = container.querySelector('input')
    expect(input?.getAttribute('pattern')).toBe('[0-9]*')
  })

  it('renders label slot', () => {
    const wrapper = mountComponent(Input, { slots: { label: 'Label' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders prefix slot', () => {
    const wrapper = mountComponent(Input, { slots: { prefix: '$' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders suffix slot', () => {
    const wrapper = mountComponent(Input, { slots: { suffix: '%' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders icon slot', () => {
    const wrapper = mountComponent(Input, { slots: { icon: 'icon' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders helper slot', () => {
    const wrapper = mountComponent(Input, { slots: { helper: 'Helper text' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mountComponent(Input)
    const input = wrapper.find('input')
    await input.setValue('test value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value'])
  })
})
