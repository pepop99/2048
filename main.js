child = document.getElementsByClassName("child");

var i;
var s1 = Math.floor(Math.random() * 16);
var sn1 = Math.floor(Math.random() * 1) + 2;
var s2 = Math.floor(Math.random() * 16);
var sn2 = Math.floor(Math.random() * 3) * 2;
var num = [];
var num1 = [];

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
	child[s1].innerHTML=sn1;
	if(s1==s2)
		s2=15-s1;
	if(sn2==0)
		sn2=2;
	child[s2].innerHTML=sn2;
	color();
};

// var j=0;
// var begin = function(){
// 	num[j]=s1;
// 	num1[j]=sn1;
// 	console.log(num[j],num1[j]);
// 	j++;
// 	num[j]=s1;
// 	num1[j]=sn1;
// 	console.log(num[j],num1[j]);
// 		color();
// };

begin();

var left = function(){
	console.log("left");
	var i,j;
	for(j=0;j<2;j++)
	{
	for(i=3;i>0;i--)
	{
		if(child[i].innerHTML==child[i-1].innerHTML){
			child[i-1].innerHTML=child[i-1].innerHTML*2;
			child[i].innerHTML=0;
		}
		else if(child[i].innerHTML-child[i-1].innerHTML==child[i].innerHTML){
			console.log("yes");
			child[i-1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
		}
	}
	for(i=7;i>4;i--)
	{
		if(child[i].innerHTML==child[i-1].innerHTML){
			child[i-1].innerHTML=child[i-1].innerHTML*2;
			child[i].innerHTML=0;
		}
		else if(child[i].innerHTML-child[i-1].innerHTML==child[i].innerHTML){
			console.log("yes");
			child[i-1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
		}
	}
	for(i=11;i>8;i--)
	{
		if(child[i].innerHTML==child[i-1].innerHTML){
			child[i-1].innerHTML=child[i-1].innerHTML*2;
			child[i].innerHTML=0;
		}
		else if(child[i].innerHTML-child[i-1].innerHTML==child[i].innerHTML){
			console.log("yes");
			child[i-1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
		}
	}
	for(i=15;i>12;i--)
	{
		if(child[i].innerHTML==child[i-1].innerHTML){
			child[i-1].innerHTML=child[i-1].innerHTML*2;
			child[i].innerHTML=0;
		}
		else if(child[i].innerHTML-child[i-1].innerHTML==child[i].innerHTML){
			console.log("yes");
			child[i-1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
		}
	}
	color();
}
	
}	

var up = function(){
	console.log("up")
}

var right = function(){
	console.log("right");
	var i,j;
	for(j=0;j<2;j++)
	{
	for(i=0;i<3;i++)
	{
		if(child[i].innerHTML==child[i+1].innerHTML){
			child[i+1].innerHTML=child[i+1].innerHTML*2;
			child[i].innerHTML=0;
		}
		else if(child[i].innerHTML-child[i+1].innerHTML==child[i].innerHTML){
			console.log("yes");
			child[i+1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
		}
	}
	for(i=4;i<7;i++)
	{
		if(child[i].innerHTML==child[i+1].innerHTML){
			child[i+1].innerHTML=child[i+1].innerHTML*2;
			child[i].innerHTML=0;
		}
		else if(child[i].innerHTML-child[i+1].innerHTML==child[i].innerHTML){
			console.log("yes");
			child[i+1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
		}
	}
	for(i=8;i<11;i++)
	{
		if(child[i].innerHTML==child[i+1].innerHTML){
			child[i+1].innerHTML=child[i+1].innerHTML*2;
			child[i].innerHTML=0;
		}
		else if(child[i].innerHTML-child[i+1].innerHTML==child[i].innerHTML){
			console.log("yes");
			child[i+1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
		}
	}
	for(i=12;i<15;i++)
	{
		if(child[i].innerHTML==child[i+1].innerHTML){
			child[i+1].innerHTML=child[i+1].innerHTML*2;
			child[i].innerHTML=0;
		}
		else if(child[i].innerHTML-child[i+1].innerHTML==child[i].innerHTML){
			console.log("yes");
			child[i+1].innerHTML=child[i].innerHTML;
			child[i].innerHTML=0;
		}
	}
	color();
}

}
var down = function(){
	console.log("down");
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



