// src/DistortionEffect.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const DistortionEffect = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a geometry and material
    const geometry = new THREE.PlaneGeometry(5, 5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: '#c5e3fe', wireframe: true });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;
    let distortionScale = 0.5;
    let distortionFrequency = 5; // Initial frequency of the distortion

    // Function to handle window resize
    const handleResize = () => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
  
        // Define breakpoints
        const mobile = window.matchMedia("(max-width: 767px)");
        const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
        const desktop = window.matchMedia("(min-width: 1024px)");
  
        if (mobile.matches) {
          renderer.setSize(window.innerWidth, window.innerHeight);
          distortionScale = 1;
          distortionFrequency = 3;
        } else if (tablet.matches) {
          renderer.setSize(window.innerWidth, window.innerHeight);
          distortionScale = 1;
          distortionFrequency = 3;
        } else if (desktop.matches) {
          renderer.setSize(window.innerWidth, window.innerHeight);
          distortionScale = 1;
          distortionFrequency = 3;
        }
  
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Apply distortion effect
      const time = Date.now() * 0.001;
      const position = plane.geometry.attributes.position;
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i)* distortionScale;
        const z = Math.sin(x * distortionFrequency + time) * distortionScale;
        position.setZ(i, z);
      }
      position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    // return () => {
    //   mountRef.current.removeChild(renderer.domElement);
    // };
  }, []);

  return <div ref={mountRef} style={{ width: '50vh', height: '100%' }} />;
};

export default DistortionEffect;