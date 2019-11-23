const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(event) {
  console.log(this.classList.value);
  // event.stopPropagation(); // stop bubbling!
  // console.log(this);
}

// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // default coming like 3-2-1
  once: true
}));

button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});