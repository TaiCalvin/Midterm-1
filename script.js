"use strict"

$(() => {
    let h1 = document.getElementsByTagName('h1')[1];
const start = document.getElementById('start');
// const   stop = document.getElementById('stop');
let seconds = 0;
let minutes = 0;
let t;

function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    };
    
  h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer();
};

/* Start button */
$('#start').on('click', add);

function timer() {
  t = setTimeout(add, 1000);
};

// clearTimeout(t);

/* Reset button */
$('#reset').on('click', () => {
  h1.textContent = "00:00";
  seconds = 0; minutes = 0;
  clearTimeout(t);
});

const cards = document.querySelectorAll(".card");

for(let i = 0; i < cards.length; i++) {
    // console.log(cards[i]);
    cards.on('click', () => {
        booze.toggle();
        cards.toggle();
    });
}

const booze = document.querySelectorAll(".drink");

for(let i = 0; i < booze.length; i++) {
    // console.log(booze[i]);
    booze.on('click', () => {
        booze.toggle();
        cards.toggle();
    });
}
});