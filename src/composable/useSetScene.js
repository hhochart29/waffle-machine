import * as THREE from 'three'
import { onMounted } from 'vue'

export function useSetScene(threeContainer, debug = false) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    100
  )

  const renderer = new THREE.WebGLRenderer({
    antialias: true
  })

  function setupScene() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.set(0, 0, 5)

    if (debug) {
      scene.add(new THREE.AxesHelper(5))
    }

    threeContainer.value.appendChild(renderer.domElement)
  }

  onMounted(() => {
    setupScene()
  })

  return { scene, camera, renderer }
}
