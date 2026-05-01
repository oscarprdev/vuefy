/**
 * Slider compound component — wraps v0 Slider primitives with Tailwind styling.
 */
import Slider from './slider.vue'
import SliderTrack from './slider-track.vue'
import SliderThumb from './slider-thumb.vue'

Slider.Track = SliderTrack
Slider.Thumb = SliderThumb

export default Slider
export { SliderTrack, SliderThumb }
