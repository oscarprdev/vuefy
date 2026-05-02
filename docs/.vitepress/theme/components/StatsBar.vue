<script setup lang="ts">
const stats = [
  { value: '24+', label: 'Components' },
  { value: 'v0', label: 'Vuetify Primitives' },
  { value: 'v4', label: 'Tailwind CSS' },
  { value: 'WAI', label: 'ARIA Compliant' },
]
</script>

<template>
  <div class="vp-stats">
    <div class="stats-grid">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="stat-item"
      >
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-stats {
  margin: 48px 0;
  padding: 0 24px;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 48px;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 0;
  border-top: 1px solid #2E2E2E;
  border-bottom: 1px solid #2E2E2E;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-value {
  font-size: 28px;
  font-weight: 600;
  color: #3ECF8E;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 12px;
  color: #707070;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

@media (max-width: 640px) {
  .stats-grid {
    flex-wrap: wrap;
    gap: 24px;
  }

  .vp-stats {
    padding: 0 16px;
  }
}
</style>
