const canvas = document.querySelector("canvas");
const sandbox = new GlslCanvas(canvas);

const test = `void main () { gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);}`;

sandbox.load(frag);

sandbox.setUniform("displacement", "assets/displacement2.png");
