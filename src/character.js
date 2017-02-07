function Character(){
	this.pos = createVector(width/2, height/2);
	this.speed = createVector(0,0);
	this.radius = 15;
	//variables for death animation
	this.isBeingKilled = false;
	this.flickerSpeed = 2;
	this.flickerCnt = 0;
	this.flicker = false;

	this.move = function(dir){
		this.pos.add(dir);
	}
	this.update = function(){
		this.pos.add(this.speed);
	}
	this.addForce = function(force){
		this.speed.add(force);
	}
	//this function is called to make the character wrap around the screen edges
	this.wrapAround = function(){
		if(this.pos.x > (width + this.radius)){
			this.pos.x = 0 - this.radius;
		}
		if(this.pos.x < (0 - this.radius)){
			this.pos.x = width + this.radius;
		}
		if(this.pos.y > (height + this.radius)){
			this.pos.y = 0 - this.radius;
		}
		if(this.pos.y < (0 - this.radius)){
			this.pos.y = height + this.radius;
		}
	}

	this.hits = function(pickup){
		if(!pickup.visible){
			return false;
		}
		var distance = dist(this.pos.x, this.pos.y, pickup.pos.x, pickup.pos.y)
		if(distance - this.radius - pickup.radius < 0){
			pickup.visible = false;
			this.radius++;
			return true;
		}
	}

	this.render = function(){
		if(this.isBeingKilled){
			if(this.flickerCnt > this.flickerSpeed){
				this.flicker = !this.flicker;
				this.flickerCnt = 0;
			}
			this.flickerCnt++;
		}
		if(!this.isBeingKilled){
			this.flicker = false;
		}
		
		push();
		fill(0);
		stroke(255);
		translate(this.pos.x, this.pos.y);
		drawCircle(this.radius, 8, this.flicker, true);
		pop();
	}
}