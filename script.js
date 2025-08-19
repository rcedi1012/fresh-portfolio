//global variables: img names
let bellimg, bell1, bell2, bellding, body, curtains, desk, facen, facet,
hat, head, middlebell, paw1, paw2, pupil1, pupil2, sclera1, scelra2, sleepy,
smug, topcurtain;

let bell = new Receptionbell(0,0,bellimg);


function preload() {
    bellimg = loadImage('bell.png');
    bell1 = loadImage("bell1.png");
    bellding = loadImage("bellding.png");
}

function setup() {
    canvas = createCanvas(windowWidth, (7 * windowWidth)/8);
    canvas.parent('container');
    
}

function draw() {
    background(100)
    image(bell1,0,0, windowWidth, ((7 * windowWidth)/8))
    bell.show();
    
}

function windowResized() {
    resizeCanvas(windowWidth, (7 * windowWidth)/8);
}
