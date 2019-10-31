var sizes = [80, 90, 70, 80, 90, 70];
var position = [0, 10, -10, 20, -20, 0];
var speed = [2, 3, 2, 3, 2, 3];
var r = [50,60,40,90,30,90];

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);
	noStroke();
	
	for (let i = 0; i < sizes.length; i++) {
		skeleton(60 + i * 100, position[i], sizes[i], r[i]);
		
		position[i] += speed[i];
        r[i] += 1;
	}
    
}
    

    function skeleton(x, y, s) {
        fill('white');
        rect(x - 20, y + 50 - s + 60, s / 2, s - 25); // jaw

        fill('white');
        ellipse(x, y + 20, s, s - 25); // base


        fill('black');
        ellipse(x - 20, y + 10, 20); // left eye
        ellipse(x + 20, y + 10, 20); // right eye

        fill("black");
        triangle(x - 10, y + 50, x + 10, y + 50, x, y + 10);


       
    }