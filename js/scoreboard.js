let homescore = 0;
let guestscore = 0;

const homecounter = document.getElementById("home-score");

document.getElementById("home-score-btn-1").addEventListener('click', function add(){
    homecounter.textContent = homescore += 1;
    if (homescore > 98) {
        homescore = 0;
    }
});

document.getElementById("home-score-btn-2").addEventListener('click', function add(){
    homecounter.textContent = homescore += 2;
    if (homescore > 97) {
        homescore = 0;
    }
});

document.getElementById("home-score-btn-3").addEventListener('click', function add(){
    homecounter.textContent = homescore += 3;
    if (homescore > 96) {
        homescore = 0;
    }
});

document.getElementById("reset-home-score").addEventListener('click', function reset(){
    homecounter.textContent = 0;
    homescore = 0;
});

const guestcounter = document.getElementById("guest-score");

document.getElementById("guest-score-btn-1").addEventListener('click', function add(){
    guestcounter.textContent = guestscore += 1;
    if (guestscore > 98) {
        guestscore = 0;
    }
});

document.getElementById("guest-score-btn-2").addEventListener('click', function add(){
    guestcounter.textContent = guestscore += 2;
    if (guestscore > 97) {
        guestscore = 0;
    }
});

document.getElementById("guest-score-btn-3").addEventListener('click', function add(){
    guestcounter.textContent = guestscore += 3;
    if (guestscore > 96) {
        guestscore = 0;
    }
});

document.getElementById("reset-guest-score").addEventListener('click', function reset(){
    guestcounter.textContent = 0;
    guestscore = 0;
});