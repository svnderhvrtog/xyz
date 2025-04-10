// Rock, Paper, Scissors set-up
const betSliderRPS = document.getElementById('bet-slider-rps');
const betValueRPS = document.getElementById('slider-output-rps');
betSliderRPS.oninput = () => {
    betValueRPS.innerText = `${betSliderRPS.value} CR`;
};

const confirmButtonRPS = document.getElementById('confirm-rps');
confirmButtonRPS.addEventListener('click', () => {
    gameOnGoing = true;
    betSliderRPS.disabled = true;
    confirmButtonRPS.disabled = true;
    credits -= parseInt(betSliderRPS.value);
    creditsDeposit();
    setTimeout(() => {
        startRPSGame();
    }, animationDurationShort);
    localStorage.credits = credits;
    updateCredits(credits);
    }
);

// Rock, Paper, Scissors game
const messageElRPS = document.getElementById('message-el-rps');
const explainerRPS = document.getElementById('explainer-rps');
const explainedRPS = document.getElementById('explained-rps');
const selectRPS = document.getElementById('select-rps');
const resultRPS = document.getElementById('result-rps');
const restartRPS = document.getElementById('restart-rps');
const playerSuitImg = document.getElementById('choosen-suit');
const playerSuitText = document.getElementById('choosen-suit-text');
const cpuSuitImg = document.getElementById('cpu-suit');
const cpuSuitText = document.getElementById('cpu-suit-text');
let playerSuit = 0;

const rSuit = document.getElementById('rock-suit').addEventListener('click', () => {
    playerSuitImg.src = '../icons/casino/rock-icon.png';
    playerSuitText.textContent = 'Rock';
    playerSuit = 1;
    resultRPSFunc();
});

const pSuit = document.getElementById('paper-suit').addEventListener('click', () => {
    playerSuitImg.src = '../icons/casino/paper-icon.png';
    playerSuitText.textContent = 'Paper';
    playerSuit = 2;
    resultRPSFunc();
});

const sSuit = document.getElementById('scissors-suit').addEventListener('click', () => {
    playerSuitImg.src = '../icons/casino/scissors-icon.png';
    playerSuitText.textContent = 'Scissors';
    playerSuit = 3;
    resultRPSFunc();
});

restartRPS.addEventListener('click', restartRPSFunc);
explainerRPS.addEventListener('click', explainRPSFunc);

function explainRPSFunc() {
    explainerRPS.style.display = "none";
    explainedRPS.style.display = "block";
};

function startRPSGame() {
    messageElRPS.textContent = `Pick your suit`;
    explainerRPS.style.display = "none";
    explainedRPS.style.display = "none";
    selectRPS.style.display = "flex";
};

function randomSuitFunc() {
    return Math.floor( Math.random() * 3 ) + 1
};

function resultRPSFunc() {
    rpsWaitAudio.play();
    messageElRPS.textContent = "And the winner is...";
    selectRPS.style.display = "none";
    resultRPS.style.display = "flex";
    setTimeout(() => {
        cpuSuitImg.src = '../icons/casino/paper-icon.png';
        cpuSuitText.textContent = 'Paper';
    }, 0);
    setTimeout(() => {
        cpuSuitImg.src = '../icons/casino/rock-icon.png';
        cpuSuitText.textContent = 'Rock';
    }, 400);
    setTimeout(() => {
        cpuSuitImg.src = '../icons/casino/scissors-icon.png';
        cpuSuitText.textContent = 'Scissors';
    }, 700);
    setTimeout(() => {
        cpuSuitImg.src = '../icons/casino/rock-icon.png';
        cpuSuitText.textContent = 'Rock';
    }, 1000);
    setTimeout(() => {
        cpuSuitImg.src = '../icons/casino/paper-icon.png';
        cpuSuitText.textContent = 'Paper';
    }, 1400);
    setTimeout(() => {
        cpuSuitImg.src = '../icons/casino/scissors-icon.png';
        cpuSuitText.textContent = 'Scissors';
    }, 1800);
    setTimeout(() => {
        cpuSuitImg.src = '../icons/casino/rock-icon.png';
        cpuSuitText.textContent = 'Rock';
    }, 2200);
    setTimeout(() => {
        cpuSuitImg.src = '../icons/casino/paper-icon.png';
        cpuSuitText.textContent = 'Paper';
    }, animationDurationLong);
    setTimeout(() => {
        randomSuit = randomSuitFunc();
        cpuSuitText.style.display = "block";
        if(randomSuit === 1) {
            cpuSuitImg.src = '../icons/casino/rock-icon.png';
            cpuSuitText.textContent = 'Rock';
            if(playerSuit === 1){
                messageElRPS.textContent = "It's a draw!";
                credits += parseInt(betSliderRPS.value);
                creditsAccumulated();
            } else if (playerSuit === 2) {
                messageElRPS.textContent = "You won!";
                coinsAudio.play();
                credits += (parseInt(betSliderRPS.value) * 2);
                creditsAccumulated();
            } else if (playerSuit === 3) {
                rpsLoseAudio.play();
                messageElRPS.textContent = "You lost!";
            };
            localStorage.credits = credits;
            updateCredits(credits);
            restartRPS.style.display = "block";
        } else if(randomSuit === 2) {
            cpuSuitImg.src = '../icons/casino/paper-icon.png';
            cpuSuitText.textContent = 'Paper';
            if(playerSuit === 1){
                rpsLoseAudio.play();
                messageElRPS.textContent = "You lost!";
            } else if (playerSuit === 2) {
                messageElRPS.textContent = "It's a draw!";
                credits += parseInt(betSliderRPS.value);
                creditsAccumulated();
            } else if (playerSuit === 3) {
                messageElRPS.textContent = "You won!"
                coinsAudio.play();
                credits += (parseInt(betSliderRPS.value) * 2);
                creditsAccumulated();
            };
            localStorage.credits = credits;
            updateCredits(credits);
            restartRPS.style.display = "block";
        } else if(randomSuit === 3) {
            cpuSuitImg.src = '../icons/casino/scissors-icon.png';
            cpuSuitText.textContent = 'Scissors';
            if(playerSuit === 1){
                messageElRPS.textContent = "You won!";
                coinsAudio.play();
                credits += (parseInt(betSliderRPS.value) * 2);
                creditsAccumulated();
            } else if (playerSuit === 2) {
                rpsLoseAudio.play();
                messageElRPS.textContent = "You lost!";
            } else if (playerSuit === 3) {
                messageElRPS.textContent = "It's a draw!";
                credits += parseInt(betSliderRPS.value);
                creditsAccumulated();
            };
            localStorage.credits = credits;
            updateCredits(credits);
            restartRPS.style.display = "block";
        };
    }, 3400);
    gameOnGoing = false;
};

function restartRPSFunc() {
    messageElRPS.textContent = "Place your bet!";
    explainerRPS.style.display = "block";
    explainedRPS.style.display = "none";
    restartRPS.style.display = "none";
    selectRPS.style.display = "none";
    resultRPS.style.display = "none";
    betSliderRPS.disabled = false;
    confirmButtonRPS.disabled = false;
};