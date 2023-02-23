import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  text: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('value[data-days]'),
  dataHours: document.querySelector('value[data-hours]'),
  dataMin: document.querySelector('value[data-minutes]'),
  dataSec: document.querySelector('value[data-seconds]'),
};

let timerId = null;
refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] - new Date() < 0) {
      refs.startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
    }
  },
};

const flatp = flatpickr(refs.text, options);

refs.startBtn.addEventListener('click', onStart);

const selectedDate = Number(flatp.selectedDates[0]);
function onStart() {
 
  timerId = setInterval(() => {
    const currentDate = new Date().getTime();
    const deltaTime = selectedDate - currentDate;
   
    // if (deltaTime < 0) {
    //   clearInterval(timerId);
    //   return;
    // }
    refs.startBtn.disabled = false;
    updateTimerFace(convertMs(deltaTime));
  }, 1_000);
}

function convertMs(ms) {
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

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  if (refs.dataDays) {
    refs.dataDays.innerText = addLeadingZero(days);
  }
  if (refs.dataHours) {
    refs.dataHours.innerText = addLeadingZero(hours);
  }
  if (refs.dataMin) {
    refs.dataMin.innerText = addLeadingZero(minutes);
  }
  if (refs.dataSec) {
    refs.dataSec.innerText = addLeadingZero(seconds);
  }
}

// function updateTimerFace({ days, hours, minutes, seconds }) {
//   refs.dataDays.innerText = addLeadingZero(days);
//   refs.dataHours.innerText = addLeadingZero(hours);
//   refs.dataMin.innerText = addLeadingZero(minutes);
//   refs.dataSec.innerText = addLeadingZero(seconds);
// }

// window.addEventListener(refs.dataDays.textContent = '00',
// refs.dataHours.textContent = '00',
// refs.dataMin.textContent = '00',
// refs.dataSec.textContent = '00')

//     setInterval(() => {
//       const currentTime = Date.now;
//       const deltaTime = defaultDate - currentTime;
//       console.log(selectedDates[0]);
//       const timeComponents = convertMs(deltaTime);
//     }, 1000);
//   },
// };
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

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// require('flatpickr/dist/themes/dark.css');
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   btnTimerStart: document.querySelector('[data-start]'),
//   timerFieldDays: document.querySelector('[data-days]'),
//   timerFielHours: document.querySelector('[data-hours]'),
//   timerFieldMinutes: document.querySelector('[data-minutes]'),
//   timerFieldSeconds: document.querySelector('[data-seconds]'),
// };

// refs.btnTimerStart.disabled = true;
// let timerId = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     const currentDate = new Date();

//     if (selectedDates[0] - currentDate > 0) {
//       refs.btnTimerStart.disabled = false;
//     } else {
//       refs.btnTimerStart.disabled = true;
//       Notify.failure('Please choose a date in the future', {
//         timeout: 1500,
//         width: '400px',
//       });
//     }
//   },
// };

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, 0);
// }

// function onTimerStart() {
//   const selectedDate = fp.selectedDates[0];

//   timerId = setInterval(() => {
//     const startTime = new Date();
//     const countdown = selectedDate - startTime;
//     refs.btnTimerStart.disabled = true;

//     if (countdown < 0) {
//       clearInterval(timerId);
//       return;
//     }
//     updateTimerFace(convertMs(countdown));
//   }, 1_000);
// }

// function updateTimerFace({ days, hours, minutes, seconds }) {
//   refs.timerFieldDays.textContent = addLeadingZero(days);
//   refs.timerFielHours.textContent = addLeadingZero(hours);
//   refs.timerFieldMinutes.textContent = addLeadingZero(minutes);
//   refs.timerFieldSeconds.textContent = addLeadingZero(seconds);
// }

// const fp = flatpickr('#datetime-picker', options);

// refs.btnTimerStart.addEventListener('click', onTimerStart);

// nClose(selectedDates) {
//   const selectedDate = Number(selectedDates[0]);
//   const currentDate = new Date();

//   if (selectedDate - currentDate > 0) {
//     refs.startBtn.disabled = false;
//   } else {
//     refs.startBtn.disabled = true;
//     Notify.failure('Please choose a date in the future');
//   }
// },
