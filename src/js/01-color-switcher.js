const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let disabled = true;
let timerId = null;

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);



function onStart() {
  timerId = setInterval(bgColor, 1000);
  
  refs.startBtn.setAttribute('disabled', '');
  }

function onStop() {
  clearInterval(timerId);

  refs.startBtn.removeAttribute('disabled');
}

function bgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
