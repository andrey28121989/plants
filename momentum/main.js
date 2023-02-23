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

// Name and city

const name = document.querySelector('.name');
const city = document.querySelector('.city');

function setLocalStorage() {
  localStorage.setItem('name', name.value)
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
    city.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getLocalStorage)

// Background Image

// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

// Weather

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=a33a5a5addebaf28899dcd5ec475902d&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  
  if (data.cod === '404' || data.cod === '400') {
    // weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
    weatherError.textContent = 'Incorrect city specified';
    weatherIcon.className = 'weather-icon owf';
  } else {
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    // weatherIcon.className = 'weather-icon owf';
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherError.textContent = '';
  }
  } 
getWeather();

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

// Quotes Day

const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuotes() { 
  const quotes = 'quotesDay.json';
  const res = await fetch(quotes);
  const data = await res.json();
  const quotesString = Math.round(Math.random() * data.length);
  quote.textContent = data[quotesString].text;
  author.textContent = data[quotesString].author;
  // console.log(data);
}
getQuotes();

changeQuote.addEventListener('click', getQuotes)
window.addEventListener('load', getQuotes);

// Audio player


