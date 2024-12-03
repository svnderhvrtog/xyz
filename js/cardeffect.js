const $card = document.querySelectorAll('.card');
const glowOne = document.querySelector('.glow-one');
const glowTwo = document.querySelector('.glow-two');
const glowThree = document.querySelector('.glow-three');

let bounds;

function rotateToMouse(e) {
for(let i = 0; i < $card.length; i++){
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    $card[i].style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance)* 2}deg
      )
    `;
}
}

for(let i = 0; i < $card.length; i++){
$card[i].addEventListener('mouseenter', () => {
  bounds = $card[i].getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});
}

for(let i = 0; i < $card.length; i++){
$card[i].addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card[i].style.transform = '';
  $card[i].style.background = '';
});
}