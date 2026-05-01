---
# https://vitepress.dev/reference/default-home-page
layout: home

hero:
  name: Vuefy
  text: Headless UI for Vue 3
  tagline: A source-code-copy design system wrapping vuetify0 primitives with Tailwind CSS v4 styling.
  image:
    src: /logo.svg
    alt: Vuefy
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/introduction
    - theme: alt
      text: Components
      link: /components/button
    - theme: alt
      text: View on GitHub
      link: https://github.com/oscar/vuefy

features:
  - icon: 📦
    title: Source Code Ownership
    details: Components are copied into your project. Customize, extend, or delete anything without being bound by upstream releases.
  - icon: 🧠
    title: Headless Primitives
    details: Wraps vuetify0 headless primitives internally. Use props, slots, and sub-components without ever touching v0.
  - icon: ⚡
    title: CLI-Driven
    details: vuefy init to set up, vuefy add button dialog tabs to pick what you need. Smart dependency resolution included.
  - icon: 🎨
    title: Tailwind CSS v4
    details: CSS-first configuration with @theme blocks. No tailwind.config.js. Dark and light themes out of the box.
  - icon: ♿
    title: Fully Accessible
    details: WAI-ARIA compound components via vuetify0. Keyboard navigation and screen reader support built in.
  - icon: 🔣
    title: Iconify Integration
    details: 150k+ icons across 100+ sets. Lucide as the default icon set with easy customization.
---
