function rndLaser(laser){
	if(random() < 0.2){
		if(random() > 0.5)
			laser.horizontal = true;
		else
			laser.horizontal = false;
		if(!laser.fire){
			laser.fire = true;
			laser.generatePos();
		}
	}
}
function keyPressed(){
	if(keyCode == 27){
		newGame();
	}
}
//death animation using key frames
//killIndex indicates the current part of the death animation
function killPlayer(){
	if(killIndex >= killAnim.length){
		killFrame = 0;
		killIndex = 0;
		newGame();	
		return;
	}
	killFrame++;
	if(killFrame < killAnim[killIndex]){
		if(killIndex == 0){
			
			character.render();
		}
		if(killIndex == 1){
			drawText("You Died!", width/2, height/2, 48);
		}
	}else{
		killIndex++;
	}
	drawFrame();
}
function newGame(){
	pickCnt = 0;
	pickThresh = floor(random(2,5));
	pickup = new Pickup();
	character = new Character();
	console.debug(character);
	scoreboard.reset();
	dying = false;
	for(let i = 0; i < numLasers; i++){
		let hor = false;
		if(random() > 0,5)
			hor = true;
		lasers[i] = new Laser(hor);
	}
}

function handleInput(){
	if(keyIsDown(DOWN_ARROW)){
		character.move(createVector(0,1).mult(speed)); 
	}
	if(keyIsDown(UP_ARROW)){
		character.move(createVector(0,-1).mult(speed));	
	}
	if(keyIsDown(RIGHT_ARROW)){
		character.move(createVector(1,0).mult(speed)); 
	}
	if(keyIsDown(LEFT_ARROW)){
		character.move(createVector(-1,0).mult(speed)); 
	}
}

function drawCircle(r, numVertices, filled, noise, color){
	push();
	if(filled){
		if(color){
			fill(color);
		}
		fill(255);
	}
	else{
		fill(0);
	}
	beginShape();
	for(let i = 0; i < numVertices; i++){
		let angle = map(i, 0, numVertices, 0, TWO_PI);
		let x = r*cos(angle);
		let y = r*sin(angle);
		vertex(x,y);
	}
	endShape(CLOSE);
	pop();
}

function drawText(string, x, y, size){
	var adjustX = (size * string.length)/3.5;
	var adjustY = size/3.5;
	push();
	translate(x - adjustX, y + adjustY);
	textSize(size);
	textFont("monospace");
	stroke(255);
	fill(255);
	text(string, 0, 0);
	pop();
}
function drawFrame(){
	push();
	noFill();
	stroke(255);
	rect(0,0,width-1,height-1);
	pop();
}