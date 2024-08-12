// DistortedSvg.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  uniform float time;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.x += sin(pos.y * 10.0 + time) * 0.1; // Distort X based on Y and time
    pos.y += cos(pos.x * 10.0 + time) * 0.1; // Distort Y based on X and time
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D texture;

  void main() {
    gl_FragColor = texture2D(texture, vUv);
  }
`;

const DistortedSvg = ({ svgUrl }) => {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(svgUrl, (texture) => {
      const geometry = new THREE.PlaneGeometry(5, 5);
      const uniforms = {
        texture: { value: texture },
        time: { value: 0 }
      };
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms
      });

      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      camera.position.z = 10;

      const animate = () => {
        requestAnimationFrame(animate);
        uniforms.time.value += 0.05; // Update time uniform for animation
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      if (containerRef.current && rendererRef.current) {
        if (containerRef.current.contains(rendererRef.current)) {
          containerRef.current.removeChild(rendererRef.current);
        }
      }    };
  }, [svgUrl]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default DistortedSvg;