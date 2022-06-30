import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    // Width and height of the viewport (even though it says window)
    width: window.innerWidth,
    height: window.innerHeight,
    // width: 800,
    // height: 600
}

// Resize event
window.addEventListener('resize', () =>{
    // console.log('resize');
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera aspect ratio
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer size
    renderer.setSize(sizes.width, sizes.height)

    // A pixel ratio of 2 means 4 times more pixels to render.
    // A pixel ratio of 3 means 9 times more pixels to render.
    // Highest pixel ratios available on the weakest devices - mobiles.
    // To get the pixel ratio, we can use window.devicePixelRatio.
    // Limit to 2 pixel ratio.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Add support for fullscreen
window.addEventListener('dblclick', () => {

    // This is the code for fullscreen for safari and other incompatible browsers
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        } 
        else if(canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen()
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } 
        else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen()
        }
    }   
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()