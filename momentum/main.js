// time and date

const time = document.querySelector('.time');
const date1 = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime; 
    setTimeout(showTime, 1000);
    function showDate() {
        const date = new Date();
        const options = {weekday: 'long', month: 'long', day: 'numeric'};
        const currentDate = date.toLocaleDateString('en-Br', options);
        date1.textContent = currentDate;
    }
    showDate();
  }
  showTime();

// welcome

const greeting = document.querySelector('.greeting');

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours(); 
  let timeOfDay;

  if (hours >= 6 && hours < 12) {
    timeOfDay = 'morning';
 } else if (hours >= 12 && hours < 18) {
  timeOfDay = 'afternoon';
 } else if (hours >= 18 && hours < 24) {
  timeOfDay = 'evening';
 } else {
  timeOfDay = 'night';
 }

 return timeOfDay;
}
getTimeOfDay()

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
}
showGreeting()

// Name

const name = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)

// Background Image

body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";