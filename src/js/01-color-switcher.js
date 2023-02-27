body = document.querySelector('body');
startBtn = document.querySelector('button[data-start]');
stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function bgColor() {
  body.style.backgroundColor = getRandomHexColor();
}

stopBtn.disabled = true;
let timerId = null;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(bgColor, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
});

// function onStart() {
//   timerId = setInterval(bgColor, 1000);

//   refs.startBtn.disabled = true;
//   refs.stopBtn.disabled = false;
// }

// function onStop() {
//   refs.startBtn.disabled = false;
//   refs.stopBtn.disabled = true;

//   clearInterval(timerId);
// }
