'use strict';

// Start settings
const startButton = document.getElementById('start-button').addEventListener('click', chooseBattle);
const introduction = document.getElementById('introduction');
const youName = document.getElementsByName('selection-you-name');
const cpuName = document.getElementsByName('selection-cpu-name');
const battleOne = document.getElementById('battle-option1');
const battleTwo = document.getElementById('battle-option2');
const battleThree = document.getElementById('battle-option3');
const battleFour = document.getElementById('battle-option4');

function chooseBattle() {
    for(let i = 0; i < youName.length; i++) {
        if (youName[i].checked) {
        var valueYou = youName[i].value;
        } 
    }   

    for(let i = 0; i < cpuName.length; i++) {
        if (cpuName[i].checked) {
        var valueCpu = cpuName[i].value;
        }
    }

    if(valueYou == 'bulbasaur' && valueCpu == 'squirtle'){
        introduction.style.display = "none";
        battleOne.style.display = "block";
    } else if (valueYou == 'bulbasaur' && valueCpu == 'vulpix') {
        introduction.style.display = "none";
        battleTwo.style.display = "block";
    } else if (valueYou == 'pidgey' && valueCpu == 'squirtle') {
        introduction.style.display = "none";
        battleThree.style.display = "block";
    } else if (valueYou == 'pidgey' && valueCpu == 'vulpix') {
        introduction.style.display = "none";
        battleFour.style.display = "block";
    }
}

// General battle options
let playerStartHealthBulbasaur = 95;
let playerStartHealthPidgey = 100;
let challengerStartHealthSquirtle = 100;
let challengerStartHealthVulpix = 110;
let playerIsAlive = true;
let challengerIsAlive = true;
let logTextOne = document.getElementById('logtext1');
let logTextTwo = document.getElementById('logtext2');
let logTextThree = document.getElementById('logtext3');
let logTextFour = document.getElementById('logtext4');

let bulbasaurHealthOne = document.getElementById('bulbasaurHP1');
let bulbasaurHealthTwo = document.getElementById('bulbasaurHP2');
let pidgeyHealthOne = document.getElementById('pidgeyHP1');
let pidgeyHealthTwo = document.getElementById('pidgeyHP2');
let squirtleHealthOne = document.getElementById('squirtleHP1');
let squirtleHealthTwo = document.getElementById('squirtleHP2');
let vulpixHealthOne = document.getElementById('vulpixHP1');
let vulpixHealthTwo = document.getElementById('vulpixHP2');

// Sound general
const victorySound = new Audio('../audio/poke/poke/victory.mp3');

// Battle sound Bulbasaur
const quickSound = new Audio('../audio/poke/quick.mp3');
const vineSound = new Audio('../audio/poke/vine.mp3');
const poisonSound = new Audio('../audio/poke/poison.mp3');
const leechSound = new Audio('../audio/poke/leech.mp3');

// Battle sound Pidgey
const tackleSound = new Audio('../audio/poke/tackle.mp3');
const gustSound = new Audio('../audio/poke/gust.mp3');
const hurricaneSound = new Audio('../audio/poke/hurricane.mp3');
const sandAttackSound = new Audio('../audio/poke/sandattack.mp3');

// Battle option 1
const attackOneBvsS = document.getElementById('attack1BvsS').addEventListener('click', attackOneBvsSFunct);
const attackTwoBvsS = document.getElementById('attack2BvsS').addEventListener('click', attackTwoBvsSFunct);
const attackThreeBvsS = document.getElementById('attack3BvsS').addEventListener('click', attackThreeBvsSFunct);
const attackFourBvsS = document.getElementById('attack4BvsS').addEventListener('click', attackFourBvsSFunct);

let attackCounterOneBvsS = document.getElementById('attackCounter1BvsS');
let attackCounterTwoBvsS = document.getElementById('attackCounter2BvsS');
let attackCounterThreeBvsS = document.getElementById('attackCounter3BvsS');
let attackCounterFourBvsS = document.getElementById('attackCounter4BvsS');

bulbasaurHealthOne.innerHTML = "HP 95";
squirtleHealthOne.innerHTML = "HP 100";

let attackCounterOneNumBul = 10;
let attackCounterTwoNumBul = 3;
let attackCounterThreeNumBul = 1;
let attackCounterFourNumBul = 3;

function attackOneBvsSFunct() {
   let quickAttack = Math.floor( Math.random() * 10 ) + 5;
    if (attackCounterOneNumBul == 0){
        alert('Attack is not available anymore!')
        return;
    }
    quickSound.play();
    attackCounterOneNumBul -= 1;
    attackCounterOneBvsS.innerHTML = attackCounterOneNumBul + "/10";

    challengerStartHealthSquirtle -= quickAttack;
    squirtleHealthOne.innerHTML = "HP " + challengerStartHealthSquirtle;
    logTextOne.innerText += "Squirtle took a hit! -" + quickAttack + "\n";

    if (challengerStartHealthSquirtle <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleOne.style.display = "none";
        playerStartHealthBulbasaur = 95;
        challengerStartHealthSquirtle = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        bulbasaurHealthOne.innerHTML = "HP 95";
        squirtleHealthOne.innerHTML = "HP 100";
        attackCounterOneNumBul = 10;
        attackCounterTwoNumBul = 3;
        attackCounterThreeNumBul = 1;
        attackCounterFourNumBul = 3;
        attackCounterOneBvsS.innerHTML = "10/10"
        attackCounterTwoBvsS.innerHTML = "3/3"
        attackCounterThreeBvsS.innerHTML = "1/1"
        attackCounterFourBvsS.innerHTML = "3/3"
        logTextOne.innerText = ""
        return;  
    }

    challengerBvsSAttackOneFunct()
}

function attackTwoBvsSFunct() {
    let vineWhip = Math.floor( Math.random() * 20 ) + 10;
    if (attackCounterTwoNumBul == 0){
        alert('Attack is not available anymore!')
        return;
    }
    vineSound.play();
    attackCounterTwoNumBul -= 1;
    attackCounterTwoBvsS.innerHTML = attackCounterTwoNumBul + "/3";

    challengerStartHealthSquirtle -= vineWhip;
    squirtleHealthOne.innerHTML = "HP " + challengerStartHealthSquirtle;
    logTextOne.innerText += "Squirtle took a hit! -" + vineWhip + "\n";

    if (challengerStartHealthSquirtle <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleOne.style.display = "none";
        playerStartHealthBulbasaur = 95;
        challengerStartHealthSquirtle = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        bulbasaurHealthOne.innerHTML = "HP 95";
        squirtleHealthOne.innerHTML = "HP 100";
        attackCounterOneNumBul = 10;
        attackCounterTwoNumBul = 3;
        attackCounterThreeNumBul = 1;
        attackCounterFourNumBul = 3;
        attackCounterOneBvsS.innerHTML = "10/10"
        attackCounterTwoBvsS.innerHTML = "3/3"
        attackCounterThreeBvsS.innerHTML = "1/1"
        attackCounterFourBvsS.innerHTML = "3/3"
        logTextOne.innerText = ""
        return;  
    }
    challengerBvsSAttackOneFunct()
}

function attackThreeBvsSFunct() {
    let poisonPowder = Math.floor( Math.random() * 8 ) + 1;
    if (attackCounterThreeNumBul == 0){
        alert('Attack is not available anymore!')
        return;
    }
    poisonSound.play();
    attackCounterThreeNumBul -= 1;
    attackCounterThreeBvsS.innerHTML = attackCounterThreeNumBul + "/1";

    challengerStartHealthSquirtle -= poisonPowder;
    squirtleHealthOne.innerHTML = "HP " + challengerStartHealthSquirtle;
    logTextOne.innerText += "Squirtle is now poisoned -" + poisonPowder + "\n";

    if (challengerStartHealthSquirtle <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleOne.style.display = "none";
        playerStartHealthBulbasaur = 95;
        challengerStartHealthSquirtle = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        bulbasaurHealthOne.innerHTML = "HP 95";
        squirtleHealthOne.innerHTML = "HP 100";
        attackCounterOneNumBul = 10;
        attackCounterTwoNumBul = 3;
        attackCounterThreeNumBul = 1;
        attackCounterFourNumBul = 3;
        attackCounterOneBvsS.innerHTML = "10/10"
        attackCounterTwoBvsS.innerHTML = "3/3"
        attackCounterThreeBvsS.innerHTML = "1/1"
        attackCounterFourBvsS.innerHTML = "3/3"
        logTextOne.innerText = ""
        return;  
    }
    
    challengerBvsSAttackOneFunct()
}

function attackFourBvsSFunct() {
    let leechLife = Math.floor( Math.random() * 5 ) + 8;
    if (attackCounterFourNumBul == 0){
        alert('Attack is not available anymore!')
        return;
    }
    leechSound.play();
    attackCounterFourNumBul -= 1;
    attackCounterFourBvsS.innerHTML = attackCounterFourNumBul + "/3";

    challengerStartHealthSquirtle -= leechLife;
    squirtleHealthOne.innerHTML = "HP " + challengerStartHealthSquirtle;
    logTextOne.innerText += "Squirtle took a hit! -" + leechLife + "\n";
    playerStartHealthBulbasaur += 5;
    bulbasaurHealthOne.innerHTML = "HP " + playerStartHealthBulbasaur;
    logTextOne.innerText += "Your Bulbasaur healed +" + 5 + "\n";

    if (challengerStartHealthSquirtle <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleOne.style.display = "none";
        playerStartHealthBulbasaur = 95;
        challengerStartHealthSquirtle = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        bulbasaurHealthOne.innerHTML = "HP 95";
        squirtleHealthOne.innerHTML = "HP 100";
        attackCounterOneNumBul = 10;
        attackCounterTwoNumBul = 3;
        attackCounterThreeNumBul = 1;
        attackCounterFourNumBul = 3;
        attackCounterOneBvsS.innerHTML = "10/10"
        attackCounterTwoBvsS.innerHTML = "3/3"
        attackCounterThreeBvsS.innerHTML = "1/1"
        attackCounterFourBvsS.innerHTML = "3/3"
        logTextOne.innerText = ""
        return;  
    }
}

function challengerBvsSAttackOneFunct() {
    let attack = Math.floor( Math.random() * 10 ) + 4;
    playerStartHealthBulbasaur -= attack;
    bulbasaurHealthOne.innerHTML = "HP " + playerStartHealthBulbasaur;
    logTextOne.innerText += "Your Bulbasaur took a hit! -" + attack + "\n";
    if (playerStartHealthBulbasaur < 0) {
        alert('You lost...')
    }
}

// Battle option 2
const attackOneBvsV = document.getElementById('attack1BvsV').addEventListener('click', attackOneBvsVFunct);
const attackTwoBvsV = document.getElementById('attack2BvsV').addEventListener('click', attackTwoBvsVFunct);
const attackThreeBvsV = document.getElementById('attack3BvsV').addEventListener('click', attackThreeBvsVFunct);
const attackFourBvsV = document.getElementById('attack4BvsV').addEventListener('click', attackFourBvsVFunct);

let attackCounterOneBvsV = document.getElementById('attackCounter1BvsV');
let attackCounterTwoBvsV = document.getElementById('attackCounter2BvsV');
let attackCounterThreeBvsV = document.getElementById('attackCounter3BvsV');
let attackCounterFourBvsV = document.getElementById('attackCounter4BvsV');

bulbasaurHealthTwo.innerHTML = "HP 95";
vulpixHealthOne.innerHTML = "HP 110";

let attackCounterOneNumBulSec = 10;
let attackCounterTwoNumBulSec = 3;
let attackCounterThreeNumBulSec = 1;
let attackCounterFourNumBulSec = 3;

function attackOneBvsVFunct() {
   let quickAttack = Math.floor( Math.random() * 10 ) + 5;
    if (attackCounterOneNumBulSec == 0){
        alert('Attack is not available anymore!')
        return;
    }
    quickSound.play();
    attackCounterOneNumBulSec -= 1;
    attackCounterOneBvsV.innerHTML = attackCounterOneNumBulSec + "/10";

    challengerStartHealthVulpix -= quickAttack;
    vulpixHealthOne.innerHTML = "HP " + challengerStartHealthVulpix;
    logTextTwo.innerText += "Vulpix took a hit! -" + quickAttack + "\n";

    if (challengerStartHealthVulpix <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleTwo.style.display = "none";
        playerStartHealthBulbasaur = 95;
        challengerStartHealthVulpix = 110;
        playerIsAlive = true;
        challengerIsAlive = true;
        bulbasaurHealthTwo.innerHTML = "HP 95";
        vulpixHealthOne.innerHTML = "HP 110";
        attackCounterOneNumBulSec = 10;
        attackCounterTwoNumBulSec = 3;
        attackCounterThreeNumBulSec = 1;
        attackCounterFourNumBulSec = 3;
        attackCounterOneBvsV.innerHTML = "10/10"
        attackCounterTwoBvsV.innerHTML = "3/3"
        attackCounterThreeBvsV.innerHTML = "1/1"
        attackCounterFourBvsV.innerHTML = "3/3"
        logTextTwo.innerText = ""
        return;  
    }

    challengerBvsVAttackOneFunct()
}

function attackTwoBvsVFunct() {
    let vineWhip = Math.floor( Math.random() * 20 ) + 10;
    if (attackCounterTwoNumBulSec == 0){
        alert('Attack is not available anymore!')
        return;
    }
    vineSound.play();
    attackCounterTwoNumBulSec -= 1;
    attackCounterTwoBvsV.innerHTML = attackCounterTwoNumBulSec + "/3";

    challengerStartHealthVulpix -= vineWhip;
    vulpixHealthOne.innerHTML = "HP " + challengerStartHealthVulpix;
    logTextTwo.innerText += "Vulpix took a hit! -" + vineWhip + "\n";

    if (challengerStartHealthVulpix <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleTwo.style.display = "none";
        playerStartHealthBulbasaur = 95;
        challengerStartHealthVulpix = 110;
        playerIsAlive = true;
        challengerIsAlive = true;
        bulbasaurHealthTwo.innerHTML = "HP 95";
        vulpixHealthOne.innerHTML = "HP 110";
        attackCounterOneNumBulSec = 10;
        attackCounterTwoNumBulSec = 3;
        attackCounterThreeNumBulSec = 1;
        attackCounterFourNumBulSec = 3;
        attackCounterOneBvsV.innerHTML = "10/10"
        attackCounterTwoBvsV.innerHTML = "3/3"
        attackCounterThreeBvsV.innerHTML = "1/1"
        attackCounterFourBvsV.innerHTML = "3/3"
        logTextTwo.innerText = ""
        return;  
    }
    challengerBvsVAttackTwoFunct()
}

function attackThreeBvsVFunct() {
    let poisonPowder = Math.floor( Math.random() * 8 ) + 1;
    if (attackCounterThreeNumBulSec == 0){
        alert('Attack is not available anymore!')
        return;
    }
    poisonSound.play();
    attackCounterThreeNumBulSec -= 1;
    attackCounterThreeBvsV.innerHTML = attackCounterThreeNumBulSec + "/1";

    challengerStartHealthVulpix -= poisonPowder;
    vulpixHealthOne.innerHTML = "HP " + challengerStartHealthVulpix;
    logTextTwo.innerText += "Vulpix is now poisoned -" + poisonPowder + "\n";

    if (challengerStartHealthVulpix <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleTwo.style.display = "none";
        playerStartHealthBulbasaur = 95;
        challengerStartHealthVulpix = 110;
        playerIsAlive = true;
        challengerIsAlive = true;
        bulbasaurHealthTwo.innerHTML = "HP 95";
        vulpixHealthOne.innerHTML = "HP 110";
        attackCounterOneNumBulSec = 10;
        attackCounterTwoNumBulSec = 3;
        attackCounterThreeNumBulSec = 1;
        attackCounterFourNumBulSec = 3;
        attackCounterOneBvsV.innerHTML = "10/10"
        attackCounterTwoBvsV.innerHTML = "3/3"
        attackCounterThreeBvsV.innerHTML = "1/1"
        attackCounterFourBvsV.innerHTML = "3/3"
        logTextTwo.innerText = ""
        return;  
    }
    
    challengerBvsVAttackOneFunct()
}

function attackFourBvsVFunct() {
    let leechLife = Math.floor( Math.random() * 5 ) + 8;
    if (attackCounterFourNumBulSec == 0){
        alert('Attack is not available anymore!')
        return;
    }
    leechSound.play();
    attackCounterFourNumBulSec -= 1;
    attackCounterFourBvsV.innerHTML = attackCounterFourNumBulSec + "/3";

    challengerStartHealthVulpix -= leechLife;
    vulpixHealthOne.innerHTML = "HP " + challengerStartHealthVulpix;
    logTextTwo.innerText += "Vulpix took a hit! -" + leechLife + "\n";
    playerStartHealthBulbasaur += 5;
    bulbasaurHealthTwo.innerHTML = "HP " + playerStartHealthBulbasaur;
    logTextTwo.innerText += "Your Bulbasaur healed +" + 5 + "\n";

    if (challengerStartHealthVulpix <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleTwo.style.display = "none";
        playerStartHealthBulbasaur = 95;
        challengerStartHealthVulpix = 110;
        playerIsAlive = true;
        challengerIsAlive = true;
        bulbasaurHealthTwo.innerHTML = "HP 95";
        vulpixHealthOne.innerHTML = "HP 110";
        attackCounterOneNumBulSec = 10;
        attackCounterTwoNumBulSec = 3;
        attackCounterThreeNumBulSec = 1;
        attackCounterFourNumBulSec = 3;
        attackCounterOneBvsV.innerHTML = "10/10"
        attackCounterTwoBvsV.innerHTML = "3/3"
        attackCounterThreeBvsV.innerHTML = "1/1"
        attackCounterFourBvsV.innerHTML = "3/3"
        logTextTwo.innerText = ""
        return;  
    }
}

function challengerBvsVAttackOneFunct() {
    let attack = Math.floor( Math.random() * 10 ) + 4;
    playerStartHealthBulbasaur -= attack;
    bulbasaurHealthTwo.innerHTML = "HP " + playerStartHealthBulbasaur;
    logTextTwo.innerText += "Your Bulbasaur took a hit! -" + attack + "\n";
    if (playerStartHealthBulbasaur < 0) {
        alert('You lost...')
    }
}

function challengerBvsVAttackTwoFunct() {
    let attack = Math.floor( Math.random() * 8 ) + 8;
    playerStartHealthBulbasaur -= attack;
    bulbasaurHealthTwo.innerHTML = "HP " + playerStartHealthBulbasaur;
    logTextTwo.innerText += "Your Bulbasaur took a hit! -" + attack + "\n";
    if (playerStartHealthBulbasaur < 0) {
        alert('You lost...')
    }
}

// Battle option 3
const attackOnePvsS = document.getElementById('attack1PvsS').addEventListener('click', attackOnePvsSFunct);
const attackTwoPvsS = document.getElementById('attack2PvsS').addEventListener('click', attackTwoPvsSFunct);
const attackThreePvsS = document.getElementById('attack3PvsS').addEventListener('click', attackThreePvsSFunct);
const attackFourPvsS = document.getElementById('attack4PvsS').addEventListener('click', attackFourPvsSFunct);

let attackCounterOnePvsS = document.getElementById('attackCounter1PvsS');
let attackCounterTwoPvsS = document.getElementById('attackCounter2PvsS');
let attackCounterThreePvsS = document.getElementById('attackCounter3PvsS');
let attackCounterFourPvsS = document.getElementById('attackCounter4PvsS');

pidgeyHealthOne.innerHTML = "HP 100";
squirtleHealthTwo.innerHTML = "HP 100";

let attackCounterOneNum = 5;
let attackCounterTwoNum = 5;
let attackCounterThreeNum = 3;
let attackCounterFourNum = 3;

let wateryEyes = false;

function attackOnePvsSFunct() {
   let tackle = Math.floor( Math.random() * 20 ) + 4;
    if (attackCounterOneNum == 0){
        alert('Attack is not available anymore!')
        return;
    }
    tackleSound.play();
    attackCounterOneNum -= 1;
    attackCounterOnePvsS.innerHTML = attackCounterOneNum + "/5";

    challengerStartHealthSquirtle -= tackle;
    squirtleHealthTwo.innerHTML = "HP " + challengerStartHealthSquirtle;
    logTextThree.innerText += "Squirtle took a hit! -" + tackle + "\n";

    if (challengerStartHealthSquirtle <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleThree.style.display = "none";
        playerStartHealthPidgey = 100;
        challengerStartHealthSquirtle = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        pidgeyHealthOne.innerHTML = "HP 100";
        squirtleHealthTwo.innerHTML = "HP 100";
        attackCounterOneNum = 5;
        attackCounterTwoNum = 5;
        attackCounterThreeNum = 3;
        attackCounterFourNum = 3;
        attackCounterOnePvsS.innerHTML = "5/5"
        attackCounterTwoPvsS.innerHTML = "5/5"
        attackCounterThreePvsS.innerHTML = "3/3"
        attackCounterFourPvsS.innerHTML = "3/3"
        logTextThree.innerText = ""
        wateryEyes = false;   
        return;  
    }

    if (wateryEyes == true) {
        wateryEyes = false;
        logTextThree.innerText += "Squirtle scratches the sand out of his eyes\n";
        return;
    }
    challengerPvsSAttackOneFunct()
}

function attackTwoPvsSFunct() {
    let gust = Math.floor( Math.random() * 10 ) + 2;
    if (attackCounterTwoNum == 0){
        alert('Attack is not available anymore!')
        return;
    }
    gustSound.play();
    attackCounterTwoNum -= 1;
    attackCounterTwoPvsS.innerHTML = attackCounterTwoNum + "/5";

    challengerStartHealthSquirtle -= gust;
     squirtleHealthTwo.innerHTML = "HP " + challengerStartHealthSquirtle;
     logTextThree.innerText += "Squirtle took a hit! -" + gust + "\n";
     if (challengerStartHealthSquirtle <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleThree.style.display = "none";
        playerStartHealthPidgey = 100;
        challengerStartHealthSquirtle = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        pidgeyHealthOne.innerHTML = "HP 100";
        squirtleHealthTwo.innerHTML = "HP 100";
        attackCounterOneNum = 5;
        attackCounterTwoNum = 5;
        attackCounterThreeNum = 3;
        attackCounterFourNum = 3;
        attackCounterOnePvsS.innerHTML = "5/5"
        attackCounterTwoPvsS.innerHTML = "5/5"
        attackCounterThreePvsS.innerHTML = "3/3"
        attackCounterFourPvsS.innerHTML = "3/3"
        logTextThree.innerText = ""
        wateryEyes = false; 
        return;
    }

    if (wateryEyes == true) {
        wateryEyes = false;
        logTextThree.innerText += "Squirtle scratches the sand out of his eyes\n";
        return;
    }
    challengerPvsSAttackOneFunct()
}

function attackThreePvsSFunct() {
    let hurricane = Math.floor( Math.random() * 40 ) + 10;
    if (attackCounterThreeNum == 0){
        alert('Attack is not available anymore!')
        return;
    }
    hurricaneSound.play();
    attackCounterThreeNum -= 1;
    attackCounterThreePvsS.innerHTML = attackCounterThreeNum + "/3";

    challengerStartHealthSquirtle -= hurricane;
     squirtleHealthTwo.innerHTML = "HP " + challengerStartHealthSquirtle;
     logTextThree.innerText += "Squirtle took a hit! -" + hurricane + "\n";

     if (challengerStartHealthSquirtle <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleThree.style.display = "none";
        playerStartHealthPidgey = 100;
        challengerStartHealthSquirtle = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        pidgeyHealthOne.innerHTML = "HP 100";
        squirtleHealthTwo.innerHTML = "HP 100";
        attackCounterOneNum = 5;
        attackCounterTwoNum = 5;
        attackCounterThreeNum = 3;
        attackCounterFourNum = 3;
        attackCounterOnePvsS.innerHTML = "5/5"
        attackCounterTwoPvsS.innerHTML = "5/5"
        attackCounterThreePvsS.innerHTML = "3/3"
        attackCounterFourPvsS.innerHTML = "3/3"
        logTextThree.innerText = ""
        wateryEyes = false; 
        return;
    }

    if (wateryEyes == true) {
        wateryEyes = false;
        logTextThree.innerText += "Squirtle scratches the sand out of his eyes\n";
        return;
    }
    
    challengerPvsSAttackOneFunct()
}

function attackFourPvsSFunct() {
    if (attackCounterFourNum == 0){
        alert('Attack is not available anymore!')
        return;
    }
    sandAttackSound.play();
    let sandAttack = 0;

    attackCounterFourNum -= 1;
    attackCounterFourPvsS.innerHTML = attackCounterFourNum + "/3";

    challengerStartHealthSquirtle -= sandAttack;
    squirtleHealthTwo.innerHTML = "HP " + challengerStartHealthSquirtle;
    logTextThree.innerText += "Squirtle's eyes are watery... \n ╥﹏╥" + "\n";
    logTextThree.innerText += "[ It's your turn again ]" + "\n";

    wateryEyes = true;
}

function challengerPvsSAttackOneFunct() {
    let attack = Math.floor( Math.random() * 10 ) + 4;
    playerStartHealthPidgey -= attack;
    pidgeyHealthOne.innerHTML = "HP " + playerStartHealthPidgey;
    logTextThree.innerText += "Your Pidgey took a hit! -" + attack + "\n";
    if (playerStartHealthPidgey < 0) {
        alert('You lost...')
    }
}

// Battle option 4
const attackOnePvsV = document.getElementById('attack1PvsV').addEventListener('click', attackOnePvsVFunct);
const attackTwoPvsV = document.getElementById('attack2PvsV').addEventListener('click', attackTwoPvsVFunct);
const attackThreePvsV = document.getElementById('attack3PvsV').addEventListener('click', attackThreePvsVFunct);
const attackFourPvsV = document.getElementById('attack4PvsV').addEventListener('click', attackFourPvsVFunct);

let attackCounterOnePvsV = document.getElementById('attackCounter1PvsV');
let attackCounterTwoPvsV = document.getElementById('attackCounter2PvsV');
let attackCounterThreePvsV = document.getElementById('attackCounter3PvsV');
let attackCounterFourPvsV = document.getElementById('attackCounter4PvsV');

pidgeyHealthTwo.innerHTML = "HP 100";
vulpixHealthTwo.innerHTML = "HP 110";

let attackCounterOneNumSec = 5;
let attackCounterTwoNumSec = 5;
let attackCounterThreeNumSec = 3;
let attackCounterFourNumSec = 3;

wateryEyes = false;

function attackOnePvsVFunct() {
   let tackle = Math.floor( Math.random() * 20 ) + 4;
    if (attackCounterOneNumSec == 0){
        alert('Attack is not available anymore!')
        return;
    }

    tackleSound.play();
    attackCounterOneNumSec -= 1;
    attackCounterOnePvsV.innerHTML = attackCounterOneNumSec + "/5";

    challengerStartHealthVulpix -= tackle;
    vulpixHealthTwo.innerHTML = "HP " + challengerStartHealthVulpix;
    logTextFour.innerText += "Vulpix took a hit! -" + tackle + "\n";

    if (challengerStartHealthVulpix <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleFour.style.display = "none";
        playerStartHealthPidgey = 100;
        challengerStartHealthVulpix = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        pidgeyHealthTwo.innerHTML = "HP 100";
        vulpixHealthTwo.innerHTML = "HP 100";
        attackCounterOneNumSec = 5;
        attackCounterTwoNumSec = 5;
        attackCounterThreeNumSec = 3;
        attackCounterFourNumSec = 3;
        attackCounterOnePvsV.innerHTML = "5/5"
        attackCounterTwoPvsV.innerHTML = "5/5"
        attackCounterThreePvsV.innerHTML = "3/3"
        attackCounterFourPvsV.innerHTML = "3/3"
        logTextFour.innerText = ""
        wateryEyes = false;   
        return;  
    }

    if (wateryEyes == true) {
        wateryEyes = false;
        logTextFour.innerText += "Vulpix scratches the sand out of her eyes\n";
        return;
    }
    challengerPvsVAttackOneFunct()
}

function attackTwoPvsVFunct() {
    let gust = Math.floor( Math.random() * 10 ) + 2;
    if (attackCounterTwoNumSec == 0){
        alert('Attack is not available anymore!')
        return;
    }
    gustSound.play();
    attackCounterTwoNumSec -= 1;
    attackCounterTwoPvsV.innerHTML = attackCounterTwoNumSec + "/5";

    challengerStartHealthVulpix -= gust;
     vulpixHealthTwo.innerHTML = "HP " + challengerStartHealthVulpix;
     logTextFour.innerText += "Vulpix took a hit! -" + gust + "\n";
     if (challengerStartHealthVulpix <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleFour.style.display = "none";
        playerStartHealthPidgey = 100;
        challengerStartHealthVulpix = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        pidgeyHealthTwo.innerHTML = "HP 100";
        vulpixHealthTwo.innerHTML = "HP 100";
        attackCounterOneNumSec = 5;
        attackCounterTwoNumSec = 5;
        attackCounterThreeNumSec = 3;
        attackCounterFourNumSec = 3;
        attackCounterOnePvsV.innerHTML = "5/5"
        attackCounterTwoPvsV.innerHTML = "5/5"
        attackCounterThreePvsV.innerHTML = "3/3"
        attackCounterFourPvsV.innerHTML = "3/3"
        logTextFour.innerText = ""
        wateryEyes = false; 
        return;
    }

    if (wateryEyes == true) {
        wateryEyes = false;
        logTextFour.innerText += "Vulpix scratches the sand out of her eyes\n";
        return;
    }
    challengerPvsVAttackOneFunct()
}

function attackThreePvsVFunct() {
    let hurricane = Math.floor( Math.random() * 40 ) + 10;
    if (attackCounterThreeNumSec == 0){
        alert('Attack is not available anymore!')
        return;
    }
    hurricaneSound.play();
    attackCounterThreeNumSec -= 1;
    attackCounterThreePvsV.innerHTML = attackCounterThreeNumSec + "/3";

    challengerStartHealthVulpix -= hurricane;
     vulpixHealthTwo.innerHTML = "HP " + challengerStartHealthVulpix;
     logTextFour.innerText += "Vulpix took a hit! -" + hurricane + "\n";

     if (challengerStartHealthVulpix <= 0) {
        victorySound.play();
        alert('You won!');
        introduction.style.display = "block";
        battleFour.style.display = "none";
        playerStartHealthPidgey = 100;
        challengerStartHealthVulpix = 100;
        playerIsAlive = true;
        challengerIsAlive = true;
        pidgeyHealthTwo.innerHTML = "HP 100";
        vulpixHealthTwo.innerHTML = "HP 100";
        attackCounterOneNumSec = 5;
        attackCounterTwoNumSec = 5;
        attackCounterThreeNumSec = 3;
        attackCounterFourNumSec = 3;
        attackCounterOnePvsV.innerHTML = "5/5"
        attackCounterTwoPvsV.innerHTML = "5/5"
        attackCounterThreePvsV.innerHTML = "3/3"
        attackCounterFourPvsV.innerHTML = "3/3"
        logTextFour.innerText = ""
        wateryEyes = false; 
        return;
    }

    if (wateryEyes == true) {
        wateryEyes = false;
        logTextFour.innerText += "Vulpix scratches the sand out of her eyes\n";
        return;
    }
    
    challengerPvsVAttackTwoFunct()
}

function attackFourPvsVFunct() {
    if (attackCounterFourNumSec == 0){
        alert('Attack is not available anymore!')
        return;
    }
    sandAttackSound.play();
    let sandAttack = 0;

    attackCounterFourNumSec -= 1;
    attackCounterFourPvsV.innerHTML = attackCounterFourNumSec + "/3";

    challengerStartHealthVulpix -= sandAttack;
    vulpixHealthTwo.innerHTML = "HP " + challengerStartHealthVulpix;
    logTextFour.innerText += "Vulpix's eyes are watery... \n ╥﹏╥" + "\n";
    logTextFour.innerText += "[ It's your turn again ]" + "\n";

    wateryEyes = true;
}

function challengerPvsVAttackOneFunct() {
    let attack = Math.floor( Math.random() * 10 ) + 6;
    playerStartHealthPidgey -= attack;
    pidgeyHealthTwo.innerHTML = "HP " + playerStartHealthPidgey;
    logTextFour.innerText += "Your Pidgey took a hit! -" + attack + "\n";
    if (playerStartHealthPidgey < 0) {
        alert('You lost...')
    }
}

function challengerPvsVAttackTwoFunct() {
    let attack = Math.floor( Math.random() * 20 ) + 10;
    playerStartHealthPidgey -= attack;
    pidgeyHealthTwo.innerHTML = "HP " + playerStartHealthPidgey;
    logTextFour.innerText += "Vulpix got mad! Your Pidgey took a hit! -" + attack + "\n";
    if (playerStartHealthPidgey < 0) {
        alert('You lost...')
    }
}