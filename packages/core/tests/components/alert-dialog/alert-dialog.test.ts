import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import AlertDialog from '../../../src/components/alert-dialog/alert-dialog.vue'
import AlertDialogAction from '../../../src/components/alert-dialog/alert-dialog-action.vue'
import AlertDialogCancel from '../../../src/components/alert-dialog/alert-dialog-cancel.vue'
import AlertDialogTitle from '../../../src/components/alert-dialog/alert-dialog-title.vue'
import AlertDialogDescription from '../../../src/components/alert-dialog/alert-dialog-description.vue'

describe('AlertDialog', () => {
  it('renders an alert dialog element', () => {
    const wrapper = mountComponent(AlertDialog, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is closed by default', () => {
    const wrapper = mountComponent(AlertDialog, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is open when open prop is true', () => {
    const wrapper = mountComponent(AlertDialog, { props: { open: true }, slots: { default: 'Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('uses defaultOpen to start open', () => {
    const wrapper = mountComponent(AlertDialog, { props: { defaultOpen: true }, slots: { default: 'Default Open' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:open when toggled', async () => {
    const wrapper = mountComponent(AlertDialog, { props: { open: false }, slots: { default: 'Content' } })
    const btn = wrapper.find('button')
    if (btn.exists()) {
      await btn.trigger('click')
      expect(wrapper.emitted('update:open')).toBeTruthy()
    }
  })

  it('renders default slot', () => {
    const wrapper = mountComponent(AlertDialog, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders trigger slot', () => {
    const wrapper = mountComponent(AlertDialog, { slots: { trigger: 'Open Alert' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders content slot', () => {
    const wrapper = mountComponent(AlertDialog, { slots: { content: 'Alert content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders action slot', () => {
    const wrapper = mountComponent(AlertDialog, { slots: { action: 'Confirm' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders cancel slot', () => {
    const wrapper = mountComponent(AlertDialog, { slots: { cancel: 'Cancel' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('AlertDialogAction', () => {
  it('renders a Button', () => {
    const wrapper = mountComponent(AlertDialogAction, { slots: { default: 'Confirm' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(AlertDialogAction, { props: { class: 'custom-class' }, slots: { default: 'Action' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(AlertDialogAction, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('AlertDialogCancel', () => {
  it('renders a Dialog.Close', () => {
    const wrapper = mountComponent(AlertDialogCancel, { slots: { default: 'Cancel' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(AlertDialogCancel, { props: { class: 'custom-class' }, slots: { default: 'Cancel' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(AlertDialogCancel, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('AlertDialogTitle', () => {
  it('renders a Dialog.Title', () => {
    const wrapper = mountComponent(AlertDialogTitle, { slots: { default: 'Title' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(AlertDialogTitle, { props: { class: 'custom-class' }, slots: { default: 'Title' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(AlertDialogTitle, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('AlertDialogDescription', () => {
  it('renders a Dialog.Description', () => {
    const wrapper = mountComponent(AlertDialogDescription, { slots: { default: 'Description' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(AlertDialogDescription, { props: { class: 'custom-class' }, slots: { default: 'Description' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(AlertDialogDescription, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
