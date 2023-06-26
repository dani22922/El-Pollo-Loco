let vid = document.getElementById('myVideo');
let gameSound = new Audio('audio/guitar.mp3')
let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function gameStop() {
    intervalIds.forEach(clearInterval);
}

function init() {
    gameSound.loop = true;
    gameSound.volume = 0.05;
    gameSound.play();
    document.getElementById('startGame').classList.add('d-none');
    document.getElementById('myVideo').classList.add('d-none');
    document.getElementById('start').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('instruction').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
}

//STOPPT ALLE INTERVALLE 
function gameOver() {
    setTimeout(() => {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
        document.getElementById('gameOver').classList.remove('d-none');
        document.getElementById('endPic').classList.remove('d-none');
        document.getElementById('reStart').classList.remove('d-none');
        document.getElementById('canvas').classList.add('d-none');
        gameSound.pause();
    }, 2000);
}

function soundOff() {
    gameSound.pause();
    document.getElementById('soundOn').classList.remove('d-none');
    document.getElementById('soundOff').classList.add('d-none');
}

function soundOn() {
    gameSound.play();
    document.getElementById('soundOn').classList.add('d-none');
    document.getElementById('soundOff').classList.remove('d-none');
}

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

// ENTER FULLSCREEN
function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}

// EXIT FULLSCREEN
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

//OPERA Browser fix
function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {
            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        }
    }
    else {
        document.getElementById('canvas').style.height = `100%`;
    }
}