const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  
  if (!audio) return; // stop the null return
  // console.log(audio);
  audio.currentTime = 0; // rewind to the start
  audio.play();
  // console.log(key);
  key.classList.add('playing');
};

const removeTransition = (event) => {
  if (event.propertyName != 'transform') return; // skip it if it's not transform 
  this.classList.remove('playing'); // this is line 79 there have key
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);