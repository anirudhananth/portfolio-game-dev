import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import * as THREE from 'three'

export default function Model(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/zen_gallery/zen_gallery.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
          <group name="54532df5623845c1a999f7c3f0f401d4fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Stones"
                  position={[0, -54.318, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Stones_Stones_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Stones_Stones_0 as THREE.Mesh).geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Tree"
                  position={[0, 363.099, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Tree_Tree_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Tree_Tree_0 as THREE.Mesh).geometry}
                    material={materials.Tree}
                  />
                </group>
                <group
                  name="Leaves"
                  position={[88.934, 111.235, -51.095]}
                  rotation={[-Math.PI / 2, -0.013, 0]}
                  scale={92.675}>
                  <mesh
                    name="Leaves_Tree_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Leaves_Tree_0 as THREE.Mesh).geometry}
                    material={materials.Tree}
                  />
                </group>
                <group name="Bushes" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Bushes_Bush_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Bushes_Bush_0 as THREE.Mesh).geometry}
                    material={materials.Bush}
                  />
                  <mesh
                    name="Bushes_Tree_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Bushes_Tree_0 as THREE.Mesh).geometry}
                    material={materials.Tree}
                  />
                </group>
                <group name="Ground" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Ground_Grond_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Ground_Grond_0 as THREE.Mesh).geometry}
                    material={materials.Grond}
                  />
                </group>
                <group name="Water" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Water_Water_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Water_Water_0 as THREE.Mesh).geometry}
                    material={materials.Water}
                  />
                </group>
                <group
                  name="Leaves_bollen"
                  position={[731.089, 1289.816, -704.343]}
                  rotation={[-Math.PI / 2, 0.171, 0]}
                  scale={79.854}>
                  <mesh
                    name="Leaves_bollen_Tree_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Leaves_bollen_Tree_0 as THREE.Mesh).geometry}
                    material={materials.Tree}
                  />
                </group>
                <group
                  name="Fence"
                  position={[-1190.339, -103.85, 178.397]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Fence_Tree_0"
                    castShadow
                    receiveShadow
                    geometry={(nodes.Fence_Tree_0 as THREE.Mesh).geometry}
                    material={materials.Tree}
                  />
                </group>
                <group
                  name="Woosh_01"
                  position={[-2.477, 443.303, -1296.752]}
                  rotation={[Math.PI, 0, 0]}
                  scale={465.443}
                />
                <group
                  name="Woosh_02"
                  position={[-2.477, 443.303, -1249.202]}
                  rotation={[0, 0, -Math.PI]}
                  scale={465.443}
                />
                <group name="Fish" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group
                  name="Armature"
                  position={[-414.125, 147.628, 502.318]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_25">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_28"
                      geometry={(nodes.Object_28 as THREE.Mesh).geometry}
                      material={materials.Woosh}
                      skeleton={(nodes.Object_28 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_30"
                      geometry={(nodes.Object_30 as THREE.Mesh).geometry}
                      material={materials['Woosh.012']}
                      skeleton={(nodes.Object_30 as THREE.SkinnedMesh).skeleton}
                    />
                    {/* <skinnedMesh
                      name="Object_32"
                      geometry={(nodes.Object_32 as THREE.Mesh).geometry}
                      material={materials['Water.001']}
                      skeleton={(nodes.Object_32 as THREE.SkinnedMesh).skeleton}
                    /> */}
                    <group
                      name="Object_27"
                      position={[-2.477, 443.304, -1296.752]}
                      rotation={[Math.PI, 0, 0]}
                      scale={465.443}
                    />
                    <group
                      name="Object_29"
                      position={[-2.477, 443.304, -1249.202]}
                      rotation={[0, 0, Math.PI]}
                      scale={465.443}
                    />
                    <group name="Object_31" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/zen_gallery/zen_gallery.gltf')
