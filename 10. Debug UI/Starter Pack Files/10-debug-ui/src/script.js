import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'

/**
 * Debug UI
 */
// console.log(dat) 
const gui = new dat.GUI({ closed: true, width: 300 })

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Parameters
const parameters = {
    color: '#21b167',
    spin: () => {
        gsap.to(mesh.rotation, { y: mesh.rotation.y +(Math.PI * 2), duration: 2 })
    }
}

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: parameters.color })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Debug
// can only use GUI on objects
// This is called c
gui.add(mesh.position, 'y')
    .min(-3)
    .max(3)
    .step(0.1)
    .name('object elevation')

gui.add(mesh, 'visible')

gui.add(material, 'wireframe')

gui.addColor(parameters, 'color')
    .onChange(color => { material.color.set(parameters.color) })

gui.add(parameters, 'spin')

// hide and unhide gui on keypress
window.addEventListener('keypress', e => {
    if (e.key === 'h') {
        gui.hidden()
    } else if (e.key === 'h') {
        gui.open()
    }
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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