function Laser(horizontal){
	var offset = 20;

	this.horizontal = horizontal;
	this.frame = 0;
	this.fire = false;
	this.x = 0;
	this.y = 0;

	this.generatePos = function(){
		if(this.horizontal){
			this.x = 0;
			this.y = random(offset, height - offset);
		}
		else{
			this.x = random(offset, width - offset);
			this.y = 0;
		}
	}
	this.hits = function(character){
		var upper = character.pos.y - character.radius;
		var lower = character.pos.y + character.radius;
		var left = character.pos.x - character.radius;
		var right = character.pos.x + character.radius;

		if(this.fire){
			if(this.frame > 30){
				if(this.horizontal){
					var lzrUpper = this.y - this.frame / 12;
					var lzrLower = this.y + this.frame / 12;
					if(lzrUpper > upper && lzrUpper < lower || lzrLower > upper && lzrLower < lower){
						return true;
					}
				}
				else{
					var lzrLeft = this.x - this.frame / 12;
					var lzrRight = this.x + this.frame / 12;
					if(lzrLeft > left && lzrLeft < right || lzrRight > left && lzrRight < right){
						return true;
					}
				}
			}
		}
	}

	this.render = function(){
		if(this.fire){
			this.frame++;
			if(this.frame > 50){
				this.frame = 0;
				this.fire = false;
			}
			if(this.frame < 30){
				push();
				if(this.horizontal)
					translate(0, this.y);
				else
					translate(this.x, 0);
				drawCircle(this.frame, 20, true);
				pop();
			}
			else{
				push();
				fill(255);
				stroke(255);
				strokeWeight(this.frame / 6);
				if(this.horizontal){
					line(this.x,this.y,width,this.y);
				}
				else{
					line(this.x,this.y,this.x,height);
				}
				pop();	
			}
				
		}
	}
}