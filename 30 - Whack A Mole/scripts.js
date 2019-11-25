const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const randomHole = (holes) => {
  let index = Math.floor(Math.random() * holes.length);
  let hole = holes[index];

  if (hole === lastHole) {
    console.log('Ah thats the same one mole 💩');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

const peep = () => {
  let time = randomTime(200, 1000); // => if you wanna expert Level
  let hole = randomHole(holes);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(
    () => timeUp = true, 10000
  );
}

function bonk(event) {
  if (!event.isTrusted) return; // cheater!
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(
  mole => mole.addEventListener('click', bonk)
);