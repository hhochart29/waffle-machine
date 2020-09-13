import { onMounted, onUnmounted, reactive } from 'vue'

export function useMouseMove() {
  const mousePosState = reactive({
    x: 0,
    y: 0
  })

  function setMousePosition({ clientX, clientY }) {
    mousePosState.x = clientX
    mousePosState.y = clientY
  }

  onMounted(() => {
    window.addEventListener('pointermove', setMousePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('pointermove', setMousePosition)
  })

  return mousePosState
}
