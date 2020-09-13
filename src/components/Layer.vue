<template>
  <div>
    <LogoGlitchy class="flex items-center justify-center h-screen py-5" />

    <div class="absolute bottom-0 right-0 opacity-75">
      <a href="mailto:concert@wafflemachine.band" class="block p-5 uppercase">
        Contact
      </a>
    </div>
  </div>
</template>

<script>
import LogoGlitchy from './LogoGlitchy.vue'

export default {
  components: {
    LogoGlitchy
  }
}
</script>
