import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

console.log(gsap)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// The purpose of requestAnimationFrame is to call the function
// provided on the next frame
// We are going to call the function on the next frame


// Time - "let" type as it is a changing variable
let time = Date.now()

// Clock - Intialised at time 0, in seconds
const clock = new THREE.Clock()


// GSAP - greensock has its own tick function, but must still render it
gsap.to(mesh.position, {
    duration: 5,
    delay: 1,
    x: 2,
})

// Animations
const tick = () =>{

    const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)
    // mesh.rotation.x = elapsedTime
    // One revolution per second
    // mesh.rotation.y = elapsedTime * Math.PI *2

    // You can also use a math sine , cos, tan, function to make the object move
    // mesh.position.x = Math.sin(elapsedTime)
    // mesh.position.y = Math.cos(elapsedTime)

    // You can also do this with camera
    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)
    // cube camera is moving but if we set look at we always
    // look at the center of the mesh position
    // camera.lookAt(mesh.position)

    // console.log('tick')

    //  subtract the last time from the current time
    //  Use deltaTime to calculate the change in time between frames
    //  This will get us the time per frame
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime
    // console.log(currentTime)
    // change in time between frames
    // console.log(deltaTime)

    // Update object rotation on each frame x, y axis
    // Then we multiply by the change in time between frames
    // mesh.rotation.x += 0.001 * deltaTime
    // mesh.rotation.y += 0.001 * deltaTime

    // The idea is that the object will rotate around the x and y axis
    // regardless of the framerate of other devices

    //render 
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
