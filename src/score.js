function Scoreboard(){
	this.pos = createVector(width - 100, 40);
	this.score = 0;

	this.increment = function(){
		this.score++;
        if(this.score % 5 == 0){
            if(level < maxLevel){
                levelUp();
            }
        }
	}
	this.reset = function(){
		if(this.score > hiScore){
			hiScore = this.score;
		}
		this.score = 0;
	}
    this.recalcPos = function(){
        this.pos = createVector(width - 100, 40);
    }
	this.render = function(){
		let scorestring = "Score: " + this.score;
		let hiScoreString = "Hi:    " + hiScore;
		drawText(scorestring, this.pos.x, this.pos.y, 18);
		drawText(hiScoreString, this.pos.x, this.pos.y + 20, 18);
		push();
		translate(this.pos.x, this.pos.y);
		noFill();
		stroke(255);
		strokeWeight(2);
		rect(-50,-15,100,50);
		pop();
	}
}