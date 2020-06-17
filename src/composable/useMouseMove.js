import { reactive, onMounted } from 'vue'

export function useMouseMove() {
  const mousePosState = reactive({
    x: 0,
    y: 0
  })

  onMounted(() => {
    window.addEventListener('mousemove', ({ clientX, clientY }) => {
      mousePosState.x = clientX / window.innerWidth
      mousePosState.y = 1 - clientY / window.innerHeight
    })
  })

  return mousePosState
}
