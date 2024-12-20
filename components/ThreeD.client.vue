<template>
    <div ref="threeContainer" class="three-container">

    </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three'


// Reference to the container element
const threeContainer = ref(null);

let scene, camera, renderer, cube, animationId;

onMounted(() => {
    // Initialize the Scene
    scene = new THREE.Scene();

    // Initialize the Camera
    camera = new THREE.PerspectiveCamera(
        75, // Field of View
        window.innerWidth / window.innerHeight,
        0.1, // Near Plane
        1000 // Far Plane
    );
    camera.position.z = 5;

    // Initialize the Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight, false);

    // Append Renderer to the Container
    if (threeContainer.value) {
        threeContainer.value.appendChild(renderer.domElement);
    }

    // Create a Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation Loop
    const animate = () => {
        animationId = requestAnimationFrame(animate);

        // Rotate the Cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Render the Scene
        renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on Component Unmount
    onUnmounted(() => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
    });
});
</script>

<style>
html,
body,
#app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;


}

.three-container {
    position: relative;
    padding: 45px;
    margin: 45px;


    z-index: 1000
}
</style>