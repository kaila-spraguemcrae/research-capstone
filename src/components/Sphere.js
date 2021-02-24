import React from "react";

function Sphere(){
  return (
    <mesh visible userData={{ test: "hello world" }} position={[0, 0, 0]} caseShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent 
        roughness={0.1}
        metalness={0.1}
        />
    </mesh>
  );
}

export default Sphere;