<template>
  <div class="select-none">
    <img
      :src="src"
      class="max-w-md mx-auto"
      style="filter: grayscale(1)"
      @mouseenter="setCursorStyle('solid')"
      @mouseleave="setCursorStyle('blend')"
    />
  </div>
</template>

<script>
import { setCursorStyle } from '../../composable/useCursorStyle'
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },

  setup() {
    return {
      setCursorStyle
    }
  }
}
</script>
