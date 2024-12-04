// Blackjack
const betOneBlack = document.getElementById('bet-one');
const betTwoBlack = document.getElementById('bet-two');
const betFiveBlack = document.getElementById('bet-five');
const confirmButtonBlack = document.getElementById('confirm')
confirmButtonBlack.addEventListener('click', () => {
    gameOnGoing = true;
    if(betOneBlack.checked) {
        betOneBlack.disabled = true;
        betTwoBlack.disabled = true;
        betFiveBlack.disabled = true;
        confirmButtonBlack.disabled = true;
        credits -= 1;
        creditsText.style.color = 'red'
        creditsText.textContent = `Total credits: ${credits} CR`;
        setTimeout(() => {
            creditsText.style.color = 'white'
            creditsText.textContent = `Total credits: ${credits} CR`;
        }, 500)
        setTimeout(() => {
            startGame()
        }, 500)
    } else if (betTwoBlack.checked) {
        betOneBlack.disabled = true;
        betTwoBlack.disabled = true;
        betFiveBlack.disabled = true;
        confirmButtonBlack.disabled = true;
        credits -= 2;
        creditsText.style.color = 'red'
        creditsText.textContent = `Total credits: ${credits} CR`;
        setTimeout(() => {
            creditsText.style.color = 'white'
            creditsText.textContent = `Total credits: ${credits} CR`;
        }, 500)
        setTimeout(() => {
            startGame()
        }, 500)
    } else if (betFiveBlack.checked) {
        betOneBlack.disabled = true;
        betTwoBlack.disabled = true;
        betFiveBlack.disabled = true;
        confirmButtonBlack.disabled = true;
        credits -= 5;
        creditsText.style.color = 'red'
        creditsText.textContent = `Total credits: ${credits} CR`;
        setTimeout(() => {
            creditsText.style.color = 'white'
            creditsText.textContent = `Total credits: ${credits} CR`;
        }, 500)
        setTimeout(() => {
            startGame()
        }, 500)
    }    
})


let cards = [];
let sum = 0;

let isAlive = false;
let hasBlackJack = false;
let message = "";

const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardEl = document.getElementById('cards-el');
const explainerBlack = document.getElementById('explainer-black');
const explainedBlack = document.getElementById('explained-black');
const cardSummary = document.querySelector(".center-cards");
const img = document.querySelectorAll(".card");
const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const cardThree = document.getElementById('card-three');
const cardFour = document.getElementById('card-four');

// const cardAudio = new Audio('../audio/casino/card.mp3');
const coinsAudio = new Audio('../audio/casino/coins.mp3');
const loseAudio = new Audio('../audio/casino/lose.mp3');


const newCard = document.getElementById('new-card');
newCard.addEventListener('click', drawThirdCard);

const anotherCard = document.getElementById('another-card');
anotherCard.addEventListener('click', drawFourthCard);

const keepHand = document.getElementById('keep-hand');
keepHand.addEventListener('click', keepHandFunc)

const restartBlack = document.getElementById('restart-black')
restartBlack.addEventListener('click', restartBlackFunc)

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

explainerBlack.addEventListener('click', explainFunc);
function explainFunc() {
    explainerBlack.style.display = "none";
    explainedBlack.style.display = "block";
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    explainerBlack.style.display = "none";
    explainedBlack.style.display = "none";
    messageEl.style.display = "block";
    sumEl.style.display = "block";
    cardEl.style.display = "none";
    cardSummary.style.display = "flex";
    newCard.style.display = "block";
    keepHand.style.display = "block";
    anotherCard.style.display = "none";
    cardOne.style.display = "block";
    cardTwo.style.display = "block";
    cardThree.style.display = "none";
    cardFour.style.display = "none";
    randomDisplayCard(firstCard, secondCard)
    render();
}

function randomDisplayCard(card1, card2){
    switch(card1){
        case 11:
            img[0].src = '../images/casino/cards/card11.png'
            break;
        case 2: 
            img[0].src = '../images/casino/cards/card2.png'
            break;
        case 3:
            img[0].src = '../images/casino/cards/card3.png'
            break;
        case 4:
            img[0].src = '../images/casino/cards/card4.png'
            break;
        case 5:
            img[0].src = '../images/casino/cards/card5.png'
            break;
        case 6:
            img[0].src = '../images/casino/cards/card6.png'
            break;
        case 7:
            img[0].src = '../images/casino/cards/card7.png'
            break;
        case 8:
            img[0].src = '../images/casino/cards/card8.png'
            break;
        case 9:
            img[0].src = '../images/casino/cards/card9.png'
            break;
        case 10:
            img[0].src = '../images/casino/cards/card10.png'
            break;
        }

    switch(card2){
        case 11:
            img[1].src = '../images/casino/cards/card11.png'
            break;
        case 2: 
            img[1].src = '../images/casino/cards/card2.png'
            break;
        case 3:
            img[1].src = '../images/casino/cards/card3.png'
            break;
        case 4:
            img[1].src = '../images/casino/cards/card4.png'
            break;
        case 5:
            img[1].src = '../images/casino/cards/card5.png'
            break;
        case 6:
            img[1].src = '../images/casino/cards/card6.png'
            break;
        case 7:
            img[1].src = '../images/casino/cards/card7.png'
            break;
        case 8:
            img[1].src = '../images/casino/cards/card8.png'
            break;
        case 9:
            img[1].src = '../images/casino/cards/card9.png'
            break;
        case 10:
            img[1].src = '../images/casino/cards/card10.png'
            break;
        }
}


function render(){
    // cardAudio.play();
    cardEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    };

    sumEl.textContent = "Total: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true;
    } else if (sum === 21) {
        gameOnGoing = false
        coinsAudio.play()
        message = "You've got Blackjack!";
        hasBlackJack = true;
        restartBlack.style.display = "block";
        if(betOneBlack.checked){
            credits += 2
            creditsText.style.color = 'green'
            creditsText.textContent = `Total credits: ${credits} CR`;
            setTimeout(() => {
                creditsText.style.color = 'white'
                creditsText.textContent = `Total credits: ${credits} CR`;
            }, 500)
        } else if(betTwoBlack.checked){
            credits += 4
            creditsText.style.color = 'green'
            creditsText.textContent = `Total credits: ${credits} CR`;
            setTimeout(() => {
                creditsText.style.color = 'white'
                creditsText.textContent = `Total credits: ${credits} CR`;
            }, 500)
        } else if(betFiveBlack.checked){
            credits += 10
            creditsText.style.color = 'green'
            creditsText.textContent = `Total credits: ${credits} CR`;
            setTimeout(() => {
                creditsText.style.color = 'white'
                creditsText.textContent = `Total credits: ${credits} CR`;
            }, 500)
        }
        newCard.style.display = "none";
        anotherCard.style.display = "none";
        keepHand.style.display = "none";
    } else {
        gameOnGoing = false
        loseAudio.play()
        message = "You're out of the game!";
        isAlive = false;
        restartBlack.style.display = "block";
        newCard.style.display = "none";
        anotherCard.style.display = "none";
        keepHand.style.display = "none";
    }
    messageEl.textContent = message;
    localStorage.credits = credits
};


function drawThirdCard() { 
    if (isAlive === true && hasBlackJack === false) {
    let thirdcard = getRandomCard();
    sum += thirdcard;
    cards.push(thirdcard);
    randomDisplayThirdCard(thirdcard)
    cardThree.style.display = "block";
    newCard.style.display = "none";
    anotherCard.style.display = "block";
    render()
    }
};

function drawFourthCard() { 
    if (isAlive === true && hasBlackJack === false) {
    let fourthcard = getRandomCard();
    sum += fourthcard;
    cards.push(fourthcard);
    randomDisplayFourthCard(fourthcard)
    render()
    cardFour.style.display = "block";
    }
};

function keepHandFunc() {
    let dealersHand = calculateDealer()
    newCard.style.display = "none";
    anotherCard.style.display = "none";
    keepHand.style.display = "none";
    gameOnGoing = false
        if(dealersHand == 21){
            loseAudio.play()
            isAlive = false
            restartBlack.style.display = "block";
            message = "The dealer has blackjack — you lost!";
        } else if(dealersHand == 22 || dealersHand == 23){
            coinsAudio.play()
            isAlive = false
            restartBlack.style.display = "block";
            message = "The dealer has gone bust — you win!";
            if(betOneBlack.checked){
                credits += 2
                creditsText.style.color = 'green'
                creditsText.textContent = `Total credits: ${credits} CR`;
                setTimeout(() => {
                    creditsText.style.color = 'white'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                }, 500)
            } else if(betTwoBlack.checked){
                credits += 4
                creditsText.style.color = 'green'
                creditsText.textContent = `Total credits: ${credits} CR`;
                setTimeout(() => {
                    creditsText.style.color = 'white'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                }, 500)
            } else if(betFiveBlack.checked){
                credits += 10
                creditsText.style.color = 'green'
                creditsText.textContent = `Total credits: ${credits} CR`;
                setTimeout(() => {
                    creditsText.style.color = 'white'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                }, 500)
            }
        } else if(dealersHand < 21) {
            if(sum > dealersHand){
                coinsAudio.play()
                isAlive = false
                restartBlack.style.display = "block";
                message = `The dealer had ${dealersHand} - you won!`
                if(betOneBlack.checked){
                    credits += 2
                    creditsText.style.color = 'green'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                    setTimeout(() => {
                        creditsText.style.color = 'white'
                        creditsText.textContent = `Total credits: ${credits} CR`;
                    }, 500)
                } else if(betTwoBlack.checked){
                    credits += 4
                    creditsText.style.color = 'green'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                    setTimeout(() => {
                        creditsText.style.color = 'white'
                        creditsText.textContent = `Total credits: ${credits} CR`;
                    }, 500)
                } else if(betFiveBlack.checked){
                    credits += 10
                    creditsText.style.color = 'green'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                    setTimeout(() => {
                        creditsText.style.color = 'white'
                        creditsText.textContent = `Total credits: ${credits} CR`;
                    }, 500)
                }
            } else if(sum == dealersHand){
                isAlive = false
                restartBlack.style.display = "block";
                message = `The dealer had ${dealersHand} - it's a draw!`
                if(betOneBlack.checked){
                    credits += 1
                    creditsText.style.color = 'green'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                    setTimeout(() => {
                        creditsText.style.color = 'white'
                        creditsText.textContent = `Total credits: ${credits} CR`;
                    }, 500)
                } else if(betTwoBlack.checked){
                    credits += 2
                    creditsText.style.color = 'green'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                    setTimeout(() => {
                        creditsText.style.color = 'white'
                        creditsText.textContent = `Total credits: ${credits} CR`;
                    }, 500)
                } else if(betFiveBlack.checked){
                    credits += 5
                    creditsText.style.color = 'green'
                    creditsText.textContent = `Total credits: ${credits} CR`;
                    setTimeout(() => {
                        creditsText.style.color = 'white'
                        creditsText.textContent = `Total credits: ${credits} CR`;
                    }, 500)
                }
            } else {
                loseAudio.play()
                isAlive = false
                restartBlack.style.display = "block";
                message = `The dealer had ${dealersHand} - you lost!`
            }
        }
        messageEl.textContent = message;
        localStorage.credits = credits
}

function restartBlackFunc(){
    betOneBlack.disabled = false;
    betTwoBlack.disabled = false;
    betFiveBlack.disabled = false;
    confirmButtonBlack.disabled = false;
    restartBlack.style.display = "none";
    explainerBlack.style.display = "block";
    explainedBlack.style.display = "none";
    messageEl.style.display = "block";
    sumEl.style.display = "none";
    cardEl.style.display = "none";
    cardSummary.style.display = "none";
    newCard.style.display = "none";
    keepHand.style.display = "none";
    anotherCard.style.display = "none";
    cardOne.style.display = "none";
    cardTwo.style.display = "none";
    cardThree.style.display = "none";
    cardFour.style.display = "none";
    messageEl.textContent = 'Place your bet!'
}

function calculateDealer() {
    return Math.floor( Math.random() * 7) + 17
}
calculateDealer()

function randomDisplayThirdCard(card3){
    switch(card3){
        case 11:
            img[2].src = '../images/casino/cards/card11.png'
            break;
        case 2: 
            img[2].src = '../images/casino/cards/card2.png'
            break;
        case 3:
            img[2].src = '../images/casino/cards/card3.png'
            break;
        case 4:
            img[2].src = '../images/casino/cards/card4.png'
            break;
        case 5:
            img[2].src = '../images/casino/cards/card5.png'
            break;
        case 6:
            img[2].src = '../images/casino/cards/card6.png'
            break;
        case 7:
            img[2].src = '../images/casino/cards/card7.png'
            break;
        case 8:
            img[2].src = '../images/casino/cards/card8.png'
            break;
        case 9:
            img[2].src = '../images/casino/cards/card9.png'
            break;
        case 10:
            img[2].src = '../images/casino/cards/card10.png'
            break;
        }
}

function randomDisplayFourthCard(card4){
    switch(card4){
        case 11:
            img[3].src = '../images/casino/cards/card11.png'
            break;
        case 2: 
            img[3].src = '../images/casino/cards/card2.png'
            break;
        case 3:
            img[3].src = '../images/casino/cards/card3.png'
            break;
        case 4:
            img[3].src = '../images/casino/cards/card4.png'
            break;
        case 5:
            img[3].src = '../images/casino/cards/card5.png'
            break;
        case 6:
            img[3].src = '../images/casino/cards/card6.png'
            break;
        case 7:
            img[3].src = '../images/casino/cards/card7.png'
            break;
        case 8:
            img[3].src = '../images/casino/cards/card8.png'
            break;
        case 9:
            img[3].src = '../images/casino/cards/card9.png'
            break;
        case 10:
            img[3].src = '../images/casino/cards/card10.png'
            break;
        }
}