function Pickup(){
	this.radius = 10;
	this.pos = createVector(random(width-this.radius), random(height-this.radius));
	this.visible = false;

	this.spawn = function(){
		this.pos = createVector(random(this.radius, width-this.radius), random(this.radius, height-this.radius));
		this.visible = true;
	}
    //clamp the position to the edges
    this.recalcPos = function(){
        if(this.pos.x > width - this.radius){
            this.pos.x = width - this.radius;
        }
        if(this.pos.y > height - this.radius){
            this.pos.y = height - this.radius;
        }
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