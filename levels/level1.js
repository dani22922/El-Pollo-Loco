const level1 = new Level(

    [
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new Endboss()
    ],



    [
        new Cloud()
    ],

    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', - 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', - 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3)
    ],

    [

        new Coin(300, 110),
        new Coin(800, 210),
        new Coin(950, 80),
        new Coin(1200, 210),
        new Coin(1550, 50),
    ],
    [
        new collectBottle(400, 330),
        new collectBottle(800, 330),
        new collectBottle(950, 330),
        new collectBottle(1200, 330),
        new collectBottle(1550, 330)
    ]


);