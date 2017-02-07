var width = 0;
var height = 0;
var canvas;
var character;
var scoreboard;
var pickup;
var lasers = [];
const tick = 50;								//Amount of Frames per Tick
var clock = 0;
const speed = 5;								//Player movementspeed
var numLasers = 3;
var hiScore = 0;

var pickThresh = 0;								//when this is reached a pickup will spawn
var pickCnt = 0;								//counter for when a pickup will spawn
var killAnim = [50, 100, 150, 200]				//key frames for deathanimation
var killFrame = 0;
var killIndex = 0; 

function setup(){
	width = windowWidth/12 * 7;
	height = width/4 * 3;
	canvas = createCanvas(width, height);
	canvas.parent('canvas');
	scoreboard = new Scoreboard(width - 100, 40);
	newGame();
}
function windowResized(){
	width = windowWidth/12 * 7;
	height = width/4 * 3;
	resizeCanvas(width, height);
}

function draw(){
	clear();
	background(0);
	if(character.isBeingKilled){
		killPlayer();
		return;
	}
	clock++;
	if(clock > tick){
		clock = 0;
		lasers.forEach(function(laser){
			rndLaser(laser);                                                                                                           	
		});
		pickCnt++;
		if(!pickup.visible){
			if(pickCnt > pickThresh){
				pickThresh = random(2,5);
				pickCnt = 0;
				pickup.spawn();
			}
		}
	}

	handleInput();
	if(character.hits(pickup)){
		scoreboard.increment();
	}

	lasers.forEach(function(laser){
		laser.render();
		if(laser.hits(character)){
			character.isBeingKilled = true;
		}
	});
	
	character.render();
	character.update();
	character.wrapAround();
	scoreboard.render();
	pickup.render();
	drawFrame();
}