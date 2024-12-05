// General settings, sign-up & welcome
const signUpSection = document.getElementById('sign-up');
const userNameInput = document.getElementById('username');
const welcomeScreen = document.getElementById('welcome-screen');
const creditsText = document.getElementById('total-credits');
const introAudio = new Audio('../audio/casino/intro.mp3');

const profilePicture1 = document.getElementById('profile-picture1');
const profilePicture2 = document.getElementById('profile-picture2');
const profilePicture3 = document.getElementById('profile-picture3');
const profilePicture4 = document.getElementById('profile-picture4');

let credits = 50;
let profilePictureSelected = false;

profilePicture1.addEventListener('click', () => {
    profilePicture1.src = "../images/casino/profile/profile1-active.jpg";
    profilePicture2.src = "../images/casino/profile/profile2.jpg";
    profilePicture3.src = "../images/casino/profile/profile3.jpg";
    profilePicture4.src = "../images/casino/profile/profile4.jpg";
    profilePictureSelected = true;
});

profilePicture2.addEventListener('click', () => {
    profilePicture2.src = "../images/casino/profile/profile2-active.jpg";
    profilePicture1.src = "../images/casino/profile/profile1.jpg";
    profilePicture3.src = "../images/casino/profile/profile3.jpg";
    profilePicture4.src = "../images/casino/profile/profile4.jpg";
    profilePictureSelected = true;
});

profilePicture3.addEventListener('click', () => {
    profilePicture3.src = "../images/casino/profile/profile3-active.jpg";
    profilePicture1.src = "../images/casino/profile/profile1.jpg";
    profilePicture2.src = "../images/casino/profile/profile2.jpg";
    profilePicture4.src = "../images/casino/profile/profile4.jpg";
    profilePictureSelected = true;
});

profilePicture4.addEventListener('click', () => {
    profilePicture4.src = "../images/casino/profile/profile4-active.jpg";
    profilePicture1.src = "../images/casino/profile/profile1.jpg";
    profilePicture2.src = "../images/casino/profile/profile2.jpg";
    profilePicture3.src = "../images/casino/profile/profile3.jpg";
    profilePictureSelected = true;
});

const mainSection = document.querySelector('main');
const welcomeText = document.getElementById('welcome-text');
const welcomeImage = document.getElementById('welcome-image');
const headerUserName = document.getElementById('header-username');
const headerProfileImage = document.getElementById('header-profile');

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
    introAudio.play();
    localStorage.setItem('userName', userNameInput.value);
    localStorage.setItem('credits', credits);
    welcomeText.textContent = `Welcome ${localStorage.getItem('userName')}!`;
    welcomeImage.src = localStorage.getItem('userPicture');
    headerUserName.textContent = localStorage.getItem('userName');
    headerProfileImage.src = localStorage.getItem('userPicture');
    mainSection.style.display = "none";
    welcomeScreen.style.display = "flex";
    setTimeout(() => {
        welcomeScreen.style.display = "none";
        mainSection.style.display = "grid";
    }, 2500)
});

window.addEventListener('load', () => {
    welcomeText.textContent = `Welcome ${localStorage.getItem('userName')}!`
    welcomeImage.src = localStorage.getItem('userPicture');
    if(localStorage.getItem("userName") !== null){
        signUpSection.style.display = "none";
        welcomeScreen.style.display = "flex";
        setTimeout(() => {
            welcomeScreen.style.display = "none";
            mainSection.style.display = "grid";
            headerUserName.textContent = localStorage.getItem('userName');
            headerProfileImage.src = localStorage.getItem('userPicture');
            credits = localStorage.getItem('credits');
            creditsText.textContent = `Total credits: ${credits} CR`;
        // IMPORTANT OM DEZE DURATIE WEER OMHOOG TE ZETTEN ZODAT LAADSCHERM WORDT GETOOND!!!!!!!!!!!!
        }, 0);
    } else if (localStorage.getItem("userName") === null) {
        signUpSection.style.display = "flex"
    }
});

// Game selection
let gameOnGoing = false;
const gameHeaderIcon = document.getElementById('header-game-icon');
const gameHeaderText = document.getElementById('header-game-text');
const blackjackSelectGame = document.getElementById('blackjack');
const blackjackSelectBet = document.getElementById('blackjack-bet');
const slotsSelectGame = document.getElementById('slots');
const slotsSelectBet = document.getElementById('slots-bet');
const rouletteSelectGame = document.getElementById('roulette');
const rouletteSelectBet = document.getElementById('roulette-bet');
const rpsSelectGame = document.getElementById('rps');
const rpsSelectBet = document.getElementById('rps-bet');

const game1 = document.getElementById('game1').addEventListener('click', () => {
    if(gameOnGoing === false) {
        gameHeaderIcon.src = "../icons/casino/blackjack-icon.png";
        gameHeaderIcon.width = "40";
        gameHeaderIcon.height = "40";
        gameHeaderIcon.style.marginTop = "0px";
        gameHeaderIcon.style.marginLeft = "0px";
        gameHeaderText.textContent = 'Blackjack';
        gameHeaderText.style.marginRight = "0px";
        blackjackSelectGame.style.display = "block";
        blackjackSelectBet.style.display = "block";
        slotsSelectGame.style.display = "none";
        slotsSelectBet.style.display = "none";
        rouletteSelectGame.style.display = "none";
        rouletteSelectBet.style.display = "none";
        rpsSelectGame.style.display = "none";
        rpsSelectBet.style.display = "none";
    } else {
        return
    }
});

const game2 = document.getElementById('game2').addEventListener('click', () => {
    if(gameOnGoing === false) {
        gameHeaderIcon.src = "../icons/casino/slots-icon.png";
        gameHeaderIcon.width = "50";
        gameHeaderIcon.height = "35";
        gameHeaderIcon.style.marginTop = "4px";
        gameHeaderIcon.style.marginLeft = "4px";
        gameHeaderText.textContent = 'Slots';
        gameHeaderText.style.marginRight = "56px";
        blackjackSelectGame.style.display = "none";
        blackjackSelectBet.style.display = "none";
        slotsSelectGame.style.display = "block";
        slotsSelectBet.style.display = "block";
        rouletteSelectGame.style.display = "none";
        rouletteSelectBet.style.display = "none";
        rpsSelectGame.style.display = "none";
        rpsSelectBet.style.display = "none";
    } else {
        return
    }
});

const game3 = document.getElementById('game3').addEventListener('click', () => {
    if(gameOnGoing === false) {
        gameHeaderIcon.src = "../icons/casino/roulette-icon.png";
        gameHeaderIcon.width = "50";
        gameHeaderIcon.height = "35";
        gameHeaderIcon.style.marginTop = "2px";
        gameHeaderIcon.style.marginLeft = "0px";
        gameHeaderText.textContent = 'Roulette';
        gameHeaderText.style.marginRight = "2px";
        blackjackSelectGame.style.display = "none";
        blackjackSelectBet.style.display = "none";
        slotsSelectGame.style.display = "none";
        slotsSelectBet.style.display = "none";
        rouletteSelectGame.style.display = "block";
        rouletteSelectBet.style.display = "block";
        rpsSelectGame.style.display = "none";
        rpsSelectBet.style.display = "none";
    } else {
        return
    }
});

const game4 = document.getElementById('game4').addEventListener('click', () => {
    if(gameOnGoing === false) {
        gameHeaderIcon.src = "../icons/casino/rock-icon.png";
        gameHeaderIcon.width = "40";
        gameHeaderIcon.height = "40";
        gameHeaderIcon.style.marginTop = "-1px";
        gameHeaderIcon.style.marginLeft = "2px";
        gameHeaderText.textContent = 'Rock, Paper, Scissors';
        gameHeaderText.style.marginRight = "-216px";
        blackjackSelectGame.style.display = "none";
        blackjackSelectBet.style.display = "none";
        slotsSelectGame.style.display = "none";
        slotsSelectBet.style.display = "none";
        rouletteSelectGame.style.display = "none";
        rouletteSelectBet.style.display = "none";
        rpsSelectGame.style.display = "block";
        rpsSelectBet.style.display = "block";
    } else {
        return
    }
});

const more = document.getElementById('more').addEventListener('click', () => {
    console.log('komt nog')
});

// General properties
// const cardAudio = new Audio('../audio/casino/card.mp3');
const coinsAudio = new Audio('../audio/casino/coins.mp3');
const loseAudio = new Audio('../audio/casino/lose.mp3');
