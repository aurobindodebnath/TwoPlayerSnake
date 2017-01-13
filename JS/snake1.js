var score1=0;

//Snake is defined by these two dyanamic arrays
var x1= new Array(320,320,320,320,320);
var y1= new Array(60,62,64,66,68);

//Snake speed;
var speed1=5;
var dx1=0;
var dy1=speed1;
var radius=5;

//Snake tail
var tailx1=350;
var tailx2=350;

var color1="red";

//This function draws the whole snake
function drawSnake1()
{
	for(var i=x1.length-2;i>=0;i--)//one space is kept vacant in the end to avoid a bug. only when food is eaten the tail is printed
	{
		ctx.beginPath();
		ctx.arc(x1[i],y1[i],radius,0, Math.PI*2,true);
		if(i==0)
			ctx.fillStyle="#000000";
		else
			ctx.fillStyle=color1;
		ctx.fill();
		ctx.closePath();
	}
	color1="red";
}


//the rest of the body of the snake follows its body
function followingBody1()
{
	tailx1=x1.length-1;
	taily1=y1.length-1;
	
	if(dx1>0)
	{
		for(var i=x1.length-1;i>0;i--)
		{
			x1[i]=x1[i-1];
			y1[i]=y1[i-1];
		}
	}
	if(dx1<0)
	{
		for(var i=x1.length-1;i>0;i--)
		{
			x1[i]=x1[i-1];
			y1[i]=y1[i-1];
		}
	}
	if(dy1>0)
	{
		for(var i=y1.length-1;i>0;i--)
		{
			x1[i]=x1[i-1];
			y1[i]=y1[i-1];
		}
	}
	if(dy1<0)
	{
		for(var i=y1.length-1;i>0;i--)
		{
			x1[i]=x1[i-1];
			y1[i]=y1[i-1];
		}
	}
}

//head moves with each frame
function moveHead1()
{
		x1[0]+=dx1;
		y1[0]+=dy1;
}

//when the snake head is at the edges of the canvas
function edgeConditions1()
{
	if(x1[0]>(canvas.width)&&dx1>0)
		x1[0]=0;
	if(x1[0]<0&&dx1<0)
		x1[0]=canvas.width;
	if(y1[0]<0&&dy1<0)
		y1[0]=canvas.height;
	if(y1[0]>(canvas.height)&&dy1>0)
		y1[0]=0;
}

//body touch
function bodyTouch1()
{
	for(var i=1;i<x2.length-1;i++)
	{
		if((x1[0]<x2[i]+radius)&&(x1[0]>x2[i]-radius)&&(y1[0]<y2[i]+radius)&&(y1[0]>y2[i]-radius))
		{
			score1-=5;
			score2+=5;
			document.getElementById("player1").innerHTML=score1;
			document.getElementById("player2").innerHTML=score2;
			color1="black";
		}
	}
}

//increase length
function increaseLength1()
{
	x1.push(tailx1);
	y1.push(taily1);
}