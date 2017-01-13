var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
 

//drawing on the canvas
function draw()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawFood();
	drawSnake1();
	drawSnake2();	
	followingBody1();
	followingBody2();
	moveHead1();
	moveHead2();
	edgeConditions1();
	edgeConditions2();
	bodyTouch1();
	bodyTouch2();
	foodEaten();

}

setInterval(draw,50);