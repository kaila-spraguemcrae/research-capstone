import React, { useRef } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function CityObject() {
  const { scene } = useLoader(GLTFLoader, '/scene.gltf');
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.003))
  return (
    <group ref={ref} position={[0, 0, -100]}>
      <primitive scale={[0.001, 0.001, 0.001]} object={scene} dispose = {null} />
    </group>
  );
}

export default CityObject;