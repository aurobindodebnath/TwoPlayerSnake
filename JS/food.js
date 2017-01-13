
//class of food
function food()
{
	this.fx=Math.floor((Math.random()*(canvas.width-10))+5);
	this.fy=Math.floor((Math.random()*(canvas.height-10))+5);
}

//food object
var foodall=new Array();
for(var i=0;i<10;i++)
{
	foodall[i]= new food();
}

//drawFood
function drawFood()
{
	for(var i=0;i<10;i++)
	{
		//food1
		ctx.beginPath();
		ctx.arc(foodall[i].fx,foodall[i].fy,radius,0,Math.PI*2,true);
		ctx.fillStyle="green";
		ctx.fill();
		ctx.closePath();
	}
}

//if snake eats food
function foodEaten()
{
	for(var i=0;i<10;i++)
	{
	//snake1
			if((x1[0]<foodall[i].fx+1.5*radius)&&(x1[0]>foodall[i].fx-1.5*radius)&&(y1[0]<foodall[i].fy+radius)&&(y1[0]>foodall[i].fy-radius)&&(dx1==0))	
			{
				score1++;
				increaseLength1();
				foodall[i]=new food();
				document.getElementById("player1").innerHTML= score1;
			}
			if((x1[0]<foodall[i].fx+radius)&&(x1[0]>foodall[i].fx-radius)&&(y1[0]<foodall[i].fy+1.5*radius)&&(y1[0]>foodall[i].fy-1.5*radius)&&(dy1==0))	
			{
				score1++;
				increaseLength1();
				foodall[i]=new food();
				document.getElementById("player1").innerHTML= score1;
			}
	//snake2
		if((x2[0]<foodall[i].fx+1.5*radius)&&(x2[0]>foodall[i].fx-1.5*radius)&&(y2[0]<foodall[i].fy+radius)&&(y2[0]>foodall[i].fy-radius)&&(dx2==0))	
		{
			score2++;
			increaseLength2();
			foodall[i]=new food();
			document.getElementById("player2").innerHTML= score2;
		}
		if((x2[0]<foodall[i].fx+radius)&&(x2[0]>foodall[i].fx-radius)&&(y2[0]<foodall[i].fy+1.5*radius)&&(y2[0]>foodall[i].fy-1.5*radius)&&(dy2==0))	
		{
			score2++;
			increaseLength2();
			foodall[i]=new food();
			document.getElementById("player2").innerHTML= score2;
		}
	}
}
