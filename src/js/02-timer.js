import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const refs = {
  text: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('value[data-days]'),
  dataHours: document.querySelector('value[data-hours]'),
  dataMin: document.querySelector('value[data-minutes]'),
  dataSec: document.querySelector('value[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    const deltaTime = startTime - currentTime; 
    console.log(selectedDates[0]);
  },
};

refs.startBtn.setAttribute('disabled', true);
flatpickr(refs.text, options);
let timerId = null;

const timer = {
  start() {
    const startTime = Date.now();
    
    setInterval(() =>{
const currentTime = Date.now();
const deltaTime = startTime - currentTime; 
const timeComponents = convertMs(deltaTime);
    }, 1000);
  },
};
timer.start();

function convertMs() {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
  const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  // if (deltaTime < 0) {
  //     clearInterval(timer);
  //     timer.innerHTML = "Час вийшов!";
  //   }
  // }, 1000);
  
// const timer = setInterval(function() {
//   // Отримуємо поточну дату та час
//   const now = new Date().getTime();

//   // Знаходимо різницю між поточною датою та часом та датою та часом до якої відлікати таймер
//   const distance = countDownDate - now;

//   // Розраховуємо дні, години, хвилини та секунди
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Виводимо результат у відповідне місце на сторінці
//   const timerElement = document.getElementById("timer");
//   timerElement.innerHTML = "До кінця року залишилось: " + days + "д " + hours + "г " + minutes + "хв " + seconds + "с ";

//   // Якщо таймер досягнув цілі, зупиняємо його та виводимо повідомлення
//   if (distance < 0) {
//     clearInterval(timer);
//     timerElement.innerHTML = "Час вийшов!";
//   }
// }, 1000);




