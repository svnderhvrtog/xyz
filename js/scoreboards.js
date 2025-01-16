// Scoreboards
const basketballSection = document.getElementById('basketball-section');
const rugbySection = document.getElementById('rugby-section');
const tennisSection = document.getElementById('tennis-section');

document.getElementById('basketball').addEventListener('click', () => {
    basketballSection.style.display = 'block';
    rugbySection.style.display = 'none';
    tennisSection.style.display = 'none';
    document.body.style.background = '#2a3048';
});

document.getElementById('rugby').addEventListener('click', () => {
    basketballSection.style.display = 'none';
    rugbySection.style.display = 'block';
    tennisSection.style.display = 'none';
    document.body.style.background = '#483a2a';
});

document.getElementById('tennis').addEventListener('click', () => {
    basketballSection.style.display = 'none';
    rugbySection.style.display = 'none';
    tennisSection.style.display = 'block';
    document.body.style.background = '#2a4835';
});

// Basketball scoring
let homescoreBasketball = 0;
let guestscoreBasketball = 0;
const homecounterBasketball = document.getElementById("home-score-basketball");
const guestcounterBasketball = document.getElementById("guest-score-basketball");

document.getElementById("basketball-home-btn-1").addEventListener('click', function add(){
    if (homescoreBasketball === 99){
        homescoreBasketball = 0;
        homecounterBasketball.textContent = 0;
        return
    };
    homecounterBasketball.textContent = homescoreBasketball += 1;
});

document.getElementById("basketball-home-btn-2").addEventListener('click', function add(){
    if (homescoreBasketball === 98){
        homescoreBasketball = 0;
        homecounterBasketball.textContent = 0;
        return
    } else if (homescoreBasketball === 99){
        homescoreBasketball = 1;
        homecounterBasketball.textContent = 1;
        return
    };
    homecounterBasketball.textContent = homescoreBasketball += 2;
});

document.getElementById("basketball-home-btn-3").addEventListener('click', function add(){
    if (homescoreBasketball === 97){
        homescoreBasketball = 0;
        homecounterBasketball.textContent = 0;
        return
    } else if (homescoreBasketball === 98){
        homescoreBasketball = 1;
        homecounterBasketball.textContent = 1;
        return
    } else if (homescoreBasketball === 99){
        homescoreBasketball = 2;
        homecounterBasketball.textContent = 2;
        return
    };
    homecounterBasketball.textContent = homescoreBasketball += 3;
});

document.getElementById("basketball-home-reset").addEventListener('click', function reset(){
    homescoreBasketball = 0;
    homecounterBasketball.textContent = 0;
});

document.getElementById("basketball-guest-btn-1").addEventListener('click', function add(){
    if (guestscoreBasketball === 99){
        guestscoreBasketball = 0;
        guestcounterBasketball.textContent = 0;
        return
    };
    guestcounterBasketball.textContent = guestscoreBasketball += 1;
});

document.getElementById("basketball-guest-btn-2").addEventListener('click', function add(){
    if (guestscoreBasketball === 98){
        guestscoreBasketball = 0;
        guestcounterBasketball.textContent = 0;
        return
    } else if (guestscoreBasketball === 99){
        guestscoreBasketball = 1;
        guestcounterBasketball.textContent = 1;
        return
    };
    guestcounterBasketball.textContent = guestscoreBasketball += 2;
});

document.getElementById("basketball-guest-btn-3").addEventListener('click', function add(){
    if (guestscoreBasketball === 97){
        guestscoreBasketball = 0;
        guestcounterBasketball.textContent = 0;
        return
    } else if (guestscoreBasketball === 98){
        guestscoreBasketball = 1;
        guestcounterBasketball.textContent = 1;
        return
    } else if (guestscoreBasketball === 99){
        guestscoreBasketball = 2;
        guestcounterBasketball.textContent = 2;
        return
    };
    guestcounterBasketball.textContent = guestscoreBasketball += 3;
});

document.getElementById("basketball-guest-reset").addEventListener('click', function reset(){
    guestscoreBasketball = 0;
    guestcounterBasketball.textContent = 0;
});

// Rugby scoring
let homescoreRugby = 0;
let guestscoreRugby = 0;
const homecounterRugby = document.getElementById("home-score-rugby");
const guestcounterRugby = document.getElementById("guest-score-rugby");

document.getElementById("rugby-home-btn-1").addEventListener('click', function add(){
    if (homescoreRugby === 98){
        homescoreRugby = 0;
        homecounterRugby.textContent = 0;
        return
    } else if (homescoreRugby === 99){
        homescoreRugby = 1;
        homecounterRugby.textContent = 1;
        return
    };
    homecounterRugby.textContent = homescoreRugby += 2;
});

document.getElementById("rugby-home-btn-2").addEventListener('click', function add(){
    if (homescoreRugby === 97){
        homescoreRugby = 0;
        homecounterRugby.textContent = 0;
        return
    } else if (homescoreRugby === 98){
        homescoreRugby = 1;
        homecounterRugby.textContent = 1;
        return
    } else if (homescoreRugby === 99){
        homescoreRugby = 2;
        homecounterRugby.textContent = 2;
        return
    };
    homecounterRugby.textContent = homescoreRugby += 3;
});

document.getElementById("rugby-home-btn-3").addEventListener('click', function add(){
    if (homescoreRugby === 95){
        homescoreRugby = 0;
        homecounterRugby.textContent = 0;
        return
    } else if (homescoreRugby === 96){
        homescoreRugby = 1;
        homecounterRugby.textContent = 1;
        return
    } else if (homescoreRugby === 97){
        homescoreRugby = 2;
        homecounterRugby.textContent = 2;
        return
    } else if (homescoreRugby === 98){
        homescoreRugby = 3;
        homecounterRugby.textContent = 3;
        return
    } else if (homescoreRugby === 99){
        homescoreRugby = 4;
        homecounterRugby.textContent = 4;
        return
    } else if (homescoreRugby === 100){
        homescoreRugby = 5;
        homecounterRugby.textContent = 5;
        return
    };
    homecounterRugby.textContent = homescoreRugby += 5;
});

document.getElementById("rugby-home-reset").addEventListener('click', function reset(){
    homescoreRugby = 0;
    homecounterRugby.textContent = 0;
});

document.getElementById("rugby-guest-btn-1").addEventListener('click', function add(){
    if (guestscoreRugby === 98){
        guestscoreRugby = 0;
        guestcounterRugby.textContent = 0;
        return
    } else if (guestscoreRugby === 99){
        guestscoreRugby = 1;
        guestcounterRugby.textContent = 1;
        return
    };
    guestcounterRugby.textContent = guestscoreRugby += 2;
});

document.getElementById("rugby-guest-btn-2").addEventListener('click', function add(){
    if (guestscoreRugby === 97){
        guestscoreRugby = 0;
        guestcounterRugby.textContent = 0;
        return
    } else if (guestscoreRugby === 98){
        guestscoreRugby = 1;
        guestcounterRugby.textContent = 1;
        return
    } else if (guestscoreRugby === 99){
        guestscoreRugby = 2;
        guestcounterRugby.textContent = 2;
        return
    };
    guestcounterRugby.textContent = guestscoreRugby += 3;
});

document.getElementById("rugby-guest-btn-3").addEventListener('click', function add(){
    if (guestscoreRugby === 95){
        guestscoreRugby = 0;
        guestcounterRugby.textContent = 0;
        return
    } else if (guestscoreRugby === 96){
        guestscoreRugby = 1;
        guestcounterRugby.textContent = 1;
        return
    } else if (guestscoreRugby === 97){
        guestscoreRugby = 2;
        guestcounterRugby.textContent = 2;
        return
    } else if (guestscoreRugby === 98){
        guestscoreRugby = 3;
        guestcounterRugby.textContent = 3;
        return
    } else if (guestscoreRugby === 99){
        guestscoreRugby = 4;
        guestcounterRugby.textContent = 4;
        return
    } else if (guestscoreRugby === 100){
        guestscoreRugby = 5;
        guestcounterRugby.textContent = 5;
        return
    }
    guestcounterRugby.textContent = guestscoreRugby += 5;
});

document.getElementById("rugby-guest-reset").addEventListener('click', function reset(){
    guestscoreRugby = 0;
    guestcounterRugby.textContent = 0;
});

// Tennis scoring
let player1scoreTennis = 0;
let player2scoreTennis = 0;
let player1setsTennis = 0;
let player2setsTennis = 0;
const player1counterTennis = document.getElementById("player1-score-tennis");
const player2counterTennis = document.getElementById("player2-score-tennis");
const player1setsCounterTennis = document.getElementById("player1-sets-tennis");
const player2setsCounterTennis = document.getElementById("player2-sets-tennis");

document.getElementById('tennis-player1-btn').addEventListener('click', function add(){
    if(player1scoreTennis === 0){
        player1scoreTennis = 15;
    } else if(player1scoreTennis === 15) {
        player1scoreTennis = 30;
    } else if(player1scoreTennis === 30) {
        player1scoreTennis = 40;
    } else if(player1scoreTennis === 40) {
        player1scoreTennis = 0;
        player2scoreTennis = 0;
        player2counterTennis.textContent = 0;
        player1setsTennis += 1;
    };
    player1counterTennis.textContent = player1scoreTennis;
    player1setsCounterTennis.textContent = `Sets ${player1setsTennis}`;
});

document.getElementById('tennis-player1-reset').addEventListener('click', function reset(){
    player1scoreTennis = 0;
    player1setsTennis = 0;
    player1counterTennis.textContent = 0;
    player1setsCounterTennis.textContent = 'Sets 0';
});

document.getElementById('tennis-player2-btn').addEventListener('click', function add(){
    if(player2scoreTennis === 0){
        player2scoreTennis = 15;
    } else if(player2scoreTennis === 15) {
        player2scoreTennis = 30;
    } else if(player2scoreTennis === 30) {
        player2scoreTennis = 40;
    } else if(player2scoreTennis === 40) {
        player1scoreTennis = 0;
        player1counterTennis.textContent = 0;
        player2scoreTennis = 0;
        player2setsTennis += 1;
    };
    player2counterTennis.textContent = player2scoreTennis;
    player2setsCounterTennis.textContent = `Sets ${player2setsTennis}`;
});

document.getElementById('tennis-player2-reset').addEventListener('click', function reset(){
    player2scoreTennis = 0;
    player2setsTennis = 0;
    player2counterTennis.textContent = 0;
    player2setsCounterTennis.textContent = 'Sets 0';
});