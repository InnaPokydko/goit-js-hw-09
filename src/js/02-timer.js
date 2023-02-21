

const timer = setInterval(function() {
  // Отримуємо поточну дату та час
  const now = new Date().getTime();

  // Знаходимо різницю між поточною датою та часом та датою та часом до якої відлікати таймер
  const distance = countDownDate - now;

  // Розраховуємо дні, години, хвилини та секунди
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Виводимо результат у відповідне місце на сторінці
  const timerElement = document.getElementById("timer");
  timerElement.innerHTML = "До кінця року залишилось: " + days + "д " + hours + "г " + minutes + "хв " + seconds + "с ";

  // Якщо таймер досягнув цілі, зупиняємо його та виводимо повідомлення
  if (distance < 0) {
    clearInterval(timer);
    timerElement.innerHTML = "Час вийшов!";
  }
}, 1000);




