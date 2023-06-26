class Keyboard {
    LEFT = false;
    RIGHT = false;
    DOWN = false;
    UP = false;
    SPACE = false;
    D = false;

    constructor() {
        this.keyboardMovement();
        this.mobileMovement();
    }

    mobileMovement() {
        document.addEventListener('DOMContentLoaded', () => {
            this.mobileLeft();
            this.mobileRight();
            this.mobileJump();
            this.mobileThrow();
        });
    }

    //MobileMovement
    mobileLeft() {
        const mobileLeft = document.getElementById('mobileLeft');
        mobileLeft.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        mobileLeft.addEventListener("touchend", (e) => {
            e.preventDefault();
            this.LEFT = false;
        });
    }
    mobileRight() {
        const mobileRight = document.getElementById('mobileRight');
        mobileRight.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        mobileRight.addEventListener("touchend", (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });
    }
    mobileJump() {
        const mobileJump = document.getElementById('mobileJump');
        mobileJump.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.SPACE = true;
        });
        mobileJump.addEventListener("touchend", (e) => {
            e.preventDefault();
            this.SPACE = false;
        });
    }
    mobileThrow() {
        const mobileThrow = document.getElementById('mobileThrow');
        mobileThrow.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.D = true;
        });
        mobileThrow.addEventListener("touchend", (e) => {
            e.preventDefault();
            this.D = false;
        });
    }

    //KeyBoard Movement
    keyboardMovement() {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 39) {
                keyboard.RIGHT = true;
            }
            if (e.keyCode == 37) {
                keyboard.LEFT = true;
            }
            if (e.keyCode == 40) {
                keyboard.DOWN = true;
            }
            if (e.keyCode == 38) {
                keyboard.UP = true;
            }
            if (e.keyCode == 32) {
                keyboard.SPACE = true;
            }
            if (e.keyCode == 68) {
                keyboard.D = true;
            }
        });

        window.addEventListener("keyup", (e) => {
            if (e.keyCode == 39) {
                keyboard.RIGHT = false;
            }
            if (e.keyCode == 37) {
                keyboard.LEFT = false;
            }
            if (e.keyCode == 40) {
                keyboard.DOWN = false;
            }
            if (e.keyCode == 38) {
                keyboard.UP = false;
            }
            if (e.keyCode == 32) {
                keyboard.SPACE = false;
            }
            if (e.keyCode == 68) {
                keyboard.D = false;
            }
        });
    }
}