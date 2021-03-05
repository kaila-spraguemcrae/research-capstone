import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Environment } from "@react-three/drei";
import Scene from './Scene';

function App() {
  return (
    <Canvas
      pixelRatio={[1, 2]}
      camera={{ position: [0, 0, 20], near: 0.1, far: 100, fov: 50 }}
    >
      <spotLight
        position={[5, 5, 5]}
        intensity={1}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
      <Scene />
      <Suspense fallback={null}>
        <Environment
          files="https://rawcdn.githack.com/emmelleppi/component-material/9c967a77c15c84ee5c0be417c4440f6bdcebdb2f/example/studio_small_04_1k.hdr"
          path=""
        />
      </Suspense>
    </Canvas>
  );
}

export default App;
