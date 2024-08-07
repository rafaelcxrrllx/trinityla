import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Distortion = () => {
  const containerRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, mesh, material;
    let clock = new THREE.Clock();

    const init = () => {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load('/name.svg'); // Replace with your logo image path

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        uniform sampler2D uTexture;
        uniform float uTime;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          uv.y += sin(uv.x * 10.0 + uTime * 5.0) * 0.1;
          gl_FragColor = texture2D(uTexture, uv);
        }
      `;

      material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
          uTime: { value: 0 }
        },
        vertexShader,
        fragmentShader
      });

      const geometry = new THREE.PlaneGeometry(2, 2); // Updated to PlaneGeometry
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      animate();
    };

    const animate = () => {
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    init();

    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100px', height: '100px' , backgroundColor: 'white'}} />;
};

export default Distortion;