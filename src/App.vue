<template>
  <div class="relative min-h-screen font-sans text-white bg-black">
    <!-- <ThreeScene /> -->

    <Cursor />
    <ImageHover
      class="absolute transform -translate-x-1/2 -translate-y-1/2"
      style="left: 50%; top: 50%"
    />
    <Layer />
  </div>
</template>

<script>
import ThreeScene from './components/ThreeScene.vue'
import Layer from './components/Layer.vue'
import Cursor from './components/Cursor.vue'
import ImageHover from './components/ImageHover.vue'

export default {
  components: { ThreeScene, Layer, ImageHover, Cursor }
}
</script>
