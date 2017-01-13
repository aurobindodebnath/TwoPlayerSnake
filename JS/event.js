
//on keydown
document.addEventListener('keydown',function(event){
	switch(event.keyCode)
	{
		case 37://left1
				if(dx1==0)
				{
					dy1=0;
					dx1=-speed1;
				}
			break;
		case 38://up1
				if(dy1==0)
				{
					dx1=0;
					dy1=-speed1;
				}
			break;
		case 39://right1
				if(dx1==0)
				{
					dy1=0;
					dx1=speed1;
				}
			break;
		case 40://down1
				if(dy1==0)
				{
					dx1=0;
					dy1=speed1;
				}
			break;
		case 65://left2
            if(dx2==0)
			{
				dy2=0;
				dx2=-speed2;
			}
			break;
		case 87://up2
			if(dy2==0)
			{
				dx2=0;
				dy2=-speed2;
			}
			break;
		case 68://right2
			if(dx2==0)
			{
				dy2=0;
				dx2=speed2;
			}
			break;
		case 83://down2
			if(dy2==0)
			{
				dx2=0;
				dy2=speed1;
			}
			break;
		case 85://pause
			alert("GAME PAUSED\nWANT TO CONTINUE?");
	}
})
