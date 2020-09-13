<template>
  <div
    class="fixed top-0 left-0 z-50 w-6 h-6 bg-white rounded-full custom-cursor"
    ref="cursorRef"
  />
</template>

<script>
import { computed, onMounted, onRenderTriggered, reactive, ref } from 'vue'
import { useMouseMove } from '../composable/useMouseMove'

export default {
  setup() {
    const easing = 0.2
    const smoothenMousePos = reactive({
      x: 0,
      y: 0
    })

    const mousePos = useMouseMove()
    const cursorRef = ref()

    const cursorPos = computed(() => ({
      transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
    }))

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
        Math.abs(((mousePos.x - roundedX) / window.innerWidth) * 10),
        Math.abs(((mousePos.y - roundedY) / window.innerWidth) * 10)
      )

      cursorRef.value.style.transform = `translate(${roundedX}px, ${roundedY}px) scale(${
        1 + acceleration
      })`
    }

    return {
      cursorPos,
      cursorRef
    }
  }
}
</script>

<style lang="postcss">
*,
html {
  cursor: none !important;
}

.custom-cursor {
  mix-blend-mode: exclusion;
}
</style>
