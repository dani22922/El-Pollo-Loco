class bottleBar extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    percentage = 0; // In diesem Fall ist percentage die Anzahl der Flaschen

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 80;
        this.width = 250;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // => 0....5 Bilder aus dem Array je nach Prozent
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 5) {
            return 5;
        } else if (this.percentage == 1) {
            return 1;
        } else if (this.percentage == 2) {
            return 2;
        } else if (this.percentage == 3) {
            return 3;
        } else if (this.percentage == 4) {
            return 4;
        } else {
            return 0;
        }
    }
}