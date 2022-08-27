import React from 'react';

import { MeshDistortMaterial } from '@react-three/drei/core';



export default function Circle() {
    return <mesh rotation={[90,0,20]}>
        <sphereBufferGeometry attach='geometry' args={[3]}/>
        <MeshDistortMaterial  color="#F77C7C" attach="material" speed={5}/>
    </mesh>;
}
