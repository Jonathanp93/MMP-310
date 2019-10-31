var x = 100;
var y = 200;
var faceSize = 200;
var eyeSize = 50;
var greeting = "'Hey let's travel to other planets!'"

var scene = "mars"
var scene = "earth"
var scene = "mercury"
var cloud = 50
var cloud2 = 200

function setup() {
    createCanvas(windowWidth, 600);



}

function mousePressed() {
    if (scene == "mars") {
        scene = "mercury";
    } else if (scene == "mercury") {
        scene = "earth";
    } else if (scene == "earth") {
        scene = "mars";
    }
}



function draw() {



    if (scene == "earth") {
        background("#34d2eb");
        fill("white");
        stroke("noStroke");
        ellipse(cloud + 1, 75, 150, 100);
        cloud = cloud + 1;

        fill("white");
        stroke("noStroke");
        ellipse(cloud + 100, cloud2, 150, 100);

        //grass ground//
        fill("#6adb23");
        stroke("#6adb23");
        rect(0, 500, windowWidth, 100);

        //mountains//
        fill("brown");
        stroke("brown");
        triangle(250, 200, 0, 500, 500, 500);

        fill("brown");
        stroke("brown");
        triangle(500, 300, 300, 500, 750, 500);



    } else if (scene == "mars") {
        background("#e3a62b");

        //mars scene//
        fill("#b58421");
        stroke("#b58421");
        rect(0, 300, windowWidth, 300);
        
        fill("yellow");
        stroke("yellow");
        ellipse(mouseX,mouseY,200,200);

        //terrain//
        fill("#855e0f");
        stroke("#855e0f");
        ellipse(650, 550, 150, 100);

        fill("#855e0f");
        stroke("#855e0f");
        ellipse(50, 450, 150, 100);

        fill("black");
        textSize(50);
        text("'Cool Mars'", 300, 275);




    } else if (scene == "mercury") {
        background("#153f54");
        
        fill("white");
        ellipse(random(width),random(height),5,5);
        
        fill("white");
        ellipse(random(width),random(height),5,5);
        
        fill("white");
        ellipse(random(width),random(height),5,5);

        fill("#819199");
        stroke("#819199");
        rect(0, 300, windowWidth, 300);

        //terrain//
        fill("#404547");
        stroke("#404547");
        ellipse(650, 550, 150, 100);

        fill("#404547");
        stroke("#404547");
        ellipse(50, 450, 150, 100);

        fill("black");
        textSize(50);
        text("'Mercury looks like a moon!'", 300, 275);

    }




    if (cloud > windowWidth) {
        cloud = 50;
    }

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
    fill("black");
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

    //spaceship//
    fill("gray");
    stroke("gray");
    ellipse(400, 500, 350, 250);
    fill("black");
    ellipse(400, 450, 175, 100);
    //lights//
    fill("#db23d5");
    ellipse(400, 550, 50, 50);

}