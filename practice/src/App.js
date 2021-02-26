import React from 'react';
import './App.scss';

import { Canvas } from 'react-three-fiber';

//NO HTML inside Canvas (only can take three.js elements)
//mesh can take 'meterial' and 'geomentry'
//args: [x, y ,z] (size of object: height, width, depth)

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
