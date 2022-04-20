import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
// import './ShaderOne/OneMaterial'
import './SeaWaves/TwoMaterial'


const clock = new THREE.Clock()

function Plane(){
  const ref = useRef()
  useEffect(() => {
    ref.current.material.uniforms.uBigWavesElevation.value = 0.2
    ref.current.material.uniforms.uBigWavesFrequency.value.x = 3
    ref.current.material.uniforms.uBigWavesFrequency.value.y = 1
    console.log(ref)
  }, [])

  useFrame(() => {
    // update uTime for GL Shader waves
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime()
    // rotate model
    ref.current.rotation.z += 0.002
  })

  return(
    <mesh position={[0,0,0]} ref={ref} rotation={[Math.PI/2,0,0]}>
      <planeGeometry args={[8,8,128,128]} />
      <twoMaterial side={THREE.DoubleSide}  />
    </mesh>
  )
}

export default function Scene({data}){
  return(
    <Canvas className="Scene" camera={{ position: [-4, 1, 3], fov: 50 }} z-index={0} >
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <Plane/>
      </Suspense>
    </Canvas>
  )
}