class MoveableObject extends DrawableObject {  
    //Eine Class ist eine Beschreibung wie ein Objekt aussehen soll wie eine Schablone oder Vorlage
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lasthit = 0;



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        if (this instanceof ThrowableObjects) {
            return true;
        } else { // throwableobjects soll immer fallen
            return this.y < 120;
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;

        // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    }
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;

        } else {
            this.lasthit = new Date().getTime(); //  Zeit speichern in Zahlenform millisekunden seit 1.1.1970
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lasthit; // Diffirenz in millisekunden
        timePassed = timePassed / 1000; // in sekunden
        return timePassed < 1;
    }

    // -100 Energy wenn von Flasche getroffen 
    hitByBottle() {
        this.energy -= 100;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }



    moveRight() {
        this.x += this.speed;

    }


    moveLeft() {
        this.x -= this.speed;

    }

    playAnimation(images) {
        // anhand des Bildes ---> Animation
        let i = this.currentImage % images.length; // let i = 0 % 6;    % Modulo bedeutet Mathematisch Rest 
        // i= 0,1,2,3,4,5,6  ,0,1,2,3,4,5,6  ,0,1,2,3,4,5,6  ,0,1,2,3,4,5,6 0,1,2,3,4,5,6 0,1,2,3,4,5,6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 30;

    }
}