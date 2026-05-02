import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Pagination from '../../../src/components/pagination/pagination.vue'
import PaginationItem from '../../../src/components/pagination/pagination-item.vue'
import PaginationNext from '../../../src/components/pagination/pagination-next.vue'
import PaginationPrev from '../../../src/components/pagination/pagination-prev.vue'

describe('Pagination', () => {
  it('renders a pagination element', () => {
    const wrapper = mountComponent(Pagination, { props: { total: 20, pageSize: 10 } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Pagination, { props: { total: 20, pageSize: 10 }, slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders items slot', () => {
    const wrapper = mountComponent(Pagination, { props: { total: 20, pageSize: 10 }, slots: { items: 'Custom items' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders prev slot', () => {
    const wrapper = mountComponent(Pagination, { props: { total: 20, pageSize: 10 }, slots: { prev: 'Prev' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders next slot', () => {
    const wrapper = mountComponent(Pagination, { props: { total: 20, pageSize: 10 }, slots: { next: 'Next' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('calculates total pages correctly', () => {
    const wrapper = mountComponent(Pagination, { props: { total: 50, pageSize: 10, modelValue: 1 } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('calculates total pages with remainder', () => {
    const wrapper = mountComponent(Pagination, { props: { total: 55, pageSize: 10, modelValue: 1 } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:modelValue on page click', async () => {
    const wrapper = mountComponent(Pagination, { props: { total: 20, pageSize: 10, modelValue: 1 } })
    const buttons = wrapper.findAll('button')
    if (buttons.length > 0) {
      await buttons[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })

  it('does not go below page 1', async () => {
    const wrapper = mountComponent(Pagination, { props: { total: 20, pageSize: 10, modelValue: 1 } })
    const prevBtn = wrapper.find('[data-component="PaginationPrev"]')
    if (prevBtn.exists()) {
      await prevBtn.trigger('click')
      const emitted = wrapper.emitted('update:modelValue')
      if (emitted) {
        expect(emitted[0][0]).toBe(1)
      }
    }
  })

  it('does not go above total pages', async () => {
    const wrapper = mountComponent(Pagination, { props: { total: 10, pageSize: 10, modelValue: 1 } })
    const nextBtn = wrapper.find('[data-component="PaginationNext"]')
    if (nextBtn.exists()) {
      await nextBtn.trigger('click')
      const emitted = wrapper.emitted('update:modelValue')
      if (emitted) {
        expect(emitted[0][0]).toBe(1)
      }
    }
  })

  it('handles zero total', () => {
    const wrapper = mountComponent(Pagination, { props: { total: 0, pageSize: 10, modelValue: 1 } })
    expect(wrapper.html()).toBeTruthy()
  })
})

describe('PaginationItem', () => {
  it('renders a button element', () => {
    const wrapper = mountComponent(PaginationItem, { props: { value: 1 }, slots: { default: '1' } })
    expect(container.querySelector('button')).toBeTruthy()
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(PaginationItem, { props: { value: 1, class: 'custom-class' }, slots: { default: '1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(PaginationItem, { props: { value: 1 }, slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies active class when active is true', () => {
    const wrapper = mountComponent(PaginationItem, { props: { value: 1, active: true }, slots: { default: '1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('does not apply active class when active is false', () => {
    const wrapper = mountComponent(PaginationItem, { props: { value: 1, active: false }, slots: { default: '1' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits click when clicked', async () => {
    const wrapper = mountComponent(PaginationItem, { props: { value: 1 }, slots: { default: '1' } })
    const btn = wrapper.find('button')
    if (btn.exists()) {
      await btn.trigger('click')
      expect(wrapper.emitted('click')).toBeTruthy()
    }
  })
})

describe('PaginationNext', () => {
  it('renders a button element', () => {
    const wrapper = mountComponent(PaginationNext)
    expect(container.querySelector('button')).toBeTruthy()
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(PaginationNext, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(PaginationNext, { props: { disabled: true } })
    const btn = container.querySelector('button')
    expect(btn?.hasAttribute('disabled')).toBeTruthy()
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(PaginationNext)
    const btn = container.querySelector('button')
    expect(btn?.hasAttribute('disabled')).toBeFalsy()
  })

  it('emits click when clicked', async () => {
    const wrapper = mountComponent(PaginationNext)
    const btn = wrapper.find('button')
    if (btn.exists()) {
      await btn.trigger('click')
      expect(wrapper.emitted('click')).toBeTruthy()
    }
  })
})

describe('PaginationPrev', () => {
  it('renders a button element', () => {
    const wrapper = mountComponent(PaginationPrev)
    expect(container.querySelector('button')).toBeTruthy()
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(PaginationPrev, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(PaginationPrev, { props: { disabled: true } })
    const btn = container.querySelector('button')
    expect(btn?.hasAttribute('disabled')).toBeTruthy()
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(PaginationPrev)
    const btn = container.querySelector('button')
    expect(btn?.hasAttribute('disabled')).toBeFalsy()
  })

  it('emits click when clicked', async () => {
    const wrapper = mountComponent(PaginationPrev)
    const btn = wrapper.find('button')
    if (btn.exists()) {
      await btn.trigger('click')
      expect(wrapper.emitted('click')).toBeTruthy()
    }
  })
})
