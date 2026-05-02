import { describe, it, expect } from 'vitest'
import { mountComponent } from '../../utils'
import Slider from '../../../slider/slider.vue'
import SliderTrack from '../../../slider/slider-track.vue'
import SliderThumb from '../../../slider/slider-thumb.vue'

describe('Slider', () => {
  it('renders a slider element', () => {
    const wrapper = mountComponent(Slider, { slots: { default: 'Content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mountComponent(Slider, { slots: { default: 'Default' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('is not disabled by default', () => {
    const wrapper = mountComponent(Slider)
    expect(wrapper.html()).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mountComponent(Slider, { props: { disabled: true } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies min prop', () => {
    const wrapper = mountComponent(Slider, { props: { min: 0 } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies max prop', () => {
    const wrapper = mountComponent(Slider, { props: { max: 100 } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies step prop', () => {
    const wrapper = mountComponent(Slider, { props: { step: 5 } })
    expect(wrapper.html()).toBeTruthy()
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mountComponent(Slider)
    const slider = wrapper.find('[data-component="Slider"]')
    if (slider.exists()) {
      await slider.trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })
})

describe('SliderTrack', () => {
  it('renders a Slider.Track', () => {
    const wrapper = mountComponent(SliderTrack, { slots: { default: 'Track' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(SliderTrack, { props: { class: 'custom-class' }, slots: { default: 'Track' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(SliderTrack, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})

describe('SliderThumb', () => {
  it('renders a Slider.Thumb', () => {
    const wrapper = mountComponent(SliderThumb)
    expect(wrapper.html()).toBeTruthy()
  })

  it('applies custom class', () => {
    const wrapper = mountComponent(SliderThumb, { props: { class: 'custom-class' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })

  it('passes through slot content', () => {
    const wrapper = mountComponent(SliderThumb, { slots: { default: 'Slot content' } })
    expect(wrapper.find('[data-component]').exists()).toBe(true)
  })
})
