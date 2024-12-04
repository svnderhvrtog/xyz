const betSlider = document.getElementById('bet-slider');
const betValue = document.getElementById('slider-output');
betSlider.oninput = () => {
    betValue.innerText = `${betSlider.value} CR`
};

const explainerRPS = document.getElementById('explainer-rps');
const explainedRPS = document.getElementById('explained-rps');

explainerRPS.addEventListener('click', explainFunc);
function explainFunc() {
    explainerRPS.style.display = "none";
    explainedRPS.style.display = "block";
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    explainerRPS.style.display = "none";
    explainedRPS.style.display = "none";
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
    render();
}