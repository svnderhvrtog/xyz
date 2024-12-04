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
    mainSection.style.display = "none"
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
        }, 0) 
    } else if (localStorage.getItem("userName") === null) {
        signUpSection.style.display = "flex"
    }
})

// Game selection
let gameOnGoing = false;
const blackjackSelectGame = document.getElementById('blackjack');
const blackjackSelectBet = document.getElementById('blackjack-bet');
const rpsSelectGame = document.getElementById('rps');
const rpsSelectBet = document.getElementById('rps-bet');

const game1 = document.getElementById('game1').addEventListener('click', () => {
    if(gameOnGoing === false) {
        blackjackSelectGame.style.display = "block";
        blackjackSelectBet.style.display = "block";
        rpsSelectGame.style.display = "none";
        rpsSelectBet.style.display = "none";
    } else {
        return
    }
   
});
const game2 = document.getElementById('game2').addEventListener('click', () => {

});
const game3 = document.getElementById('game3').addEventListener('click', () => {

});
const game4 = document.getElementById('game4').addEventListener('click', () => {
    if(gameOnGoing === false) {
        blackjackSelectGame.style.display = "none";
        blackjackSelectBet.style.display = "none";
        rpsSelectGame.style.display = "block";
        rpsSelectBet.style.display = "block";
    } else {
        return
    }
    
});
const more = document.getElementById('more').addEventListener('click', () => {

});