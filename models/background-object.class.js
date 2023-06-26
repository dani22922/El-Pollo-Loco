class BackgroundObject extends MoveableObject {
    width = 720;
    height = 480;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;  // 480-400 = 80 // canvas height 480px
        this.x = x;
    }
}