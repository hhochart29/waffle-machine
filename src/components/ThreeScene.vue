<template>
  <div ref="threeContainer" class="fixed top-0 left-0 w-screen h-screen" />
</template>

<script>
import { useSetScene } from '../composable/useSetScene.js'
import { useMouseMove } from '../composable/useMouseMove.js'
import { ref, unref, onMounted, watch, reactive, toRaw } from 'vue'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default {
  setup() {
    const threeContainer = ref(undefined)
    const threeItems = reactive({
      waffle: undefined
    })

    const { scene, camera, renderer } = useSetScene(threeContainer, false)

    onMounted(() => {
      const loader = new OBJLoader()

      loader.load('/waffle.obj', function (obj) {
        obj.scale.x = 0.06
        obj.scale.y = 0.06
        obj.scale.z = 0.06

        parent = new THREE.Object3D()
        scene.add(parent)
        parent.add(obj)
        threeItems.waffle = parent
      })

      const spotlight = new THREE.SpotLight(0xffffff, 1, 10, Math.PI / 6, 0, 5)
      spotlight.position.set(-1, 1, 3)

      scene.add(spotlight)
      // scene.add(new THREE.SpotLightHelper(spotlight))

      animate()
    })

    function animate() {
      renderer.render(scene, camera)

      if (threeItems.waffle) {
        threeItems.waffle.rotation.y += 0.0007
        threeItems.waffle.rotation.x -= 0.001
      }
      requestAnimationFrame(animate)
    }

    return {
      threeContainer
    }
  }
}
</script>
