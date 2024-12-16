// Variables
const inputWidth = document.getElementById('input-width');
const inputHeight = document.getElementById('input-height');
const inputWinCondition = document.getElementById('input-win-condition');
const gameSection = document.getElementById('game');
const boardSection = document.getElementById('board');
const scoreX = document.getElementById('score-x');
const scoreO = document.getElementById('score-o');
scoreX.textContent = localStorage.getItem('playerOne'); 
scoreO.textContent = localStorage.getItem('playerTwo');
const buttonStart = document.getElementById('btn-start');
const buttonReset = document.getElementById('btn-rest');
const headingText = document.getElementById('heading-text');
const settingsMenu = document.getElementById('settings-menu');

let rowElement = '';
let cellElement = '';

let playerOneWin = 0;
let playerTwoWin = 0;
let currentPlayer = randomStart();

const falseValue = document.createElement('h3');
const falseText = document.createTextNode('The win condition cannot be met');
falseValue.style.color = 'red';
falseValue.style.display = 'none';
falseValue.appendChild(falseText);
gameSection.appendChild(falseValue);

const message = document.createElement('h3');
const messageText = document.createTextNode('');
message.style.display = 'none';
message.appendChild(messageText);
gameSection.appendChild(message);

if (localStorage.getItem('playerOne') === null) {
    localStorage.setItem('playerOne', 0);
    localStorage.setItem('playerTwo', 0);
};

window.onload = () => {
    playerOneWin = parseInt(localStorage.getItem('playerOne')) || 0;
    playerTwoWin = parseInt(localStorage.getItem('playerTwo')) || 0;
    scoreX.textContent = localStorage.getItem('playerOne');
    scoreO.textContent = localStorage.getItem('playerTwo');
};

function randomStart() {
    let randomNumber = Math.floor( Math.random() * 2 ) + 1;
    if(randomNumber === 1){
        return 'x'
    } else if (randomNumber === 2){
        return 'o'
    }
};

buttonStart.addEventListener('click', startGame);
function startGame() {
    if(inputWidth.value == 3 && inputWinCondition.value > 3 || inputHeight.value == 3 && inputWinCondition.value > 3){
        falseValue.style.display = 'block';
        setTimeout(() => {
            falseValue.style.display = 'none';
        }, 2000)
        return
    } else if (inputWidth.value == 4 && inputWinCondition.value > 4 || inputHeight.value == 4 && inputWinCondition.value > 4){
        falseValue.style.display = 'block';
        setTimeout(() => {
            falseValue.style.display = 'none';
        }, 2000)
        return
    } else if (inputWidth.value == 5 && inputWinCondition.value > 5 || inputHeight.value == 5 && inputWinCondition.value > 5){
        falseValue.style.display = 'block';
        setTimeout(() => {
            falseValue.style.display = 'none';
        }, 2000)
        return
    };
    settingsMenu.style.display = 'none';
    buttonStart.style.display = 'none';
    buttonReset.style.display = 'none';
    headingText.innerText = `The first player is: ${currentPlayer}`;
    boardStructering(inputWidth.value, inputHeight.value);
};

function boardStructering(rows, cells) {
    boardSection.innerHTML = '';
    
    for(let row = 0; row < rows; row++){
        rowElement = document.createElement('div');
        rowElement.classList.add('row');

        for(let col = 0; col < cells; col++){
            cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.setAttribute('data-row', row);
            cellElement.setAttribute('data-col', col);

            cellElement.addEventListener('click', playGame);

            rowElement.appendChild(cellElement);
        }
    
        boardSection.appendChild(rowElement);
    }
};

function playGame(event) {
    const cell = event.target;

    if (cell.classList.contains('o') || cell.classList.contains('x')) {
        return
    };

    cell.classList.add(currentPlayer);

    checkTie();
    checkWin();

    if(currentPlayer === 'o'){
        currentPlayer = 'x';
    } else if (currentPlayer === 'x'){
        currentPlayer = 'o';
    };
};

function checkTie() {
    const cells =  boardSection.querySelectorAll('.cell');
    for (const cell of cells) {
        if (!cell.classList.contains('x') && !cell.classList.contains('o')) {
            return
        }
    };
    headingText.style.display = "block";
    headingText.textContent = `It's a tie!`
    boardSection.innerHTML = '';
    settingsMenu.style.display = 'block';
    buttonStart.style.display = 'block';
    buttonReset.style.display = 'block';
    gameSection.style.display = 'block';
    setTimeout(() => {
        headingText.textContent = `Game set-up`;
    }, 1000);
};

function checkWin() {
    const winCondition = parseInt(inputWinCondition.value);
    const rows = parseInt(inputHeight.value);
    const cols = parseInt(inputWidth.value);

    function checkDirection(startRow, startCol, rowDir, colDir) {
        let count = 0;

        for (let i = 0; i < winCondition; i++) {
            const rowLength = startRow + i * rowDir;
            const colLength = startCol + i * colDir;
         
            if (rowLength >= 0 && rowLength < rows && colLength >= 0 && colLength < cols) {
                const cell = boardSection.querySelector(`[data-row='${rowLength}'][data-col='${colLength}']`);

                if (cell && cell.classList.contains(currentPlayer)) {
                    count++;
                } else {
                    break
                };
            };
        };

        return count === winCondition;
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (
                checkDirection(row, col, 0, 1) ||
                checkDirection(row, col, 1, 0) ||
                checkDirection(row, col, 1, 1) ||
                checkDirection(row, col, 1, -1)
            ) {
                headingText.textContent = `${currentPlayer} is the winner!`
                setTimeout(() => {
                    headingText.textContent = `Game set-up`
                }, 1000);
                winCount();
                resetBoard();
                return
            };
        };
    };
};

function winCount() {
    if(currentPlayer === 'x'){
        playerOneWin++
        localStorage.setItem('playerOne', playerOneWin)
        scoreX.textContent = `${localStorage.getItem('playerOne')}`
    } else if (currentPlayer === 'o') {
        playerTwoWin++
        localStorage.setItem('playerTwo', playerTwoWin)
        scoreO.textContent = `${localStorage.getItem('playerTwo')}`
    };
};

function resetBoard() {
    settingsMenu.style.display = 'block';
    buttonStart.style.display = 'block';
    buttonReset.style.display = 'block';
    gameSection.style.display = 'block';
    boardSection.innerHTML = '';
    currentPlayer = randomStart();
};

buttonReset.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});