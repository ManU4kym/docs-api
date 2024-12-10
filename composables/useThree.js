import * as THREE from 'three';

export function useThree() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Start with aspect ratio 1, it will update in init
    const renderer = new THREE.WebGLRenderer();

    const init = (container) => {
        if (typeof window !== 'undefined' && container) {
            // Safely check if window is available (client-side only)
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            container.appendChild(renderer.domElement);

            // Example: Add a cube to the scene
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            camera.position.z = 5;

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
            };

            animate();
        }
    };

    // Resize handling
    const onResize = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
    };

    // Ensure resize event listener is only added on the client
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', onResize);
    }

    const cleanup = () => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', onResize);
        }
    };

    return {
        init,
        cleanup,
    };
}
