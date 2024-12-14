"use strict";

// Inladen van API
fetch('../json/cards.json')
.then(response => response.json())
.then(data => {
        myCardArray = data.map(card => new Card(card))
    })
.catch(error => console.log('Error is: ' + error))


// Algemene opzet van spelbord en kaarten
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


// Functie die wordt geactiveerd wanneer er een spelbord wordt geselecteerd
function onSelectFieldSize(){
	shuffle(myCardArray)
	switch(fieldSize.value){
		case "4":
			boardClass = 'board4'
			// Zorgt er voor dat er 8 kaarten zijn
			myCardSet = myCardArray.slice(0, 8);			
			break;
		case "5":
			boardClass = 'board5'	
			// Zorgt er voor dat er 12 kaarten zijn
			myCardSet = myCardArray.slice(0, 12);
			break;
		case "6":
			boardClass = 'board6'			
			// Zorgt er voor dat er 18 kaarten zijn
			myCardSet = myCardArray.slice(0, 18)
			break;
	}

	const doubledCards = myCardSet.concat(myCardSet);
    shuffle(doubledCards);
    myCardSet = doubledCards;

	// Zorgt er voor dat de kaarten worden herschud
	shuffle(myCardSet)

	// Zorgt er voor dat het veld wordt gevuld
	populateField()
};

// Notitie: Ik heb er voor gekozen om deze uitwerking van de Fisher-Yates Shuffle te gebruiken omdat hier const en let wordt gebruikt (ipv var in het aangeleverde voorbeeld)
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
		let imageURL = "../images/memory/" + card.card1 + ".jpg";
		newCard.setAttribute("src", imageURL);

		newCover.setAttribute("src", "../images/memory/cover.jpg");
		newCover.setAttribute("class", "covered");
		
		newCard.setAttribute("name", card.card1);
		newTile.appendChild(newCard);
		newTile.appendChild(newCover);
		myField.appendChild(newTile);
	});
}

// Middels matchCount en clickedCards wordt bijgehouden welke en hoeveel kaarten/matches er voorbij zijn gekomen
let matchCount = 0;
const clickedCards = [];

// Function(s) die wordt geactiveerd als de speler op een kaart klikt
function onClickCard(e) {
	if(e.target.className === "covered"){
		e.target.className = "uncovered";
		playAudio(e)
		clickedCards.push(e.target.parentNode.firstChild.getAttribute("name"))
		matchCount++
		if(matchCount >= 2){
			evaluateMatch()
			matchCount = 0;
			keepScore()
		}
	}
};

// Audio function die wordt geactiveerd op klik
function playAudio(e){
	const clickedCard = myCardSet.find(card => card.card1 === e.target.parentNode.firstChild.getAttribute("name") || card.card2 === e.target.parentNode.firstChild.getAttribute("name"));
        
	// Speel het geluid af dat hoort bij deze kaart
	if (clickedCard && clickedCard.sound) {
		const sound = new Audio(clickedCard.sound);
		sound.play();
	}
};

// Evaluatie functie of er een overeenkomstig paar is, zo ja wordt deze verwijderd middels .remove() of weer terug gezet naar covered
function evaluateMatch() {
    if (clickedCards[0] === clickedCards[1]) {
		// Verwijdert beide kaarten uit het spel
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
            // Wordt de cover weer terug gezet naar covered
            const allUncovered = document.querySelectorAll(".uncovered");
            allUncovered.forEach(card => {
                card.className = "covered";
            });
            clickedCards.length = 0; 
        }, 1500);
    }
};

// Middels de counts worden bijgehouden hoeveel pogingen de speler heeft ondernomen
const counterTries = document.getElementById('tries');
const counterSuccess = document.getElementById('success');
let clickCount = 0;
let succesCount = 0;

// De count function
function keepScore() {
	clickCount++
	counterTries.textContent = `Totaal aantal pogingen = ${clickCount}`
	if(clickedCards[0] === clickedCards[1]) {
		succesCount++
		counterSuccess.textContent = `Succesvolle pogingen = ${succesCount}`
	}
};

// Deze function wordt tijdens evalueteMatch() bekeken wanneer er een match is, zo wordt er gecontroleerd of het veld leeg is, zo ja dan is deze actief
function checkGameOver() {
	if(myField.children.length === 0) {
		alert(`Goed gedaan ${localStorage.getItem('naam')}! Totaal aantal pogingen zijn ${clickCount}`)
		gameReset()
	}
};

// De function om het spel te resetten
function gameReset() {
    myField.innerHTML = "";
    clickCount = 0;
    succesCount = 0;
    counterTries.textContent = ``;
    counterSuccess.textContent = ``;
    clickedCards.length = 0;
    matchCount = 0;

    // Herladen van de originele kaarten (om opnieuw het veld te kunnen vullen)
    shuffle(myCardArray);

    alert("Het spel is gereset! Kies een nieuw veldgrootte.");
    fieldSize.value = "";
};