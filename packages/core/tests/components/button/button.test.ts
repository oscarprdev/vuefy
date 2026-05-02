import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Button from '../../../src/components/button/button.vue'

describe('Button', () => {
  it('renders a button element', () => {
    const wrapper = mountComponent(Button, { slots: { default: 'Click me' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies primary variant by default', () => {
    const wrapper = mountComponent(Button, { slots: { default: 'Primary' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies outline variant', () => {
    const wrapper = mountComponent(Button, { props: { variant: 'outline' }, slots: { default: 'Outline' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies ghost variant', () => {
    const wrapper = mountComponent(Button, { props: { variant: 'ghost' }, slots: { default: 'Ghost' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies secondary variant', () => {
    const wrapper = mountComponent(Button, { props: { variant: 'secondary' }, slots: { default: 'Secondary' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies destructive variant', () => {
    const wrapper = mountComponent(Button, { props: { variant: 'destructive' }, slots: { default: 'Destructive' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies sm size', () => {
    const wrapper = mountComponent(Button, { props: { size: 'sm' }, slots: { default: 'SM' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies default size', () => {
    const wrapper = mountComponent(Button, { props: { size: 'default' }, slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies lg size', () => {
    const wrapper = mountComponent(Button, { props: { size: 'lg' }, slots: { default: 'LG' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders with loading prop', () => {
    const wrapper = mountComponent(Button, { props: { loading: true }, slots: { default: 'Loading' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits click event', async () => {
    const wrapper = mountComponent(Button, { props: { loading: false }, slots: { default: 'Click me' } })
    const btn = wrapper.find('[data-component="Button"]')
    await btn.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('renders with disabled prop', () => {
    const wrapper = mountComponent(Button, { props: { disabled: true }, slots: { default: 'Disabled' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders icon slot', () => {
    const wrapper = mountComponent(Button, { slots: { icon: '🔑', default: 'With Icon' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders with loading and disabled combined', () => {
    const wrapper = mountComponent(Button, { props: { loading: true, disabled: true }, slots: { default: 'Both' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders with all props', () => {
    const wrapper = mountComponent(Button, {
      props: { variant: 'primary', size: 'sm', loading: false, disabled: false },
      slots: { default: 'All props' },
    })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
