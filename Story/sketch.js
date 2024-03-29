var x = 100;
var y = 200;
var faceSize = 200;
var eyeSize = 50;
var greeting = "'Hey let's travel to other planets!'"



function setup() {
    createCanvas(windowWidth, 600);
}

function draw() {

    background("purple");

    // Alien Dude 1
    fill(32, 178, 170); //alien dude skin color.
    stroke("black");
    ellipse(x, y, faceSize);
    fill("white");
    triangle(150, 175, 130, 200, 175, 200); // right eye.
    fill("white");
    triangle(50, 175, 30, 200, 75, 200); // left eye.
    fill(0, 128, 128);
    triangle(103, 200, 80, 220, 125, 220); // nose.
    fill("white");
    ellipse(103, 250, 40); // mouth.
    fill("black");
    line(83, 250, 124, 250, 200); // teeth line.
    fill("black");
    ellipse(150, 192, 15); // right eye pupil.
    fill("black");
    ellipse(50, 192, 15); // left eye pupil.

    // Greeting 
    fill("yellow");
    textSize(50);
    text(greeting, 250, y);

    // alien dude 2
    fill("green");
    ellipse(700, 400, faceSize);
    fill("white");
    rect(660, 350, 30, 30); // left eye.
    fill("black");
    ellipse(675, 365, 15); // left pupil.
    fill("white");
    rect(715, 350, 30, 30); // right eye.
    fill("black");
    ellipse(730, 365, 15); // right pupil.
    fill("black");
    line(650, 400, 750, 400); // mouth.


}
