import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect, useContext, createContext } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { AppContext } from '../App'
// import './ShaderOne/OneMaterial'
import './SeaWaves/TwoMaterial'


const clock = new THREE.Clock()


function Plane({ ...props }) {
  
  const ref = useRef()

  useEffect(() => {
    ref.current.material.uniforms.uBigWavesElevation.value = props.amplitude
    ref.current.material.uniforms.uBigWavesFrequency.value.x = props.freqX
    ref.current.material.uniforms.uBigWavesFrequency.value.y = props.freqY
    ref.current.material.uniforms.uSpeedMulti.value = props.speed
    // console.log(state)
  }, [props])

  useFrame(() => {
    // update uTime for GL Shader waves
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime()
    // rotate model
    ref.current.rotation.z += 0.002
  })

  return (
    <mesh position={[0, 0, 0]} ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[8, 8, 170, 170]} />
      <twoMaterial side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function Scene({ ...props }) {
  // const { state, dispatch } = useContext(AppContext)
  const ContextBridge = useContextBridge(AppContext)
  const {state, dispatch} = useContext(AppContext)
  console.log(state)
  return (
    <Canvas className="Scene" camera={{ position: [-4, 1, 3], fov: 50 }} >
      <ContextBridge>
        { state.levaHidden ? null : <OrbitControls /> }
        <Suspense fallback={null}>
          <Plane {...props} />
        </Suspense>
      </ContextBridge>
    </Canvas>
  )
}