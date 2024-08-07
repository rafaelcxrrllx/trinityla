import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Ring = ({ text, radius, height, segments }) => {
  const meshRef = useRef();

  useEffect(() => {
    const texture = new THREE.TextureLoader().load('path/to/your/texture.jpg'); // Optional: add a texture
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);

    meshRef.current.material.map = texture;
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Optional: add rotation animation
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[radius, radius, height, segments]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Ring;