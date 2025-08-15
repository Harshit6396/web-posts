<template>
  <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      xmlns="http://www.w3.org/2000/svg"
      class="placeholder-svg"
  >
    <!-- Background -->
    <rect
        :width="width"
        :height="height"
        :fill="backgroundColor"
        stroke="#ddd"
        stroke-width="1"
    />

    <!-- Grid pattern (optional) -->
    <defs v-if="showGrid">
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" :stroke="gridColor" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect v-if="showGrid" :width="width" :height="height" fill="url(#grid)" />

    <!-- Center text -->
    <text
        :x="width / 2"
        :y="height / 2"
        text-anchor="middle"
        dominant-baseline="middle"
        :font-size="fontSize"
        :fill="textColor"
        font-family="Arial, sans-serif"
        font-weight="500"
    >
      {{ displayText }}
    </text>

    <!-- Dimensions text (bottom right) -->
    <text
        :x="width - 10"
        :y="height - 10"
        text-anchor="end"
        dominant-baseline="text-bottom"
        font-size="12"
        :fill="textColor"
        font-family="Arial, sans-serif"
        opacity="0.7"
    >
      {{ width }}×{{ height }}
    </text>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  width: {
    type: [Number, String],
    default: 400
  },
  height: {
    type: [Number, String],
    default: 300
  },
  text: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: '#f3f4f6'
  },
  textColor: {
    type: String,
    default: '#6b7280'
  },
  gridColor: {
    type: String,
    default: '#e5e7eb'
  },
  showGrid: {
    type: Boolean,
    default: false
  },
  showDimensions: {
    type: Boolean,
    default: true
  }
})

// Convert string dimensions to numbers
const width = computed(() => parseInt(props.width))
const height = computed(() => parseInt(props.height))

// Calculate appropriate font size based on image size
const fontSize = computed(() => {
  const minDimension = Math.min(width.value, height.value)
  return Math.max(12, Math.min(24, minDimension / 15))
})

// Display text - use custom text or default placeholder text
const displayText = computed(() => {
  if (props.text) return props.text
  return 'Placeholder Image'
})
</script>

<style scoped>
.placeholder-svg {
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>