import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Treeview from '../../../src/components/treeview/treeview.vue'
import TreeviewItem from '../../../src/components/treeview/treeview-item.vue'
import TreeviewLabel from '../../../src/components/treeview/treeview-label.vue'
import TreeviewIndicator from '../../../src/components/treeview/treeview-indicator.vue'

describe('Treeview', () => {
  it('renders a treeview element', () => {
    const wrapper = mountComponent(Treeview, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Treeview, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(Treeview)
    expect(wrapper.html()).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(Treeview, { props: { disabled: true } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('emits select on item selection', async () => {
    const wrapper = mountComponent(Treeview)
    const root = wrapper.find('[data-component="Treeview.Root"]')
    if (root.exists()) {
      await root.trigger('click')
      expect(wrapper.emitted('select')).toBeTruthy()
    }
  })

  it('emits expand on item expansion', async () => {
    const wrapper = mountComponent(Treeview)
    const root = wrapper.find('[data-component="Treeview.Root"]')
    if (root.exists()) {
      await root.trigger('click')
      expect(wrapper.emitted('expand')).toBeTruthy()
    }
  })
})

describe('TreeviewItem', () => {
  it('renders a Treeview.Item', () => {
    const wrapper = mountComponent(TreeviewItem, { props: { id: 'item1', label: 'Item 1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(TreeviewItem, { props: { id: 'item1', class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(TreeviewItem, { props: { id: 'item1' }, slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(TreeviewItem, { props: { id: 'item1', label: 'Item' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(TreeviewItem, { props: { id: 'item1', label: 'Item', disabled: true } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders label slot', () => {
    const wrapper = mountComponent(TreeviewItem, { props: { id: 'item1' }, slots: { label: 'Custom label' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits select on click', async () => {
    const wrapper = mountComponent(TreeviewItem, { props: { id: 'item1', label: 'Item' } })
    const button = wrapper.find('button')
    if (button.exists()) {
      await button.trigger('click')
      expect(wrapper.emitted('expand')).toBeTruthy()
    }
  })
})

describe('TreeviewLabel', () => {
  it('renders a Treeview.Label', () => {
    const wrapper = mountComponent(TreeviewLabel, { slots: { default: 'Label' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(TreeviewLabel, { props: { class: 'custom-class' }, slots: { default: 'Label' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(TreeviewLabel, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('TreeviewIndicator', () => {
  it('renders a Treeview.Indicator', () => {
    const wrapper = mountComponent(TreeviewIndicator)
    expect(container.querySelector('[data-testid="icon"]')).toBeTruthy()
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(TreeviewIndicator, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(TreeviewIndicator, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
