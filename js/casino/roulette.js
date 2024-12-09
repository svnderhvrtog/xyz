// Roulette
const betOneRoulette = document.getElementById('bet-one-roulette');
const betTwoRoulette = document.getElementById('bet-two-roulette');
const betFiveRoulette = document.getElementById('bet-five-roulette');
const confirmButtonRoulette = document.getElementById('confirm-roulette');
confirmButtonRoulette.addEventListener('click', () => {
    gameOnGoing = true;
    if(betOneRoulette.checked) {
        betOneRoulette.disabled = true;
        betTwoRoulette.disabled = true;
        betFiveRoulette.disabled = true;
        confirmButtonRoulette.disabled = true;
        credits -= 1;
        creditsText.style.color = 'red'
        creditsText.textContent = `Total credits: ${credits} CR`;
        setTimeout(() => {
            creditsText.style.color = 'white'
            creditsText.textContent = `Total credits: ${credits} CR`;
        }, 500)
        setTimeout(() => {
            startRouletteGame()
        }, 500)
    } else if (betTwoRoulette.checked) {
        betOneRoulette.disabled = true;
        betTwoRoulette.disabled = true;
        betFiveRoulette.disabled = true;
        confirmButtonRoulette.disabled = true;
        credits -= 2;
        creditsText.style.color = 'red'
        creditsText.textContent = `Total credits: ${credits} CR`;
        setTimeout(() => {
            creditsText.style.color = 'white'
            creditsText.textContent = `Total credits: ${credits} CR`;
        }, 500)
        setTimeout(() => {
            startRouletteGame()
        }, 500)
    } else if (betFiveRoulette.checked) {
        betOneRoulette.disabled = true;
        betTwoRoulette.disabled = true;
        betFiveRoulette.disabled = true;
        confirmButtonRoulette.disabled = true;
        credits -= 5;
        creditsText.style.color = 'red'
        creditsText.textContent = `Total credits: ${credits} CR`;
        setTimeout(() => {
            creditsText.style.color = 'white'
            creditsText.textContent = `Total credits: ${credits} CR`;
        }, 500)
        setTimeout(() => {
            startRouletteGame()
        }, 500)
    }    
    localStorage.credits = credits
});

const messageElRoulette = document.getElementById('message-el-roulette');
const explainerRoulette = document.getElementById('explainer-roulette');
const explainedRoulette = document.getElementById('explained-roulette');
const selectRoulette = document.getElementById('select-roulette');
const resultRoulette = document.getElementById('result-roulette');
const restartRoulette = document.getElementById('restart-roulette')
restartRoulette.addEventListener('click', restartRouletteFunc)
const resultImgRoulette = document.getElementById('roulette-resultIMG');

explainerRoulette.addEventListener('click', () => {
    explainerRoulette.style.display = "none";
    explainedRoulette.style.display = "block";
});

let nrOneRoulette = document.getElementById('roulette-digit-one');
let nrTwoRoulette = document.getElementById('roulette-digit-two');
let nrThreeRoulette = document.getElementById('roulette-digit-three');
let nrFourRoulette = document.getElementById('roulette-digit-four');
let nrFiveRoulette = document.getElementById('roulette-digit-five');
let nrSixRoulette = document.getElementById('roulette-digit-six');
let nrSevenRoulette = document.getElementById('roulette-digit-seven');
let nrEightRoulette = document.getElementById('roulette-digit-eight');
let nrNineRoulette = document.getElementById('roulette-digit-nine');
let clOneRoulette = document.getElementById('roulette-color-one');
let clTwoRoulette = document.getElementById('roulette-color-two');

let randomRouletteNumber = null;
let randomGifNum = null;

function randomRouletteNumberFunc() {
    return Math.floor( Math.random() * 9 ) + 1;
};

function randomGifFunc() {
    return Math.floor( Math.random() * 5 ) + 1;
}

function startRouletteGame() {
    messageElRoulette.textContent = 'Choose a number or color';
    explainerRoulette.style.display = "none";
    explainedRoulette.style.display = "none";
    selectRoulette.style.display = "flex";

    randomRouletteNumber = randomRouletteNumberFunc();
    randomGifNum = randomGifFunc();

    // Verwijder bestaande event listeners voordat we nieuwe toevoegen
    removeAllListeners();

    nrOneRoulette.addEventListener('click', () => checkRouletteResult(1));
    nrTwoRoulette.addEventListener('click', () => checkRouletteResult(2));
    nrThreeRoulette.addEventListener('click', () => checkRouletteResult(3));
    nrFourRoulette.addEventListener('click', () => checkRouletteResult(4));
    nrFiveRoulette.addEventListener('click', () => checkRouletteResult(5));
    nrSixRoulette.addEventListener('click', () => checkRouletteResult(6));
    nrSevenRoulette.addEventListener('click', () => checkRouletteResult(7));
    nrEightRoulette.addEventListener('click', () => checkRouletteResult(8));
    nrNineRoulette.addEventListener('click', () => checkRouletteResult(9));

    clOneRoulette.addEventListener('click', () => handleColorChoice([2, 4, 6, 8]));
    clTwoRoulette.addEventListener('click', () => handleColorChoice([1, 3, 5, 7, 9]));

    function checkRouletteResult(playerChoice) {
        loadAudio.play();
        messageElRoulette.textContent = 'Preparing your spaceship';
        selectRoulette.style.display = "none";
        resultRoulette.style.display = "flex";
        resultImgRoulette.src = `../images/casino/roulette/wait${randomGifNum}.webp`;

        setTimeout(() => {
            resultRouletteFunc();
            if (randomRouletteNumber === playerChoice) {
                bigWinAudio.play();
                messageElRoulette.textContent = 'You won big time!';
                if (betOneRoulette.checked) {
                    credits += 9;
                } else if (betTwoRoulette.checked) {
                    credits += 18;
                } else if (betFiveRoulette.checked) {
                    credits += 45;
                }
                creditsText.style.color = 'green';
                creditsText.textContent = `Total credits: ${credits} CR`;
                setTimeout(() => {
                    creditsText.style.color = 'white';
                    creditsText.textContent = `Total credits: ${credits} CR`;
                }, 500);
            } else {
                loseRouletteAudio.play();
                messageElRoulette.textContent = 'You lost!';
            }
        }, 3000);
    }

    function handleColorChoice(validNumbers) {
        loadAudio.play();
        messageElRoulette.textContent = 'Preparing your spaceship';
        selectRoulette.style.display = "none";
        resultRoulette.style.display = "flex";
        resultImgRoulette.src = `../images/casino/roulette/wait${randomGifNum}.webp`;

        setTimeout(() => {
            resultRouletteFunc();
            if (validNumbers.includes(randomRouletteNumber)) {
                coinsAudio.play();
                messageElRoulette.textContent = 'You won!';
                if (betOneRoulette.checked) {
                    credits += 2;
                } else if (betTwoRoulette.checked) {
                    credits += 4;
                } else if (betFiveRoulette.checked) {
                    credits += 10;
                }
                creditsText.style.color = 'green';
                creditsText.textContent = `Total credits: ${credits} CR`;
                setTimeout(() => {
                    creditsText.style.color = 'white';
                    creditsText.textContent = `Total credits: ${credits} CR`;
                }, 500);
            } else {
                loseRouletteAudio.play();
                messageElRoulette.textContent = 'You lost!';
            }
        }, 3000);
    }
}

function removeAllListeners() {
    const cloneAndReplace = (element) => {
        const clone = element.cloneNode(true);
        element.parentNode.replaceChild(clone, element);
        return clone;
    };

    nrOneRoulette = cloneAndReplace(nrOneRoulette);
    nrTwoRoulette = cloneAndReplace(nrTwoRoulette);
    nrThreeRoulette = cloneAndReplace(nrThreeRoulette);
    nrFourRoulette = cloneAndReplace(nrFourRoulette);
    nrFiveRoulette = cloneAndReplace(nrFiveRoulette);
    nrSixRoulette = cloneAndReplace(nrSixRoulette);
    nrSevenRoulette = cloneAndReplace(nrSevenRoulette);
    nrEightRoulette = cloneAndReplace(nrEightRoulette);
    nrNineRoulette = cloneAndReplace(nrNineRoulette);

    clOneRoulette = cloneAndReplace(clOneRoulette);
    clTwoRoulette = cloneAndReplace(clTwoRoulette);
}

function resultRouletteFunc() {
    restartRoulette.style.display = "block";
    console.log('randomRouletteNumber = ' + randomRouletteNumber);
    resultImgRoulette.src = `../images/casino/roulette/result${randomRouletteNumber}.png`;
    gameOnGoing = false;
}

function restartRouletteFunc() {
    messageElRoulette.textContent = "Place your bet!"
    explainerRoulette.style.display = "block";
    explainedRoulette.style.display = "none";
    restartRoulette.style.display = "none";
    selectRoulette.style.display = "none";
    resultRoulette.style.display = "none";
    betOneRoulette.disabled = false;
    betTwoRoulette.disabled = false;
    betFiveRoulette.disabled = false;
    confirmButtonRoulette.disabled = false;
}