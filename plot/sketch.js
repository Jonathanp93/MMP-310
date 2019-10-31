var x = 100;
var y = 200;
var faceSize = 200;
var eyeSize = 50;

var scene = "mars"
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
        

        max(x + 150, y + 100, faceSize, "#34ebb7", "wow its beautiful");
        alex(x + 100, y - 100, faceSize, "purple", "floating smoke look");
        narration("Earth was the first planet they visited.")



    } else if (scene == "mars") {
        background("#e3a62b");


        //mars scene//
        fill("#b58421");
        stroke("#b58421");
        rect(0, 300, windowWidth, 300);

        fill("yellow");
        stroke("yellow");
        ellipse(mouseX, mouseY, 200, 200);

        //terrain//
        fill("#855e0f");
        stroke("#855e0f");
        ellipse(650, 550, 150, 100);

        fill("#855e0f");
        stroke("#855e0f");
        ellipse(50, 450, 150, 100);

        fill("black");
        textSize(50);
        text("'It is hot over here.'", 300, y+150);

        max(x + 200, y + 10, 200, "#34ebb7", "wow thats bright");
        alex(x - 50, y - 100, 200, "purple", "my eyes are on fire");
        narration("Mars was so hot they had to leave!.");



    } else if (scene == "mercury") {
        background("#153f54");


        fill("white");
        ellipse(random(width), random(height), 5, 5);

        fill("white");
        ellipse(random(width), random(height), 5, 5);

        fill("white");
        ellipse(random(width), random(height), 5, 5);

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
        text("'Mercury looks like a moon!'", 500, y+80);

        max(x, y, 200, "#34ebb7", "too peaceful");
        alex(x, y, 200, "purple", "looks peaceful");
        narration("Mercury the rocky planet the last destination.");

    }




    if (cloud > windowWidth) {
        cloud = 50;
    }

    function narration(story) {
        textAlign(CENTER);
        text(story, width / 4, height - 500, width / 2, 200);

    }

    function max(x, y, size, col, greeting) {

        // Alien Dude 1(max)
        fill("#34ebb7"); //alien dude skin color.
        stroke("black");
        ellipse(x, y, faceSize);
        fill("white");
        triangle(x + 25, y - 10, x + 50, y - 35, x + 75, y - 10); // right eye.
        fill("white");
        triangle(x - 25, y - 10, x - 50, y - 35, x - 75, y - 10); // left eye.
        fill(0, 128, 128);
        triangle(x, y - 10, x - 20, y + 20, x + 25, y + 20); // nose.
        fill("white");
        ellipse(x + 3, y + 45, 40); // mouth.
        fill("black");
        line(x - 15, y + 45, x + 25, y + 45, 180); // teeth line.
        fill("black");
        ellipse(x + 50, y - 20, 15); // right eye pupil.
        fill("black");
        ellipse(x - 50, y - 20, 15); // left eye pupil.
        
       
    }


    // Greeting 
    // fill("black");
    // textSize(50);
    // text(greeting, 250, y);

    function alex(x, y, size, col, greeting) {
        // alien dude 2
        fill("green");
        ellipse(x + 600, y + 200, faceSize);
        fill("white");
        rect(x + 560, y + 150, 30, 30); // left eye.
        fill("black");
        ellipse(x + 575, y + 165, 15); // left pupil.
        fill("white");
        rect(x + 515, y + 150, 30, 30); // right eye.
        fill("black");
        ellipse(x + 530, y + 165, 15); // right pupil.
        fill("black");
        line(x + 500, y + 200, x + 650, y + 200); // mouth.
        
    

    }

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
