import React from 'react';

import { PointMaterial } from '@react-three/drei/core';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';


export default function Circle2() {
    const ref = useRef()
    //useFrame(() => {ref.current.rotation.z += 0.01})
    const [hover, sethover ] = useState(false)
    return <points ref={ref}
    onPointerOver={(event)=> sethover(true)}
    onPointerOut={(event)=> sethover(false)}
     >
        <sphereBufferGeometry attach='geometry' args={[3]}/>
        <PointMaterial color="#000" size={hover?"0.03":"0.01"} />
    </points>;

}
