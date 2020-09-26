<template>
  <div class="relative flex flex-col min-h-screen">
    <div class="flex justify-center flex-grow">
      <LogoGlitchy class="flex items-center justify-center py-5" />

      <!-- <ImageHover
        src="/band.jpg"
        class="absolute bottom-0 left-0 mb-10 ml-10 transform"
        style="--transform-rotate: -5deg"
      /> -->
    </div>

    <div class="text-right opacity-75">
      <a
        href="mailto:concert@wafflemachine.band"
        class="inline-block p-5 uppercase hover:underline"
      >
        Contact
      </a>
    </div>
  </div>
</template>

<script setup>
export { default as ImageHover } from '../components/old/ImageHover.vue'
export { default as LogoGlitchy } from '../components/LogoGlitchy.vue'
</script>
