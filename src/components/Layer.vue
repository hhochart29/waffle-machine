<template>
  <div>
    <div class="flex items-center justify-center py-5 text-6xl uppercase">
      <div class="font-semibold glitch" data-text="WM">WM</div>
      <div class="font-hairline glitch" data-text="#">#</div>
    </div>
    <div
      class="container absolute mx-auto text-center transform -translate-x-1/2 -translate-y-1/2"
      style="top: 50%; left: 50%;"
    >
      <h1 class="text-6xl uppercase">
        Waffle Machine
      </h1>

      <h2 class="text-3xl font-normal uppercase opacity-25">
        Coming soon
      </h2>
    </div>

    <div class="absolute bottom-0 right-0 opacity-75">
      <a href="mailto:concert@wafflemachine.band" class="block p-5 uppercase">
        Contact
      </a>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.glitch {
  position: relative;
  color: white;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: black;
}

.glitch::before {
  left: -1px;
  text-shadow: 1px 2px 0 #ff00ff;
  animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
}

.glitch::after {
  text-shadow: -1px 0 #ffff00;
  text-shadow: -3px 0 #00ffff;
  animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
}

@keyframes glitch-loop-1 {
  0% {
    clip: rect(0, 9999px, 9px, 0);
  }
  25% {
    clip: rect(20px, 9999px, 0, 0);
  }
  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }
  75% {
    clip: rect(30px, 9999px, 102px, 0);
  }
  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}

@keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }
  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }
  75% {
    top: 0px;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }
  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
</style>
