const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.stopBtn.disabled = true;
let timerId = null;

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(bgColor, 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStop() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;

  clearInterval(timerId);
}

function bgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
