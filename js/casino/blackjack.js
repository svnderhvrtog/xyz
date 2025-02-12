// Blackjack set-up
const betOneBlack = document.getElementById('bet-one-blackjack');
const betTwoBlack = document.getElementById('bet-two-blackjack');
const betFiveBlack = document.getElementById('bet-five-blackjack');
const confirmButtonBlack = document.getElementById('confirm-blackjack');
confirmButtonBlack.addEventListener('click', () => {
    gameOnGoing = true;
    if(betOneBlack.checked) {
        credits -= 1;
        blackDisabled();
        creditsDeposit();
        setTimeout(() => {
            startBlackGame()
        }, animationDurationShort);
    } else if (betTwoBlack.checked) {
        credits -= 2;
        blackDisabled();
        creditsDeposit();
        setTimeout(() => {
            startBlackGame()
        }, animationDurationShort);
    } else if (betFiveBlack.checked) {
        credits -= 5;
        blackDisabled();
        creditsDeposit();
        setTimeout(() => {
            startBlackGame()
        }, animationDurationShort);
    };
    localStorage.credits = credits;
    updateCredits(credits);
});

function blackDisabled() {
    betOneBlack.disabled = true;
    betTwoBlack.disabled = true;
    betFiveBlack.disabled = true;
    confirmButtonBlack.disabled = true;
};

// Blackjack game
let cards = [];
let sum = 0;
let isAliveBlack = false;
let hasBlackJack = false;
let messageBlack = "";

const messageElBlack = document.getElementById('message-el');
const sumElBlack = document.getElementById('sum-el');
const explainerBlack = document.getElementById('explainer-black');
const explainedBlack = document.getElementById('explained-black');
const cardSummaryBlack = document.querySelector('.center-cards');
const imgBlack = document.querySelectorAll('.card');
const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const cardThree = document.getElementById('card-three');
const cardFour = document.getElementById('card-four');

const newCard = document.getElementById('new-card');
newCard.addEventListener('click', drawThirdCard);
const anotherCard = document.getElementById('another-card');
anotherCard.addEventListener('click', drawFourthCard);
const keepHand = document.getElementById('keep-hand');
keepHand.addEventListener('click', keepHandFunc);
const restartBlack = document.getElementById('restart-black');
restartBlack.addEventListener('click', restartBlackFunc);

explainerBlack.addEventListener('click', explainBlackFunc);
function explainBlackFunc() {
    explainerBlack.style.display = "none";
    explainedBlack.style.display = "block";
};

function startBlackGame() {
    isAliveBlack = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    explainerBlack.style.display = "none";
    explainedBlack.style.display = "none";
    messageElBlack.style.display = "block";
    sumElBlack.style.display = "block";
    cardSummaryBlack.style.display = "flex";
    newCard.style.display = "block";
    keepHand.style.display = "block";
    anotherCard.style.display = "none";
    cardOne.style.display = "block";
    cardTwo.style.display = "block";
    cardThree.style.display = "none";
    cardFour.style.display = "none";
    randomDisplayCard(firstCard, secondCard);
    renderBlack();
};

function renderBlack(){
    cardAudio.play();
    sumElBlack.textContent = "Total: " + sum;
    if (sum <= 20) {
        messageBlack = "Do you want to draw a new card?";
        isAliveBlack = true;
    } else if (sum === 21) {
        gameOnGoing = false
        coinsAudio.play()
        messageBlack = "You've got Blackjack!";
        hasBlackJack = true;
        restartBlack.style.display = "block";
        if(betOneBlack.checked){
            credits += 2
            creditsAccumulated();
        } else if(betTwoBlack.checked){
            credits += 4
            creditsAccumulated();
        } else if(betFiveBlack.checked){
            credits += 10
            creditsAccumulated();
        }
        newCard.style.display = "none";
        anotherCard.style.display = "none";
        keepHand.style.display = "none";
    } else {
        gameOnGoing = false
        loseAudio.play()
        messageBlack = "You're out of the game!";
        isAliveBlack = false;
        restartBlack.style.display = "block";
        newCard.style.display = "none";
        anotherCard.style.display = "none";
        keepHand.style.display = "none";
    };
    messageElBlack.textContent = messageBlack;
    localStorage.credits = credits;
    updateCredits(credits);

};

function drawThirdCard() { 
    if (isAliveBlack === true && hasBlackJack === false) {
    let thirdcard = getRandomCard();
    sum += thirdcard;
    cards.push(thirdcard);
    randomDisplayThirdCard(thirdcard);
    cardThree.style.display = "block";
    newCard.style.display = "none";
    anotherCard.style.display = "block";
    renderBlack();
    };
};

function drawFourthCard() { 
    if (isAliveBlack === true && hasBlackJack === false) {
    let fourthcard = getRandomCard();
    sum += fourthcard;
    cards.push(fourthcard);
    randomDisplayFourthCard(fourthcard);
    renderBlack();
    cardFour.style.display = "block";
    }
};

function keepHandFunc() {
    let dealersHand = calculateDealer();
    newCard.style.display = "none";
    anotherCard.style.display = "none";
    keepHand.style.display = "none";
    gameOnGoing = false;
        if(dealersHand == 21){
            loseAudio.play();
            isAliveBlack = false;
            restartBlack.style.display = "block";
            messageBlack = "The dealer has blackjack — you lost!";
        } else if(dealersHand == 22 || dealersHand == 23){
            coinsAudio.play();
            isAliveBlack = false;
            restartBlack.style.display = "block";
            messageBlack = "The dealer has gone bust — you win!";
            if(betOneBlack.checked){
                credits += 2;
                creditsAccumulated();
            } else if(betTwoBlack.checked){
                credits += 4;
                creditsAccumulated();
            } else if(betFiveBlack.checked){
                credits += 10;
                creditsAccumulated();
            };
        } else if(dealersHand < 21) {
            if(sum > dealersHand){
                coinsAudio.play();
                isAliveBlack = false;
                restartBlack.style.display = "block";
                messageBlack = `The dealer had ${dealersHand} - you won!`;
                if(betOneBlack.checked){
                    credits += 2;
                    creditsAccumulated();
                } else if(betTwoBlack.checked){
                    credits += 4;
                    creditsAccumulated();
                } else if(betFiveBlack.checked){
                    credits += 10;
                    creditsAccumulated();
                }
            } else if(sum == dealersHand){
                isAliveBlack = false;
                restartBlack.style.display = "block";
                messageBlack = `The dealer had ${dealersHand} - it's a draw!`;
                if(betOneBlack.checked){
                    credits += 1;
                    creditsAccumulated();
                } else if(betTwoBlack.checked){
                    credits += 2;
                    creditsAccumulated();
                } else if(betFiveBlack.checked){
                    credits += 5;
                    creditsAccumulated();
                }
            } else {
                loseAudio.play();
                isAliveBlack = false;
                restartBlack.style.display = "block";
                messageBlack = `The dealer had ${dealersHand} - you lost!`;
            };
        };
        messageElBlack.textContent = messageBlack;
        localStorage.credits = credits;
        updateCredits(credits);
};

function restartBlackFunc(){
    betOneBlack.disabled = false;
    betTwoBlack.disabled = false;
    betFiveBlack.disabled = false;
    confirmButtonBlack.disabled = false;
    restartBlack.style.display = "none";
    explainerBlack.style.display = "block";
    explainedBlack.style.display = "none";
    messageElBlack.style.display = "block";
    sumElBlack.style.display = "none";
    cardSummaryBlack.style.display = "none";
    newCard.style.display = "none";
    keepHand.style.display = "none";
    anotherCard.style.display = "none";
    cardOne.style.display = "none";
    cardTwo.style.display = "none";
    cardThree.style.display = "none";
    cardFour.style.display = "none";
    messageElBlack.textContent = 'Place your bet!';
};

function calculateDealer() {
    return Math.floor( Math.random() * 7) + 17
};

// Card functions
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else { 
        return randomNumber
    };
};

function randomDisplayCard(card1, card2){
    switch(card1){
        case 11:
            imgBlack[0].src = '../images/casino/cards/card11.png';
            break;
        case 2: 
            imgBlack[0].src = '../images/casino/cards/card2.png';
            break;
        case 3:
            imgBlack[0].src = '../images/casino/cards/card3.png';
            break;
        case 4:
            imgBlack[0].src = '../images/casino/cards/card4.png';
            break;
        case 5:
            imgBlack[0].src = '../images/casino/cards/card5.png';
            break;
        case 6:
            imgBlack[0].src = '../images/casino/cards/card6.png';
            break;
        case 7:
            imgBlack[0].src = '../images/casino/cards/card7.png';
            break;
        case 8:
            imgBlack[0].src = '../images/casino/cards/card8.png';
            break;
        case 9:
            imgBlack[0].src = '../images/casino/cards/card9.png';
            break;
        case 10:
            imgBlack[0].src = '../images/casino/cards/card10.png';
            break;
        };

    switch(card2){
        case 11:
            imgBlack[1].src = '../images/casino/cards/card11.png';
            break;
        case 2: 
            imgBlack[1].src = '../images/casino/cards/card2.png';
            break;
        case 3:
            imgBlack[1].src = '../images/casino/cards/card3.png';
            break;
        case 4:
            imgBlack[1].src = '../images/casino/cards/card4.png';
            break;
        case 5:
            imgBlack[1].src = '../images/casino/cards/card5.png';
            break;
        case 6:
            imgBlack[1].src = '../images/casino/cards/card6.png';
            break;
        case 7:
            imgBlack[1].src = '../images/casino/cards/card7.png';
            break;
        case 8:
            imgBlack[1].src = '../images/casino/cards/card8.png';
            break;
        case 9:
            imgBlack[1].src = '../images/casino/cards/card9.png';
            break;
        case 10:
            imgBlack[1].src = '../images/casino/cards/card10.png';
            break;
        };
};

function randomDisplayThirdCard(card3){
    switch(card3){
        case 11:
            imgBlack[2].src = '../images/casino/cards/card11.png';
            break;
        case 2: 
            imgBlack[2].src = '../images/casino/cards/card2.png';
            break;
        case 3:
            imgBlack[2].src = '../images/casino/cards/card3.png';
            break;
        case 4:
            imgBlack[2].src = '../images/casino/cards/card4.png';
            break;
        case 5:
            imgBlack[2].src = '../images/casino/cards/card5.png';
            break;
        case 6:
            imgBlack[2].src = '../images/casino/cards/card6.png';
            break;
        case 7:
            imgBlack[2].src = '../images/casino/cards/card7.png';
            break;
        case 8:
            imgBlack[2].src = '../images/casino/cards/card8.png';
            break;
        case 9:
            imgBlack[2].src = '../images/casino/cards/card9.png';
            break;
        case 10:
            imgBlack[2].src = '../images/casino/cards/card10.png';
            break;
        };
};

function randomDisplayFourthCard(card4){
    switch(card4){
        case 11:
            imgBlack[3].src = '../images/casino/cards/card11.png';
            break;
        case 2: 
            imgBlack[3].src = '../images/casino/cards/card2.png';
            break;
        case 3:
            imgBlack[3].src = '../images/casino/cards/card3.png';
            break;
        case 4:
            imgBlack[3].src = '../images/casino/cards/card4.png';
            break;
        case 5:
            imgBlack[3].src = '../images/casino/cards/card5.png';
            break;
        case 6:
            imgBlack[3].src = '../images/casino/cards/card6.png';
            break;
        case 7:
            imgBlack[3].src = '../images/casino/cards/card7.png';
            break;
        case 8:
            imgBlack[3].src = '../images/casino/cards/card8.png';
            break;
        case 9:
            imgBlack[3].src = '../images/casino/cards/card9.png';
            break;
        case 10:
            imgBlack[3].src = '../images/casino/cards/card10.png';
            break;
        };
};