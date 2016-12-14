var clickedTime;
var createdTime;
var reactionTime;
var bestTime = 15;

Date.now();

function getRandomColor(){
	var letters = "0123456789ABCDEF".split('');
	var color = "#";
	
	for(var i=0;i<6;i++){
		color += letters[Math.round(Math.random()*15)];
	}
	
	return color;
}

function makeBox(){
	
	createdTime  = Date.now();
	
	var time = Math.random();
	time = 4000 * time;
	
	if(Math.random() > 0.5){
		document.getElementById("box").style.borderRadius = "50px";
	}else{
		document.getElementById("box").style.borderRadius = "0px";
	}
	
	var top = Math.random();
	
	top = top * 300;
	
	var left = Math.random();
	
	left = left * 500;
	
	document.getElementById("box").style.marginTop = top+"px";
	document.getElementById("box").style.marginLeft = left+"px";
	
	document.getElementById("box").style.backgroundColor = getRandomColor();
	
	setTimeout(function(){
		document.getElementById("box").style.display = "block";
		
		createdTime = Date.now();
	},time)
	
}

document.getElementById("box").onclick = function(){
			
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime)/1000;
			
	document.getElementById("justRecord").innerHTML = reactionTime;
	
	if(reactionTime < bestTime){
		bestTime = reactionTime;
		document.getElementById("bestRecord").innerHTML = bestTime;
	}
	
	this.style.display = "none";
	makeBox();
			
}

makeBox();