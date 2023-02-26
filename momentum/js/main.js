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

// name and city

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

// background Image

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

function getRandomNum() {                                                      
  return Math.ceil(Math.random() * 20);
}

let randomNum = getRandomNum();

function setBg() {
  const timeOfDay = getTimeOfDay();
  const bgNum = `${randomNum}`.padStart(2, "0")
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/andrey28121989/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${img.src})`;
  }
}
setBg();

const getSlideNext = () => {
  randomNum = (randomNum === 20) ? 1 : randomNum + 1;
  setBg()
}

const getSlidePrev = () => {
  randomNum = (randomNum === 1) ? 20 : randomNum - 1;
  setBg()
}

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);

// weather

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
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
    weatherError.textContent = 'Incorrect city specified';
    weatherIcon.className = 'weather-icon owf';
  } else {
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
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

// quotes Day

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

async function getQuotes() { 
  const quotes = 'js/quotesDay.json';
  const res = await fetch(quotes);
  const data = await res.json();
  const quotesString = Math.round(Math.random() * data.length);
  quote.textContent = `"${data[quotesString].text}"`;
  author.textContent = data[quotesString].author;
}
getQuotes();

changeQuote.addEventListener('click', getQuotes)
window.addEventListener('load', getQuotes);

// audio player

import playList from './playlist.js';

let isPlay = false;
let playNum = 0;

const playButton = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const playListItem = document.querySelector('.play-list');

playList.forEach(element => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = element.title;
  playListItem.append(li);
});

const playItem = document.querySelectorAll('.play-item')

const audio = new Audio();
let audioTime = 0;

const playAudio = () => {
  if (!isPlay) {
    audio.src = playList[playNum].src;
    audio.currentTime = audioTime;
    audio.play();
    isPlay = true;
    playButton.classList.toggle('pause');
    playItem[playNum].classList.add('item-active');
  } else {
    audio.pause();
    audioTime = audio.currentTime;
    isPlay = false;
    playButton.classList.toggle('pause');
  }
};

playButton.addEventListener('click', playAudio);

const audioNext = () => {
  audioTime = 0;
  isPlay = false;
  playButton.classList.remove('pause');
  playItem[playNum].classList.remove('item-active');
  if (playNum < 4){
  playNum++;
  playAudio();
} else if (playNum === 4) {
  playNum = 0;
  playAudio();
}
};

const audioPrev = () => {
  audioTime = 0;
  isPlay = false;
  playButton.classList.remove('pause');
  playItem[playNum].classList.remove('item-active');
  if (playNum > 0) {
    playNum--;
    playAudio();
  } else  if (playNum === 0){
    playNum = 4;
    playAudio();
  }
};

audio.addEventListener('ended', audioNext);
playPrev.addEventListener('click', audioPrev);
playNext.addEventListener('click', audioNext);

console.log ('Ваша оценка - 85 баллов из 150; выполнены пункты 1-6')