import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
//move position of mesh up, but depends on camera position
// values can also be different, aka kilos, metres, centimeters, etc.
// these vector positions are know as Vector2, Vector3, Vector4 
// in documentation
mesh.position.x = 0.6
mesh.position.y = -0.6
mesh.position.z = 1
scene.add(mesh)

// AxesHelper will display a coloured line for each axis
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// scaling the mesh
// mesh.scale.x = 1
// mesh.scale.set(1, 1, 1)


// mesh.position.set(0.7, -0.6, 1)

// Will reduce the vector length to 1
// mesh.position.normalize()


// length gives you the distance between the position and the 
// center of the scene
console.log(mesh.position.length())

// Rotation
// belongs to the euler class
// mesh.rotation.y = 0.5
// mesh.rotation.set(0, 0.8, 0)

//Rotation - do rotation reorder to avoid weird behaviour by 
// declaring x first
// Want to declare y first generally
mesh.rotation.reorder('y', 'x', 'z')
// One half rotation is pi radians
// One quarter is pi/2 radians
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI *0.25

// you can put objects inside groups and use
// position, rotation, scale on those groups
// to do that use the group class
// do note will only work with no prior object added to scene
// const group = new THREE.Group()
// scene.add(group)

//instead of using mesh.position... you use group.position to 
// move the group of object/cubes together




/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// look directly towards the mesh object
// camera.lookAt(mesh.position)

// what if you want to know the distance between the position 
// the camera
console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// need to set position before rendering or else it will stay in 
// default position.
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)