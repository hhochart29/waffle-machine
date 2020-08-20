import { onMounted, onUnmounted, reactive } from 'vue'

export function useMouseMove() {
  const mousePosState = reactive({
    x: 0,
    y: 0
  })

  function setMousePosition({ clientX, clientY }) {
    mousePosState.x = clientX / window.innerWidth
    mousePosState.y = 1 - clientY / window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('pointermove', setMousePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('pointermove', setMousePosition)
  })

  return mousePosState
}
