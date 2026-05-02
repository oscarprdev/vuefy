<script setup lang="ts">
const categories = [
  {
    name: 'Inputs & Forms',
    icon: 'i-lucide-input',
    components: ['Input', 'Textarea', 'Checkbox', 'Switch', 'NumberField', 'Rating', 'Select', 'Combobox', 'Radio Group'],
    color: '#3ECF8E',
    items: [
      { type: 'input', label: 'Email address' },
      { type: 'checkbox', label: 'Remember me' },
      { type: 'switch', label: 'Notifications' },
      { type: 'slider' },
      { type: 'rating' },
    ]
  },
  {
    name: 'Overlays',
    icon: 'i-lucide-layout-panel-top',
    components: ['Dialog', 'Popover', 'Sheet', 'Snackbar', 'Alert Dialog'],
    color: '#60eca8',
    items: [
      { type: 'dialog', label: 'Dialog' },
      { type: 'popover', label: 'Popover' },
      { type: 'sheet', label: 'Sheet' },
      { type: 'alert', label: 'Alert' },
    ]
  },
  {
    name: 'Navigation',
    icon: 'i-lucide-navigation',
    components: ['Tabs', 'Breadcrumbs', 'Pagination', 'Treeview'],
    color: '#45c088',
    items: [
      { type: 'tabs', items: ['General', 'Advanced', 'Security'] },
      { type: 'breadcrumbs', items: ['Home', 'Components', 'Tabs'] },
      { type: 'pagination', pages: [1, 2, 3, '...', 10] },
    ]
  },
  {
    name: 'Data Display',
    icon: 'i-lucide-table',
    components: ['Table', 'Card', 'Badge', 'Avatar', 'Progress', 'Skeleton'],
    color: '#51df9c',
    items: [
      { type: 'badge', label: 'New' },
      { type: 'progress', value: 72 },
      { type: 'avatar', name: 'JD' },
      { type: 'card', title: 'Card Title' },
    ]
  },
  {
    name: 'Layout',
    icon: 'i-lucide-layout-grid',
    components: ['Splitter', 'Carousel', 'Button'],
    color: '#3ECF8E',
    items: [
      { type: 'splitter' },
      { type: 'carousel', items: ['Slide 1', 'Slide 2', 'Slide 3'] },
      { type: 'button', label: 'Primary' },
    ]
  },
  {
    name: 'Dropdown Menu',
    icon: 'i-lucide-list',
    components: ['Dropdown Menu', 'Context Menu'],
    color: '#45c088',
    items: [
      { type: 'dropdown', items: ['Edit', 'Duplicate', 'Archive', 'Delete'] },
    ]
  },
]
</script>

<template>
  <div class="vp-component-showcase">
    <div class="showcase-header">
      <h2 class="showcase-title">
        <span class="title-accent">24+</span> components
      </h2>
      <p class="showcase-subtitle">
        Everything you need to build production UIs. Copy, customize, own.
      </p>
    </div>

    <div class="showcase-grid">
      <div
        v-for="cat in categories"
        :key="cat.name"
        class="showcase-card"
      >
        <div class="card-header">
          <span class="card-icon" :style="{ color: cat.color }">
            <slot :name="cat.icon" />
          </span>
          <h3 class="card-title">{{ cat.name }}</h3>
          <span class="card-count">{{ cat.components.length }}</span>
        </div>

        <div class="card-preview">
          <div class="preview-content">
            <!-- Dynamic mini previews based on component type -->
            <template v-for="(item, idx) in cat.items" :key="idx">
              <!-- Input preview -->
              <div v-if="item.type === 'input'" class="preview-input">
                <label class="preview-label">{{ item.label }}</label>
                <div class="preview-input-field">
                  <svg class="preview-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>
                  <span class="preview-text-muted">user@example.com</span>
                </div>
              </div>

              <!-- Checkbox preview -->
              <div v-if="item.type === 'checkbox'" class="preview-checkbox-row">
                <div class="preview-checkbox">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="#3ECF8E" stroke-width="2"><path d="M3 8.5l3 3 7-7"/></svg>
                </div>
                <span class="preview-text-sm">{{ item.label }}</span>
              </div>

              <!-- Switch preview -->
              <div v-if="item.type === 'switch'" class="preview-switch-row">
                <div class="preview-switch on">
                  <div class="preview-switch-thumb" />
                </div>
                <span class="preview-text-sm">{{ item.label }}</span>
              </div>

              <!-- Slider preview -->
              <div v-if="item.type === 'slider'" class="preview-slider">
                <div class="preview-slider-track">
                  <div class="preview-slider-fill" />
                  <div class="preview-slider-thumb" />
                </div>
              </div>

              <!-- Rating preview -->
              <div v-if="item.type === 'rating'" class="preview-rating">
                <svg v-for="s in 5" :key="s" viewBox="0 0 24 24" width="14" height="14" :fill="s <= 4 ? '#3ECF8E' : '#2E2E2E'" stroke="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
                </svg>
              </div>

              <!-- Dialog preview -->
              <div v-if="item.type === 'dialog'" class="preview-dialog">
                <div class="preview-dialog-box">
                  <span class="preview-dialog-title">{{ item.label }}</span>
                  <div class="preview-dialog-actions">
                    <div class="preview-btn primary" />
                    <div class="preview-btn outline" />
                  </div>
                </div>
              </div>

              <!-- Popover preview -->
              <div v-if="item.type === 'popover'" class="preview-popover">
                <div class="preview-popover-trigger" />
                <div class="preview-popover-content">
                  <span class="preview-text-xs">Popover content</span>
                </div>
              </div>

              <!-- Sheet preview -->
              <div v-if="item.type === 'sheet'" class="preview-sheet">
                <div class="preview-sheet-panel">
                  <span class="preview-text-xs">{{ item.label }}</span>
                  <div class="preview-sheet-content" />
                </div>
              </div>

              <!-- Alert preview -->
              <div v-if="item.type === 'alert'" class="preview-alert">
                <div class="preview-alert-box">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#F56565" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span class="preview-text-xs">{{ item.label }}</span>
                </div>
              </div>

              <!-- Tabs preview -->
              <div v-if="item.type === 'tabs'" class="preview-tabs">
                <div class="preview-tabs-bar">
                  <span
                    v-for="(tab, ti) in item.items"
                    :key="ti"
                    class="preview-tab"
                    :class="{ active: ti === 0 }"
                  >{{ tab }}</span>
                </div>
              </div>

              <!-- Breadcrumbs preview -->
              <div v-if="item.type === 'breadcrumbs'" class="preview-breadcrumbs">
                <span
                  v-for="(crumb, ci) in item.items"
                  :key="ci"
                  class="preview-breadcrumb"
                  :class="{ current: ci === item.items.length - 1 }"
                >
                  {{ crumb }}
                  <span v-if="ci < item.items.length - 1" class="preview-separator">/</span>
                </span>
              </div>

              <!-- Pagination preview -->
              <div v-if="item.type === 'pagination'" class="preview-pagination">
                <span
                  v-for="(page, pi) in item.pages"
                  :key="pi"
                  class="preview-page"
                  :class="{ active: pi === 0 }"
                >{{ page }}</span>
              </div>

              <!-- Badge preview -->
              <div v-if="item.type === 'badge'" class="preview-badge">
                <span class="preview-badge-pill">{{ item.label }}</span>
              </div>

              <!-- Progress preview -->
              <div v-if="item.type === 'progress'" class="preview-progress">
                <div class="preview-progress-track">
                  <div class="preview-progress-fill" :style="{ width: item.value + '%' }" />
                </div>
                <span class="preview-text-xs">{{ item.value }}%</span>
              </div>

              <!-- Avatar preview -->
              <div v-if="item.type === 'avatar'" class="preview-avatar">
                <div class="preview-avatar-circle">
                  <span class="preview-avatar-text">{{ item.name }}</span>
                </div>
              </div>

              <!-- Card preview -->
              <div v-if="item.type === 'card'" class="preview-card-mini">
                <div class="preview-card-header">
                  <span class="preview-text-xs">{{ item.title }}</span>
                </div>
                <div class="preview-card-body" />
              </div>

              <!-- Splitter preview -->
              <div v-if="item.type === 'splitter'" class="preview-splitter">
                <div class="preview-splitter-panel" />
                <div class="preview-splitter-handle" />
                <div class="preview-splitter-panel" />
              </div>

              <!-- Carousel preview -->
              <div v-if="item.type === 'carousel'" class="preview-carousel">
                <div class="preview-carousel-track">
                  <span
                    v-for="(slide, si) in item.items"
                    :key="si"
                    class="preview-carousel-slide"
                    :class="{ active: si === 1 }"
                  >{{ si + 1 }}</span>
                </div>
                <div class="preview-carousel-dots">
                  <span v-for="d in 3" :key="d" class="preview-dot" :class="{ active: d === 2 }" />
                </div>
              </div>

              <!-- Button preview -->
              <div v-if="item.type === 'button'" class="preview-button-row">
                <div class="preview-btn primary">{{ item.label }}</div>
                <div class="preview-btn outline">Outline</div>
                <div class="preview-btn ghost">Ghost</div>
              </div>

              <!-- Dropdown preview -->
              <div v-if="item.type === 'dropdown'" class="preview-dropdown">
                <div class="preview-dropdown-trigger" />
                <div class="preview-dropdown-content">
                  <span
                    v-for="(di, dii) in item.items"
                    :key="dii"
                    class="preview-dropdown-item"
                    :class="{ destructive: dii === 3 }"
                  >{{ di }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="card-components">
          <span
            v-for="comp in cat.components"
            :key="comp"
            class="component-tag"
          >{{ comp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-component-showcase {
  margin: 64px 0;
  padding: 0 24px;
}

.showcase-header {
  text-align: center;
  margin-bottom: 40px;
}

.showcase-title {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #EDEDED;
  margin: 0 0 8px;
}

.title-accent {
  color: #3ECF8E;
}

.showcase-subtitle {
  font-size: 14px;
  color: #707070;
  line-height: 1.6;
  margin: 0;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.showcase-card {
  background-color: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 4px;
  padding: 16px;
  transition: border-color 100ms ease;
}

.showcase-card:hover {
  border-color: #3ECF8E;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.card-icon {
  font-size: 16px;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: #EDEDED;
  margin: 0;
  flex: 1;
}

.card-count {
  font-size: 11px;
  color: #707070;
  background: #2E2E2E;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 500;
}

.card-preview {
  background: #121212;
  border: 1px solid #2E2E2E;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 12px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

/* --- Input --- */
.preview-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.preview-label {
  font-size: 11px;
  color: #707070;
  font-weight: 500;
}

.preview-input-field {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #171717;
  border: 1px solid #2E2E2E;
  border-radius: 3px;
  padding: 5px 8px;
}

.preview-icon {
  color: #707070;
  flex-shrink: 0;
}

.preview-text-muted {
  font-size: 11px;
  color: #707070;
}

.preview-text-sm {
  font-size: 11px;
  color: #EDEDED;
}

.preview-text-xs {
  font-size: 10px;
  color: #707070;
}

/* --- Checkbox --- */
.preview-checkbox-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.preview-checkbox {
  width: 12px;
  height: 12px;
  border: 1px solid #2E2E2E;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3ECF8E;
}

/* --- Switch --- */
.preview-switch-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.preview-switch {
  width: 20px;
  height: 12px;
  background: #2E2E2E;
  border-radius: 9999px;
  position: relative;
  flex-shrink: 0;
}

.preview-switch.on {
  background: #3ECF8E;
}

.preview-switch-thumb {
  width: 8px;
  height: 8px;
  background: #121212;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
}

.preview-switch.on .preview-switch-thumb {
  left: 10px;
}

/* --- Slider --- */
.preview-slider {
  width: 100%;
}

.preview-slider-track {
  height: 4px;
  background: #2E2E2E;
  border-radius: 2px;
  position: relative;
}

.preview-slider-fill {
  width: 60%;
  height: 100%;
  background: #3ECF8E;
  border-radius: 2px;
}

.preview-slider-thumb {
  width: 10px;
  height: 10px;
  background: #3ECF8E;
  border: 2px solid #121212;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}

/* --- Rating --- */
.preview-rating {
  display: flex;
  gap: 2px;
}

/* --- Dialog --- */
.preview-dialog-box {
  background: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
}

.preview-dialog-title {
  font-size: 11px;
  font-weight: 600;
  color: #EDEDED;
  display: block;
  margin-bottom: 6px;
}

.preview-dialog-actions {
  display: flex;
  gap: 4px;
}

.preview-btn {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 2px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #121212;
  font-weight: 500;
}

.preview-btn.primary {
  background: #3ECF8E;
}

.preview-btn.outline {
  background: transparent;
  border: 1px solid #2E2E2E;
  color: #EDEDED;
}

.preview-btn.ghost {
  background: transparent;
  color: #707070;
}

/* --- Popover --- */
.preview-popover {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  width: 100%;
}

.preview-popover-trigger {
  width: 60px;
  height: 18px;
  background: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 3px;
}

.preview-popover-content {
  background: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 3px;
  padding: 4px 8px;
  margin-left: 8px;
}

/* --- Sheet --- */
.preview-sheet-panel {
  width: 100%;
  background: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 4px;
  padding: 6px;
}

.preview-sheet-content {
  height: 24px;
  background: #121212;
  border-radius: 2px;
  margin-top: 4px;
}

/* --- Alert --- */
.preview-alert-box {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(245, 101, 101, 0.1);
  border: 1px solid rgba(245, 101, 101, 0.3);
  border-radius: 3px;
  padding: 4px 8px;
  width: fit-content;
}

/* --- Tabs --- */
.preview-tabs-bar {
  display: flex;
  gap: 2px;
  width: 100%;
}

.preview-tab {
  font-size: 10px;
  padding: 3px 8px;
  color: #707070;
  border-radius: 2px;
  cursor: default;
}

.preview-tab.active {
  color: #3ECF8E;
  background: rgba(62, 207, 142, 0.1);
}

/* --- Breadcrumbs --- */
.preview-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.preview-breadcrumb {
  font-size: 10px;
  color: #707070;
}

.preview-breadcrumb.current {
  color: #EDEDED;
  font-weight: 500;
}

.preview-separator {
  margin: 0 2px;
  color: #2E2E2E;
}

/* --- Pagination --- */
.preview-pagination {
  display: flex;
  gap: 2px;
}

.preview-page {
  font-size: 10px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: #707070;
}

.preview-page.active {
  background: #3ECF8E;
  color: #121212;
  font-weight: 500;
}

/* --- Badge --- */
.preview-badge-pill {
  font-size: 10px;
  padding: 2px 6px;
  background: #3ECF8E;
  color: #121212;
  border-radius: 3px;
  font-weight: 500;
}

/* --- Progress --- */
.preview-progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.preview-progress-track {
  height: 4px;
  background: #2E2E2E;
  border-radius: 2px;
  overflow: hidden;
}

.preview-progress-fill {
  height: 100%;
  background: #3ECF8E;
  border-radius: 2px;
  transition: width 200ms ease;
}

/* --- Avatar --- */
.preview-avatar-circle {
  width: 24px;
  height: 24px;
  background: #2E2E2E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-avatar-text {
  font-size: 9px;
  color: #EDEDED;
  font-weight: 500;
}

/* --- Card mini --- */
.preview-card-mini {
  background: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
}

.preview-card-header {
  padding: 4px 8px;
  border-bottom: 1px solid #2E2E2E;
}

.preview-card-body {
  height: 20px;
  padding: 6px 8px;
}

/* --- Splitter --- */
.preview-splitter {
  display: flex;
  align-items: stretch;
  gap: 0;
  width: 100%;
  height: 30px;
}

.preview-splitter-panel {
  flex: 1;
  background: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 2px;
}

.preview-splitter-handle {
  width: 4px;
  background: #2E2E2E;
  border-radius: 2px;
  position: relative;
}

.preview-splitter-handle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 12px;
  background: #707070;
  border-radius: 1px;
}

/* --- Carousel --- */
.preview-carousel {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.preview-carousel-track {
  display: flex;
  gap: 2px;
}

.preview-carousel-slide {
  flex: 1;
  height: 24px;
  background: #2E2E2E;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: #707070;
}

.preview-carousel-slide.active {
  background: rgba(62, 207, 142, 0.2);
  color: #3ECF8E;
}

.preview-carousel-dots {
  display: flex;
  justify-content: center;
  gap: 3px;
}

.preview-dot {
  width: 4px;
  height: 4px;
  background: #2E2E2E;
  border-radius: 50%;
}

.preview-dot.active {
  background: #3ECF8E;
}

/* --- Button row --- */
.preview-button-row {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

/* --- Dropdown --- */
.preview-dropdown {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  width: 100%;
}

.preview-dropdown-trigger {
  width: 50px;
  height: 18px;
  background: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 3px;
}

.preview-dropdown-content {
  background: #1C1C1C;
  border: 1px solid #2E2E2E;
  border-radius: 3px;
  padding: 2px;
  width: 80px;
}

.preview-dropdown-item {
  font-size: 10px;
  padding: 3px 6px;
  color: #EDEDED;
  border-radius: 2px;
  display: block;
}

.preview-dropdown-item.destructive {
  color: #F56565;
}

/* --- Component tags --- */
.card-components {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.component-tag {
  font-size: 10px;
  color: #707070;
  background: #2E2E2E;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 500;
}

/* --- Responsive --- */
@media (max-width: 960px) {
  .showcase-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .vp-component-showcase {
    padding: 0 16px;
  }
}
</style>
