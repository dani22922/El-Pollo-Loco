class Cloud extends MoveableObject {
    y = 20;
    height = 250;
    width = 500;
    speed = 0.15;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; //Math.random() Zahl zwischen 0 und 500

        this.animate();
    }

    animate() {
        this.moveLeft();

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }

}


