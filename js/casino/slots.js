// Slots set-up
const betSliderSlots = document.getElementById('bet-slider-slots');
const betValueSlots = document.getElementById('slider-output-slots');
betSliderSlots.oninput = () => {
    betValueSlots.innerText = `${betSliderSlots.value} CR`;
};

const confirmButtonSlots = document.getElementById('confirm-slots');
confirmButtonSlots.addEventListener('click', () => {
    gameOnGoing = true;
    betSliderSlots.disabled = true;
    confirmButtonSlots.disabled = true;
    credits -= parseInt(betSliderSlots.value);
    creditsDeposit();
    setTimeout(() => {
        startSlotsGame();
    }, animationDurationShort)
    localStorage.credits = credits;
    updateCredits(credits);
});

// Slots game
const messageElSlots = document.getElementById('message-el-slots');
const explainerSlots = document.getElementById('explainer-slots');
const explainedSlots = document.getElementById('explained-slots');
const sumarySlots = document.getElementById('slots-summary');
const slotOne = document.getElementById('slot-one');
const slotTwo = document.getElementById('slot-two');
const slotThree = document.getElementById('slot-three');
const restartSlots = document.getElementById('restart-slots');

restartSlots.addEventListener('click', restartSlotsFunc);
explainerSlots.addEventListener('click', explainSlotsFunc);

function explainSlotsFunc() {
    explainerSlots.style.display = "none";
    explainedSlots.style.display = "block";
};

function startSlotsGame() {
    messageElSlots.textContent = 'We are ready for take-off';
    explainerSlots.style.display = "none";
    explainedSlots.style.display = "none";
    sumarySlots.style.display = "flex";
    slotsStartAudio.play();
    slotsSpinning();
    setTimeout(() => {
    renderSlots();
    }, 2250);
};

const slotOneImg = '../images/casino/slots/slot1.png';
const slotTwoImg = '../images/casino/slots/slot2.png';
const slotThreeImg = '../images/casino/slots/slot3.png';
const slotFourImg = '../images/casino/slots/slot4.png';
const slotFiveImg = '../images/casino/slots/slot5.png';
const slotSixImg = '../images/casino/slots/slot6.png';

function randomSlot() {
    let randomSlotNum = Math.floor( Math.random() * 6) + 1;
    if(randomSlotNum === 1){
        return slotOneImg
    } else if(randomSlotNum === 2){
        return slotTwoImg
    } else if(randomSlotNum === 3){
        return slotThreeImg
    } else if (randomSlotNum === 4){
        return slotFourImg
    } else if (randomSlotNum === 5){
        return slotFiveImg
    } else if (randomSlotNum === 6){
        return slotSixImg
    };
};

function randomSlotGen() {
    slotOne.src = randomSlot();
    slotTwo.src = randomSlot();
    slotThree.src = randomSlot();
};

function emptySlot() {
    slotOne.src = '';
    slotTwo.src = '';
    slotThree.src = '';
};

function slotsSpinning() {
    setTimeout(() => {
        randomSlotGen();
    }, 300)
    setTimeout(() => {
        randomSlotGen();
    }, animationDurationShort)
    setTimeout(() => {
        randomSlotGen();
    }, 800)
    setTimeout(() => {
        randomSlotGen();
    }, 1100)
    setTimeout(() => {
        randomSlotGen();
    }, 1400)
    setTimeout(() => {
        randomSlotGen();
    }, 1700)
    setTimeout(() => {
        randomSlotGen();
    }, 2000);
};

function renderSlots() {
    const slotOneResult = randomSlot();
    const slotTwoResult = randomSlot();
    const slotThreeResult = randomSlot();
    slotOne.src = slotOneResult;
    slotTwo.src = slotTwoResult;
    slotThree.src = slotThreeResult;
    if (slotOneResult === slotTwoResult && slotTwoResult === slotThreeResult){
        slotsJackpotAudio.play();
        messageElSlots.textContent = "Jackpot!";
        restartSlots.style.display = "block";
        setTimeout(() => {
            emptySlot();
        }, 100);
        setTimeout(() => {
            slotOne.src = slotOneResult;
            slotTwo.src = slotTwoResult;
            slotThree.src = slotThreeResult;        
        }, 300);
        setTimeout(() => {
            emptySlot();
        }, animationDurationShort);
        setTimeout(() => {
            slotOne.src = slotOneResult;
            slotTwo.src = slotTwoResult;
            slotThree.src = slotThreeResult;        
        }, 700);
        setTimeout(() => {
            emptySlot();
        }, 900);
        setTimeout(() => {
            slotOne.src = slotOneResult;
            slotTwo.src = slotTwoResult;
            slotThree.src = slotThreeResult;        
        }, 1100)
        setTimeout(() => {
            emptySlot();
        }, 1300);
        setTimeout(() => {
            slotOne.src = slotOneResult;
            slotTwo.src = slotTwoResult;
            slotThree.src = slotThreeResult;        
        }, 1500);
        gameOnGoing = false;
        credits += (parseInt(betSliderSlots.value) * 1.5);
        creditsAccumulated();
    } else if(slotOneResult === slotTwoResult || slotTwoResult === slotThreeResult || slotOneResult === slotThreeResult){
        slotsWinAudio.play();
        messageElSlots.textContent = "You won!";
        restartSlots.style.display = "block";
        setTimeout(() => {
            emptySlot();
        }, 100);
        setTimeout(() => {
            slotOne.src = slotOneResult;
            slotTwo.src = slotTwoResult;
            slotThree.src = slotThreeResult;        
        }, 300);
        setTimeout(() => {
            emptySlot();
        }, animationDurationShort);
        setTimeout(() => {
            slotOne.src = slotOneResult;
            slotTwo.src = slotTwoResult;
            slotThree.src = slotThreeResult;        
        }, 700);
        setTimeout(() => {
            emptySlot();
        }, 900);
        setTimeout(() => {
            slotOne.src = slotOneResult;
            slotTwo.src = slotTwoResult;
            slotThree.src = slotThreeResult;        
        }, 1100);
        setTimeout(() => {
            emptySlot();
        }, 1300);
        setTimeout(() => {
            slotOne.src = slotOneResult;
            slotTwo.src = slotTwoResult;
            slotThree.src = slotThreeResult;        
        }, 1500);
        gameOnGoing = false;
        credits += (parseInt(betSliderSlots.value) * 1.5)
        creditsAccumulated();
    } else {        
        messageElSlots.textContent = "You lost!";
        restartSlots.style.display = "block";
        gameOnGoing = false;
    };
    localStorage.credits = credits;
    updateCredits(credits);
};

function restartSlotsFunc() {
    betSliderSlots.disabled = false;
    confirmButtonSlots.disabled = false;
    messageElSlots.textContent = "Place your bet!";
    restartSlots.style.display = "none";
    explainerSlots.style.display = "block";
    explainedSlots.style.display = "none";
    sumarySlots.style.display = "none";
};