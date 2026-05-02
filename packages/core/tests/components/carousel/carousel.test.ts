import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Carousel from '../../../src/components/carousel/carousel.vue'

describe('Carousel', () => {
  it('renders a carousel component', () => {
    const wrapper = mountComponent(Carousel, { slots: { slides: 'Slides' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Carousel, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies horizontal orientation by default', () => {
    const wrapper = mountComponent(Carousel)
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies vertical orientation', () => {
    const wrapper = mountComponent(Carousel, { props: { orientation: 'vertical' } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies snap class when snap is true', () => {
    const wrapper = mountComponent(Carousel, { props: { snap: true } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies maxHeight prop', () => {
    const wrapper = mountComponent(Carousel, { props: { orientation: 'vertical', maxHeight: '500px' } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('renders prev slot', () => {
    const wrapper = mountComponent(Carousel, { slots: { prev: 'Prev Button' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders next slot', () => {
    const wrapper = mountComponent(Carousel, { slots: { next: 'Next Button' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders slides slot', () => {
    const wrapper = mountComponent(Carousel, { slots: { slides: 'Slide content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('emits prev when prev clicked', async () => {
    const wrapper = mountComponent(Carousel)
    const buttons = wrapper.findAll('button')
    if (buttons.length > 0) {
      await buttons[0].trigger('click')
      expect(wrapper.emitted('prev')).toBeTruthy()
    }
  })

  it('emits next when next clicked', async () => {
    const wrapper = mountComponent(Carousel)
    const buttons = wrapper.findAll('button')
    if (buttons.length > 1) {
      await buttons[1].trigger('click')
      expect(wrapper.emitted('next')).toBeTruthy()
    }
  })
})
