'use client'
import React, { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// import * as random from '@maath/random/dist/maath-random.esm';
import * as random from "maath/random";

function StarBackground(_any: any): React.JSX.Element {
    const ref = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5001), { radius: 1.2 })
    );


    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {..._any}>
                <PointMaterial
                    transparent
                    color="#FFF"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

const StarsCanvas = () => (
    <div className='w-full h-full fixed inset-0 z-10'> {/* Defina um valor de Z-index mais baixo aqui */}
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;