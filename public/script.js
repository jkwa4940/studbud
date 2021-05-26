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