class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleBar = new bottleBar();
    coinBar = new coinBar();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkBottleChickenCollisions();
            this.checkThrowObjects();
            this.checkCoinCollisions();
            this.checkBottleCollisons();
            this.checkJumpOnChicken();
            this.checkCollisions();

        }, 300);
    }


    checkThrowObjects() {//TODO - 
        if (this.keyboard.D && this.character.bottle > 0) {
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.removeBottle();
            this.bottleBar.setPercentage(this.character.bottle);
        }
    }
    removeBottle() {
        this.character.bottle -= 1;
    }

    // Die Kollisionen zwischen Character und Gegner werden abgefragt 
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && !enemy.isDead()) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    console.log('Colission with char', this.character.energy);
                }
            });
        }, 1000);
    }

    //Character Coin Collision
    checkCoinCollisions() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.takeCoin(coin);
            }
        });
    }

    //Coin wird eingesammelt und die Coinbar wird um 1 aufgefüllt
    takeCoin(coin) {
        this.character.coins++;
        this.coinBar.setPercentage(this.character.coins);
        this.level.coins.splice(this.level.coins.indexOf(coin), 1);

    }

    //Kollision zwischen character und Flasche
    checkBottleCollisons() {
        this.level.bottle.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.takeBottle(bottle);
            }
        });
    }

    //Flasche wird eingesammelt
    takeBottle(bottle) {
        this.character.bottle++;
        this.bottleBar.setPercentage(this.character.bottle);
        this.level.bottle.splice(this.level.bottle.indexOf(bottle), 1);
    }


    //Bottle und Chicken Collision
    checkBottleChickenCollisions() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    enemy.hitByBottle();
                    console.log('Colission with enemy, energy', enemy.energy);
                }
            });
        });
    }

    //Der Gegner wird von der Flasche getroffen
    hitByBottle(enemy) {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(enemy)) {
                enemy.hit();
            }
        });
    }
    // Auf Gegner springen
    checkJumpOnChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && !enemy.isDead()) {
                !this.character.isHurt();
                enemy.hitByBottle();// Der Sprung macht genauso viel Schaden wie eine Flasche
                this.character.jump();
            }
        });
    }




    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);


        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);// Camera Back
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);// Camera Forwards, 


        this.addToMap(this.character);

        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);



        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

    }
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
    //wir spiegeln das Bild
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    // das Bild wird nochmal gespiegelt
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}



