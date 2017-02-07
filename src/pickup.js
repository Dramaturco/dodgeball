function Pickup(){
	this.radius = 10;
	this.pos = createVector(random(width-this.radius), random(height-this.radius));
	this.visible = false;

	this.spawn = function(){
		this.pos = createVector(random(this.radius, width-this.radius), random(this.radius, height-this.radius));
		this.visible = true;
	}

	this.render = function(){
		push();
		translate(this.pos.x, this.pos.y);
		if(this.visible){
			drawCircle(this.radius, 12, true, false);
		}
		pop();
	}
}