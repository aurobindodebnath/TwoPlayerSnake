
//variable used to select the cases in the switch statement
var t=0;

//The animation of each letter of Snake is controlled using this function
function f()
{
	t++;
	switch(t)
	{
		case 1:
			document.getElementById("S").style.animation="2s ani 1 ease-in";
			document.getElementById("S").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 2:
			document.getElementById("N").style.animation="2s ani 1 ease-in";
	   		document.getElementById("N").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 3:
			document.getElementById("A").style.animation="2s ani 1 ease-in";
	   		document.getElementById("A").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 4:
			document.getElementById("K").style.animation="2s ani 1 ease-in";
	   		document.getElementById("K").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 5:	
			document.getElementById("E").style.animation="2s ani 1 ease-in";
	  		document.getElementById("E").style.visibility="visible";
			setTimeout(f,500);
			break;
	}
}

var time=500;
document.getElementById("time").innerHTML=time;

function run()
{
	document.getElementById("time").innerHTML=time;
	time--;
	if(time<0)
	{
		if(score1>score2)
		{	
			alert("RED WINS");
			location.reload();
		}
		else if(score1<score2)
		{
			alert("BLUE WINS");
			location.reload();
		}
		else
		{
			alert("DRAW");
			location.reload();
		}
	}
	setTimeout(run,1000);
}