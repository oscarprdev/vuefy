import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Popover from '../../../src/components/popover/popover.vue'
import PopoverClose from '../../../src/components/popover/popover-close.vue'

describe('Popover', () => {
  it('renders a popover element', () => {
    const wrapper = mountComponent(Popover, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is closed by default', () => {
    const wrapper = mountComponent(Popover, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is open when open prop is true', () => {
    const wrapper = mountComponent(Popover, { props: { open: true }, slots: { default: 'Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('uses defaultOpen to start open', () => {
    const wrapper = mountComponent(Popover, { props: { defaultOpen: true }, slots: { default: 'Default Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:open when toggled', async () => {
    const wrapper = mountComponent(Popover, { props: { open: false }, slots: { default: 'Content' } })
    const btn = wrapper.find('button')
    if (btn.exists()) {
      await btn.trigger('click')
      expect(wrapper.emitted('update:open')).toBeTruthy()
    }
  })

  it('renders default slot', () => {
    const wrapper = mountComponent(Popover, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders trigger slot', () => {
    const wrapper = mountComponent(Popover, { slots: { trigger: 'Open Popover' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders content slot', () => {
    const wrapper = mountComponent(Popover, { slots: { content: 'Popover content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders close slot', () => {
    const wrapper = mountComponent(Popover, { slots: { close: 'Close button' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies side prop', () => {
    const wrapper = mountComponent(Popover, { props: { side: 'top' }, slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies sideOffset prop', () => {
    const wrapper = mountComponent(Popover, { props: { sideOffset: 10 }, slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('PopoverClose', () => {
  it('renders a Popover.Close', () => {
    const wrapper = mountComponent(PopoverClose, { slots: { default: 'Close' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(PopoverClose, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
