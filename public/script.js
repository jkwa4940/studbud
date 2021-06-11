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

// use const as the form will never change. Var also works
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
// const button = document.querySelector("form > button")
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

//eventListener for button
form.addEventListener("submit", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(task, dueDate, estimatedTime, priorityRating, false);
  console.log(tasklist);
})


var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating) {
  //task components
  let task = {
    taskDescription,
    dueDate,
    estimatedTime,
    priorityRating
  };
  taskListArray.push(task);
  renderTask(task);
}

// add rest of info to display for bulletpoint
function renderTask(task) {
  // Create HTML elements
  let item1 = document.createElement("li");
  item1.innerHTML = "<p>" + task.taskDescription + "</p>";
  tasklist.appendChild(item1);

  let item2 = document.createElement("li");
  item2.innerHTML = "<p>" + task.dueDate + "</p>";
  tasklist.appendChild(item2);

  let item3 = document.createElement("li");
  item3.innerHTML = "<p>" + task.estimatedTime + "</p>";
  tasklist.appendChild(item3);

  let item4 = document.createElement("li");
  item4.innerHTML = "<p>" + task.priorityRating + "</p>";
  tasklist.appendChild(item4);

  let item5 = document.createElement("li");
  tasklist.appendChild(item5);

  // Extra Task DOM elements
  let delButton = document.createElement("button");
  let delButtonText= document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item5.appendChild(delButton);

  // Event Listeners for DOM elements
  delButton.addEventListener("click", function(event) {
    event.preventDefault();
    item1.remove();
    item2.remove();
    item3.remove();
    item4.remove();
    item5.remove();
    delButton.remove()
  })

  // Clear the input form 
  form.reset();
}

// MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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



// POMODORO start
// https://inspiredwebdev.com/create-pomodoro-clock/

const pomodoroTimer = document.querySelector('#pomodoro-timer')
const pomStart = document.querySelector('#pomodoro-start')
const pomStop = document.querySelector('#pomodoro-stop')

let type = 'Work'
let timeSpentInCurrentSession = 0
let isClockStopped = true

let updatedWorkSessionDuration
let updatedBreakSessionDuration

let workDurationInput = document.querySelector('#input-work-duration')
let breakDurationInput = document.querySelector('#input-break-duration')

workDurationInput.value = '25'
breakDurationInput.value = '5'


const showStopIcon = () => {
  const stopButton = document.querySelector('#pomodoro-stop')
  stopButton.classList.remove('hidden')
}

const togglePlayPauseIcon = (reset) => {
  const playIcon = document.querySelector('#play-icon')
  const pauseIcon = document.querySelector('#pause-icon')
  if (reset) {
    // when resetting -> always revert to play icon
    if (playIcon.classList.contains('hidden')) {
      playIcon.classList.remove('hidden')
    }
    if (!pauseIcon.classList.contains('hidden')) {
      pauseIcon.classList.add('hidden')
    }
  } else {
    playIcon.classList.toggle('hidden')
    pauseIcon.classList.toggle('hidden')
  }
}


// Start button
pomStart.addEventListener('click', () => {
  toggleClock()
})
// Stop button
pomStop.addEventListener('click', () => {
  toggleClock(true)
})


// UPDATE WORK TIME
workDurationInput.addEventListener('input', () => {
  updatedWorkSessionDuration = minuteToSeconds(workDurationInput.value)
})
// UPDATE PAUSE TIME
breakDurationInput.addEventListener('input', () => {
  updatedBreakSessionDuration = minuteToSeconds(breakDurationInput.value)
})
const minuteToSeconds = (mins) => {
  return mins * 60
}

let isClockRunning = false

// Work and break durations
let workSessionDuration = 1500
let currentTimeLeftInSession = 1500
let breakSessionDuration = 300

const toggleClock = (reset) => {
  togglePlayPauseIcon(reset);
  if (reset) {
    // Stop the timer
    stopClock()
  } else {
    if (isClockStopped) {
      setUpdatedTimers()
      isClockStopped = false
    }
    if (isClockRunning === true) {
      // Pause the timer
      clearInterval(clockTimer)
      isClockRunning = false
    } else {
      // Start the timer
      clockTimer = setInterval(() => {
        // decrease time left / increase time spent
        stepDown()
        displayCurrentTimeLeftInSession()
      }, 1000)
      isClockRunning = true
    }
    showStopIcon()
  }
}


const displayCurrentTimeLeftInSession = () => {
  const secondsLeft = currentTimeLeftInSession
  let result = ''
  const seconds = secondsLeft % 60
  const minutes = parseInt(secondsLeft / 60) % 60
  let hours = parseInt(secondsLeft / 3600)
  // add leading zeroes if it's less than 10
  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time
  }
  if (hours > 0) result += `${hours}:`
  result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
  pomodoroTimer.innerText = result.toString()
}


const stopClock = () => {
  setUpdatedTimers()
  clearInterval(clockTimer)
  isClockStopped = true
  isClockRunning = false
  // reset the time left in the session to its original state
  currentTimeLeftInSession = workSessionDuration
  displayCurrentTimeLeftInSession()
  type= 'Work'
  timeSpentInCurrentSession = 0
}

const stepDown = () => {
  if (currentTimeLeftInSession > 0) {
    // decrease time left / increase time spent
    currentTimeLeftInSession--
    timeSpentInCurrentSession++
  } else if (currentTimeLeftInSession === 0) {
    // Timer is over -> if work switch to break, viceversa
    timeSpentInCurrentSession = 0
    if (type === 'Work') {
      currentTimeLeftInSession = breakSessionDuration
      type = 'Break'
      setUpdatedTimers();
    } else {
      currentTimeLeftInSession = workSessionDuration
      type = 'Work'
      setUpdatedTimers();
    }
  }
  displayCurrentTimeLeftInSession()
}

// Update timer based on user input
const setUpdatedTimers = () => {
  if (type === 'Work') {
    currentTimeLeftInSession = updatedWorkSessionDuration
      ? updatedWorkSessionDuration
      : workSessionDuration
    workSessionDuration = currentTimeLeftInSession
  } else {
    currentTimeLeftInSession = updatedBreakSessionDuration
      ? updatedBreakSessionDuration
      : breakSessionDuration
    breakSessionDuration = currentTimeLeftInSession
  }
}


// POMODORO end


// DICTIONARY START
// https://github.com/patelrohan750/Build-A-Dictionary-app-using-JavaScript/tree/master

let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search');

let apiKey = 'b3459c2f-974e-4b4d-b275-980057d4041a';
let notFound = document.querySelector('.not__found');
let wordBox = document.querySelector('.inputWord');
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
  wordBox.innerText = word;
  defBox.innerText = definition;

	// Sound
	const soundName = data[0].hwi.prs[0].sound.audio;
	if (soundName) {
		renderSound(soundName);
	}

	// console.log(data);
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