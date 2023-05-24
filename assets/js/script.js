const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateTime() {
  const date = new Date();
  let hours = String(date.getHours()).padStart('2', '0');
  let minutes = String(date.getMinutes()).padStart('2', '0');
  let seconds = String(date.getSeconds()).padStart('2', '0');

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Atualiza o relógio inicialmente e, em seguida, a cada segundo
updateTime();
const clock = setInterval(updateTime, 1000);
