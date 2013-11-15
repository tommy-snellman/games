
document.getElementById('inner').innerHTML='<div id="snakeBg"></div><canvas id="canvasBg" width="500px" height="500px" style="display: block;background: #c5ffa6; margin: 100px auto 0px" ></canvas>';
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');


var snakeBg = document.getElementById('snakeBg');

    document.onkeydown = checkKey;
    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '37') {
            $('snakeBg').animate({
                left: "-=5px",
            }, 10)
        	//alert("You pressed the left key!");
            // left arrow
        }
        if (e.keyCode == '38') {

            $('snakeBg').animate({
                top: "-=5px",
            }, 10)
        	//alert("You pressed the up key!");
            // up arrow
        }
        else if(e.keyCode == '39') 
        {
            $('snakeBg').animate({
                left: "+=5px",
            }, 10)
        	//alert("You pressed the right key!");
            //right arrow
        }
        else if (e.keyCode == '40')
         {
            $('snakeBg').animate({
                top: "+=5px",
            }, 10)
        	//alert("You pressed the down key!");
            // down arrow
        }
    }



    //Randomize a number between 0 - 1
    var random = Math.random();

        ctxBg.beginPath();
        ctxBg.fillStyle = '#900000';
        ctxBg.arc(200,200,10,10,30,true);
        ctxBg.fill();
        ctxBg.closePath();
