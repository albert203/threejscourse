- we created a PerspectiveCamera, but there are other types of cameras

- Camera is an abstract class

- ArrayCamera is a subclass of Camera and has the ability to render the scene from cameras on specific areas of the render.

- StereoCamera renders the scene from two different cameras, one for the left eye and one for the right eye. Used with
devices like vr headsets.

- CubeCamera does 6 renders, each one facing a different direction. Can render the surrounding for things such as environment maps, reflection or shadow maps.

- OrthographicCamera is a camera that renders the scene without perspective. No matter how far away it will look the same.

- PerspectiveCamera is a camera that renders the scene with perspective.


- We are going to use OrthographicCamera and the PerspectiveCamera.


    // Device Orientation Controls - wont work on ios
    // Will automatically retrieve the device orientation if
    // the device supports it. 

    // Fly Controls
    // like flying a plane

    // First person control is like fly control but cannot control 
    // the x axis, no barrel roll.

    // Pointer lock control
    // like first person control where it rotates on the point 

    // Orbit control
    // rotate around the point but cant view under the point etc. under a map

    // Trackball control
    // like orbit control but can rotate around the point fully

    // Transform Controls
    // Transform has nothing to do with the camera
    // move, rotate, scale

    // Drag controls, 
    // like transform control but can only move