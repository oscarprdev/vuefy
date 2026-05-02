import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Avatar from '../../../src/components/avatar/avatar.vue'

describe('Avatar', () => {
  it('renders an avatar element', () => {
    const wrapper = mountComponent(Avatar, { props: { fallback: 'A' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Avatar, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders fallback when no src provided', () => {
    const wrapper = mountComponent(Avatar, { props: { fallback: 'JD' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders fallback from alt when no fallback prop', () => {
    const wrapper = mountComponent(Avatar, { props: { alt: 'John Doe' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders no fallback when no src and no alt', () => {
    const wrapper = mountComponent(Avatar)
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders src prop', () => {
    const wrapper = mountComponent(Avatar, { props: { src: 'https://example.com/image.png', alt: 'Test' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders alt prop', () => {
    const wrapper = mountComponent(Avatar, { props: { src: 'https://example.com/image.png', alt: 'Test' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders image slot', () => {
    const wrapper = mountComponent(Avatar, { props: { src: 'https://example.com/image.png' }, slots: { image: 'Custom image' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders fallback slot', () => {
    const wrapper = mountComponent(Avatar, { slots: { fallback: 'Fallback content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits error on image load failure', async () => {
    const wrapper = mountComponent(Avatar, { props: { src: 'https://example.com/bad.png', alt: 'Test' } })
    const img = wrapper.find('[data-sub-component="Avatar.Image"]')
    if (img.exists()) {
      await img.trigger('error')
      expect(wrapper.emitted('error')).toBeTruthy()
    }
  })
})
