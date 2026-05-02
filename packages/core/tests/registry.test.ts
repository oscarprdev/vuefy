import { describe, it, expect } from 'vitest'
import { registry, dependencies, type ComponentName } from '../../../src/index'

describe('Registry', () => {
  it('contains all 24 component entries', () => {
    expect(Object.keys(registry).length).toBe(24)
  })

  it('contains all simple components', () => {
    const simpleComponents = [
      'button', 'input', 'checkbox', 'switch', 'number-field',
      'rating', 'collapsible', 'snackbar', 'combobox',
    ]
    for (const component of simpleComponents) {
      expect(registry).toHaveProperty(component)
      expect(typeof registry[component]).toBe('string')
    }
  })

  it('contains all compound components', () => {
    const compoundComponents = [
      'dialog', 'popover', 'sheet', 'alert-dialog', 'radio-group',
      'select', 'tabs', 'expansion-panel', 'treeview', 'avatar',
      'breadcrumbs', 'carousel', 'pagination', 'slider', 'splitter',
    ]
    for (const component of compoundComponents) {
      expect(registry).toHaveProperty(component)
      expect(typeof registry[component]).toBe('string')
    }
  })

  it('maps all registry keys to valid file paths', () => {
    for (const [key, path] of Object.entries(registry)) {
      expect(path).toMatch(/^\.\//)
      expect(path).toMatch(/\.vue$/)
    }
  })

  it('has correct path for button component', () => {
    expect(registry.button).toBe('./components/button/button.vue')
  })

  it('has correct path for dialog component', () => {
    expect(registry.dialog).toBe('./components/dialog/dialog.vue')
  })

  it('has correct path for select component', () => {
    expect(registry.select).toBe('./components/select/select.vue')
  })

  it('has correct path for number-field component', () => {
    expect(registry['number-field']).toBe('./components/number-field/number-field.vue')
  })
})

describe('Dependencies', () => {
  it('contains entries for all registry components', () => {
    for (const key of Object.keys(registry)) {
      expect(dependencies).toHaveProperty(key)
    }
  })

  it('has correct dependencies for select', () => {
    expect(dependencies.select).toContain('popover')
  })

  it('has correct dependencies for combobox', () => {
    expect(dependencies.combobox).toContain('popover')
  })

  it('has empty dependencies for simple components', () => {
    expect(dependencies.button).toEqual([])
    expect(dependencies.input).toEqual([])
    expect(dependencies.checkbox).toEqual([])
    expect(dependencies.switch).toEqual([])
    expect(dependencies.rating).toEqual([])
  })

  it('has empty dependencies for dialog', () => {
    expect(dependencies.dialog).toEqual([])
  })

  it('has empty dependencies for popover', () => {
    expect(dependencies.popover).toEqual([])
  })

  it('has empty dependencies for sheet', () => {
    expect(dependencies.sheet).toEqual([])
  })

  it('has empty dependencies for tabs', () => {
    expect(dependencies.tabs).toEqual([])
  })

  it('has empty dependencies for all compound components without deps', () => {
    const noDeps = ['carousel', 'alert-dialog', 'radio-group', 'expansion-panel', 'treeview', 'avatar', 'breadcrumbs', 'pagination', 'slider', 'splitter', 'collapsible', 'snackbar']
    for (const component of noDeps) {
      expect(dependencies[component]).toEqual([])
    }
  })

  it('all dependency values are arrays', () => {
    for (const value of Object.values(dependencies)) {
      expect(Array.isArray(value)).toBe(true)
    }
  })

  it('all dependency values are arrays of strings', () => {
    for (const deps of Object.values(dependencies)) {
      for (const dep of deps) {
        expect(typeof dep).toBe('string')
      }
    }
  })
})

describe('ComponentName type', () => {
  it('ComponentName type covers all registry keys', () => {
    const allKeys: ComponentName[] = Object.keys(registry) as ComponentName[]
    expect(allKeys.length).toBe(24)
  })

  it('accepts all valid component names', () => {
    const validNames: ComponentName[] = [
      'button', 'input', 'checkbox', 'switch', 'number-field',
      'rating', 'collapsible', 'snackbar', 'combobox',
      'dialog', 'popover', 'sheet', 'alert-dialog', 'radio-group',
      'select', 'tabs', 'expansion-panel', 'treeview', 'avatar',
      'breadcrumbs', 'carousel', 'pagination', 'slider', 'splitter',
    ]
    expect(validNames).toHaveLength(24)
  })
})
