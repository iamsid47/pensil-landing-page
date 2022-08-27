import React from 'react';

import { PointMaterial } from '@react-three/drei/core';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

export default function Circle2() {
    const ref = useRef()
    useFrame(() => {ref.current.rotation.y += 0.01})
    const [hover, sethover ] = useState(false)
    return <points ref={ref}
    onPointerOver={(event)=> sethover(true)}
    onPointerOut={(event)=> sethover(false)}
     >
        <sphereBufferGeometry attach='geometry' args={[2.5]}/>
        <PointMaterial color="#66F6FF" size={hover?"0.04":"0.001"} />
    </points>;

}
