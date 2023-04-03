class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    collectBottle;
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects, coins, collectBottle) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.collectBottle = collectBottle;

    }
}