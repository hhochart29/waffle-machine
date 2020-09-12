<template>
  <div>
    <div
      class="flex items-center justify-center h-screen py-5 uppercase select-none"
    >
      <div class="font-semibold glitch" data-text="WM">WM</div>
      <div class="font-hairline glitch" data-text="#">#</div>
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
  font-size: 10rem;
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
  text-shadow: 3px 2px 0 #ff00ff;
  left: -1px;
  animation: glitch-loop-1 1.4s infinite ease-in-out alternate-reverse;
}

.glitch::after {
  top: -1px;
  left: -2px;
  text-shadow: -3px 0 #00ffff;
  clip: rect(0, 9999px, 9px, 0);
  animation: glitch-loop-2 1.1s infinite ease-in-out alternate-reverse;
}

@keyframes glitch-loop-1 {
  0% {
    left: -5px;
    top: 2px;
    clip: rect(115px, 9999px, 9999px, 0);
  }
  25% {
    top: -1px;
    clip: rect(280px, 9999px, 9999px, 0);
  }
  50% {
    left: 2px;
    clip: rect(9999px, 9999px, 9999px, 0);
  }
  75% {
    top: -2px;
    clip: rect(26px, 9999px, 9999px, 0);
  }
  100% {
    left: 0px;
    top: 3px;
    clip: rect(120px, 9999px, 9999px, 0);
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
    clip: rect(195px, 9999px, 153px, 0);
  }
  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
</style>
