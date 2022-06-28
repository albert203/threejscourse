// Multiple classes for three.js
console.log(THREE);

// Need 4 elements to get started
// - A scene that contains objects
// - Some Objects
// - A camera
// - A renderer

// SCENE
// - Like a container
// - We put objects, lights, etc. in it
// - At some point we render it

// We make our scene
const scene = new THREE.Scene()

// OBJECTS, can be many things
// Primitive geometries
// Imported Models
// Particles
// Lights

// To create an object we need to create a Mesh
// Mesh is a geometry (shape) + material (how it looks)
// Start with a "BoxGeometry" and a "MeshBasicMaterial"
// link to documentation: https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry

// Create a cube
const redCube = new THREE.BoxGeometry(1, 1, 1)

// Create the red colour by providing a function
// Putting 0x in front of the hex colour works
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// Create a mesh that takes in our geometric and material values.
const mesh = new THREE.Mesh(redCube, material)

// Add mesh to our scene
scene.add(mesh)

// Sizes of screen
const sizes= {
    width: 800,
    height: 600
}

// Camera
// Need to create a point of view for your scene, you can have multiple cameras
// 1st parameter - Field of view , 2nd paremeter - aspect ratio , 
const cameraView = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//see comments below for tranforming an object
cameraView.position.z = 3
scene.add(cameraView)

//Renderer - Render the scene from camera perspective
// Results drawn in canvas html element
// Three.js will ise WebGL to draw the render inside canvas 
// You can create it or you can let Three.js create it for you
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
    // also in js if the variable name is the same as the property name you can just 
    // write 'canvas' instead of 'canvas: canvas' (no quotes)
})

renderer.setSize(sizes.width, sizes.height)

// render you provide a scene and a camera
// we should see a black triangle, but the scenes triangles is covering the camera
// Everything is at the centre of the cube, including cameraview 
renderer.render(scene, cameraView)

// Need to move the camera out of the scene so we can see.
// To transform an object/camera we need can use the following properties:
// - position: x,y,z axis - z to move towards us, x to the right, y to the top
// - rotation: 
// - scale

// // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // //
// Next lesson:
// More about position, rotation, scale properties
// animating the scene
// Making the canvas fit the viewport
