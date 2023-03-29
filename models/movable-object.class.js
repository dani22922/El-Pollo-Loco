class MoveableObject {  //Eine Class ist eine Beschreibung wie ein Objekt aussehen soll wie eine Schablone oder Vorlage
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;


    applyGravity() {
        setInterval(() => {
            if (this.y < 120) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }


    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src="">
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });

    }

    moveRight() {
        console.log('moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }

    playAnimation() {
        // Walk Animation
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 6;    % Modulo bedeutet Mathematisch Rest 
        // i= 0,1,2,3,4,5,6  ,0,1,2,3,4,5,6  ,0,1,2,3,4,5,6  ,0,1,2,3,4,5,6 0,1,2,3,4,5,6 0,1,2,3,4,5,6
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}