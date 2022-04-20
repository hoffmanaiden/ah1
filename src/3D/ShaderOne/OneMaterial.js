import * as THREE from 'three'
import { extend } from '@react-three/fiber'
// import testVertexShader from './shaders/test/vertex.glsl'
// import testFragmentShader from './shaders/test/fragment.glsl'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'
import testVert from './testVert.glsl'
import testFrag from './testFrag.glsl'
import perlinNoise from './perlinNoise.glsl'
import colorFrag from './colorFrag.glsl'


// *** Note *** 
// Material names must include the word material!

export class OneMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: testVert,
      fragmentShader: testFrag,
      // wireframe: true,
      // uniforms: {
      //   uFrequency: {value: new THREE.Vector2(0, 0)}
      // }
    })
  }
}

extend({ OneMaterial })