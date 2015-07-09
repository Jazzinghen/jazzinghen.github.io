precision mediump float;
varying vec4 pixelPos;
uniform vec2 canvasSize;

void main(){
	gl_FragColor = vec4(gl_FragCoord.y/canvasSize.y, 0.0, gl_FragCoord.x/canvasSize.x, 1.0);
}
