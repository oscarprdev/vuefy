import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Breadcrumbs from '../../../src/components/breadcrumbs/breadcrumbs.vue'
import BreadcrumbsItem from '../../../src/components/breadcrumbs/breadcrumbs-item.vue'
import BreadcrumbsLink from '../../../src/components/breadcrumbs/breadcrumbs-link.vue'

describe('Breadcrumbs', () => {
  it('renders a breadcrumbs element', () => {
    const wrapper = mountComponent(Breadcrumbs, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Breadcrumbs, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies separator prop', () => {
    const wrapper = mountComponent(Breadcrumbs, { props: { separator: '>' }, slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders with default separator', () => {
    const wrapper = mountComponent(Breadcrumbs, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('BreadcrumbsItem', () => {
  it('renders a Breadcrumbs.Item', () => {
    const wrapper = mountComponent(BreadcrumbsItem, { slots: { default: 'Item' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(BreadcrumbsItem, { props: { class: 'custom-class' }, slots: { default: 'Item' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(BreadcrumbsItem, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('sets aria-current when current prop is true', () => {
    const wrapper = mountComponent(BreadcrumbsItem, { props: { current: true }, slots: { default: 'Current' } })
    const item = wrapper.find('[data-component="Breadcrumbs.Item"]')
    expect(item.attributes('aria-current')).toBe('page')
  })

  it('does not set aria-current when current prop is false', () => {
    const wrapper = mountComponent(BreadcrumbsItem, { props: { current: false }, slots: { default: 'Not Current' } })
    const item = wrapper.find('[data-component="Breadcrumbs.Item"]')
    expect(item.attributes('aria-current')).toBeUndefined()
  })

  it('applies current class when current prop is true', () => {
    const wrapper = mountComponent(BreadcrumbsItem, { props: { current: true }, slots: { default: 'Current' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('BreadcrumbsLink', () => {
  it('renders a Breadcrumbs.Link', () => {
    const wrapper = mountComponent(BreadcrumbsLink, { props: { href: '/path' }, slots: { default: 'Link' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(BreadcrumbsLink, { props: { href: '/path', class: 'custom-class' }, slots: { default: 'Link' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(BreadcrumbsLink, { props: { href: '/path' }, slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes href prop', () => {
    const wrapper = mountComponent(BreadcrumbsLink, { props: { href: '/path' }, slots: { default: 'Link' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
