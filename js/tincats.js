// Tincats
window.addEventListener('load', () => {
    apiLoad();
    loadListFromLocalStorage();
    loadChatFromLocalStorage();
});

// Header
const homeIcon = document.getElementById('home');
const chatIcon = document.getElementById('chat');
const listIcon = document.getElementById('list');
const homeContainer = document.getElementById('home-container');
const chatContainer = document.getElementById('chat-container');
const listContainer = document.getElementById('list-container');
const chatWindow = document.getElementById('chat-window');

homeIcon.addEventListener('click', () => {
    homeIcon.style.color = '#B30003';
    chatIcon.style.color = '#7A7A7A';
    listIcon.style.color = '#7A7A7A';
    homeContainer.style.display = 'flex';
    chatContainer.style.display = 'none';
    listContainer.style.display = 'none';
    chatWindow.style.display = 'none';
});

chatIcon.addEventListener('click', () => {
    homeIcon.style.color = '#7A7A7A';
    chatIcon.style.color = '#B30003';
    listIcon.style.color = '#7A7A7A';
    homeContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
    listContainer.style.display = 'none';
    chatWindow.style.display = 'none';
    chatMessage = false;
    chatIcon.innerText = 'chat';
});

listIcon.addEventListener('click', () => {
    homeIcon.style.color = '#7A7A7A';
    chatIcon.style.color = '#7A7A7A';
    listIcon.style.color = '#B30003';
    homeContainer.style.display = 'none';
    chatContainer.style.display = 'none';
    listContainer.style.display = 'flex';
    chatWindow.style.display = 'none';
});

// API
let currentCatData = {};
const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_RTbWauJOcdV0lg1q6USUaTlhhCyHJsBBkFe6TO0FrGS8Ha6eOTMMJhVpgaub8Hzv"
});

const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

function apiLoad() {
    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.json())
    .then(data => { 
        currentCatData = data[0];
        swipeCatContainer.style.backgroundImage = `url(${currentCatData.url})`
        swipeCatDescription.innerText = data[0].breeds[0].description
    })
    .catch(error => console.log('this is wrong:' + error))
    swipeCatName.innerText = catNames[Math.floor(Math.random() * catNames.length)];
};

// Swipe
const swipeCatName = document.getElementById('swipe-catname');
const swipeCatDescription = document.getElementById('swipe-description');
const swipeCatContainer = document.getElementById('home-container');
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const catNames = ['Angel', 'Bailey', 'Beverly', 'Callie', 'Eleanor', 'Ellie', 'Georgia', 'Gigi', 'Gladis', 'Honey', 'June', 'Maisy', 'Margot', 'Millie',
                  'Penny', 'Piper', 'Roxie', 'Sally', 'Sheba', 'Alvin', 'Aimsley', 'Andy', 'Bobby', 'Bubba', 'Charlie', 'George', 'Odie', 'Ralphie', 'Ricky',
                  'Theodore', 'Tubby', 'Wally', 'Winston', 'Ash', 'Aster', 'Basil', 'Buttercup', 'Camellia', 'Dahlia', 'Daisy', 'Daffodil', 'Dandelion', 'Fern',
                  'Flower', 'Holly', 'Iris', 'Ivy', 'Jasmine', 'Jude', 'Lavender', 'Lily', 'Magnolia', 'Maple', 'Mulberry', 'Pansy', 'Peppermint', 'Petunia',
                  'Poppy', 'Rose', 'Rosemary', 'Sage', 'Thyme', 'Tulip', 'Violet', 'Willow', 'Apple', 'Basil', 'Blueberry', 'Caraway', 'Cardamom', 'Celery',
                  'Cherry', 'Chili', 'Clementine', 'Clove', 'Cocoa', 'Cookie', 'Gelato', 'Ginger', 'Hazel', 'Kiwi', 'Mango', 'Nacho', 'Nugget', 'Nutmeg',
                  'Oreo', 'Okra', 'Paprika', 'Peaches', 'Pepper', 'Pumpkin', 'Sage', 'Snickers', 'Soda Pop', 'Sugar', 'Tomato', 'Twix', 'Blackie', 'Dobby',
                  'Dumbledore', 'Fleur', 'Fluffy', 'Ginny', 'Hedwig', 'Hermione', 'Luna', 'Malfoy', 'Mrs. Norris', 'Norbert', 'Padfoot', 'Pixie', 'Sirius',
                  'Weasley', 'Babe', 'Bambino', 'Beckham', 'Bolt', 'Brady', 'Clark', 'Jackie', 'Kobe', 'Lamar', 'Magic', 'Patrick', 'Sue', 'Tiger', 'Venus',
                  'Brando', 'Bullock',  'Butch', 'Dolly', 'Hemsworth', 'Hudson', 'Kardashian', 'Kylie', 'Mel', 'Monroe', 'Newman', 'Niro', 'Reynolds', 'Winfrey',
                  'Billie', 'Beyonce', 'Bowie', 'Bruno', 'Bruce', 'Cash', 'Chance', 'Chris', 'Cyrus', 'Dylan', 'Elvis', 'Elton', 'Frank', 'Harry', 'John',
                  'Legend', 'Lennon', 'Lizzo', 'Madonna', 'Mozart', 'Ozzy', 'Prince', 'Purry', 'Ringo', 'Sinatra', 'Stevie', 'Usher', 'Ziggy', 'Alice',
                  'Bella', 'Boo', 'Cheshire', 'Darcy', 'Eeyore', 'Edward', 'Gatsby', 'Jacob', 'Jo', 'Pippi', 'Radley', 'Rue', 'Sawyer', 'Scout', 'Tigger',
                  'Aristocat', 'Ariel', 'Baloo', 'Beast', 'Bambi', 'Belle', 'Elsa', 'Goofy', 'Isabela', 'Jasmine', 'Lilo', 'Max', 'Mickey', 'Mochi',
                  'Mirabel', 'Minnie', 'Moana', 'Mushu', 'Nala', 'Olaf', 'Oliver', 'Pepa', 'Pluto', 'Rufus', 'Scar', 'Simba', 'Stitch', 'Coco', 'Dash',
                  'Doc', 'Doug', 'Dory', 'Edna', 'Jessie', 'Luca', 'Mater', 'McQueen', 'Merida', 'Miguel', 'Mike', 'Rex', 'Remy', 'Russell', 'Sulley',
                  'Violet', 'Wall-e', 'Woody', 'Bucky', 'Captain', 'Carter', 'Flash', 'Fury', 'Groot', 'Hawkeye', 'Hulk', 'Joker', 'Loki', 'Marvel', 'Nebula',
                  'Parker', 'Robin', 'Shuri', 'Thor', 'Bert', 'Blue', 'Buyo', 'Chi', 'Cosmo', 'Daffy', 'Elmo', 'Ernie', 'Garfield', 'Jiji', 'Kermit', 'Oscar',
                  'Patrick', 'Scooby', 'Sylvester', 'Tom', 'Tweety', 'Winnie', 'Apalachicola', 'Charlotte', 'Dixie', 'Georgia', 'Houston', 'Magnolia', 'Monroe',
                  'Montgomery', 'Nash', 'Oxford', 'Pensacola', 'Ranger', 'Savanna', 'Tupelo', 'Virginia'];
let catImagesSaved = [];
let catNamesSaved = [];
let chatMessage = false;
let hasLiked = true;
let likeCount = localStorage.getItem('likecount') || 0

dislikeButton.addEventListener('click', () => {
    hasLiked = false;
    catNamesSaved.push(swipeCatName.innerText);
    catImagesSaved.push(currentCatData.url);
    pushListFunc();
    apiLoad();
});

likeButton.addEventListener('click', () => {
    hasLiked = true;
    likeCount++;
    localStorage.setItem('likecount', likeCount);
    catNamesSaved.push(swipeCatName.innerText);
    catImagesSaved.push(currentCatData.url);
    pushListFunc();
    apiLoad();
    chatMessageFunc();
});

// Chat
const backButton = document.getElementById('back-button');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatFrame = document.getElementById('chat-frame');
const isTyping = document.getElementById('is-typing-text');
let chatData = JSON.parse(localStorage.getItem('chat')) || [];
let randomNumber = 0;
let usedNumbers = [];

function chatMessageFunc() {
    switch(likeCount) {
        case 1: 
            pushChatFunc();
            chatMessage = true;
            break;
        case 10:
            pushChatFunc();
            chatMessage = true;
            break;
        case 25:
            pushChatFunc();
            chatMessage = true;
            break;
        case 50:
            pushChatFunc();
            chatMessage = true;
            break;
        case 75:
            pushChatFunc();
            chatMessage = true;
            break;
        case 100:
            pushChatFunc();
            chatMessage = true;
            break;
        case 150:
            pushChatFunc();
            chatMessage = true;
            break;
        case 200:
            pushChatFunc();
            chatMessage = true;
            break;
    };
    if(chatMessage === true){
        chatIcon.innerText = 'mark_unread_chat_alt';
    } else {
        chatIcon.innerText = 'chat';
    };
};

function pushChatFunc() {
    const chatItem = {
        url: currentCatData.url,
        name: catNamesSaved[catNamesSaved.length - 1],
        chatText: textGenerate()
    };
    chatData.push(chatItem);
    localStorage.setItem('chat', JSON.stringify(chatData));
    renderChatItem(chatItem);
};

function renderChatItem(item) {
    const chatItemDiv = document.createElement('div');
    chatItemDiv.classList.add('chat-item');

    const chatItemImage = document.createElement('img');
    chatItemImage.classList.add('chat-img');
    chatItemImage.setAttribute('draggable', false);
    chatItemImage.src = item.url;

    const chatItemFlexDiv = document.createElement('div');
    chatItemFlexDiv.classList.add('chat-flex');

    const chatCatName = document.createElement('h2');
    chatCatName.classList.add('chat-catname');
    const chatCatNameNode = document.createTextNode(item.name);
    chatCatName.appendChild(chatCatNameNode);

    const chatMessage = document.createElement('p');
    chatMessage.classList.add('chat-message');
    const chatMessagNode = document.createTextNode(item.chatText);
    chatMessage.appendChild(chatMessagNode);

    const chatItemHr = document.createElement('hr');
    chatContainer.appendChild(chatItemHr);
    chatContainer.appendChild(chatItemDiv);
    chatItemDiv.appendChild(chatItemImage);
    chatItemFlexDiv.appendChild(chatCatName);
    chatItemFlexDiv.appendChild(chatMessage);
    chatItemDiv.appendChild(chatItemFlexDiv);
};

function randomNumberFunc() {
    randomNumber = Math.floor(Math.random() * 8) + 1;
};

function textGenerate() {
    randomNumberFunc();
    while (usedNumbers.includes(randomNumber)) {
        randomNumberFunc();
    };
    usedNumbers.push(randomNumber);
    switch(randomNumber){
        case 1:
            return `I'm feline good!`
        case 2:
            return `Purr... This sounds exactly like what I wanted!`
        case 3:
            return `You had me at meow.`
        case 4:
            return `Zzz... Hi... Zzz...`
        case 5:
            return `Is it dinner time yet?`
        case 6:
            return `You've got to be kitten me!`
        case 7:
            return `Stay pawsitive!`
        case 8:
            return `Living my best nine lives.`
    };
};

function loadChatFromLocalStorage() {
    chatData.forEach(item => renderChatItem(item));
};

chatContainer.addEventListener('click', () => {
    homeContainer.style.display = 'none';
    chatContainer.style.display = 'none';
    listContainer.style.display = 'none';
    chatWindow.style.display = 'block';
    catReplyFunc();
});

backButton.addEventListener('click', () => {
    homeContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
    listContainer.style.display = 'none';
    chatWindow.style.display = 'none';
});

sendButton.addEventListener('click', () => {
    const chatUserMessage = document.createElement('div');
    chatUserMessage.classList.add('user-message');
    const chatUserText = document.createTextNode(userInput.value);
    chatUserMessage.appendChild(chatUserText);
    chatFrame.appendChild(chatUserMessage);
    userInput.value = '';
    scrollToBottom();
    catReplyFunc();
});

function catReplyFunc() {
    isTyping.style.visibility = 'visible';
    setTimeout(() => {
        const chatCatMessage = document.createElement('div');
        chatCatMessage.classList.add('cat-message');
        const chatCatText = document.createTextNode(catReplies());
        chatCatMessage.appendChild(chatCatText);
        chatFrame.appendChild(chatCatMessage);
        isTyping.style.visibility = 'hidden';
        scrollToBottom();
    }, 2000);
};

function catReplies() {
    if(usedNumbers.length >= 8){
        usedNumbers = [];
    };
    randomNumberFunc();
    while (usedNumbers.includes(randomNumber)) {
        randomNumberFunc();
    };
    usedNumbers.push(randomNumber);
    switch(randomNumber){
        case 1:
            return `Meowtastic`
        case 2:
            return `Myaa`
        case 3:
            return `Mee-ow`
        case 4:
            return `Zzz...`
        case 5:
            return `Mrrrr`
        case 6:
            return `Purr`
        case 7:
            return `Meeowwwww`
        case 8:
            return `Nyow`
    };
};

function scrollToBottom() {
    const chatFrame = document.getElementById('chat-frame');
    chatFrame.scrollTop = chatFrame.scrollHeight;
};

// List
let listData = JSON.parse(localStorage.getItem('list')) || [];

function renderListItem(item) {
    const listItemDiv = document.createElement('div');
    listItemDiv.classList.add('list-item');

    const listItemImage = document.createElement('img');
    listItemImage.classList.add('list-img');
    listItemImage.setAttribute('draggable', false);
    listItemImage.src = item.url;

    const listCatName = document.createElement('h2');
    listCatName.classList.add('list-catname');
    const listCatNameNode = document.createTextNode(item.name);
    listCatName.appendChild(listCatNameNode);

    const listLikeDislikeImage = document.createElement('img');
    listLikeDislikeImage.classList.add('list-like-dislike-img');
    listLikeDislikeImage.setAttribute('draggable', false);
    if(item.liked === true) {
        listLikeDislikeImage.src = '../images/tincats/badge-like.png';
    } else {
        listLikeDislikeImage.src = '../images/tincats/badge-nope.png';
    };

    listContainer.appendChild(listItemDiv);
    listItemDiv.appendChild(listItemImage);
    listItemDiv.appendChild(listCatName);
    listItemDiv.appendChild(listLikeDislikeImage);
};

function pushListFunc() {
    const listItem = {
        url: currentCatData.url,
        name: catNamesSaved[catNamesSaved.length - 1],
        liked: hasLiked
    };
    listData.push(listItem);
    localStorage.setItem('list', JSON.stringify(listData));
    renderListItem(listItem);
};

function loadListFromLocalStorage() {
    listData.forEach(item => renderListItem(item));
};