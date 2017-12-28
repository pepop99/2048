child = document.getElementsByClassName("child");

var i;
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
	}
};
color();


