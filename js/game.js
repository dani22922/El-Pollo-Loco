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


/* function playVid() {
    vid.play();
} */



function init() {
    gameSound.loop = true;
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
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    document.getElementById('gameOver').classList.remove('d-none');
    document.getElementById('endPic').classList.remove('d-none');
    document.getElementById('reStart').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
    gameSound.pause();


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