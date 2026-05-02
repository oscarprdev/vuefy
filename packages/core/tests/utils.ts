import { mount, shallowMount, type VueWrapper, type MountingOptions } from '@vue/test-utils'
import type { Component } from 'vue'

/**
 * Mounts a component and returns the wrapper.
 * Uses @vue/test-utils mount with happy-dom environment.
 * The vitest setup.ts mocks @vuetify/v0/components and @iconify/vue
 * so that primitives render as identifiable div elements.
 */
export function mountComponent(component: Component, options: MountingOptions<unknown> = {}) {
  return mount(component, {
    global: {
      ...options.global,
      stubs: {
        Transition: {
          inheritAttrs: false,
          setup(_, { slots }) {
            return () => slots.default?.()
          },
        },
        ...(options.stubs || {}),
      },
    },
    ...options,
  })
}

/**
 * Shallow mounts a component where all child components are stubbed.
 */
export function shallowMountComponent(component: Component, options: MountingOptions<unknown> = {}) {
  return shallowMount(component, {
    global: {
      ...options.global,
      stubs: {
        Transition: {
          inheritAttrs: false,
          setup(_, { slots }) {
            return () => slots.default?.()
          },
        },
        ...(options.stubs || {}),
      },
    },
    ...options,
  })
}

/**
 * Exports the mounting wrapper type for convenience.
 */
export type MountedWrapper = VueWrapper<unknown>
