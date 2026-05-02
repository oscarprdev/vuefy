import { describe, it, expect, vi } from 'vitest'

// Mock all component imports to avoid vue/compiler issues in this test
vi.mock('../../../src/components/button/button.vue', () => ({ default: { name: 'Button' } }))
vi.mock('../../../src/components/input/input.vue', () => ({ default: { name: 'Input' } }))
vi.mock('../../../src/components/checkbox/checkbox.vue', () => ({ default: { name: 'Checkbox' } }))
vi.mock('../../../src/components/switch/switch.vue', () => ({ default: { name: 'Switch' } }))
vi.mock('../../../src/components/number-field/number-field.vue', () => ({ default: { name: 'NumberField' } }))
vi.mock('../../../src/components/rating/rating.vue', () => ({ default: { name: 'Rating' } }))
vi.mock('../../../src/components/collapsible/collapsible.vue', () => ({ default: { name: 'Collapsible' } }))
vi.mock('../../../src/components/snackbar/snackbar.vue', () => ({ default: { name: 'Snackbar' } }))
vi.mock('../../../src/components/combobox/combobox.vue', () => ({ default: { name: 'Combobox' } }))
vi.mock('../../../src/components/dialog/dialog.vue', () => ({ default: { name: 'Dialog' } }))
vi.mock('../../../src/components/popover/popover.vue', () => ({ default: { name: 'Popover' } }))
vi.mock('../../../src/components/sheet/sheet.vue', () => ({ default: { name: 'Sheet' } }))
vi.mock('../../../src/components/alert-dialog/alert-dialog.vue', () => ({ default: { name: 'AlertDialog' } }))
vi.mock('../../../src/components/radio-group/radio-group.vue', () => ({ default: { name: 'RadioGroup' } }))
vi.mock('../../../src/components/select/select.vue', () => ({ default: { name: 'Select' } }))
vi.mock('../../../src/components/tabs/tabs.vue', () => ({ default: { name: 'Tabs' } }))
vi.mock('../../../src/components/expansion-panel/expansion-panel.vue', () => ({ default: { name: 'ExpansionPanel' } }))
vi.mock('../../../src/components/treeview/treeview.vue', () => ({ default: { name: 'Treeview' } }))
vi.mock('../../../src/components/avatar/avatar.vue', () => ({ default: { name: 'Avatar' } }))
vi.mock('../../../src/components/breadcrumbs/breadcrumbs.vue', () => ({ default: { name: 'Breadcrumbs' } }))
vi.mock('../../../src/components/carousel/carousel.vue', () => ({ default: { name: 'Carousel' } }))
vi.mock('../../../src/components/pagination/pagination.vue', () => ({ default: { name: 'Pagination' } }))
vi.mock('../../../src/components/slider/slider.vue', () => ({ default: { name: 'Slider' } }))
vi.mock('../../../src/components/splitter/splitter.vue', () => ({ default: { name: 'Splitter' } }))

describe('Main index exports', () => {
  it('exports registry', async () => {
    const { registry: exportedRegistry } = await import('../../../src/index')
    expect(exportedRegistry).toBeDefined()
    expect(typeof exportedRegistry).toBe('object')
    expect(Object.keys(exportedRegistry).length).toBe(24)
  })

  it('exports dependencies', async () => {
    const { dependencies: exportedDeps } = await import('../../../src/index')
    expect(exportedDeps).toBeDefined()
    expect(typeof exportedDeps).toBe('object')
  })

  it('exports all simple components', async () => {
    const index = await import('../../../src/index')
    expect(index.Button).toBeDefined()
    expect(index.Input).toBeDefined()
    expect(index.Checkbox).toBeDefined()
    expect(index.Switch).toBeDefined()
    expect(index.NumberField).toBeDefined()
    expect(index.Rating).toBeDefined()
    expect(index.Collapsible).toBeDefined()
    expect(index.Snackbar).toBeDefined()
    expect(index.Combobox).toBeDefined()
  })

  it('exports all compound components', async () => {
    const index = await import('../../../src/index')
    expect(index.Dialog).toBeDefined()
    expect(index.Popover).toBeDefined()
    expect(index.Sheet).toBeDefined()
    expect(index.AlertDialog).toBeDefined()
    expect(index.RadioGroup).toBeDefined()
    expect(index.Select).toBeDefined()
    expect(index.Tabs).toBeDefined()
    expect(index.ExpansionPanel).toBeDefined()
    expect(index.Treeview).toBeDefined()
    expect(index.Avatar).toBeDefined()
    expect(index.Breadcrumbs).toBeDefined()
    expect(index.Carousel).toBeDefined()
    expect(index.Pagination).toBeDefined()
    expect(index.Slider).toBeDefined()
    expect(index.Splitter).toBeDefined()
  })

  it('compound components have namespace sub-components', async () => {
    const index = await import('../../../src/index')

    expect(index.Dialog.Trigger).toBeDefined()
    expect(index.Dialog.Content).toBeDefined()
    expect(index.Dialog.Title).toBeDefined()
    expect(index.Dialog.Description).toBeDefined()
    expect(index.Dialog.Close).toBeDefined()

    expect(index.Popover.Trigger).toBeDefined()
    expect(index.Popover.Content).toBeDefined()
    expect(index.Popover.Close).toBeDefined()

    expect(index.Sheet.Trigger).toBeDefined()
    expect(index.Sheet.Content).toBeDefined()
    expect(index.Sheet.Title).toBeDefined()
    expect(index.Sheet.Description).toBeDefined()
    expect(index.Sheet.Close).toBeDefined()

    expect(index.AlertDialog.Trigger).toBeDefined()
    expect(index.AlertDialog.Content).toBeDefined()
    expect(index.AlertDialog.Title).toBeDefined()
    expect(index.AlertDialog.Description).toBeDefined()
    expect(index.AlertDialog.Action).toBeDefined()
    expect(index.AlertDialog.Cancel).toBeDefined()

    expect(index.Select.Trigger).toBeDefined()
    expect(index.Select.Value).toBeDefined()
    expect(index.Select.Content).toBeDefined()
    expect(index.Select.Item).toBeDefined()

    expect(index.RadioGroup.Item).toBeDefined()
    expect(index.RadioGroup.Label).toBeDefined()
    expect(index.RadioGroup.Indicator).toBeDefined()

    expect(index.Tabs.Item).toBeDefined()
    expect(index.Tabs.Panel).toBeDefined()
    expect(index.Tabs.List).toBeDefined()

    expect(index.ExpansionPanel.Item).toBeDefined()
    expect(index.ExpansionPanel.Header).toBeDefined()
    expect(index.ExpansionPanel.Content).toBeDefined()

    expect(index.Treeview.Item).toBeDefined()
    expect(index.Treeview.Label).toBeDefined()
    expect(index.Treeview.Indicator).toBeDefined()

    expect(index.Breadcrumbs.Item).toBeDefined()
    expect(index.Breadcrumbs.Link).toBeDefined()

    expect(index.Pagination.Item).toBeDefined()
    expect(index.Pagination.Prev).toBeDefined()
    expect(index.Pagination.Next).toBeDefined()

    expect(index.Slider.Track).toBeDefined()
    expect(index.Slider.Thumb).toBeDefined()

    expect(index.Splitter.Panel).toBeDefined()
    expect(index.Splitter.Handle).toBeDefined()
  })
})
