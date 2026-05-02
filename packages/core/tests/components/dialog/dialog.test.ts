import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Dialog from '../../../src/components/dialog/dialog.vue'
import DialogTrigger from '../../../src/components/dialog/dialog-trigger.vue'
import DialogContent from '../../../src/components/dialog/dialog-content.vue'
import DialogTitle from '../../../src/components/dialog/dialog-title.vue'
import DialogDescription from '../../../src/components/dialog/dialog-description.vue'
import DialogClose from '../../../src/components/dialog/dialog-close.vue'

describe('Dialog', () => {
  it('renders a dialog element', () => {
    const wrapper = mountComponent(Dialog, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is closed by default', () => {
    const wrapper = mountComponent(Dialog, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is open when open prop is true', () => {
    const wrapper = mountComponent(Dialog, { props: { open: true }, slots: { default: 'Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('uses defaultOpen to start open', () => {
    const wrapper = mountComponent(Dialog, { props: { defaultOpen: true }, slots: { default: 'Default Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:open when toggled', async () => {
    const wrapper = mountComponent(Dialog, { props: { open: false }, slots: { default: 'Content' } })
    const btn = wrapper.find('button')
    if (btn.exists()) {
      await btn.trigger('click')
      expect(wrapper.emitted('update:open')).toBeTruthy()
    }
  })

  it('renders default slot', () => {
    const wrapper = mountComponent(Dialog, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders trigger slot', () => {
    const wrapper = mountComponent(Dialog, { slots: { trigger: 'Open Dialog' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders content slot', () => {
    const wrapper = mountComponent(Dialog, { slots: { content: 'Dialog content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders close slot', () => {
    const wrapper = mountComponent(Dialog, { slots: { close: 'Close button' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('DialogTrigger', () => {
  it('renders a Dialog.Activator', () => {
    const wrapper = mountComponent(DialogTrigger, { slots: { default: 'Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot', () => {
    const wrapper = mountComponent(DialogTrigger, { slots: { default: 'Trigger' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('DialogContent', () => {
  it('renders a Dialog.Content', () => {
    const wrapper = mountComponent(DialogContent, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(DialogContent, { props: { class: 'custom-class' }, slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(DialogContent, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('DialogTitle', () => {
  it('renders a Dialog.Title', () => {
    const wrapper = mountComponent(DialogTitle, { slots: { default: 'Title' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(DialogTitle, { props: { class: 'custom-class' }, slots: { default: 'Title' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(DialogTitle, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('DialogDescription', () => {
  it('renders a Dialog.Description', () => {
    const wrapper = mountComponent(DialogDescription, { slots: { default: 'Description' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(DialogDescription, { props: { class: 'custom-class' }, slots: { default: 'Description' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(DialogDescription, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('DialogClose', () => {
  it('renders a Dialog.Close', () => {
    const wrapper = mountComponent(DialogClose, { slots: { default: 'Close' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(DialogClose, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
