var score2=0;
var hit2=false;

//Snake is defined by these two dyanamic arrays
var x2= new Array(30,30,30,30,30);
var y2= new Array(60,62,64,66,68);

//Snake speed;
var speed2=5;
var dx2=0;
var dy2=speed2;
var radius=5;

var tailx2;
var taily2;

var color2="blue";

//This function draws the whole snake
function drawSnake2()
{
	for(var i=x2.length-2;i>=0;i--)//one space is kept vacant in the end to avoid a bug. only when food is eaten the tail is printed
	{
		ctx.beginPath();
		ctx.arc(x2[i],y2[i],radius,0, Math.PI*2,true);
		if(i==0)
			ctx.fillStyle="#000000";
		else
			ctx.fillStyle=color2;
		ctx.fill();
		ctx.closePath();
	}
	color2="blue";
}


//the rest of the body of the snake follows its body
function followingBody2()
{
	tailx2=x2.length-1;
	taily2=y2.length-1;
	if(dx2>0)
	{
		for(var i=x2.length-1;i>0;i--)
		{
			x2[i]=x2[i-1];
			y2[i]=y2[i-1];
		}
	}
	if(dx2<0)
	{
		for(var i=x2.length-1;i>0;i--)
		{
			x2[i]=x2[i-1];
			y2[i]=y2[i-1];
		}
	}
	if(dy2>0)
	{
		for(var i=y2.length-1;i>0;i--)
		{
			x2[i]=x2[i-1];
			y2[i]=y2[i-1];
		}
	}
	if(dy2<0)
	{
		for(var i=y2.length-1;i>0;i--)
		{
			x2[i]=x2[i-1];
			y2[i]=y2[i-1];
		}
	}
}

//move the head
function moveHead2()
{
		x2[0]+=dx2;
		y2[0]+=dy2;
}

//when the snake head is at the edges of the canvas
function edgeConditions2()
{
	if(x2[0]>(canvas.width)&&dx2>0)
		x2[0]=0;
	if(x2[0]<0&&dx2<0)
		x2[0]=canvas.width;
	if(y2[0]<0&&dy2<0)
		y2[0]=canvas.height;
	if(y2[0]>(canvas.height)&&dy2>0)
		y2[0]=0;
}

//body touch
function bodyTouch2()
{
	for(var i=1;i<x1.length-1;i++)
	{
		if((x2[0]<x1[i]+radius)&&(x2[0]>x1[i]-radius)&&(y2[0]<y1[i]+radius)&&(y2[0]>y1[i]-radius))
		{
			score2-=5;
			score1+=5;
			document.getElementById("player2").innerHTML=score2;
			document.getElementById("player1").innerHTML=score1;
			color2="black";
		}
	}
}

//increase length
function increaseLength2()
{
	x2.push(tailx2);
	y2.push(taily2);
}