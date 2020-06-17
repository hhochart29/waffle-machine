<template>
  <div class="relative min-h-screen font-sans text-white bg-black">
    <ThreeScene />

    <div
      class="container absolute mx-auto transform -translate-x-1/2 -translate-y-1/2 opacity-50"
      style="top: 50%; left: 50%;"
    >
      <h1 class="text-6xl font-bold text-center uppercase">
        Waffle Machine
      </h1>

      <h2 class="text-3xl font-bold text-center uppercase opacity-25">
        Coming soon
      </h2>
    </div>

    <div class="absolute bottom-0 right-0">
      <a href="mailto:concert@wafflemachine.band" class="block p-5 uppercase">
        Contact
      </a>
    </div>
  </div>
</template>

<script>
import ThreeScene from './components/ThreeScene.vue'

export default {
  components: { ThreeScene }
}
</script>
