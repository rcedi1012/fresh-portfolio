let paws = [];

function windowResized(){
    bg.resize(window.innerWidth, window.innerHeight);
}

function setup() {
    frameRate(60)
    bg = createCanvas(window.innerWidth, window.innerHeight);
    bg.position(0,0);
    bg.style('z-index', '-1');
}

function draw() {
    background(47, 15, 15);

    if (random(0,2) <= 0.08) {
        pawg = new Paw(random(-10, window.innerWidth),window.innerHeight);
        paws.push(pawg);
    }

    for (let i = 0; i <= paws.length - 1; i++){
        paws[i].show();
        paws[i].move();
        if (paws[i].dead()) {
            paws[i].pop();
        }
    }
}

class Paw{
    constructor(xpos, ypos){
        this.xpos = xpos;
        this.ypos = ypos;
        this.opacity = 255
    }

    show(){
        stroke(187, 26, 26, this.opacity);
        strokeWeight(40);
        line(65 + this.xpos, 45 + this.ypos, 45 + this.xpos, 65 + this.ypos);
        line(85 +this.xpos, 65 + this.ypos, 65 + this.xpos, 45 + this.ypos);
        strokeWeight(30);
        line(25 + this.xpos, 25 + this.ypos, 25 + this.xpos, 25 + this.ypos);
        line(65 +this.xpos, 0 + this.ypos, 65 + this.xpos, 0 + this.ypos);
        line(105 + this.xpos, 25 + this.ypos, 105 + this.xpos, 25 + this.ypos);
    }

    move(){
        this.ypos = lerp(this.ypos, -100, 0.009);
        this.opacity -= 1.5;
    }

    dead(){
        if (this.ypos === -100) {
            return true;
        }
    }
}