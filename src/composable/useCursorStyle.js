import { ref } from 'vue'

export const cursorStyle = ref('blend')

export function setCursorStyle(payload) {
  cursorStyle.value = payload ?? 'blend'
}
