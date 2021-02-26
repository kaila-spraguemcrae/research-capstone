import React from 'react';
import { Canvas } from 'react-three-fiber';
import Sphere from './Sphere';
import Light from './Light';
import BackDrop from './BackDrop';
import GroundPlane from './GroundPlane';
import FillLight from './FillLight';
import RimLight from './RimLight';

function App() {
  return (
    <Canvas>
      <GroundPlane />
      <BackDrop />
      <Light brightness={5.6} color={"#ffbdf4"} />
      <FillLight brightness={2.6} color={"#bdefff"} />
      <RimLight brightness={54} color={"#fff"} />
      <Sphere />
      <Sphere />
      <Sphere />
    </Canvas>
  );
}

export default App;
