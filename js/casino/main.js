// Audio properties
const audioFiles = {
    introAudio: new Audio('../audio/casino/intro.mp3'),
    coinsAudio: new Audio('../audio/casino/coins.mp3'),
    loseAudio: new Audio('../audio/casino/lose.mp3'),
    gameBlackAudio: new Audio('../audio/casino/game-blackjack.mp3'),
    gameSlotsAudio: new Audio('../audio/casino/game-slots.mp3'),
    gameRouletteAudio: new Audio('../audio/casino/game-roulette.mp3'),
    gameRPSAudio: new Audio('../audio/casino/game-rps.mp3'),
    optionsAudio: new Audio('../audio/casino/game-options.mp3'),
    cardAudio: new Audio('../audio/casino/card.mp3'),
    loadAudio: new Audio('../audio/casino/roulette-load.mp3'),
    bigWinAudio: new Audio('../audio/casino/roulette-bigwin.mp3'),
    loseRouletteAudio: new Audio('../audio/casino/roulette-lose.mp3'),
    slotsStartAudio: new Audio('../audio/casino/slots-start.mp3'),
    slotsJackpotAudio: new Audio('../audio/casino/slots-jackpot.mp3'),
    slotsWinAudio: new Audio('../audio/casino/slots-win.mp3'),
    rpsLoseAudio: new Audio('../audio/casino/rps-lose.mp3'),
    rpsWaitAudio: new Audio('../audio/casino/rps-wait.mp3')
};

const { 
    introAudio, coinsAudio, loseAudio, gameBlackAudio, gameSlotsAudio,
    gameRouletteAudio, gameRPSAudio, optionsAudio, cardAudio, loadAudio,
    bigWinAudio, loseRouletteAudio, slotsStartAudio, slotsJackpotAudio,
    slotsWinAudio, rpsLoseAudio, rpsWaitAudio
} = audioFiles;

// Animation
const animationDurationShort = 500;
const animationDurationLong = 2500;

// General settings, sign-up & welcome
const signUpSection = document.getElementById('sign-up');
const userNameInput = document.getElementById('username');
const welcomeScreen = document.getElementById('welcome-screen');
const creditsText = document.getElementById('total-credits');
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
const inputDiv = document.getElementById('input-div');

document.getElementById('submit').addEventListener('click', async () => {
    const username = document.getElementById('username').value.trim();
    let profileImage = "";
    const selectedProfileImage = document.querySelector('.profile-setupimg.selected');
    if (selectedProfileImage) {
        profileImage = selectedProfileImage.src.replace("-active", "");
    }
    const credits = 50;
    if (!username) {
        errorMessage('Please enter a username');
        return;
    }
    if (username.length > 8) {
        errorMessage('Your username cannot be more than 8 characters');
        return;
    }
    if (!profileImage) {
        errorMessage('Please choose a profile picture');
        return;
    }
    try {
        const response = await fetch("php/add_user.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `username=${encodeURIComponent(username)}&profile_picture=${encodeURIComponent(profileImage)}&credits=${credits}`,
        });
        const result = await response.text();
        console.log("add_user.php response:", result);
        if (!result.includes("succes")) {
            errorMessage("Fout bij opslaan gebruiker.");
            return;
        }
        localStorage.setItem('userName', username);
        localStorage.setItem('userPicture', profileImage);
        localStorage.setItem('credits', credits);
        await loadLeaderboard();
        welcomeText.textContent = `Welcome ${username}!`;
        welcomeImage.src = profileImage;
        headerUserName.textContent = username;
        headerProfileImage.src = profileImage;
        signUpSection.style.display = "none";
        mainSection.style.display = "grid";
        welcomeScreen.style.display = "flex";
        introAudio.play();
        setTimeout(() => {
            welcomeScreen.style.display = "none";
            mainSection.style.display = "grid";
        }, animationDurationLong);
    } catch (error) {
        console.error("Fout bij opslaan gebruiker:", error);
    }
});

// Profile picture set-up
document.querySelectorAll('.profile-setupimg').forEach((img) => {
    img.addEventListener('click', () => {
        document.querySelectorAll('.profile-setupimg').forEach((img) => img.classList.remove('selected'));
        img.classList.add('selected');
    });
});

function errorMessage(text) {
    const message = document.createElement('p');
    const messageText = document.createTextNode(text);
    message.classList.add('error-message');
    message.style.display = "block";
    message.appendChild(messageText);
    inputDiv.appendChild(message);
};

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
        }, animationDurationLong);
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
const profileDiv = document.getElementById('profile-div');

const game1 = document.getElementById('game1').addEventListener('click', () => {
    if(gameOnGoing === false) {
        gameBlackAudio.play();
        gameHeaderIcon.src = "../icons/casino/blackjack-icon.png";
        gameHeaderIcon.width = "40";
        gameHeaderIcon.height = "40";
        gameHeaderIcon.style.marginTop = "0px";
        gameHeaderIcon.style.marginLeft = "0px";
        profileDiv.style.marginLeft = "0px";
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
        gameSlotsAudio.play();
        gameHeaderIcon.src = "../icons/casino/slots-icon.png";
        gameHeaderIcon.width = "50";
        gameHeaderIcon.height = "35";
        gameHeaderIcon.style.marginTop = "4px";
        gameHeaderIcon.style.marginLeft = "4px";
        profileDiv.style.marginLeft = "0px";
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
        gameRouletteAudio.play();
        gameHeaderIcon.src = "../icons/casino/roulette-icon.png";
        gameHeaderIcon.width = "50";
        gameHeaderIcon.height = "35";
        gameHeaderIcon.style.marginTop = "2px";
        gameHeaderIcon.style.marginLeft = "0px";
        gameHeaderText.textContent = 'Roulette';
        gameHeaderText.style.marginRight = "2px";
        profileDiv.style.marginLeft = "0px";
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
        gameRPSAudio.play();
        gameHeaderIcon.src = "../icons/casino/rock-icon.png";
        gameHeaderIcon.width = "40";
        gameHeaderIcon.height = "40";
        gameHeaderIcon.style.marginTop = "22px";
        gameHeaderIcon.style.marginLeft = "14px";
        profileDiv.style.marginLeft = "230px";
        gameHeaderText.textContent = 'Rock, Paper, Scissors';
        gameHeaderText.style.marginRight = "-716px";
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

const options = document.getElementById('options');
let overlayOptions = document.getElementById('overlay-options');
options.addEventListener('click', () => {
    optionsAudio.play();
    if(getComputedStyle(overlayOptions).display === "none") {
        overlayOptions.style.display = "block";
    }
});

overlayOptions.addEventListener('click', (event) => {
    if (event.target === overlayOptions) {
        overlayOptions.style.display = "none";
    }
});

// Options audio
const audioText = document.getElementById('audio-text');
const audioImg = document.getElementById('audio-img');
let audioEnabled = true;

audioText.addEventListener('click', changeAudio);
audioImg.addEventListener('click', changeAudio);

function changeAudio() {
    audioEnabled = !audioEnabled; 
    audioText.textContent = audioEnabled ? 'Audio ON' : 'Audio OFF';
    for (const audio of Object.values(audioFiles)) {
        audio.volume = audioEnabled ? 1 : 0;
    }
    audioImg.src = audioEnabled
        ? '../icons/casino/audioOn-icon.png'
        : '../icons/casino/audioOff-icon.png';
};

// Options account
const accountText = document.getElementById('account-text');
const accountImg = document.getElementById('account-img');

accountText.addEventListener('click', () => {
    if(confirm('Are you sure that you want to delete your account?') === false) {
        return
    } else {
        localStorage.clear();
        location.reload();
    }
});

accountImg.addEventListener('click', () => {
    if(confirm('Are you sure that you want to delete your account?') === false) {
        return
    } else {
        localStorage.clear();
        location.reload();
    }
});

// Credits function
function creditsDeposit() {
    creditsText.style.color = 'red';
    creditsText.textContent = `Total credits: ${credits} CR`;
    setTimeout(() => {
        creditsText.style.color = 'white';
        creditsText.textContent = `Total credits: ${credits} CR`;
    }, animationDurationShort)
};

function creditsAccumulated() {
    creditsText.style.color = 'green';
    creditsText.textContent = `Total credits: ${credits} CR`;
    setTimeout(() => {
        creditsText.style.color = 'white';
        creditsText.textContent = `Total credits: ${credits} CR`;
    }, animationDurationShort)
};        

// Leaderboard function
document.addEventListener("DOMContentLoaded", loadLeaderboard);
async function loadLeaderboard() {
    try {
        const response = await fetch('/php/get_leaderboard.php');
        const data = await response.json(); 
        const leaderboardContainer = document.querySelector('.leaderboard-container');
        leaderboardContainer.innerHTML = '';
        const medals = ['🥇', '🥈', '🥉'];
        data.forEach((player, index) => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('leaderboard-player');
            playerDiv.innerHTML = `
                <img src="${player.profile_image}" width="70" height="70" draggable="false">
                <div class="leaderboard-text">
                    <h4>${player.name} ${medals[index]}</h4>
                    <h5 class="leaderboard-h5">${player.credits} CR</h5>
                </div>
            `;
            leaderboardContainer.appendChild(playerDiv);
        });
    } catch (error) {
        console.error("Fout bij het laden van de leaderboard:", error);
    }
};
setInterval(loadLeaderboard, 5000);

// Update credits in leaderboard
async function updateCredits(newCredits) {
    const username = localStorage.getItem('userName');
    if (!username) return;
    try {
        const response = await fetch('/php/update_leaderboard.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `name=${encodeURIComponent(username)}&profile_image=${encodeURIComponent(localStorage.getItem('userPicture'))}&credits=${newCredits}`
        });
        const result = await response.text();
        console.log("Update response:", result);
        if (result.includes("bijgewerkt")) {
            localStorage.setItem('credits', newCredits);
            loadLeaderboard();
        }
    } catch (error) {
        console.error('Fout bij updaten credits:', error);
    }
};