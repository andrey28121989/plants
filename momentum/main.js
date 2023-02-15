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

