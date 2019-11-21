const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(20deg)`;
}, (err) => {
  console.error(`Error: `,err);
});

// its working on App simulation