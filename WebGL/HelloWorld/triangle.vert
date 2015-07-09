attribute vec4 vPosition;
varying vec4 pixelPos;

void main(){
	gl_Position = vPosition;
	pixelPos = vPosition;
}