import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { a } from '@react-spring/three'
import * as THREE from 'three'

export default function Model(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/stronghold/the_last_stronghold_animated.glb')
  useAnimations(animations, group)
  return (
    <a.group ref={group} {...props} dispose={null} scale={0.75}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[Math.PI / 2, 0, Math.PI]} scale={0.002}>
          <a.group name="ed9a8042c54c452db47145e9a7551210fbx" rotation={[-Math.PI, 0, 0]}>
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group name="merged_gate" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate003" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate005" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate006" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate007" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate008" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate009" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate010" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate011" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="merged_gate012" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <a.group name="Armature" rotation={[0, 0, -Math.PI / 2]} scale={100}>
                  <a.group name="Object_15">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_18"
                      geometry={(nodes.Object_18 as THREE.Mesh).geometry}
                      material={materials.sky_sketchfab}
                      skeleton={(nodes.Object_18 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      geometry={(nodes.Object_20 as THREE.Mesh).geometry}
                      material={materials.final_gate_low}
                      skeleton={(nodes.Object_20 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_22"
                      geometry={(nodes.Object_22 as THREE.Mesh).geometry}
                      material={materials.final_alfa}
                      skeleton={(nodes.Object_22 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_24"
                      geometry={(nodes.Object_24 as THREE.Mesh).geometry}
                      material={materials.final_gate_top}
                      skeleton={(nodes.Object_24 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_26"
                      geometry={(nodes.Object_26 as THREE.Mesh).geometry}
                      material={materials.final_C}
                      skeleton={(nodes.Object_26 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_28"
                      geometry={(nodes.Object_28 as THREE.Mesh).geometry}
                      material={materials.final_B}
                      skeleton={(nodes.Object_28 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_30"
                      geometry={(nodes.Object_30 as THREE.Mesh).geometry}
                      material={materials.final_SOMT}
                      skeleton={(nodes.Object_30 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_32"
                      geometry={(nodes.Object_32 as THREE.Mesh).geometry}
                      material={materials.final_E}
                      skeleton={(nodes.Object_32 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_34"
                      geometry={(nodes.Object_34 as THREE.Mesh).geometry}
                      material={materials.final_A}
                      skeleton={(nodes.Object_34 as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                      name="Object_36"
                      geometry={(nodes.Object_36 as THREE.Mesh).geometry}
                      material={materials.final_rope}
                      skeleton={(nodes.Object_36 as THREE.SkinnedMesh).skeleton}
                    />
                    <a.group name="Object_17" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_19" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_21" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_23" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_25" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_27" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_29" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_31" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_33" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <a.group name="Object_35" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  )
}

useGLTF.preload('/assets/stronghold/the_last_stronghold_animated.glb')