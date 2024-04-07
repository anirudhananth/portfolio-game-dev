/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 the_last_stronghold_animated.gltf 
Author: Conrad Justin (https://sketchfab.com/ConradJustin)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/the-last-stronghold-animated-6b4ac951cefb43a791b2bd084b53a201
Title: The Last Stronghold (animated)
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/the_last_stronghold_animated.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, Math.PI]} scale={0.002}>
          <group name="ed9a8042c54c452db47145e9a7551210fbx" rotation={[-Math.PI, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="merged_gate" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate003" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate005" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate006" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate007" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate008" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate009" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate010" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate011" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="merged_gate012" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                <group name="Armature" rotation={[0, 0, -Math.PI / 2]} scale={100}>
                  <group name="Object_15">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_17" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_19" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_21" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_23" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_25" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_27" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_29" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_31" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_33" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <group name="Object_35" rotation={[0, 0, -Math.PI / 2]} scale={100} />
                    <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.sky_sketchfab} skeleton={nodes.Object_18.skeleton} />
                    <skinnedMesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.final_gate_low} skeleton={nodes.Object_20.skeleton} />
                    <skinnedMesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.final_alfa} skeleton={nodes.Object_22.skeleton} />
                    <skinnedMesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.final_gate_top} skeleton={nodes.Object_24.skeleton} />
                    <skinnedMesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.final_C} skeleton={nodes.Object_26.skeleton} />
                    <skinnedMesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.final_B} skeleton={nodes.Object_28.skeleton} />
                    <skinnedMesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.final_SOMT} skeleton={nodes.Object_30.skeleton} />
                    <skinnedMesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.final_E} skeleton={nodes.Object_32.skeleton} />
                    <skinnedMesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.final_A} skeleton={nodes.Object_34.skeleton} />
                    <skinnedMesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.final_rope} skeleton={nodes.Object_36.skeleton} />
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

useGLTF.preload('/the_last_stronghold_animated.gltf')
