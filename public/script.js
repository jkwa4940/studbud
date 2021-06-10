// NAVIGATION start
import Navigation from './components/navigation';

const links = document.querySelectorAll('.vertical > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

// for each loop
nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = (nav.getHash(link));
        nav.setPage(pageId);
    })
})

const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

// subNav 
var subNav = new Navigation(subLinks, subPages);
// event listeners for subNav
subNav.links.forEach((link) => {
    link.addEventListener('click', function() {
        let pageId = subNav.getHash(link);
        subNav.setPage(pageId);
    })
})
// NAVIGATION END


// TASK LIST start
//use const as the form will never change. Var also works
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
//const button = document.querySelector("form > button")
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

//eventListener for button
form.addEventListener("submit", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
  console.log(taskList);
})


var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  //task components
  let task = {
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    completionTime,
    priorityRating,
    completionStatus
  };
  taskListArray.push(task);
  renderTask(task);
}

// add rest of info to display for bulletpoint
function renderTask(task) {
  // Create HTML elements
  let item = document.createElement("li");
  item.innerHTML = "<p>" + task.taskDescription + "</p>";

  tasklist.appendChild(item);

  // Extra Task DOM elements
  let delButton = document.createElement("button");
  let delButtonText= document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  // Event Listeners for DOM elements
  delButton.addEventListener("click", function(event) {
    event.preventDefault();
    item.remove();
  })

  // Clear the input form 
  form.reset();
}

// TASK LIST end


// TIMER start

// Convert time to a format of hours, minutes, seconds, and milliseconds
function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");
  

  return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below
let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML
function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons
function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

// TIMER end

/*
// POMODORO start
const pomTimer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
  sessions: 0,
};

let interval;

const buttonSound = new Audio('button-sound.mp3');
const mainButton = document.getElementById('js-btn');
mainButton.addEventListener('click', () => {
  buttonSound.play();
  const { action } = mainButton.dataset;
  if (action === 'start') {
    startTimer();
  } else {
    stopTimer();
  }
});

const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);

function getRemainingTime(endTime) {
  const currentTime = Date.parse(new Date());
  const difference = endTime - currentTime;

  const total = Number.parseInt(difference / 1000, 10);
  const minutes = Number.parseInt((total / 60) % 60, 10);
  const seconds = Number.parseInt(total % 60, 10);

  return {
    total,
    minutes,
    seconds,
  };
}

function startTimer() {
  let { total } = pomTimer.remainingTime;
  const endTime = Date.parse(new Date()) + total * 1000;

  if (pomTimer.mode === 'pomodoro') pomTimer.sessions++;

  mainButton.dataset.action = 'stop';
  mainButton.textContent = 'stop';
  mainButton.classList.add('active');

  interval = setInterval(function() {
    pomTimer.remainingTime = getRemainingTime(endTime);
    updateClock();

    total = pomTimer.remainingTime.total;
    if (total <= 0) {
      clearInterval(interval);

      switch (pomTimer.mode) {
        case 'pomodoro':
          if (pomTimer.sessions % pomTimer.longBreakInterval === 0) {
            switchMode('longBreak');
          } else {
            switchMode('shortBreak');
          }
          break;
        default:
          switchMode('pomodoro');
      }

      if (Notification.permission === 'granted') {
        const text =
          pomTimer.mode === 'pomodoro' ? 'Get back to work!' : 'Take a break!';
        new Notification(text);
      }

      document.querySelector(`[data-sound="${pomTimer.mode}"]`).play();

      startTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);

  mainButton.dataset.action = 'start';
  mainButton.textContent = 'start';
  mainButton.classList.remove('active');
}

function updateClock() {
  const { remainingTime } = pomTimer;
  const minutes = `${remainingTime.minutes}`.padStart(2, '0');
  const seconds = `${remainingTime.seconds}`.padStart(2, '0');

  const min = document.getElementById('js-minutes');
  const sec = document.getElementById('js-seconds');
  min.textContent = minutes;
  sec.textContent = seconds;

  const text =
    pomTimer.mode === 'pomodoro' ? 'Get back to work!' : 'Take a break!';
  document.title = `${minutes}:${seconds} — ${text}`;

  const progress = document.getElementById('js-progress');
  progress.value = pomTimer[pomTimer.mode] * 60 - pomTimer.remainingTime.total;
}

function switchMode(mode) {
  pomTimer.mode = mode;
  pomTimer.remainingTime = {
    total: pomTimer[mode] * 60,
    minutes: pomTimer[mode],
    seconds: 0,
  };

  document
    .querySelectorAll('button[data-mode]')
    .forEach(e => e.classList.remove('active'));
  document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
  document.body.style.backgroundColor = `var(--${mode})`;
  document
    .getElementById('js-progress')
    .setAttribute('max', pomTimer.remainingTime.total);

  updateClock();
}

function handleMode(event) {
  const { mode } = event.target.dataset;

  if (!mode) return;

  switchMode(mode);
  stopTimer();
}

document.addEventListener('DOMContentLoaded', () => {
  if ('Notification' in window) {
    if (
      Notification.permission !== 'granted' &&
      Notification.permission !== 'denied'
    ) {
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          new Notification(
            'You will be notified at the start of each session'
          );
        }
      });
    }
  }

  switchMode('pomodoro');
});

*/
// POMODORO end

// DICTIONARY START
// https://github.com/patelrohan750/Build-A-Dictionary-app-using-JavaScript/tree/master

let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search');
let apiKey = 'b3459c2f-974e-4b4d-b275-980057d4041a';
let notFound = document.querySelector('.not__found');
let defBox = document.querySelector('.def');
let audioBox = document.querySelector('.audio');
let loading = document.querySelector('.loading');

searchBtn.addEventListener('click', function(e) {
	e.preventDefault();

	// clear data
	audioBox.innerHTML = '';
	notFound.innerText = '';
	defBox.innerText = '';

	// Get input data
	let word = input.value;
	// call API get data
	if (word === '') {
		alert('Word is required');
		return;
	}

	getData(word);
});

async function getData(word) {
	loading.style.display = 'block';
	// Ajax call
	const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`);
	const data = await response.json();
	console.log(data);
	// if empty result
	if (!data.length) {
		loading.style.display = 'none';
		notFound.innerText = ' No result found';
		return;
	}

	// If result is suggestions
	if (typeof data[0] === 'string') {
		loading.style.display = 'none';
		let heading = document.createElement('h3');
		heading.innerText = 'Did you mean:';
		notFound.appendChild(heading);
		data.forEach((element) => {
			let suggestion = document.createElement('span');
			suggestion.classList.add('suggested');
			suggestion.innerText = element;
			notFound.appendChild(suggestion);
		});
		return;
	}

	// Result found
	loading.style.display = 'none';
	let definition = data[0].shortdef[0];
	defBox.innerText = definition;

	// Sound
	const soundName = data[0].hwi.prs[0].sound.audio;
	if (soundName) {
		renderSound(soundName);
	}

	console.log(data);
}

function renderSound(soundName) {
	// https://media.merriam-webster.com/soundc11
	let subfolder = soundName.charAt(0);
	let soundSrc = `https://media.merriam-webster.com/soundc11/${subfolder}/${soundName}.wav?key=${apiKey}`;

	let aud = document.createElement('audio');
	aud.src = soundSrc;
	aud.controls = true;
	audioBox.appendChild(aud);
}

// DICTIONARY END