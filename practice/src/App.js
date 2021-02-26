import React, { useRef } from 'react';
import './App.scss';

import { Canvas, useFrame } from 'react-three-fiber';

//NO HTML inside Canvas (only can take three.js elements)
//mesh can take 'meterial' and 'geomentry'
//args: for square:[x, y ,z] (size of object: height, width, depth) // for circle: [1, 1] (size, amount of angles)

const Box = () => {
  const mesh= useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas>
        <Box />
      </Canvas>
    </>
  );
}

export default App;
