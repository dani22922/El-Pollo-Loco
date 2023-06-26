class ThrowableObjects extends MoveableObject {
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    IMAGES_SPLASH =
        [
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
        ];
    hitEnemy = false;

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 90;
        this.width = 70;
        this.throw(x, y);
        this.animate();
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 35);
    }

    animate() {
        setInterval(() => {
            this.animateBottle()
        }, 1000 / 30);
    }

    animateBottle() {
        this.playAnimation(this.IMAGES_BOTTLE);
        if (this.bottleHit()) {
            this.playAnimation(this.IMAGES_SPLASH);

        }
    }
    bottleHit() {
        return this.hitEnemy || !this.isAboveGround();
    }

}