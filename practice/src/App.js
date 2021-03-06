import React, { useRef, useState } from 'react';
import './App.scss';

import { Canvas, useFrame } from 'react-three-fiber';

import { softShadows, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';

import { useSpring, a} from 'react-spring/three';

import * as THREE from 'three';

import NouveauRiche from './NouveauRiche_Heavy.json';

//NO HTML inside Canvas (only can take three.js elements)
//mesh can take 'meterial' and 'geomentry'
//args: for square:[x, y ,z] (size of object: height, width, depth) // for circle: [1, 1] (size, amount of angles)

softShadows();

const SpinningMesh = ({position, args, color, speed}) => {
  const mesh= useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4 ] : [ 1, 1, 1],
  })

  return (
    <a.mesh 
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow 
      position={position} 
      ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial  attach='material' color={color} speed={speed} factor={0.6}/>
    </a.mesh>
  );
}

const Text = () => {
  const font = new THREE.FontLoader().parse(NouveauRiche);

  const textOptions ={
    font, 
    size: 3,
    height: 1,
    
  }

  return (
    <mesh castShadow position={[-11, 5, -2]}>
      <textGeometry attach='geometry' args={['CAPSTONE', textOptions]} />
      <meshStandardMaterial attach='material' color="teal"/>
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas shadowMap colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <directionalLight 
          castShadow
          position={[0,10,0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -12]} intensity={0.5}/>
        <pointLight position={[0, -10, 0]} intensity={1.5}/>

        <group>
          <mesh 
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]} 
            position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.4} />
          </mesh>
        </group>

        <Text/>

        <SpinningMesh position={[0,1,0]} args={[3, 2, 1]} color='pink' speed={3}/>
        <SpinningMesh position={[-2,1,-5]} color='lightblue' speed={6}/>
        <SpinningMesh position={[5,1,-2]} color='lavender' speed={6}/>
        <OrbitControls/>
      </Canvas>
    </>
  );
}

export default App;