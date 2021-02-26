import React, { useRef } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function SkyObject(){
  const { scene } = useLoader(GLTFLoader, './scene.gltf');
  const ref = useRef();

  return (
    <group ref={ref} position={[0, 0, -100]}>
      <primitive scale={[0.001, 0.001, 0.001]} object={scene} dispose={null} />
    </group>
  );
}

export default SkyObject;