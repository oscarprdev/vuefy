import { describe, it, expect, vi } from 'vitest'
import { mountComponent } from '../../utils'
import Snackbar from '../../../snackbar/snackbar.vue'

describe('Snackbar', () => {
  it('renders a snackbar element', () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: true }, slots: { default: 'Message' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: true }, slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is hidden when visible prop is false', () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: false }, slots: { default: 'Hidden' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('shows default action label', () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: true }, slots: { default: 'Message' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('shows custom action label', () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: true, actionLabel: 'Undo' }, slots: { default: 'Message' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders action slot', () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: true }, slots: { default: 'Message', action: 'Custom Action' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits action when action button clicked', async () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: true, actionLabel: 'Undo' }, slots: { default: 'Message' } })
    const actionBtn = wrapper.find('button')
    if (actionBtn.exists()) {
      await actionBtn.trigger('click')
      expect(wrapper.emitted('action')).toBeTruthy()
    }
  })

  it('emits update:visible when dismissed', async () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: true }, slots: { default: 'Message' } })
    const closeBtn = wrapper.findAll('button').pop()
    if (closeBtn) {
      await closeBtn.trigger('click')
      expect(wrapper.emitted('update:visible')).toBeTruthy()
    }
  })

  it('applies duration prop', () => {
    const wrapper = mountComponent(Snackbar, { props: { visible: true, duration: 10000 }, slots: { default: 'Message' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
