<template>
  <div class="relative min-h-screen font-sans text-white bg-black">
    <ThreeScene />

    <div
      class="container absolute mx-auto text-center transform -translate-x-1/2 -translate-y-1/2 opacity-75"
      style="top: 50%; left: 50%;"
    >
      <div class="text-6xl uppercase">
        <span class="font-semibold">WM</span>
        <span class="font-hairline sharp">#</span>
      </div>
      <h1 class="text-6xl uppercase band-name">
        Waffle Machine
      </h1>

      <h2 class="text-3xl font-normal uppercase opacity-25">
        Coming soon
      </h2>
    </div>

    <div class="absolute bottom-0 right-0 opacity-50">
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

<style lang="postcss" scoped>
@keyframes nameFontWeight {
  0% {
    font-weight: 250;
  }
  100% {
    font-weight: 450;
  }
}

@keyframes nameRotate {
  0% {
    transform: skewY(-3deg);
  }

  100% {
    transform: skewY(1deg);
  }
}

.band-name {
  animation: nameFontWeight 5s infinite alternate ease-in-out,
    nameRotate 3s infinite alternate ease-in-out;
}
</style>
