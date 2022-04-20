import * as THREE from 'three'
import { extend } from '@react-three/fiber'

import vert from './Vertex.glsl'
import frag from './Fragment.glsl'

// *** Notes *** 
// Material names must include the word material!
// Current version of CRACO doesn't support React version 18
// CRACO is needed to support glsl files

export class TwoMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: vert,
      fragmentShader: frag,
      wireframe: true,
      uniforms: {
        uTime: {value: 0},
        uFrequency: {value: new THREE.Vector2(0, 0)},
        uBigWavesElevation: {value: 0.2},
        uBigWavesFrequency: {value: new THREE.Vector2(4, 1.5)},
      }
    })
  }
}

extend({ TwoMaterial })