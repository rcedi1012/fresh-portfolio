//global variables: img names
let bell, bell1, bell2, bellding, body, curtains, desk, facen, facet,
hat, head, middlebell, paw1, paw2, pupil1, pupil2, sclera1, scelra2, sleepy,
smug, topcurtain;

let aspectH;

function preload() {
    bell = loadImage("bell.png");
    bell1 = loadImage("bell1.png");
}

function setup() {
    canvas = createCanvas(windowWidth, (7 * windowWidth)/8);
    canvas.parent('container');
}

function draw() {
    background(100)
    image(bell, 0, 0, windowWidth, ((7 * windowWidth)/8));
    image(bell1,0,0, windowWidth, ((7 * windowWidth)/8))
}

function windowResized() {
    resizeCanvas(windowWidth, (7 * windowWidth)/8);
}
