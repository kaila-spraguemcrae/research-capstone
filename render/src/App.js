
import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Three/Fantasy-sky';
// import Lights from './components/Three/Lights';


function App() {
  return (
    <>
      <Canvas 
        colorManagement
        shadowMap
        >
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls/>
        </Canvas>
    </>
  );
}

export default App;
