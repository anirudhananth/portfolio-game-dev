import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import * as THREE from 'three'

export default function Model(props: any) {
const group = useRef()
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

