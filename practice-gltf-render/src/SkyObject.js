import React, { useRef } from 'react';
//import { useLoader, useFrame } from 'react-three-fiber';
import { useGLTF } from "@react-three/drei";

function SkyObject(){
  const { scene } = useGLTF('./scene.gltf');
  const ref = useRef();

  return (
      <group ref={ref} position={[0, 0, 0]}>
        <primitive scale={[0.001, 0.001, 0.001]} object={scene} dispose={null} />
      </group> 
  );
}

export default SkyObject;