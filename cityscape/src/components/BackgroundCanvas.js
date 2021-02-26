import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import CityObject from './CityObject';
import Error from './Error';

function BackgroundCanvas() {
  return (
    <Canvas style={{ background: '#cc7b32' }} camera={{ position: [0, 5, 0], fov: 40 }}>
      <fog attach="fog" args={['#cc7b32', 0, 500]} />
      <Suspense fallback={<Error/>}>
        <CityObject />
      </Suspense>
    </Canvas>
  );
}

export default BackgroundCanvas;