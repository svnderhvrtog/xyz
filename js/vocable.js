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

panicBtn.addEventListener('mouseover', () => panicBtn.src = '../images/vocable/text-frame-hover1.png');
panicBtn.addEventListener('mouseout', () => panicBtn.src = '../images/vocable/text-frame1.png');
panicBtn.addEventListener('click', () => { panicFunc(inputField.value) });
function panicFunc(text) {
    inputField.value = text
    .toUpperCase()
    .split(' ')
    .join(' 😱 ')
}

whisperBtn.addEventListener('mouseover', () => whisperBtn.src = '../images/vocable/text-frame-hover2.png');
whisperBtn.addEventListener('mouseout', () => whisperBtn.src = '../images/vocable/text-frame2.png');
whisperBtn.addEventListener('click', () => { whisperFunc(inputField.value) });
function whisperFunc(text) {
    inputField.value = 'shh... ' + text
    .toLowerCase()
}

capslockBtn.addEventListener('mouseover', () => capslockBtn.src = '../images/vocable/text-frame-hover3.png');
capslockBtn.addEventListener('mouseout', () => capslockBtn.src = '../images/vocable/text-frame3.png');
capslockBtn.addEventListener('click', () => { capslockFunc(inputField.value) });
function capslockFunc(text) {
    let newText = ''
    for(let i = 0; i < text.length; i++){
        if(i % 2 === 0){
            newText += text[i].toUpperCase()
        } else {
            newText += text[i].toLowerCase()
        }
    }
    return inputField.value = newText
}

reverseBtn.addEventListener('mouseover', () => reverseBtn.src = '../images/vocable/text-frame-hover4.png');
reverseBtn.addEventListener('mouseout', () => reverseBtn.src = '../images/vocable/text-frame4.png');
reverseBtn.addEventListener('click', () => { reverseFunc(inputField.value) });
function reverseFunc(text) {
    let newText = '';
    for(let i = text.length - 1; i >= 0; i--){
        newText += text[i]
    };
    return inputField.value = newText
}

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

palindromeBtn.addEventListener('mouseover', () => palindromeBtn.src = '../images/vocable/text-frame-hover7.png');
palindromeBtn.addEventListener('mouseout', () => palindromeBtn.src = '../images/vocable/text-frame7.png');

noDuplicatesBtn.addEventListener('mouseover', () => noDuplicatesBtn.src = '../images/vocable/text-frame-hover8.png');
noDuplicatesBtn.addEventListener('mouseout', () => noDuplicatesBtn.src = '../images/vocable/text-frame8.png');