let buttons = document.getElementsByClassName('game-buttons__item');
let time = document.getElementsByClassName('timer__value')[0];
let numbers = document.getElementsByTagName('td');
let helpNumbers = document.getElementsByClassName('shulte__current-number');
let congratulationsTitle = document.getElementsByClassName('congratulations__title')[0];
let congratulationsText = document.getElementsByClassName('congratulations__text')[0];
let shulteSection = document.getElementsByClassName('shulte')[0];
let nextNumber = 1;

function hideHelpNumbers() {
    for (let i = 0; i < helpNumbers.length; i++) {
        helpNumbers[i].style.display = 'none';
        helpNumbers[i].innerHTML = nextNumber;
    }
}

function showHelpNumbers() {
    for (let i = 0; i < helpNumbers.length; i++) {
        helpNumbers[i].style.display = 'block';
    }
}

function hideCongratulations() {
    congratulationsTitle.style.display = 'none';
    congratulationsText.style.display = 'none';
    shulteSection.style.minHeight = '60rem';
}

function showCongratulations() {
    shulteSection.style.minHeight = '53.2rem';
    congratulationsTitle.style.display = 'block';
    congratulationsText.style.display = 'block';
}

function stopGame() {
    clearInterval(interval);
    setDefaultTime();
    nextNumber = 1;
    hideHelpNumbers();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    }

}

function createTable() {
    let values = [];

    for (let i = 0; i < 25; i++) {
        values.push(i + 1);
    }

    shuffle(values);

    for (let i = 0; i < values.length; i++) {
        numbers[i].innerText = values[i];
        numbers[i].addEventListener('click', function (e) {
           if (nextNumber === +numbers[i].innerText) {
               nextNumber++;
               for (let j = 0; j < helpNumbers.length; j++) {
                   helpNumbers[j].innerHTML = nextNumber;
               }
           }
           if (nextNumber === 26) {
               congratulationsText.innerHTML = 'You completed the Schulte table in ';
               congratulationsText.innerHTML += time.innerHTML;
               showCongratulations();
               stopGame();
           }
        });
    }
}

hideHelpNumbers();
createTable();
hideCongratulations();

let interval;

function createInterval() {
    oldDate = new Date();
    clearInterval(interval);
    interval = setInterval(calculateDate, 100);
}

function setDefaultTime() {
    time.innerText = '00:00:00.0';
}

function calculateDate() {
    let newDate = new Date() - oldDate;
    let milSec = Math.abs(Math.floor(newDate / 100 ) % 10);
    let sec = Math.abs(Math.floor(newDate / 1000) % 60); //sek
    let min = Math.abs(Math.floor(newDate / 1000 / 60) % 60); //min
    let hours = Math.abs(Math.floor(newDate / 1000 / 60 / 60) % 24); //hours
    if (sec.toString().length === 1) sec = '0' + sec;
    if (min.toString().length === 1) min = '0' + min;
    if (hours.toString().length === 1) hours = '0' + hours;
    time.innerText = hours + ':' + min + ':' + sec + '.' + milSec;
}


buttons[0].addEventListener('click', function (e) {
    createTable();
    createInterval();
    showHelpNumbers();
});

buttons[1].addEventListener('click', function (e) {
    stopGame();
});

