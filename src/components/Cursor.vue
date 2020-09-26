<template>
  <div
    :style="cursorStyle === 'blend' ? 'mix-blend-mode: exclusion;' : null"
    class="relative z-50 w-0 h-0"
  >
    <div
      class="fixed top-0 left-0 transition-opacity duration-300 delay-200 pointer-events-none select-none"
      ref="cursorRef"
      :class="hasMoved ? 'opacity-100' : 'opacity-0'"
    >
      <div
        class="w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
      />
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  onRenderTriggered,
  reactive,
  ref,
  unref,
  watchEffect
} from 'vue'
import { useMouseMove } from '../composable/useMouseMove'
import { cursorStyle } from '../composable/useCursorStyle'

const easing = 0.15
const mousePos = useMouseMove()
const smoothenMousePos = reactive({
  x: 0,
  y: 0
})

export { cursorStyle }
export const hasMoved = ref(false)
export const cursorRef = ref()

const stop = watchEffect(() => {
  if (mousePos.x !== 0 || mousePos.y !== 0) {
    hasMoved.value = true
    stop()
  }
})

onMounted(() => {
  requestAnimationFrame(animateCursor)
})

function animateCursor() {
  if (!cursorRef.value) return
  requestAnimationFrame(animateCursor)

  smoothenMousePos.x += (mousePos.x - smoothenMousePos.x) * easing
  smoothenMousePos.y += (mousePos.y - smoothenMousePos.y) * easing

  const roundedX = Math.round(smoothenMousePos.x * 100) / 100
  const roundedY = Math.round(smoothenMousePos.y * 100) / 100
  const acceleration = Math.max(
    Math.abs(((mousePos.x - roundedX) / window.innerWidth) * 5),
    Math.abs(((mousePos.y - roundedY) / window.innerWidth) * 5)
  )

  cursorRef.value.style.transform = `translate3D(${roundedX}px, ${roundedY}px, 0px) scale(${
    1 + acceleration
  })`
}
</script>

<style lang="postcss">
*,
html {
  cursor: none !important;
}
</style>
