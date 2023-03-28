class Chicken extends MoveableObject {

    height = 100;
    width = 100;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    y = 325;
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);


        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 6;    % Modulo bedeutet Mathematisch Rest 
            // i= 0,1,2,3,4,5,6  ,0,1,2,3,4,5,6  ,0,1,2,3,4,5,6  ,0,1,2,3,4,5,6 0,1,2,3,4,5,6 0,1,2,3,4,5,6
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);

        this.moveLeft();


    }


}