document.getElementById('inner').innerHTML='<button type="button" id="drawSquareBtn">Draw Square</button><button type="button" id="clearCanvasBtn">Clear Canvas</button><canvas id="canvasBg" width="800px" height="500px" style="display: block;background: #FFFFFF; margin: 100px auto 0px" ></canvas>';	
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');

var drawSquareBtn = document.getElementById('drawSquareBtn');
drawSquareBtn.addEventListener('click', drawSquare, false);


var clearCanvasBtn = document.getElementById('clearCanvasBtn');
clearCanvasBtn.addEventListener('click', clearCanvas, false);

function drawSquare() {
	ctxBg.fillStyle = '#505050';
	ctxBg.fillRect(20, 100, 600, 600);
}

function clearCanvas() {
	ctxBg.clearRect(0, 0, 800, 500);
}