var xNose = 0;
var yNose = 0;
// var mariox = 200;
// var marioy = 200;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover = loadSound("gameover.wav"); //Sim
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav"); 
	setSprites();
	MarioAnimation();
	//img = loadImage("mario.jpg");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvasDiv");  // Parent.
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameConsole");
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on("pose", gotPoses);
}

function modelLoaded(){
	console.log("Modelo carregado");
}

function gotPoses(result){
	if(result.length > 0){
		//console.log(result);
		xNose = result[0].pose.nose.x;
		yNose = result[0].pose.nose.y;
	}
}

function draw() {
	//background("#D3D3D3");
	// image(img, mariox, marioy, 40, 60);
	// if(x < 350){
	// 	mariox =  mariox-2;
	// }
	// if(x > 350){
	// 	mariox = mariox+2;
	// }
	// if(y < 50){
	// 	marioy = marioy-2;
	// }
	// if(y > 200){
	// 	marioy = 200;
	// }
	game();
}