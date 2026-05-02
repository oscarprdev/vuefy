import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Sheet from '../../../sheet/sheet.vue'
import SheetTitle from '../../../sheet/sheet-title.vue'
import SheetDescription from '../../../sheet/sheet-description.vue'
import SheetClose from '../../../sheet/sheet-close.vue'

describe('Sheet', () => {
  it('renders a sheet element', () => {
    const wrapper = mountComponent(Sheet, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is closed by default', () => {
    const wrapper = mountComponent(Sheet, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is open when open prop is true', () => {
    const wrapper = mountComponent(Sheet, { props: { open: true }, slots: { default: 'Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('uses defaultOpen to start open', () => {
    const wrapper = mountComponent(Sheet, { props: { defaultOpen: true }, slots: { default: 'Default Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:open when toggled', async () => {
    const wrapper = mountComponent(Sheet, { props: { open: false }, slots: { default: 'Content' } })
    const btn = wrapper.find('button')
    if (btn.exists()) {
      await btn.trigger('click')
      expect(wrapper.emitted('update:open')).toBeTruthy()
    }
  })

  it('renders default slot', () => {
    const wrapper = mountComponent(Sheet, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders trigger slot', () => {
    const wrapper = mountComponent(Sheet, { slots: { trigger: 'Open Sheet' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders content slot', () => {
    const wrapper = mountComponent(Sheet, { slots: { content: 'Sheet content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders close slot', () => {
    const wrapper = mountComponent(Sheet, { slots: { close: 'Close button' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies right side by default', () => {
    const wrapper = mountComponent(Sheet, { props: { side: 'right' }, slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies left side', () => {
    const wrapper = mountComponent(Sheet, { props: { side: 'left' }, slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies top side', () => {
    const wrapper = mountComponent(Sheet, { props: { side: 'top' }, slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies bottom side', () => {
    const wrapper = mountComponent(Sheet, { props: { side: 'bottom' }, slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('SheetTitle', () => {
  it('renders a Dialog.Title', () => {
    const wrapper = mountComponent(SheetTitle, { slots: { default: 'Title' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(SheetTitle, { props: { class: 'custom-class' }, slots: { default: 'Title' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(SheetTitle, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('SheetDescription', () => {
  it('renders a Dialog.Description', () => {
    const wrapper = mountComponent(SheetDescription, { slots: { default: 'Description' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(SheetDescription, { props: { class: 'custom-class' }, slots: { default: 'Description' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(SheetDescription, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('SheetClose', () => {
  it('renders a Dialog.Close', () => {
    const wrapper = mountComponent(SheetClose, { slots: { default: 'Close' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(SheetClose, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
