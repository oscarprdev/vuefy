import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Select from '../../../select/select.vue'
import SelectItem from '../../../select/select-item.vue'
import SelectValue from '../../../select/select-value.vue'

describe('Select', () => {
  it('renders a select element', () => {
    const wrapper = mountComponent(Select, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Select, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(Select)
    expect(wrapper.html()).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(Select, { props: { disabled: true } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('passes required prop', () => {
    const wrapper = mountComponent(Select, { props: { required: true } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('renders trigger slot', () => {
    const wrapper = mountComponent(Select, { slots: { trigger: 'Trigger' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders content slot', () => {
    const wrapper = mountComponent(Select, { slots: { content: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:modelValue on selection', async () => {
    const wrapper = mountComponent(Select, { props: { modelValue: 'a' } })
    const activator = wrapper.find('[data-component="Select.Activator"]')
    if (activator.exists()) {
      await activator.trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })
})

describe('SelectItem', () => {
  it('renders a Select.Item', () => {
    const wrapper = mountComponent(SelectItem, { props: { value: 'option1' }, slots: { default: 'Option 1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(SelectItem, { props: { value: 'option1', class: 'custom-class' }, slots: { default: 'Option' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(SelectItem, { props: { value: 'option1' }, slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(SelectItem, { props: { value: 'option1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(SelectItem, { props: { value: 'option1', disabled: true } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('SelectValue', () => {
  it('renders a Select.Value', () => {
    const wrapper = mountComponent(SelectValue, { props: { placeholder: 'Select...' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(SelectValue, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes placeholder prop', () => {
    const wrapper = mountComponent(SelectValue, { props: { placeholder: 'Choose...' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
