import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vuefy',
  description: 'Headless UI components for Vue 3 — styled with Tailwind CSS v4, delivered via CLI.',
  base: '/docs/',
  lang: 'en-US',

  themeConfig: {
    logo: 'Vuefy',
    siteTitle: 'Vuefy',
    nav: nav(),

    sidebar: {
      '/docs/getting-started': sidebarGettingStarted(),
      '/docs/components': sidebarComponents(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oscar/vuefy' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Vuefy',
    },

    search: {
      provider: 'local',
    },
  },
})

function nav() {
  return [
    { text: 'Docs', link: '/docs/getting-started/introduction' },
    { text: 'Components', link: '/docs/components/button' },
    { text: 'GitHub', link: 'https://github.com/oscar/vuefy' },
  ]
}

function sidebarGettingStarted() {
  return [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/docs/getting-started/introduction' },
        { text: 'Installation', link: '/docs/getting-started/installation' },
        { text: 'Theming', link: '/docs/getting-started/theming' },
        { text: 'CLI', link: '/docs/getting-started/cli' },
        { text: 'Monorepo', link: '/docs/getting-started/monorepo' },
      ],
    },
  ]
}

function sidebarComponents() {
  return [
    {
      text: 'Actions',
      items: [
        { text: 'Button', link: '/docs/components/button' },
      ],
    },
    {
      text: 'Forms',
      items: [
        { text: 'Checkbox', link: '/docs/components/checkbox' },
        { text: 'Combobox', link: '/docs/components/combobox' },
        { text: 'Input', link: '/docs/components/input' },
        { text: 'NumberField', link: '/docs/components/number-field' },
        { text: 'Radio Group', link: '/docs/components/radio-group' },
        { text: 'Rating', link: '/docs/components/rating' },
        { text: 'Select', link: '/docs/components/select' },
        { text: 'Slider', link: '/docs/components/slider' },
        { text: 'Switch', link: '/docs/components/switch' },
      ],
    },
    {
      text: 'Disclosure',
      items: [
        { text: 'Alert Dialog', link: '/docs/components/alert-dialog' },
        { text: 'Collapsible', link: '/docs/components/collapsible' },
        { text: 'Dialog', link: '/docs/components/dialog' },
        { text: 'Expansion Panel', link: '/docs/components/expansion-panel' },
        { text: 'Popover', link: '/docs/components/popover' },
        { text: 'Tabs', link: '/docs/components/tabs' },
        { text: 'Treeview', link: '/docs/components/treeview' },
      ],
    },
    {
      text: 'Semantic',
      items: [
        { text: 'Avatar', link: '/docs/components/avatar' },
        { text: 'Breadcrumbs', link: '/docs/components/breadcrumbs' },
        { text: 'Carousel', link: '/docs/components/carousel' },
        { text: 'Pagination', link: '/docs/components/pagination' },
        { text: 'Snackbar', link: '/docs/components/snackbar' },
        { text: 'Splitter', link: '/docs/components/splitter' },
      ],
    },
  ]
}
