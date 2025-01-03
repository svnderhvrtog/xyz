// Tincats
window.addEventListener('load', apiLoad);
window.addEventListener('load', loadListFromLocalStorage);

// Header
const homeIcon = document.getElementById('home')
const chatIcon = document.getElementById('chat');
const listIcon = document.getElementById('list');
const homeContainer = document.getElementById('home-container');
const chatContainer = document.getElementById('chat-container');
const listContainer = document.getElementById('list-container');

homeIcon.addEventListener('click', () => {
    homeIcon.style.color = '#B30003';
    chatIcon.style.color = '#7A7A7A';
    listIcon.style.color = '#7A7A7A';
    homeContainer.style.display = 'flex';
    chatContainer.style.display = 'none';
    listContainer.style.display = 'none';
});

chatIcon.addEventListener('click', () => {
    homeIcon.style.color = '#7A7A7A';
    chatIcon.style.color = '#B30003';
    listIcon.style.color = '#7A7A7A';
    homeContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
    listContainer.style.display = 'none';
    chatMessage = false;
    chatIcon.innerText = 'chat'
});

listIcon.addEventListener('click', () => {
    homeIcon.style.color = '#7A7A7A';
    chatIcon.style.color = '#7A7A7A';
    listIcon.style.color = '#B30003';
    homeContainer.style.display = 'none';
    chatContainer.style.display = 'none';
    listContainer.style.display = 'flex';
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
//     fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
//     .then(response => response.json())
//     .then(data => { 
//         currentCatData = data[0];
//         swipeCatContainer.style.backgroundImage = `url(${currentCatData.url})`
//         swipeCatDescription.innerText = data[0].breeds[0].description
//     })
//     .catch(error => console.log('this is wrong:' + error))
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
let hasLiked = true;
let likeCount = 0;
let chatMessage = false;

dislikeButton.addEventListener('click', dislikeFunc);
likeButton.addEventListener('click', likeFunc);

function dislikeFunc() {
    hasLiked = false;
    catNamesSaved.push(swipeCatName.innerText);
    catImagesSaved.push(currentCatData.url);
    pushListFunc();
    apiLoad();
};

function likeFunc() {
    hasLiked = true;
    likeCount++;
    catNamesSaved.push(swipeCatName.innerText);
    catImagesSaved.push(currentCatData.url);
    pushListFunc();
    apiLoad();
    chatMessageFunc();
};

// Chat
function chatMessageFunc() {
    switch(likeCount) {
        case 1: 
            console.log('1 like')
            createChat()
            chatMessage = true;
            break;
        case 10:
            console.log('10 likes')
            createChat()
            chatMessage = true;
            break;
        case 25:
            console.log('25 likes')
            createChat()
            chatMessage = true;
            break;
        case 50:
            console.log('50 likes')
            createChat()
            chatMessage = true;
            break;
    }

    if(chatMessage === true){
        chatIcon.innerText = 'mark_unread_chat_alt'
    } else {
        chatIcon.innerText = 'chat'
    };
};

function createChat() {
    const chatItemDiv = document.createElement('div');
    chatItemDiv.classList.add('chat-item');

    const chatItemImage = document.createElement('img');
    chatItemImage.classList.add('chat-img');
    chatItemImage.src = 'item.url';

    const chatItemFlexDiv = document.createElement('div');
    chatItemFlexDiv.classList.add('chat-flex');

    const chatCatName = document.createElement('h2');
    chatCatName.classList.add('chat-catname');
    const chatCatNameNode = document.createTextNode('Cat Name...');
    chatCatName.appendChild(chatCatNameNode);

    const chatMessage = document.createElement('p');
    chatMessage.classList.add('chat-message');
    const chatMessagNode = document.createTextNode(textGenerate());
    chatMessage.appendChild(chatMessagNode);

    const chatItemHr = document.createElement('hr');

    chatContainer.appendChild(chatItemDiv);
    chatItemDiv.appendChild(chatItemImage);
    chatItemFlexDiv.appendChild(chatCatName);
    chatItemFlexDiv.appendChild(chatMessage);
    chatItemDiv.appendChild(chatItemFlexDiv);
    chatContainer.appendChild(chatItemHr);
};

let randomNumber = 0;

function textGenerate() {
    randomNumberFunc()
    switch(randomNumber){
        case 1:
            return 'MEEEEOWWIE'
        case 2:
            return 'Purr... This sounds exactly like what I wanted!'
        case 3:
            return 'Meow! I am so bored!'
        case 4:
            return 'Zzz... Hi... Zzz...'
        case 5:
            return 'Is it dinner time yet?'
    }
};

function randomNumberFunc() {
    randomNumber = Math.floor(Math.random() * 5) + 1;
};

// List
let listData = JSON.parse(localStorage.getItem('list')) || [];

function renderItem(item) {
    const listItemDiv = document.createElement('div');
    listItemDiv.classList.add('list-item');

    const listItemImage = document.createElement('img');
    listItemImage.classList.add('list-img');
    listItemImage.src = item.url;

    const listCatName = document.createElement('h2');
    listCatName.classList.add('list-catname');
    const listCatNameNode = document.createTextNode(item.name);
    listCatName.appendChild(listCatNameNode);

    const listLikeDislikeImage = document.createElement('img');
    listLikeDislikeImage.classList.add('list-like-dislike-img');
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

function loadListFromLocalStorage() {
    listData.forEach(item => renderItem(item));
};

function pushListFunc() {
    const listItem = {
        url: currentCatData.url,
        name: catNamesSaved[catNamesSaved.length - 1],
        liked: hasLiked
    };
    listData.push(listItem);
    localStorage.setItem('list', JSON.stringify(listData));
    renderItem(listItem);
};