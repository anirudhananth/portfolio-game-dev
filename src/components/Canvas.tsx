import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from './Loader';
import { OrbitControls, Environment } from '@react-three/drei';
import Zen_gallery from '../model-components/Zen_gallery';
import Stronghold from '../model-components/Stronghold';
import Background from '../../public/assets/background/Background';

export const func = () => {
  return (
    <div className='absolute top-[0%] w-screen h-screen'>
        <Canvas 
            // camera={{near: 0.1, far: 1000}}
            camera={{ position: [0, 2, 20], near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={0.05}/>
            {/* <spotLight intensity={10} angle={Math.PI/2} distance={30} position={[0,1,-1]}/> */}
            {/* <directionalLight position={[10, 10, 5]} intensity={2} /> */}
            {/* <directionalLight position={[0, -20, 20]} intensity={1} /> */}
            <OrbitControls />
            <Environment preset='night'/>
            <Suspense fallback={<Loader />}>
                <Zen_gallery />
                {/* <Stronghold /> */}
                <Background />
            </Suspense>
        </Canvas>
    </div>
  )
}
export default func;