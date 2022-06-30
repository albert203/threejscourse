import './style.css'
import * as THREE from 'three'
// This will give you access without writing THREE.OrbitControls()
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Cursor
*/
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) =>{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = -(event.clientY / sizes.height - 0.5)

    // console.log(cursor.x)
})


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
// 1st param: field of view, 2nd: aspect ratio, 3rd: near, 4th: far
// near and far sets the clipping planes of the camera
// Do NOT use extremes like 0.00001, and 9999999 it will cause z-fighting 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

// The render is stretching our cube to fill the screen
// we are trying to render a cube that is 1 meter wide but the screen is 800x600
// so we need to scale the cube to fit the screen by using the aspect ratio.
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(
//     -1 * aspectRatio, //left
//     1 * aspectRatio, //right
//     1,  //top
//     -1, //bottom
//     0.1, //near
//     100) //far

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Orbit controls
// how can we instantiate an orbit control? OrbitControls cannot be accessed with THREE.OrbitControls()
const controls = new OrbitControls(camera, canvas)
// add damping to the camera - smooth acceleration and deceleration
controls.enableDamping = true
// controls.autoRotate = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;

    // Update Camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) *3
    // console.log(camera.position.x)

    // camera.position.y = cursor.y * 5

    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) *3
    // console.log(camera.position.z)

    // camera.lookAt(mesh.position)

    // Update Controls - update orbit controls on every frame
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()