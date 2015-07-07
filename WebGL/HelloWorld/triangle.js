var gl;
var points;

// Initialisation function to create a WebGL context

window.onload = function init () {
    var canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl){
        alert("WebGL is not available! Fix your browser.");
    }

    // Keep a list of 2D vertex coordinates for the triangle

    var triangle_vertices = new Float32Array([-1, -1, 0, 1, 1, -1]);

    // Configure WebGL context

    gl.viewport = (0, 0, canvas.width, canvas.height);
    gl.clearColor = (0.4, 0.4, 0.4, 1.0);

    // Initialise shaders and attach them to the GL context

    //var gl_Program = initShaders(gl, "vertex-shader", "fragment-shader");
    var gl_Program = initShaders(gl, "triangle.vert", "triangle.frag");

    gl.useProgram (gl_Program);

    // Load it into the GPU

    var buffer_ID = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer_ID);
    gl.bufferData(gl.ARRAY_BUFFER, triangle_vertices, gl.STATIC_DRAW);

    // Link shader variables to buffers/other variables

    var vPosition = gl.getAttribLocation(gl_Program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    render();
};

function render(){
    gl.clar(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}