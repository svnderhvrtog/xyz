const minigameImg1 = document.querySelector('.memory-img');
const minigameImg2 = document.querySelector('.tic-img');
const gameSelect = document.getElementById('game-select');
const gameMemory = document.getElementById('memory');
const gameTic = document.getElementById('tic-tac-toe');

minigameImg1.addEventListener('mouseover', () => {
    minigameImg1.src = '../images/minigames/memory-hover.png'
})

minigameImg1.addEventListener('mouseout', () => {
    minigameImg1.src = '../images/minigames/memory.png'
})

minigameImg1.addEventListener('click', () => {
    gameSelect.style.display = "none";
    gameMemory.style.display = "block";
    gameTic.style.display = "none";
})


minigameImg2.addEventListener('mouseover', () => {
    minigameImg2.src = '../images/minigames/tic-tac-toe-hover.png'
})

minigameImg2.addEventListener('mouseout', () => {
    minigameImg2.src = '../images/minigames/tic-tac-toe.png'
})

