import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
// import SkyObject from './SkyObject';
import './App.css';
import Model from './components/Three/Scene';
import Lights from './components/Three/Lights';
import { OrbitControls } from '@react-three/drei';

// function Sky(){
//   return (
//     <Suspense fallback={<>Loading...</>}>
//       <SkyObject />
//     </Suspense>
//   );
// }

function App() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{position: [-5, 4, 4], fov: 40}}>
          <Lights/>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls/>
      </Canvas>
    </>
  );
}

export default App;
