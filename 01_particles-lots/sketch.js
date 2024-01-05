const CANVASWIDTH = 500;
const CANVASHEIGHT = 500;
let local_canvas;

function setup() {
	local_canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
	local_canvas.parent("particle-sketch");
}

function draw() {
	if (mouseIsPressed) {
		background(255, 50);
	}
	// background(255, 50);
	let randLoopControl = random(50, 101);
	for (let i = 0; i < randLoopControl; i++) {
		let randDiameter = random(1.5, 4);
		let randXLoc = random(0 + randDiameter, CANVASWIDTH - randDiameter);
		let randYLoc = random(
			0 + randDiameter * 2,
			CANVASHEIGHT - randDiameter * 2
		);
		let randRedVal = random(0, 255);
		let randGreenVal = random(0, 255);
		let randBlueVal = random(0, 255);
		fill(randRedVal, randGreenVal, randBlueVal);
		circle(randXLoc, randYLoc, randDiameter);
	}
}
