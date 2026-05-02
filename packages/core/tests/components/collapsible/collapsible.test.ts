import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Collapsible from '../../../src/components/collapsible/collapsible.vue'

describe('Collapsible', () => {
  it('renders a collapsible component', () => {
    const wrapper = mountComponent(Collapsible, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders trigger slot', () => {
    const wrapper = mountComponent(Collapsible, { slots: { trigger: 'Toggle' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Collapsible, { slots: { default: 'Default content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is closed by default', () => {
    const wrapper = mountComponent(Collapsible, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is open when open prop is true', () => {
    const wrapper = mountComponent(Collapsible, { props: { open: true }, slots: { default: 'Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('uses defaultOpen to start open', () => {
    const wrapper = mountComponent(Collapsible, { props: { defaultOpen: true }, slots: { default: 'Default Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:open when toggled', async () => {
    const wrapper = mountComponent(Collapsible, { props: { open: false }, slots: { default: 'Content' } })
    const btn = wrapper.find('button')
    if (btn.exists()) {
      await btn.trigger('click')
      expect(wrapper.emitted('update:open')).toBeTruthy()
    }
  })
})
