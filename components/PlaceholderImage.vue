<template>
  <div class="placeholder-container" :style="containerStyle">
    <svg
        :width="width"
        :height="height"
        :viewBox="`0 0 ${width} ${height}`"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
    >
      <!-- Background with gradient -->
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="gradientStart" />
          <stop offset="100%" :stop-color="gradientEnd" />
        </linearGradient>

        <!-- Pattern for texture -->
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/>
        </pattern>
      </defs>

      <!-- Background -->
      <rect
          width="100%"
          height="100%"
          fill="url(#bgGradient)"
      />

      <!-- Texture overlay -->
      <rect
          width="100%"
          height="100%"
          fill="url(#dots)"
      />

      <!-- Icon (camera or image icon) -->
      <g :transform="`translate(${width/2 - 24}, ${height/2 - 24})`">
        <rect x="8" y="8" width="32" height="24" rx="2" fill="none" :stroke="iconColor" stroke-width="2"/>
        <circle cx="24" cy="20" r="4" fill="none" :stroke="iconColor" stroke-width="2"/>
        <path d="M16 8l-2-2h-4l-2 2" fill="none" :stroke="iconColor" stroke-width="2"/>
      </g>

      <!-- Main text -->
      <text
          :x="width / 2"
          :y="height / 2 + 40"
          text-anchor="middle"
          dominant-baseline="middle"
          :font-size="mainFontSize"
          :fill="textColor"
          font-family="system-ui, -apple-system, sans-serif"
          font-weight="500"
      >
        {{ displayText }}
      </text>

      <!-- Dimensions -->
      <text
          :x="width / 2"
          :y="height / 2 + 60"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="14"
          :fill="subtextColor"
          font-family="system-ui, -apple-system, sans-serif"
      >
        {{ width }} × {{ height }}
      </text>
    </svg>
  </div>
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
    default: 'Placeholder'
  },
  theme: {
    type: String,
    default: 'gray', // gray, blue, green, red, purple
    validator: (value) => ['gray', 'blue', 'green', 'red', 'purple'].includes(value)
  }
})

const width = computed(() => parseInt(props.width))
const height = computed(() => parseInt(props.height))

const containerStyle = computed(() => ({
  width: `${width.value}px`,
  height: `${height.value}px`,
  display: 'inline-block'
}))

const themeColors = {
  gray: {
    gradientStart: '#f9fafb',
    gradientEnd: '#e5e7eb',
    textColor: '#374151',
    subtextColor: '#6b7280',
    iconColor: '#9ca3af'
  },
  blue: {
    gradientStart: '#eff6ff',
    gradientEnd: '#dbeafe',
    textColor: '#1e40af',
    subtextColor: '#3b82f6',
    iconColor: '#60a5fa'
  },
  green: {
    gradientStart: '#f0fdf4',
    gradientEnd: '#dcfce7',
    textColor: '#166534',
    subtextColor: '#22c55e',
    iconColor: '#4ade80'
  },
  red: {
    gradientStart: '#fef2f2',
    gradientEnd: '#fecaca',
    textColor: '#dc2626',
    subtextColor: '#ef4444',
    iconColor: '#f87171'
  },
  purple: {
    gradientStart: '#faf5ff',
    gradientEnd: '#e9d5ff',
    textColor: '#7c2d12',
    subtextColor: '#a855f7',
    iconColor: '#c084fc'
  }
}

const currentTheme = computed(() => themeColors[props.theme])
const gradientStart = computed(() => currentTheme.value.gradientStart)
const gradientEnd = computed(() => currentTheme.value.gradientEnd)
const textColor = computed(() => currentTheme.value.textColor)
const subtextColor = computed(() => currentTheme.value.subtextColor)
const iconColor = computed(() => currentTheme.value.iconColor)

const mainFontSize = computed(() => {
  const minDimension = Math.min(width.value, height.value)
  return Math.max(14, Math.min(20, minDimension / 20))
})

const displayText = computed(() => props.text || 'Placeholder')
</script>