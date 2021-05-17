// Navigation 
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


// Task List

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