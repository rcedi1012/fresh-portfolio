class Receptionbell{
    constructor(x,y,image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }

    show(){
        image(this.image, 0, 0, windowWidth, ((7 * windowWidth)/8));
    }
}