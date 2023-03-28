class BackgroundObject extends MoveableObject {


    width = 720;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}