// Vocable
const inputField = document.getElementById('input-field');
const panicBtn = document.getElementById('panic-btn');
const whisperBtn = document.getElementById('whisper-btn');
const capslockBtn = document.getElementById('capslock-btn');
const reverseBtn = document.getElementById('reverse-btn');
const capitalBtn = document.getElementById('capital-btn');
const emojifyBtn = document.getElementById('emojify-btn');
const palindromeBtn = document.getElementById('palindrome-btn');
const noDuplicatesBtn = document.getElementById('no-duplicates-btn');
const emojis = {
    "smile": "😊", "happy": "🙂", "laugh": "😂", "lol": "🤣", "love": "😍", "goofy": "🤪", "funny": "😝", "nerd": "🤓", "cool": "😎", "sad": "😞", "cry": "😭",
    "blush": "😳", "wow": "🤩", "lie": "🤥", "shocked": "😨", "tired": "🥱", "angry": "😠", "sleep": "😴", "sick": "🤢", "poop": "💩", "alien": "👽", "baby": "👶", 
    "kids": "🧒", "shirt": "👕", "jeans": "👖", "ring": "💍", "apple": "🍎", "banana": "🍌", "melon": "🍉", "cheese": "🧀", "eat": "🍴", "game": "🎮", "music": "🎼",
    "soccer": "⚽️", "winner": "🏆", "dice": "🎲", "money": "💵", "drink": "☕️", "cat": "🐱", "dog": "🐕", "duck": "🦆", "chick": "🐥", "hot": "🔥", "car": "🚗",
    "taxi": "🚖", "train": "🚂", "idea": "💡", "clock": "⏰", "key": "🔑", "!": "❗️", "?": "❓", "=": "🟰", "+": "➕", "laptop": "💻", "time": "⌛️", "book": "📚",
    "work": "💪", "party": "🎉", "heart": "💜", "hello": "👋", "hi": "👋", "bye": "👋", "yes": "👍", "no": "👎", "true": "✅", "false": "⛔️", "shh...": "🤫", "...hhs": "🫠",
    "lach": "😊", "blij": "🙂", "lachen": "😂", "grappig": "🤣", "verliefd": "😍", "dom": "🤪", "geinig": "😝", "gek": "🤓", "leuk": "😎", "verdrietig": "😞", "huilen": "😭",
    "verlegen": "😳", "wauw": "🤩", "liegen": "🤥", "bang": "😨", "moe": "🥱", "boos": "😠", "slapen": "😴", "ziek": "🤢", "poep": "💩", "oog": "👁️", "yes": "👍", 
    "kind": "🧒", "blouse": "👕", "broek": "👖", "trouwen": "💍", "appel": "🍎", "banaan": "🍌", "fruit": "🍉", "kaas": "🧀", "eten": "🍴", "gamen": "🎮", "muziek": "🎼",
    "voetbal": "⚽️", "winnaar": "🏆", "spel": "🎲", "geld": "💵", "drinken": "☕️", "kat": "🐱", "hond": "🐕", "eend": "🦆", "kip": "🐥", "heet": "🔥", "auto": "🚗",
    "tv": "📺", "trein": "🚂", "idee": "💡", "klok": "⏰", "sleutel": "🔑", "P": "🅿️", "WC": "🚾", "stop": "🛑", "robot": "🤖", "computer": "💻", "tijd": "⌛️", "boek": "📚",
    "werk": "💪", "feest": "🎉", "hart": "💜", "hallo": "👋", "hey": "👋", "hoi": "👋", "doei": "👋", "ja": "👍", "nee": "👎"
};

panicBtn.addEventListener('mouseover', () => panicBtn.src = '../images/vocable/text-frame-hover1.png');
panicBtn.addEventListener('mouseout', () => panicBtn.src = '../images/vocable/text-frame1.png');
panicBtn.addEventListener('click', () => { panicFunc(inputField.value) });
function panicFunc(text) {
    inputField.value = text
    .toUpperCase()
    .split(' ')
    .join(' 😱 ')
};

whisperBtn.addEventListener('mouseover', () => whisperBtn.src = '../images/vocable/text-frame-hover2.png');
whisperBtn.addEventListener('mouseout', () => whisperBtn.src = '../images/vocable/text-frame2.png');
whisperBtn.addEventListener('click', () => { whisperFunc(inputField.value) });
function whisperFunc(text) {
    inputField.value = 'shh... ' + text
    .toLowerCase()
};

capslockBtn.addEventListener('mouseover', () => capslockBtn.src = '../images/vocable/text-frame-hover3.png');
capslockBtn.addEventListener('mouseout', () => capslockBtn.src = '../images/vocable/text-frame3.png');
capslockBtn.addEventListener('click', () => { capslockFunc(inputField.value) });
function capslockFunc(text) {
    let newText = '';
    for(let i = 0; i < text.length; i++){
        if(i % 2 === 0){
            newText += text[i].toUpperCase()
        } else {
            newText += text[i].toLowerCase()
        };
    };
    return inputField.value = newText
};

reverseBtn.addEventListener('mouseover', () => reverseBtn.src = '../images/vocable/text-frame-hover4.png');
reverseBtn.addEventListener('mouseout', () => reverseBtn.src = '../images/vocable/text-frame4.png');
reverseBtn.addEventListener('click', () => { reverseFunc(inputField.value) });
function reverseFunc(text) {
    let newText = '';
    for(let i = text.length - 1; i >= 0; i--){
        newText += text[i]
    };
    return inputField.value = newText
};

capitalBtn.addEventListener('mouseover', () => capitalBtn.src = '../images/vocable/text-frame-hover5.png');
capitalBtn.addEventListener('mouseout', () => capitalBtn.src = '../images/vocable/text-frame5.png');
capitalBtn.addEventListener('click', () => { capitalFunc(inputField.value) });
function capitalFunc(text) {
    let newText = text.split(' ');
    let completeText = newText.map(word => capitalizeWord(word));
    return inputField.value = completeText.join(' ')
};

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1)
};

emojifyBtn.addEventListener('mouseover', () => emojifyBtn.src = '../images/vocable/text-frame-hover6.png');
emojifyBtn.addEventListener('mouseout', () => emojifyBtn.src = '../images/vocable/text-frame6.png');
emojifyBtn.addEventListener('click', () => { emojifyFunc(inputField.value) });
function emojifyWord(word){
    let slice = word.slice(1, -1);
    let lowCase = word.toLowerCase();
    if(emojis[word]){
        return emojis[word]
    } else if(emojis[slice]) {
        return emojis[slice]
    } else if(emojis[lowCase]) {
        return emojis[lowCase]
    }   else {
        return word
    };
};

function emojifyFunc(text) {
    let newText = text.split(" ").map(word => emojifyWord(word));
    return inputField.value = newText.join(" ")
};

palindromeBtn.addEventListener('mouseover', () => palindromeBtn.src = '../images/vocable/text-frame-hover7.png');
palindromeBtn.addEventListener('mouseout', () => palindromeBtn.src = '../images/vocable/text-frame7.png');
palindromeBtn.addEventListener('click', () => { palindromeFunc(inputField.value) });
function palindromeFunc(text){
    let reverseText = '';
    for(let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i];
    };
    return inputField.value = reverseText.toLowerCase() === text.toLowerCase()
};

noDuplicatesBtn.addEventListener('mouseover', () => noDuplicatesBtn.src = '../images/vocable/text-frame-hover8.png');
noDuplicatesBtn.addEventListener('mouseout', () => noDuplicatesBtn.src = '../images/vocable/text-frame8.png');
noDuplicatesBtn.addEventListener('click', () => { noDuplicatesFunc(inputField.value) });
function noDuplicatesFunc(text){
    let removed = '';
    for(let i = 0; i < text.length; i++) {
         if(!removed.includes(text[i])){
             removed += text[i];
         };
    };
    return inputField.value = removed;
};