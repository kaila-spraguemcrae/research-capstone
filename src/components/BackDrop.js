import React from 'react';

function BackDrop() {
  return(
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" arg={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export default BackDrop;