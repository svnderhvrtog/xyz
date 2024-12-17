// Memory
const game4 = document.getElementById('game-4').addEventListener('click', onSelectFieldSize);
const game5 = document.getElementById('game-5').addEventListener('click', onSelectFieldSize);
const game6 = document.getElementById('game-6').addEventListener('click', onSelectFieldSize);
const select = document.getElementById('select');
const gameSelect = document.getElementById('game-select');

fetch('../json/cards.json')
.then(response => response.json())
.then(data => {
        myCardArray = data.map(card => new Card(card))
    })
.catch(error => console.log('Error is: ' + error))

const fieldSize = document.getElementById('select');
fieldSize.addEventListener('change', onSelectFieldSize);
const myField = document.getElementById("field");
myField.addEventListener("click", onClickCard);

let myCardArray = [];
let myCardSet = [];
let boardClass = '';

class Card {
	constructor(cardObject){
		this.card1 = cardObject.card1;
		this.card2 = cardObject.card2;
		this.set = cardObject.set;
		this.sound = cardObject.sound;
	}
};

function onSelectFieldSize(event){
	const clickedElementId = event.target.id;
	shuffle(myCardArray);
	if(clickedElementId === 'game-4') {
		boardClass = 'board4';
		myCardSet = myCardArray.slice(0, 8);	
	} else if (clickedElementId === 'game-5') {
		boardClass = 'board5';
		myCardSet = myCardArray.slice(0, 12);
	} else if (clickedElementId === 'game-6') {
		boardClass = 'board6';
		myCardSet = myCardArray.slice(0, 18);
	};
	select.style.display = 'none';
	const doubledCards = myCardSet.concat(myCardSet);
    shuffle(doubledCards);
    myCardSet = doubledCards;
	shuffle(myCardSet);
	populateField();
};

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i+1));
        [array[i],array[random]] = [array[random],array[i]];
    }
};

function populateField() {
	myField.innerHTML = "";
	myCardSet.forEach(card => {
		let newTile = document.createElement("div");
		let newCard = document.createElement("img");
		let newCover = document.createElement("img");
		newTile.setAttribute("class", boardClass);
		let imageURL = "../images/minigames/memory/" + card.card1 + ".jpg";
		newCard.setAttribute("src", imageURL);
		newCard.setAttribute("draggable", false);
		newCover.setAttribute("src", "../images/minigames/memory/cover.jpg");
		newCover.setAttribute("class", "covered");
		newCover.setAttribute("draggable", false);
		newCard.setAttribute("name", card.card1);
		newTile.appendChild(newCard);
		newTile.appendChild(newCover);
		myField.appendChild(newTile);
	});
};

let matchCount = 0;
const clickedCards = [];

function onClickCard(e) {
	if (clickedCards.length >= 2) {
        return
    };
	if(e.target.className === "covered"){
		e.target.className = "uncovered";
		clickedCards.push(e.target.parentNode.firstChild.getAttribute("name"));
		matchCount++;
		if(matchCount >= 2){
			evaluateMatch()
			matchCount = 0;
			keepScore();
		}
	};
};

function evaluateMatch() {
    if (clickedCards[0] === clickedCards[1]) {
        setTimeout(() => {
            const allUncovered = document.querySelectorAll(".uncovered");
            allUncovered.forEach(card => {
                card.parentNode.remove();
            });
            clickedCards.length = 0;
			checkGameOver()
        }, 1500);
    } else {
        setTimeout(() => {
            const allUncovered = document.querySelectorAll(".uncovered");
            allUncovered.forEach(card => {
                card.className = "covered";
            });
            clickedCards.length = 0; 
        }, 1500);
    };
};

const counterSuccess = document.getElementById('success');
let clickCount = 0;
let succesCount = 0;

function keepScore() {
	clickCount++;
	if(clickedCards[0] === clickedCards[1]) {
		succesCount++;
	};
};

function checkGameOver() {
	if(myField.children.length === 0) {
	counterSuccess.style.display = "block";
	counterSuccess.innerHTML = `Well done! The total amount of tries are ${clickCount}, of which ${succesCount} succesfull! <br> You'll be sent to the overview in 5 seconds.`;
		setTimeout(gameReset, 6000);
	};
};

function gameReset() {
    myField.innerHTML = "";
    clickCount = 0;
    succesCount = 0;
    clickedCards.length = 0;
    matchCount = 0;
    shuffle(myCardArray);
    fieldSize.value = "";
	select.style.display = "none";
	gameSelect.style.display = "grid";
	counterSuccess.textContent = ``;
};