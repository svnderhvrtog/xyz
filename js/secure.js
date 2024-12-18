// Password
const lengthValue = document.getElementById('length-value');
const generateBtn = document.getElementById('generate');
const topSection = document.querySelector('.spacing');
const passwordOne = document.getElementById('pass-el-one');
const passwordTwo = document.getElementById('pass-el-two');
const passwordThree = document.getElementById('pass-el-three');
const passwordFour = document.getElementById('pass-el-four');
const copyOne = document.getElementById('copy-one');
const copyTwo = document.getElementById('copy-two');
const copyThree = document.getElementById('copy-three');
const copyFour = document.getElementById('copy-four');
const randomCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7','8', '9', '0', '-', ',', '.', '/', '=', '!', '@', '#', '$', '&', '(', ')']
let isCopying = false;

generateBtn.addEventListener('click', () => {
    if(lengthValue.value < 8){
        const errorP = document.createElement('h2');
        const errorText = document.createTextNode('Insert a number greater than 8.');
        errorP.appendChild(errorText);
        topSection.appendChild(errorP);
        setTimeout(() => {
            errorP.style.display = 'none';
        }, 3000);
        return
    } else if (lengthValue.value > 32){
        const errorP = document.createElement('h2');
        const errorText = document.createTextNode('Insert a number less than 32.');
        errorP.appendChild(errorText);
        topSection.appendChild(errorP);
        setTimeout(() => {
            errorP.style.display = 'none';
        }, 3000);
        return
    };

    const generatedPasswordOne = generate();
    const generatedPasswordTwo = generate();
    const generatedPasswordThree = generate();
    const generatedPasswordFour = generate();
    passwordOne.innerText = generatedPasswordOne;
    passwordTwo.innerText = generatedPasswordTwo;
    passwordThree.innerText = generatedPasswordThree;
    passwordFour.innerText = generatedPasswordFour;
    copyOne.style.color = '#10B981';
    copyTwo.style.color = '#10B981';
    copyThree.style.color = '#10B981';
    copyFour.style.color = '#10B981';
});

copyOne.addEventListener('click', () => {
    if (isCopying) {
        return
    };
    isCopying = true;
    const textValue = document.createElement('textarea');
    textValue.value = passwordOne.innerText;
    document.body.appendChild(textValue);
    textValue.select();
    textValue.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textValue.value);
    passwordOne.style.color = '#D5D4D8';
    passwordOne.innerText = 'Password is copied to clipboard!';
    setTimeout(() => {
        passwordOne.style.color = '#10B981';
        passwordOne.innerText = textValue.value;
        isCopying = false;
    }, 1500);
    document.body.removeChild(textValue);
});

copyTwo.addEventListener('click', () => {
    if (isCopying) {
        return
    };
    isCopying = true;
    const textValue = document.createElement('textarea');
    textValue.value = passwordTwo.innerText;
    document.body.appendChild(textValue);
    textValue.select();
    textValue.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textValue.value);
    passwordTwo.style.color = '#D5D4D8';
    passwordTwo.innerText = 'Password is copied to clipboard!';
    setTimeout(() => {
        passwordTwo.style.color = '#10B981';
        passwordTwo.innerText = textValue.value;
        isCopying = false;
    }, 1500);
    document.body.removeChild(textValue);
});

copyThree.addEventListener('click', () => {
    if (isCopying) {
        return
    };
    isCopying = true;
    const textValue = document.createElement('textarea');
    textValue.value = passwordThree.innerText;
    document.body.appendChild(textValue);
    textValue.select();
    textValue.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textValue.value);
    passwordThree.style.color = '#D5D4D8';
    passwordThree.innerText = 'Password is copied to clipboard!';
    setTimeout(() => {
        passwordThree.style.color = '#10B981';
        passwordThree.innerText = textValue.value;
        isCopying = false;
    }, 1500);
    document.body.removeChild(textValue);
});

copyFour.addEventListener('click', () => {
    if (isCopying) {
        return
    };
    isCopying = true;
    const textValue = document.createElement('textarea');
    textValue.value = passwordFour.innerText;
    document.body.appendChild(textValue);
    textValue.select();
    textValue.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textValue.value);
    passwordFour.style.color = '#D5D4D8';
    passwordFour.innerText = 'Password is copied to clipboard!';
    setTimeout(() => {
        passwordFour.style.color = '#10B981';
        passwordFour.innerText = textValue.value;
        isCopying = false;
    }, 1500);
    document.body.removeChild(textValue);
});

function generate() {
    let password = '';
    while(lengthValue.value > password.length) {
        password += randomCharacters[Math.floor( Math.random() * randomCharacters.length)]
    };
    return password
};