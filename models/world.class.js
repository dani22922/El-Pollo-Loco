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

            this.checkCollisions();
            this.checkBottleChickenCollisions();
            this.checkThrowObjects();
            this.checkCoinCollisions();
            this.checkBottleCollisons();

        }, 300);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    // Die Kollisionen zwischen Character und Gegner werden abgefragt 
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) /* && !this.level.enemies.isDead(enemy) */) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    console.log('Colission with char', this.character.energy);

                }
            });
        }, 500);
    }

    //Character Coin Collision
    checkCoinCollisions() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                console.log('take', coin)
                this.takeCoin(coin);
            }
        });
    }

    //Coin wird eingesammelt
    takeCoin(coin) {
        this.character.coins++;
        this.coinBar.setPercentage(this.character.coins);
        this.level.coins.splice(this.level.coins.indexOf(coin), 1);

    }

    //Kollision zwischen character und Flasche
    checkBottleCollisons() {
        this.level.bottle.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                console.log('take', bottle)
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
        })
    }

    //Der Gegner wird von der Flasche getroffen
    hitByBottle(enemy) {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(enemy)) {
                enemy.hit();

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



