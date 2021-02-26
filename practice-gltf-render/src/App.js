import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import SkyObject from './SkyObject';
import './App.css';

function App() {
  return (
    <>
      <Canvas>
        <SkyObject />
      </Canvas>
    </>
  );
}

export default App;
