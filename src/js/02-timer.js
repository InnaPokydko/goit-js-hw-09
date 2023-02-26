import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  text: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMin: document.querySelector('[data-minutes]'),
  dataSec: document.querySelector('[data-seconds]'),
};

let timerId = null;
let selectedDates = [];
refs.startBtn.setAttribute.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
      refs.startBtn.addEventListener('click', () => {
        onStart(selectedDates[0]);
      });
    }
  },
};

flatpickr(refs.text, options);

function onStart(selectedDate) {
  timerId = setInterval(() => {
    const currentDate = new Date();
    const deltaTime = selectedDate - currentDate;

    refs.startBtn.disabled = false;
    refs.text.disabled = false;

    if (deltaTime > 0) {
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.dataDays.textContent = days;
      refs.dataHours.textContent = hours;
      refs.dataMin.textContent = minutes;
      refs.dataSec.textContent = seconds;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
  return;
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}





// refs.startBtn.addEventListener('click', onStart);
// function updateTimerFace({ days, hours, minutes, seconds }) {
//   refs.dataDays.textContent = addLeadingZero(days);
//   refs.dataHours.textContent = addLeadingZero(hours);
//   refs.dataMin.textContent = addLeadingZero(minutes);
//   refs.dataSec.textContent = addLeadingZero(seconds);
// }

// function updateTimerFace({ days, hours, minutes, seconds }) {
//   if (refs.dataDays) {
//     refs.dataDays.innerText = addLeadingZero(days);
//   }
//   if (refs.dataHours) {
//     refs.dataHours.innerText = addLeadingZero(hours);
//   }
//   if (refs.dataMin) {
//     refs.dataMin.innerText = addLeadingZero(minutes);
//   }
//   if (refs.dataSec) {
//     refs.dataSec.innerText = addLeadingZero(seconds);
//   }
// }

// function createMarkup({ days, hours, minutes, seconds }) {
//   refs.dataDays.textContent = days;
//   refs.dataHours.textContent = hours;
//   refs.dataMin.textContent = minutes;
//   refs.dataSec.textContent = seconds;
// }

//     setInterval(() => {
//       const currentTime = Date.now;
//       const deltaTime = defaultDate - currentTime;
//       console.log(selectedDates[0]);
//       const timeComponents = convertMs(deltaTime);
//     }, 1000);
//   },
// };
