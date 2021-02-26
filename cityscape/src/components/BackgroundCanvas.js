import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import CityObject from './CityObject';
import Loading from './Loading';

function BackgroundCanvas() {
  return (
    <Canvas camera={{ position: [0, 5, 0], fov: 40 }}>
      <fog attach="fog" args={['#cc7b32', 0, 500]} />
      <Suspense fallback={<Loading />}>
        <CityObject />
      </Suspense>
    </Canvas>
  );
}

export default BackgroundCanvas;