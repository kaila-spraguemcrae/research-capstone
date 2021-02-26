import React, { useRef } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function CityObject(props) {
  const { scene } = useLoader(GLTFLoader, '../../public/scene.gltf');
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.003))
  return (

  );
}