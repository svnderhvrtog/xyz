let cards = [];
let sum = 0;

let isAlive = false;
let hasBlackJack = false;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('cards-el');
let explainer = document.getElementById('explainer');
let explained = document.getElementById('explained');
let returnBtn = document.getElementById('return-button');

const cardAudio = new Audio('../audio/card.mp3');
const victoryAudio = new Audio('../audio/victory-blackjack.mp3');

const newCard = document.getElementById('new-card');
newCard.addEventListener('click', drawNewCard);
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else { 
        return randomNumber
    }
};

explainer.addEventListener('click', explainFunc);
function explainFunc() {
    explainer.style.display = "none";
    returnBtn.style.display = "none";
    explained.style.display = "block";
}

const startGameVar = document.getElementById('start-game');
startGameVar.addEventListener('click', startGame);
function startGame() {
    let isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    explainer.style.display = "none";
    explained.style.display = "none";
    returnBtn.style.display = "flex";
    messageEl.style.display = "block";
    sumEl.style.display = "block";
    cardEl.style.display = "block";
    newCard.style.display = "block";
    render();
    startGameVar.innerHTML = 'Restart'
}

function render(){
    cardAudio.play();
    cardEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    };

    sumEl.textContent = "Total: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true;
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
        victoryAudio.play();
    } else {
        message = "You're out of the game!";
        isAlive = false;
        newCard.style.display = "none";
    }

    messageEl.textContent = message;
};


function drawNewCard() { 

    if (isAlive === true && hasBlackJack === false) {
    let thirdcard = getRandomCard();
    sum += thirdcard;
    cards.push(thirdcard);
    render()
    }
};