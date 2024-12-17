// Scoreboard
let homescore = 0;
let guestscore = 0;
const homecounter = document.getElementById("home-score");
const guestcounter = document.getElementById("guest-score");

document.getElementById("home-score-btn-1").addEventListener('click', function add(){
    if (homescore === 99){
        homescore = 0;
        homecounter.textContent = 0;
        return
    };
    homecounter.textContent = homescore += 1;
});

document.getElementById("home-score-btn-2").addEventListener('click', function add(){
    if (homescore === 98){
        homescore = 0;
        homecounter.textContent = 0;
        return
    } else if (homescore === 99){
        homescore = 1;
        homecounter.textContent = 1;
        return
    };
    homecounter.textContent = homescore += 2;
});

document.getElementById("home-score-btn-3").addEventListener('click', function add(){
    if (homescore === 97){
        homescore = 0;
        homecounter.textContent = 0;
        return
    } else if (homescore === 98){
        homescore = 1;
        homecounter.textContent = 1;
        return
    } else if (homescore === 99){
        homescore = 2;
        homecounter.textContent = 2;
        return
    };
    homecounter.textContent = homescore += 3;
});

document.getElementById("reset-home-score").addEventListener('click', function reset(){
    homescore = 0;
    homecounter.textContent = 0;
});

document.getElementById("guest-score-btn-1").addEventListener('click', function add(){
    if (guestscore === 99){
        guestscore = 0;
        guestcounter.textContent = 0;
        return
    };
    guestcounter.textContent = guestscore += 1;
});

document.getElementById("guest-score-btn-2").addEventListener('click', function add(){
    if (guestscore === 98){
        guestscore = 0;
        guestcounter.textContent = 0;
        return
    } else if (guestscore === 99){
        guestscore = 1;
        guestcounter.textContent = 1;
        return
    };
    guestcounter.textContent = guestscore += 2;
});

document.getElementById("guest-score-btn-3").addEventListener('click', function add(){
    if (guestscore === 97){
        guestscore = 0;
        guestcounter.textContent = 0;
        return
    } else if (guestscore === 98){
        guestscore = 1;
        guestcounter.textContent = 1;
        return
    } else if (guestscore === 99){
        guestscore = 2;
        guestcounter.textContent = 2;
        return
    };
    guestcounter.textContent = guestscore += 3;
});

document.getElementById("reset-guest-score").addEventListener('click', function reset(){
    guestscore = 0;
    guestcounter.textContent = 0;
});