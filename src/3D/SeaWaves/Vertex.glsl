varying vec2 vUv;
uniform float uTime;
uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uSpeedMulti;


void main() {


  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPosition.x * uBigWavesFrequency.x + (uTime * uSpeedMulti)) * sin(modelPosition.z * uBigWavesFrequency.y + (uTime * uSpeedMulti)) * uBigWavesElevation;
  modelPosition.y += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;

  vUv = uv;
}