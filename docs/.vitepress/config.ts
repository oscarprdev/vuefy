import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vuefy',
  description: 'Headless UI components for Vue 3 — styled with Tailwind CSS v4, delivered via CLI.',
  base: '/',
  lang: 'en-US',

  themeConfig: {
    logo: 'Vuefy',
    siteTitle: 'Vuefy',
    nav: nav(),

    sidebar: {
      '/getting-started/': sidebarGettingStarted(),
      '/components/': sidebarComponents(),
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
    { text: 'Docs', link: '/getting-started/introduction' },
    { text: 'Components', link: '/components/button' },
    { text: 'GitHub', link: 'https://github.com/oscar/vuefy' },
  ]
}

function sidebarGettingStarted() {
  return [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/getting-started/introduction' },
        { text: 'Installation', link: '/getting-started/installation' },
        { text: 'Theming', link: '/getting-started/theming' },
        { text: 'CLI', link: '/getting-started/cli' },
        { text: 'Monorepo', link: '/getting-started/monorepo' },
      ],
    },
  ]
}

function sidebarComponents() {
  return [
    {
      text: 'Actions',
      items: [
        { text: 'Button', link: '/components/button' },
      ],
    },
    {
      text: 'Forms',
      items: [
        { text: 'Checkbox', link: '/components/checkbox' },
        { text: 'Combobox', link: '/components/combobox' },
        { text: 'Input', link: '/components/input' },
        { text: 'NumberField', link: '/components/number-field' },
        { text: 'Radio Group', link: '/components/radio-group' },
        { text: 'Rating', link: '/components/rating' },
        { text: 'Select', link: '/components/select' },
        { text: 'Slider', link: '/components/slider' },
        { text: 'Switch', link: '/components/switch' },
      ],
    },
    {
      text: 'Disclosure',
      items: [
        { text: 'Alert Dialog', link: '/components/alert-dialog' },
        { text: 'Collapsible', link: '/components/collapsible' },
        { text: 'Dialog', link: '/components/dialog' },
        { text: 'Expansion Panel', link: '/components/expansion-panel' },
        { text: 'Popover', link: '/components/popover' },
        { text: 'Tabs', link: '/components/tabs' },
        { text: 'Treeview', link: '/components/treeview' },
      ],
    },
    {
      text: 'Semantic',
      items: [
        { text: 'Avatar', link: '/components/avatar' },
        { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
        { text: 'Carousel', link: '/components/carousel' },
        { text: 'Pagination', link: '/components/pagination' },
        { text: 'Snackbar', link: '/components/snackbar' },
        { text: 'Splitter', link: '/components/splitter' },
      ],
    },
  ]
}
