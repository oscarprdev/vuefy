import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vuefy',
  description: 'Headless UI components for Vue 3 — styled with Tailwind CSS v4, delivered via CLI.',
  base: '/',
  lang: 'en-US',

  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'vuefy:fix-markdown-vue-compiler',
        configResolved(config) {
          // Find the Vue plugin and patch its compiler options
          const vuePlugin = config.plugins.find((p) => p.name === 'vite:vue')
          if (vuePlugin) {
            // Store reference to patch later
            config.plugins.__vuePlugin__ = vuePlugin
          }
        },
        configureServer(server) {
          // Monkey-patch Vue's parse function to treat uppercase tags as custom elements
          const originalParse = server.moduleGraph.parseModule
          // This runs at dev time
        },
      },
    ],
    resolve: {
      alias: {
        '@/components/ui/button': fileURLToPath(new URL('../../packages/core/src/components/button/index.ts', import.meta.url)),
        '@/components/ui/input': fileURLToPath(new URL('../../packages/core/src/components/input/index.ts', import.meta.url)),
        '@/components/ui/checkbox': fileURLToPath(new URL('../../packages/core/src/components/checkbox/index.ts', import.meta.url)),
        '@/components/ui/switch': fileURLToPath(new URL('../../packages/core/src/components/switch/index.ts', import.meta.url)),
        '@/components/ui/number-field': fileURLToPath(new URL('../../packages/core/src/components/number-field/index.ts', import.meta.url)),
        '@/components/ui/rating': fileURLToPath(new URL('../../packages/core/src/components/rating/index.ts', import.meta.url)),
        '@/components/ui/collapsible': fileURLToPath(new URL('../../packages/core/src/components/collapsible/index.ts', import.meta.url)),
        '@/components/ui/snackbar': fileURLToPath(new URL('../../packages/core/src/components/snackbar/index.ts', import.meta.url)),
        '@/components/ui/combobox': fileURLToPath(new URL('../../packages/core/src/components/combobox/index.ts', import.meta.url)),
        '@/components/ui/dialog': fileURLToPath(new URL('../../packages/core/src/components/dialog/index.ts', import.meta.url)),
        '@/components/ui/popover': fileURLToPath(new URL('../../packages/core/src/components/popover/index.ts', import.meta.url)),
        '@/components/ui/sheet': fileURLToPath(new URL('../../packages/core/src/components/sheet/index.ts', import.meta.url)),
        '@/components/ui/alert-dialog': fileURLToPath(new URL('../../packages/core/src/components/alert-dialog/index.ts', import.meta.url)),
        '@/components/ui/radio-group': fileURLToPath(new URL('../../packages/core/src/components/radio-group/index.ts', import.meta.url)),
        '@/components/ui/select': fileURLToPath(new URL('../../packages/core/src/components/select/index.ts', import.meta.url)),
        '@/components/ui/tabs': fileURLToPath(new URL('../../packages/core/src/components/tabs/index.ts', import.meta.url)),
        '@/components/ui/expansion-panel': fileURLToPath(new URL('../../packages/core/src/components/expansion-panel/index.ts', import.meta.url)),
        '@/components/ui/treeview': fileURLToPath(new URL('../../packages/core/src/components/treeview/index.ts', import.meta.url)),
        '@/components/ui/avatar': fileURLToPath(new URL('../../packages/core/src/components/avatar/index.ts', import.meta.url)),
        '@/components/ui/breadcrumbs': fileURLToPath(new URL('../../packages/core/src/components/breadcrumbs/index.ts', import.meta.url)),
        '@/components/ui/carousel': fileURLToPath(new URL('../../packages/core/src/components/carousel/index.ts', import.meta.url)),
        '@/components/ui/pagination': fileURLToPath(new URL('../../packages/core/src/components/pagination/index.ts', import.meta.url)),
        '@/components/ui/slider': fileURLToPath(new URL('../../packages/core/src/components/slider/index.ts', import.meta.url)),
        '@/components/ui/splitter': fileURLToPath(new URL('../../packages/core/src/components/splitter/index.ts', import.meta.url)),
      },
    },
  },

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
