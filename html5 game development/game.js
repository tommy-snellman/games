document.getElementById('inner').innerHTML='<button type="button" id="clearCanvasBtn">Clear Canvas</button><canvas id="canvasBg" width="800px" height="500px" style="display: block;background: #FFFFFF; margin: 100px auto 0px" ></canvas>';	
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
var clearCanvasBtn = document.getElementById('clearCanvasBtn');
clearCanvasBtn.addEventListner('click', clearCanvas, false);


function clearCanvas() {
	alert("lol");
}