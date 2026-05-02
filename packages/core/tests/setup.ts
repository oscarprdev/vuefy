import { vi } from 'vitest'
import { defineComponent, h } from 'vue'

// Silence Vue compiler warnings in tests
vi.stubGlobal('console', {
  ...console,
  warn: vi.fn(),
  error: vi.fn(),
})

// Mock @iconify/vue Icon component
vi.mock('@iconify/vue', () => ({
  Icon: defineComponent({
    name: 'MockIcon',
    setup(_, { slots }) {
      return () => h('span', { 'data-testid': 'icon' }, slots.default?.())
    },
  }),
}))

// Mock @vuetify/v0/components primitives
vi.mock('@vuetify/v0/components', () => {
  const createRoot = (name: string) =>
    defineComponent({
      name,
      props: {
        class: String,
        variant: String,
        size: String,
        loading: Boolean,
        disabled: Boolean,
        open: Boolean,
        defaultOpen: Boolean,
        checked: Boolean,
        defaultChecked: Boolean,
        required: Boolean,
        modelValue: null,
        defaultValue: null,
        placeholder: String,
        type: String,
        pattern: String,
        asChild: Boolean,
        side: String,
        'side-offset': Number,
        'data-state': String,
      },
      setup(props: any, { slots }) {
        return () =>
          h('div', { 'data-component': name, class: props.class }, slots.default?.())
      },
    })

  const createSub = (name: string, tag = 'div') =>
    defineComponent({
      name,
      props: {
        class: String,
        asChild: Boolean,
        disabled: Boolean,
        open: Boolean,
        defaultOpen: Boolean,
        value: null,
        'data-state': String,
        side: String,
        'side-offset': Number,
        placeholder: String,
        href: String,
        'aria-current': String,
        size: Number,
        'min-size': Number,
        'data-panel-type': { type: String, default: 'resize' },
        current: Boolean,
        separator: String,
        orientation: String,
        collapsible: Boolean,
        max: Number,
        min: Number,
        step: Number,
        snap: Boolean,
        maxHeight: String,
        total: Number,
        pageSize: Number,
        duration: Number,
        visible: Boolean,
        actionLabel: String,
        options: Array,
        searchQuery: String,
        src: String,
        alt: String,
        fallback: String,
        model: Number,
        disabled: Boolean,
      },
      setup(props: any, { slots }) {
        return () =>
          h(tag, { 'data-sub-component': name, class: props.class, ...props }, slots.default?.())
      },
    })

  return {
    // Root primitives
    Button: createRoot('Button'),
    Checkbox: createRoot('Checkbox'),
    Switch: createRoot('Switch'),
    Dialog: createRoot('Dialog'),
    Popover: createRoot('Popover'),
    Select: createRoot('Select'),
    RadioGroup: createRoot('RadioGroup'),
    Tabs: createRoot('Tabs'),
    Slider: createRoot('Slider'),
    Splitter: createRoot('Splitter'),
    Breadcrumbs: createRoot('Breadcrumbs'),
    Avatar: createRoot('Avatar'),
    Treeview: createRoot('Treeview'),
    ExpansionPanel: createRoot('ExpansionPanel'),

    // Dialog sub-components
    DialogContent: createSub('Dialog.Content'),
    DialogTitle: createSub('Dialog.Title', 'h2'),
    DialogDescription: createSub('Dialog.Description'),
    DialogClose: createSub('Dialog.Close', 'button'),
    DialogActivator: createSub('Dialog.Activator'),

    // Popover sub-components
    PopoverContent: createSub('Popover.Content'),
    PopoverClose: createSub('Popover.Close', 'button'),
    PopoverActivator: createSub('Popover.Activator'),

    // Select sub-components
    SelectTrigger: createSub('Select.Activator'),
    SelectValue: createSub('Select.Value', 'span'),
    SelectContent: createSub('Select.Content'),
    SelectItem: createSub('Select.Item'),

    // RadioGroup sub-components
    RadioGroupItem: createSub('RadioGroup.Item'),
    RadioGroupLabel: createSub('RadioGroup.Label', 'label'),
    RadioGroupIndicator: createSub('RadioGroup.Indicator'),

    // Tabs sub-components
    TabsList: createSub('Tabs.List'),
    TabsPanel: createSub('Tabs.Panel'),
    TabsItem: createSub('Tabs.Item', 'button'),

    // ExpansionPanel sub-components
    ExpansionPanelItem: createSub('ExpansionPanel.Item'),
    ExpansionPanelHeader: createSub('ExpansionPanel.Header'),
    ExpansionPanelContent: createSub('ExpansionPanel.Content'),

    // Treeview sub-components
    TreeviewLabel: createSub('Treeview.Label'),
    TreeviewIndicator: createSub('Treeview.Indicator'),
    TreeviewItem: createSub('Treeview.Item'),
    TreeviewActivator: createSub('Treeview.Activator'),

    // Breadcrumbs sub-components
    BreadcrumbsItem: createSub('Breadcrumbs.Item'),
    BreadcrumbsLink: createSub('Breadcrumbs.Link', 'a'),

    // Slider sub-components
    SliderTrack: createSub('Slider.Track'),
    SliderRange: createSub('Slider.Range'),
    SliderThumb: createSub('Slider.Thumb'),

    // Splitter sub-components
    SplitterPanel: createSub('Splitter.Panel'),
    SplitterHandle: createSub('Splitter.Handle'),

    // Avatar sub-components
    AvatarRoot: createRoot('Avatar.Root'),
    AvatarImage: createSub('Avatar.Image', 'img'),
    AvatarFallback: createSub('Avatar.Fallback', 'span'),

    // Sheet sub-components (uses Dialog primitives)
    SheetContent: createSub('Sheet.Content'),
    SheetTitle: createSub('Sheet.Title', 'h2'),
    SheetDescription: createSub('Sheet.Description'),
    SheetClose: createSub('Sheet.Close', 'button'),
    SheetActivator: createSub('Sheet.Activator'),

    // AlertDialog sub-components (uses Dialog primitives)
    AlertDialogContent: createSub('AlertDialog.Content'),
    AlertDialogTitle: createSub('AlertDialog.Title', 'h2'),
    AlertDialogDescription: createSub('AlertDialog.Description'),
    AlertDialogAction: createRoot('AlertDialog.Action'),
    AlertDialogCancel: createSub('AlertDialog.Cancel', 'button'),
    AlertDialogActivator: createSub('AlertDialog.Activator'),
  }
})
