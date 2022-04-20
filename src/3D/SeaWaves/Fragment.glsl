#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

void main() {
  float strength = vUv.x;
  float all = 1.0;

  // ocean blue
  vec4 oceanBlue = vec4(0.5, 0.8, 1.0, 1.0);

  // cool vaporwave
  vec4 vaporwave = vec4(vUv.x, vUv.y, 0.5, 1);

  gl_FragColor = vaporwave;
}