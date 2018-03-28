const square = document.getElementById('carOne');
const square2 = document.getElementById('carTwo');
const button = document.getElementById('resetButton');

const WIDTH = 100;
const FINISH_LINE = 1200;

let pos1 = 150;
let pos2 = 150;
let done = false;

button.addEventListener("click", (resetButton) => {
  initializeGame();
});

document.addEventListener('keydown', (e) => {
  if(!done){
    if (74 === e.keyCode) {
      if (pos1 < FINISH_LINE){
        pos1 += 100;
        square.style.left = pos1 + 'px';
      }
      if (pos1 + WIDTH >= FINISH_LINE){
        showWinner('Tortoise');
      }
    }
    if (70 === e.keyCode) {
      if (pos2 < FINISH_LINE){
        pos2 += 100;
        square2.style.left = pos2 + 'px';
      }
      if (pos2 + WIDTH >= FINISH_LINE){
        showWinner('Hare');
      }
    }
  }
});

function showWinner(winner){
  done = true;
  document.getElementById('winnerText').textContent = winner + ' has won!';
}

function initializeGame(){
  pos1 = 150;
  pos2 = 150;
  done = false;
  square.style.left = pos1 + 'px';
  square2.style.left = pos2 + 'px';
  document.getElementById('winnerText').textContent = 'Let the race begin!';
}

initializeGame(); // starts the game - this is called only once
