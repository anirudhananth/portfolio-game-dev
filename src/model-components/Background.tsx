import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Model(props: any) {
useRef()
const { nodes, materials } = useGLTF('/assets/background/background.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.548}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object001_Material__25__background_JPG_002_0 as THREE.Mesh).geometry}
          material={materials.Material__25__background_JPG_002}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/background/background.gltf')

