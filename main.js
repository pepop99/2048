child = document.getElementsByClassName("child");

var i;

function randomblock(){

	var s = Math.floor(Math.random() * 16);
	return s;
}
function randomnum() {

var sn = Math.floor(Math.random() * 3) * 2;
return sn;
}

var color = function(){
	for(i=0;i<16;i++)
	{		
		if(child[i].innerHTML==2)
			{
				child[i].style.background="#eee4da";
				child[i].style.color="#776d64";
			}
		else if(child[i].innerHTML==4)
			{
				child[i].style.background="#eedfca";
				child[i].style.color="#776d64";
			}
		else if(child[i].innerHTML==8)
			child[i].style.background="#f2b179";
		else if(child[i].innerHTML==16)
			child[i].style.background="#ec8d54";
		else if(child[i].innerHTML==32)
			child[i].style.background="#f27b5e";
		else if(child[i].innerHTML==64)
			child[i].style.background="#ea593a";
		else if(child[i].innerHTML==128)
			child[i].style.background="#f4d86d";
		else if(child[i].innerHTML==256)
			child[i].style.background="#eccb60";
		else if(child[i].innerHTML==512)
			child[i].style.background="#ecc750";
		else if(child[i].innerHTML==1024)
			child[i].style.background="#ecc440";
		else if(child[i].innerHTML==2048)
			child[i].style.background="#ecc12f";
		else if(child[i].innerHTML==0)
			{
				child[i].style.color="#ccc0b3";
				child[i].style.background="#ccc0b3";
			}
	}
};
color();

var begin = function(){
	child[randomblock()].innerHTML=2;
	var n=randomnum();
	while(n==0)
		n=randomnum();
	child[randomblock()].innerHTML=n;
	color();
};

begin();

var newnum = function(){
	var n=randomnum();
	var b=randomblock()
	while(n==0||child[b].innerHTML!=0)
		{
			n=randomnum();
			b=randomblock();
		}
	child[b].innerHTML=n;
}

var left = function(){
	console.log("left");
	var i,j,c=0;
	for(j=0;j<2;j++)
	{
	for(i=3;i>0;i--)
	{
		if(child[i].innerHTML==child[i-1].innerHTML&&child[i].innerHTML!=0){
			child[i-1].innerHTML=child[i-1].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i-1].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i-1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=7;i>4;i--)
	{
		if(child[i].innerHTML==child[i-1].innerHTML&&child[i].innerHTML!=0){
			child[i-1].innerHTML=child[i-1].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i-1].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i-1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=11;i>8;i--)
	{
		if(child[i].innerHTML==child[i-1].innerHTML&&child[i].innerHTML!=0){
			child[i-1].innerHTML=child[i-1].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i-1].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i-1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=15;i>12;i--)
	{
		if(child[i].innerHTML==child[i-1].innerHTML&&child[i].innerHTML!=0){
			child[i-1].innerHTML=child[i-1].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i-1].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i-1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
}
if(c>0)
	newnum();
color();

}	

var up = function(){
	console.log("up")
	var i,j,c=0;
	for(j=0;j<2;j++)
	{
	for(i=12;i>0;i=i-4)
	{
		if(child[i].innerHTML==child[i-4].innerHTML&&child[i].innerHTML!=0){
			child[i-4].innerHTML=child[i-4].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i-4].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i-4].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=13;i>1;i=i-4)
	{
		if(child[i].innerHTML==child[i-4].innerHTML&&child[i].innerHTML!=0){
			child[i-4].innerHTML=child[i-4].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i-4].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i-4].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=14;i>2;i=i-4)
	{
		if(child[i].innerHTML==child[i-4].innerHTML&&child[i].innerHTML!=0){
			child[i-4].innerHTML=child[i-4].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i-4].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i-4].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=15;i>3;i=i-4)
	{
		if(child[i].innerHTML==child[i-4].innerHTML&&child[i].innerHTML!=0){
			child[i-4].innerHTML=child[i-4].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i-4].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i-4].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
}
if(c>0)
	newnum();
color();

}

var right = function(){
	console.log("right");
	var i,j,c=0;
	for(j=0;j<2;j++)
	{
	for(i=0;i<3;i++)
	{
		if(child[i].innerHTML==child[i+1].innerHTML&&child[i].innerHTML!=0){
			child[i+1].innerHTML=child[i+1].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i+1].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i+1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=4;i<7;i++)
	{
		if(child[i].innerHTML==child[i+1].innerHTML&&child[i].innerHTML!=0){
			child[i+1].innerHTML=child[i+1].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i+1].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i+1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=8;i<11;i++)
	{
		if(child[i].innerHTML==child[i+1].innerHTML&&child[i].innerHTML!=0){
			child[i+1].innerHTML=child[i+1].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i+1].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i+1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=12;i<15;i++)
	{
		if(child[i].innerHTML==child[i+1].innerHTML&&child[i].innerHTML!=0){
			child[i+1].innerHTML=child[i+1].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i+1].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i+1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
}
if(c>0)
	newnum();
color();

}
var down = function(){
	console.log("down");
	var i,j,c=0;
	for(j=0;j<2;j++)
	{
	for(i=0;i<12;i=i+1)
	{
		if(child[i].innerHTML==child[i+4].innerHTML&&child[i].innerHTML!=0){
			child[i+4].innerHTML=child[i+4].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i+4].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i+4].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=1;i<13;i=i+4)
	{
		if(child[i].innerHTML==child[i+4].innerHTML&&child[i].innerHTML!=0){
			child[i+4].innerHTML=child[i+4].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i+4].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i+4].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=2;i<14;i=i+4)
	{
		if(child[i].innerHTML==child[i+4].innerHTML&&child[i].innerHTML!=0){
			child[i+4].innerHTML=child[i+4].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i+4].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i+4].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
	for(i=3;i<15;i=i+4)
	{
		if(child[i].innerHTML==child[i+4].innerHTML&&child[i].innerHTML!=0){
			child[i+4].innerHTML=child[i+4].innerHTML*2;
			child[i].innerHTML=0;
			c++;
		}
		else if(child[i].innerHTML-child[i+4].innerHTML==child[i].innerHTML&&child[i].innerHTML!=0){
			console.log("yes");
			child[i+4].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
			c++;
		}
	}
}
if(c>0)
	newnum();
color();

}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
    }
};






