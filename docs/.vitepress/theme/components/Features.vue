<script setup lang="ts">
const features = [
  {
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    title: 'Source Code Ownership',
    details: 'Components are copied into your project. Customize, extend, or delete anything without being bound by upstream releases.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    title: 'Headless Primitives',
    details: 'Wraps vuetify0 headless primitives internally. Use props, slots, and sub-components without ever touching v0.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>`,
    title: 'CLI-Driven',
    details: '`vuefy init` to set up, `vuefy add button dialog tabs` to pick what you need. Smart dependency resolution included.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    title: 'Tailwind CSS v4',
    details: 'CSS-first configuration with @theme blocks. No tailwind.config.js. Dark and light themes out of the box.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    title: 'Fully Accessible',
    details: 'WAI-ARIA compound components via vuetify0. Keyboard navigation and screen reader support built in.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`,
    title: 'Iconify Integration',
    details: '150k+ icons across 100+ sets. Lucide as the default icon set with easy customization.'
  }
]
</script>

<template>
  <div class="vp-features">
    <div class="features-grid">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="feature-card"
      >
        <div class="feature-icon">
          <div v-html="feature.icon" />
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-details" v-html="feature.details" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-features {
  margin: 64px 0;
  padding: 0 24px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background-color: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 4px;
  padding: 16px;
  transition: border-color 100ms ease;
}

.feature-card:hover {
  border-color: #3ECF8E;
}

.feature-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3ECF8E;
  margin-bottom: 12px;
}

.feature-icon svg {
  width: 20px;
  height: 20px;
}

.feature-title {
  font-size: 14px;
  font-weight: 600;
  color: #EDEDED;
  margin: 0 0 6px;
}

.feature-details {
  font-size: 13px;
  color: #707070;
  line-height: 1.6;
  margin: 0;
}

.feature-details code {
  background-color: #2E2E2E;
  color: #3ECF8E;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 3px;
}

@media (max-width: 960px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .vp-features {
    padding: 0 16px;
  }
}
</style>
