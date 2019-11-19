const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // px

const shadow = (event) => {
  let { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  let xWalk = Math.round((x / width * walk) - (walk / 2));
  let yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7)
  `;
}

hero.addEventListener('mousemove', shadow);