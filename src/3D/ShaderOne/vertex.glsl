uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform vec2 uFrequency;

attribute vec3 position;
attribute float aRandom;

// varying float vRandom;

void main() {

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // waving flag shape
  modelPosition.z += sin(modelPosition.x * uFrequency.x) * 0.1;
  modelPosition.z += sin(modelPosition.y * uFrequency.y) * 0.1;

  // spikey shape
  // modelPosition.z += aRandom * 0.3;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;

  // vRandom = aRandom;
}