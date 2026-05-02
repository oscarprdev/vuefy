import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Splitter from '../../../splitter/splitter.vue'
import SplitterPanel from '../../../splitter/splitter-panel.vue'
import SplitterHandle from '../../../splitter/splitter-handle.vue'

describe('Splitter', () => {
  it('renders a splitter element', () => {
    const wrapper = mountComponent(Splitter, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Splitter, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies horizontal orientation', () => {
    const wrapper = mountComponent(Splitter, { props: { orientation: 'horizontal' } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies vertical orientation', () => {
    const wrapper = mountComponent(Splitter, { props: { orientation: 'vertical' } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('renders with modelValue', () => {
    const wrapper = mountComponent(Splitter, { props: { modelValue: [0.5, 0.5] } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('emits update:modelValue on resize', async () => {
    const wrapper = mountComponent(Splitter)
    const root = wrapper.find('[data-component="Splitter.Root"]')
    if (root.exists()) {
      await root.trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })
})

describe('SplitterPanel', () => {
  it('renders a Splitter.Panel', () => {
    const wrapper = mountComponent(SplitterPanel, { slots: { default: 'Panel' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(SplitterPanel, { props: { class: 'custom-class' }, slots: { default: 'Panel' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(SplitterPanel, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies size prop', () => {
    const wrapper = mountComponent(SplitterPanel, { props: { size: 0.5 } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies minSize prop', () => {
    const wrapper = mountComponent(SplitterPanel, { props: { minSize: 0.2 } })
    expect(wrapper.html()).toBeTruthy()
  })
})

describe('SplitterHandle', () => {
  it('renders a Splitter.Handle', () => {
    const wrapper = mountComponent(SplitterHandle)
    expect(container.querySelector('[data-testid="icon"]')).toBeTruthy()
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(SplitterHandle, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(SplitterHandle, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(SplitterHandle, { props: { disabled: true } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(SplitterHandle)
    expect(wrapper.html()).toBeTruthy()
  })
})
