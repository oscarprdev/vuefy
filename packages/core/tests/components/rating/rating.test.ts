import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Rating from '../../../src/components/rating/rating.vue'

describe('Rating', () => {
  it('renders a rating component', () => {
    const wrapper = mountComponent(Rating)
    expect(container.querySelector('button')).toBeTruthy()
  })

  it('renders default number of stars (5)', () => {
    const wrapper = mountComponent(Rating)
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(5)
  })

  it('renders custom max stars', () => {
    const wrapper = mountComponent(Rating, { props: { max: 10 } })
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(10)
  })

  it('renders with modelValue', () => {
    const wrapper = mountComponent(Rating, { props: { modelValue: 3 } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(Rating, { props: { disabled: true } })
    const buttons = container.querySelectorAll('button')
    buttons.forEach(btn => {
      expect(btn.hasAttribute('disabled')).toBeTruthy()
    })
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(Rating)
    const buttons = container.querySelectorAll('button')
    buttons.forEach(btn => {
      expect(btn.hasAttribute('disabled')).toBeFalsy()
    })
  })

  it('renders icon slot', () => {
    const wrapper = mountComponent(Rating, { slots: { icon: '★' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits update:modelValue on star click', async () => {
    const wrapper = mountComponent(Rating)
    const buttons = wrapper.findAll('button')
    if (buttons.length > 0) {
      await buttons[2].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })

  it('does not emit update:modelValue when disabled', async () => {
    const wrapper = mountComponent(Rating, { props: { disabled: true } })
    const buttons = wrapper.findAll('button')
    if (buttons.length > 0) {
      await buttons[2].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    }
  })

  it('sets aria-label on star buttons', () => {
    const wrapper = mountComponent(Rating, { props: { max: 5 } })
    const buttons = container.querySelectorAll('button')
    expect(buttons[0].getAttribute('aria-label')).toBe('Rate 1 out of 5')
    expect(buttons[4].getAttribute('aria-label')).toBe('Rate 5 out of 5')
  })
})
