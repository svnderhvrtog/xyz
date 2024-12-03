// General settings, sign-up & welcome
const signUpSection = document.getElementById('sign-up')
const profilePicture1 = document.getElementById('profile-picture1')
const userNameInput = document.getElementById('username')
const welcomeScreen = document.getElementById('welcome-screen')
const creditsText = document.getElementById('total-credits')
let credits = 50;

let profilePictureSelected = false;
profilePicture1.addEventListener('click', () => {
    profilePicture1.src = "../images/casino/profile/profile1-active.jpg"
    profilePicture2.src = "../images/casino/profile/profile2.jpg"
    profilePicture3.src = "../images/casino/profile/profile3.jpg"
    profilePicture4.src = "../images/casino/profile/profile4.jpg"
    profilePictureSelected = true
})
const profilePicture2 = document.getElementById('profile-picture2')
profilePicture2.addEventListener('click', () => {
    profilePicture2.src = "../images/casino/profile/profile2-active.jpg"
    profilePicture1.src = "../images/casino/profile/profile1.jpg"
    profilePicture3.src = "../images/casino/profile/profile3.jpg"
    profilePicture4.src = "../images/casino/profile/profile4.jpg"
    profilePictureSelected = true
})
const profilePicture3 = document.getElementById('profile-picture3')
profilePicture3.addEventListener('click', () => {
    profilePicture3.src = "../images/casino/profile/profile3-active.jpg"
    profilePicture1.src = "../images/casino/profile/profile1.jpg"
    profilePicture2.src = "../images/casino/profile/profile2.jpg"
    profilePicture4.src = "../images/casino/profile/profile4.jpg"
    profilePictureSelected = true
})
const profilePicture4 = document.getElementById('profile-picture4')
profilePicture4.addEventListener('click', () => {
    profilePicture4.src = "../images/casino/profile/profile4-active.jpg"
    profilePicture1.src = "../images/casino/profile/profile1.jpg"
    profilePicture2.src = "../images/casino/profile/profile2.jpg"
    profilePicture3.src = "../images/casino/profile/profile3.jpg"
    profilePictureSelected = true
})

const mainSection = document.querySelector('main')
const welcomeText = document.getElementById('welcome-text')
const welcomeImage = document.getElementById('welcome-image')
const headerUserName = document.getElementById('header-username')
const headerProfileImage = document.getElementById('header-profile')

const submit = document.getElementById('submit').addEventListener('click', () => {
    if(userNameInput.value === ''){
        alert('please insert value')
        return
    } else if (userNameInput.value.length >= 12){
        alert('please not more than 12 charakters')
        return
    }

    if(profilePictureSelected === true){
        mainSection.style.display = "grid";
        signUpSection.style.display = "none";
    } else {
        alert('choose a profile picture')
        return
    }

    if (profilePicture1.src.includes("profile1-active.jpg")){
        localStorage.setItem('userPicture', "../images/casino/profile/profile1.jpg")
    } else if(profilePicture2.src.includes("profile2-active.jpg")){
        localStorage.setItem('userPicture', "../images/casino/profile/profile2.jpg")
    } else if(profilePicture3.src.includes("profile3-active.jpg")){
        localStorage.setItem('userPicture', "../images/casino/profile/profile3.jpg")
    } else if(profilePicture4.src.includes("profile4-active.jpg")){
        localStorage.setItem('userPicture', "../images/casino/profile/profile4.jpg")
    }
    localStorage.setItem('userName', userNameInput.value)
    localStorage.setItem('credits', credits)
    welcomeText.textContent = `Welcome ${localStorage.getItem('userName')}!`
    welcomeImage.src = localStorage.getItem('userPicture');
    headerUserName.textContent = localStorage.getItem('userName')
    headerProfileImage.src = localStorage.getItem('userPicture')

    welcomeScreen.style.display = "flex"
    setTimeout(() => {
        welcomeScreen.style.display = "none"
        mainSection.style.display = "grid"
    }, 2500)
})

window.addEventListener('load', () => {
    welcomeText.textContent = `Welcome ${localStorage.getItem('userName')}!`
    welcomeImage.src = localStorage.getItem('userPicture');
    if(localStorage.getItem("userName") !== null){
        signUpSection.style.display = "none"
        welcomeScreen.style.display = "flex"
        setTimeout(() => {
            welcomeScreen.style.display = "none"
            mainSection.style.display = "grid"
            headerUserName.textContent = localStorage.getItem('userName')
            headerProfileImage.src = localStorage.getItem('userPicture')
            credits = localStorage.getItem('credits')
            creditsText.textContent = `Total credits: ${credits} CR`;
            // IMPORTANT OM DEZE DURATIE WEER OMHOOG TE ZETTEN ZODAT LAADSCHERM WORDT GETOOND!!!!!!!!!!!!
        }, 2000) 
    } else if (localStorage.getItem("userName") === null) {
        signUpSection.style.display = "flex"
    }
})

// Blackjack
const betOneBlack = document.getElementById('bet-one');
const betTwoBlack = document.getElementById('bet-two');
const betFiveBlack = document.getElementById('bet-five');
const confirmButtonBlack = document.getElementById('confirm')
confirmButtonBlack.addEventListener('click', () => {
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
const explainer = document.getElementById('explainer');
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

explainer.addEventListener('click', explainFunc);
function explainFunc() {
    explainer.style.display = "none";
    explainedBlack.style.display = "block";
}

function startGame() {

    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    explainer.style.display = "none";
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
    explainer.style.display = "block";
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