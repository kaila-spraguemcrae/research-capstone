
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
        camera={{position: [-5, 4, 4], fov: 40}}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls/>
        </Canvas>
    </>
  );
}

export default App;
