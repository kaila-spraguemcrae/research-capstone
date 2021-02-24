import React from 'react';
import { Canvas } from 'react-three-fiber';
import Sphere from './Sphere';
import Light from './Light';
import BackDrop from './BackDrop';
import GroundPlane from './GroundPlane';

function App() {
  return (
    <Canvas>
      <Light brightness={10} color={"white"} />
      <Sphere />
      <BackDrop />
      <GroundPlane />
    </Canvas>
  );
}

export default App;
