window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', event => {
  // console.log(event);

  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  
  p.textContent = transcript;
  
  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
  p.textContent = poopScript;

  if (event.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

  // const dogScript = transcript.replace(/dog/gi, '🐶');
  // if(transcript.includes('dog')) {
  //   p.textContent = dogScript;
  //   console.log('🐶🐶🐶');
  // }
});

recognition.addEventListener('end', recognition.start);
recognition.start();