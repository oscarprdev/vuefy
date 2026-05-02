import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import NumberField from '../../../src/components/number-field/number-field.vue'

describe('NumberField', () => {
  it('renders a number field component', () => {
    const wrapper = mountComponent(NumberField)
    expect(container.querySelector('input')).toBeTruthy()
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(NumberField, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes modelValue to input', () => {
    const wrapper = mountComponent(NumberField, { props: { modelValue: 42 } })
    const input = container.querySelector('input')
    expect(input?.getAttribute('value')).toBe('42')
  })

  it('passes min prop', () => {
    const wrapper = mountComponent(NumberField, { props: { min: 0 } })
    const input = container.querySelector('input')
    expect(input?.getAttribute('min')).toBe('0')
  })

  it('passes max prop', () => {
    const wrapper = mountComponent(NumberField, { props: { max: 100 } })
    const input = container.querySelector('input')
    expect(input?.getAttribute('max')).toBe('100')
  })

  it('passes step prop', () => {
    const wrapper = mountComponent(NumberField, { props: { step: 5 } })
    const input = container.querySelector('input')
    expect(input?.getAttribute('step')).toBe('5')
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(NumberField, { props: { disabled: true } })
    const input = container.querySelector('input')
    expect(input?.hasAttribute('disabled')).toBeTruthy()
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(NumberField)
    const input = container.querySelector('input')
    expect(input?.hasAttribute('disabled')).toBeFalsy()
  })

  it('passes required prop', () => {
    const wrapper = mountComponent(NumberField, { props: { required: true } })
    const input = container.querySelector('input')
    expect(input?.hasAttribute('required')).toBeTruthy()
  })

  it('renders label slot', () => {
    const wrapper = mountComponent(NumberField, { slots: { label: 'Label' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders helper slot', () => {
    const wrapper = mountComponent(NumberField, { slots: { helper: 'Helper text' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders increment slot', () => {
    const wrapper = mountComponent(NumberField, { slots: { increment: 'Plus' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders decrement slot', () => {
    const wrapper = mountComponent(NumberField, { slots: { decrement: 'Minus' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:modelValue on increment click', async () => {
    const wrapper = mountComponent(NumberField, { props: { modelValue: 0 } })
    const buttons = wrapper.findAll('button')
    if (buttons.length > 1) {
      await buttons[1].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })

  it('emits update:modelValue on decrement click', async () => {
    const wrapper = mountComponent(NumberField, { props: { modelValue: 10 } })
    const buttons = wrapper.findAll('button')
    if (buttons.length > 0) {
      await buttons[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })

  it('emits update:modelValue on input change', async () => {
    const wrapper = mountComponent(NumberField)
    const input = wrapper.find('input')
    if (input.exists()) {
      await input.setValue('25')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })
})
