import React from 'react';

import { MeshDistortMaterial } from '@react-three/drei/core';

export default function Circle2() {
    return <mesh rotation={[90,0,20]}>
        <sphereBufferGeometry attach='geometry' args={[2,100,200]}/>
        <MeshDistortMaterial color="#66F6FF" attach="material"  distort={0.2}speed={5}  />
    </mesh>;
}
