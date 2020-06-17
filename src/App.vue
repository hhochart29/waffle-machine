<template>
  <div class="relative min-h-screen text-white bg-black">
    <ThreeScene />
    <h1
      class="container absolute mx-auto font-mono text-3xl text-6xl font-bold text-center uppercase transform -translate-x-1/2 -translate-y-1/2"
      style="top: 50%; left: 50%;"
    >
      Waffle Machine
    </h1>

    <div class="absolute bottom-0 right-0 text-white">
      <a
        href="mailto:concert@wafflemachine.band"
        class="block p-5 font-mono uppercase"
      >
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

<style lang="postcss" scoped>
h1 {
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
</style>
