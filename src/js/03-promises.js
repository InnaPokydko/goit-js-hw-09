import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name=delay]'),
  stepDelay: document.querySelector('input[name=step]'),
  amountDelay: document.querySelector('input[name=amount]'),
};
refs.form.addEventListener('submit', onSubmit);


function onSubmit(e) {
  e.preventDefault();

  let fDelay = Number(refs.firstDelay.value);
let step = Number(refs.stepDelay.value);
let amount = Number(refs.amountDelay.value);

  for (let i = 0; i <= amount; i += 1) {
    createPromise(i, fDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    fDelay += step;
  }
  refs.form.reset(); 
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

// const { delay, step, amount } = e.currentTarget;
// .then(({ position, delay }) => {
//   Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(({ position, delay }) => {
//   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// });
