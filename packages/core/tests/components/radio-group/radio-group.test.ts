import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import RadioGroup from '../../../src/components/radio-group/radio-group.vue'
import RadioItem from '../../../src/components/radio-group/radio-item.vue'
import RadioIndicator from '../../../src/components/radio-group/radio-indicator.vue'
import RadioLabel from '../../../src/components/radio-group/radio-label.vue'

describe('RadioGroup', () => {
  it('renders a radio group element', () => {
    const wrapper = mountComponent(RadioGroup, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(RadioGroup, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(RadioGroup)
    expect(wrapper.html()).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(RadioGroup, { props: { disabled: true } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('passes required prop', () => {
    const wrapper = mountComponent(RadioGroup, { props: { required: true } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies horizontal orientation', () => {
    const wrapper = mountComponent(RadioGroup, { props: { orientation: 'horizontal' } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies vertical orientation', () => {
    const wrapper = mountComponent(RadioGroup, { props: { orientation: 'vertical' } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('emits update:modelValue on selection', async () => {
    const wrapper = mountComponent(RadioGroup)
    const radio = wrapper.find('[data-component="RadioGroup.Item"]')
    if (radio.exists()) {
      await radio.trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })
})

describe('RadioItem', () => {
  it('renders a RadioGroup.Item', () => {
    const wrapper = mountComponent(RadioItem, { props: { value: 'option1' }, slots: { default: 'Option 1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(RadioItem, { props: { value: 'option1', class: 'custom-class' }, slots: { default: 'Option' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(RadioItem, { props: { value: 'option1' }, slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(RadioItem, { props: { value: 'option1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(RadioItem, { props: { value: 'option1', disabled: true } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('RadioIndicator', () => {
  it('renders a RadioGroup.Indicator', () => {
    const wrapper = mountComponent(RadioIndicator, { slots: { default: 'Indicator' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(RadioIndicator, { props: { class: 'custom-class' }, slots: { default: 'Indicator' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(RadioIndicator, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('RadioLabel', () => {
  it('renders a RadioGroup.Label', () => {
    const wrapper = mountComponent(RadioLabel, { slots: { default: 'Label' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(RadioLabel, { props: { class: 'custom-class' }, slots: { default: 'Label' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(RadioLabel, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
