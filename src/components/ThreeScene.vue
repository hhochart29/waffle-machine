<template>
  <div ref="threeContainer" class="fixed top-0 left-0 w-screen h-screen" />
</template>

<script>
import { useSetScene } from '../composable/useSetScene.js'
import { useMouseMove } from '../composable/useMouseMove.js'
import { ref, unref, onMounted, watch, reactive, toRaw } from 'vue'
import * as THREE from 'three'

export default {
  setup() {
    const threeContainer = ref(undefined)
    const threeItems = reactive({
      cube: undefined
    })

    const { scene, camera, renderer } = useSetScene(threeContainer, false)

    onMounted(() => {
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
      threeItems.cube = new THREE.Mesh(geometry, material)

      const spotlight = new THREE.SpotLight(0xffffff, 1, 10, Math.PI / 6, 0, 2)
      spotlight.position.set(-1, 1, 3)

      scene.add(spotlight)
      // scene.add(new THREE.SpotLightHelper(spotlight))

      scene.add(toRaw(threeItems.cube))
      animate()
    })

    function animate() {
      renderer.render(scene, camera)
      threeItems.cube.rotation.y += 0.005
      threeItems.cube.rotation.x -= 0.002
      requestAnimationFrame(animate)
    }

    return {
      threeContainer
    }
  }
}
</script>
