class collectBottle extends MoveableObject {


    width = 100;
    height = 100;

    IMAGES_COLLECT_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_COLLECT_BOTTLE);

        this.x = x;
        this.y = y;


    }


}