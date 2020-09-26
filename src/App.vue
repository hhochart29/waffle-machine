<template>
  <div class="relative min-h-screen font-sans text-white bg-black">
    <!-- <ThreeScene /> -->
    <Cursor />
    <Layer />
  </div>
</template>

<script>
import ThreeScene from './components/ThreeScene.vue'
import Layer from './pages/index.vue'
import Cursor from './components/Cursor.vue'

export default {
  components: { ThreeScene, Layer, Cursor }
}
</script>
