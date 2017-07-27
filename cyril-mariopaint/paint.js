function setup(){
	createCanvas(500,500);
	background(200);
}

function mouseDragged(){
	//set fill to a random color
	fill(random(255),random(255),random(255));
	//draw a randomly sized ellipse
	var ellHeight = random(30);
	var ellWidth = random(30);
	//at mouseX,mouseY
	ellipse(mouseX,mouseY,ellWidth,ellHeight);
}

function keyPressed(){
	if (key=="S"){
		saveCanvas("myPicture","jpg");
	}
}