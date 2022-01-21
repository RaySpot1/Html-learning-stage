//JS Code for the add button
var addButton = document.getElementById("add-button"); //getting the add button id from the html so we can rename it on js
addButton.addEventListener("click", addToDoItem); //Adding an event listener so when the add button is clicked javascript listens and adds 
function addToDoItem() {
    alert("Add button clicked!");       //function for a pop up alert when the add button is clicked
}

//Js code for the clear-completed-button

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearCompletedToDoItems);
function clearCompletedToDoItems() {
    alert("Clear button clicked!");
}

// JS code for the Empty list button

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);
function emptyList() {
    alert("Empty button clicked!");
}

// Js code for the Save list button

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);
function saveList() {
    alert("Save button clicked!");
}

// Making the add button work

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");    //creates an "li" element to use as your new item list in an ordered list "ol"
    var toDoText = document.createTextNode(itemText);   //TextNode is a special container for text that you want to put inside a HTML element using JS and fills the TextNode with the contents of the "Texts" variable that is passed into the function
    toDoItem.appendChild(toDoText);     //appendChild takes the text inside the textNode(toDoItem "li") and puts it inside the toDoText
    if (completed) {
        toDoItem.classlist.add("completed");    //Checks if the variable passed to the toDoItem is true. if it is, then it will add the class "Completed" to the "li" element, which will change how it looks on the page.
    }
//adding items to the list creates an ordered list (ol)
    toDoList.appendChild(toDoItem);     // puts the toDoItem("li") inside the toDoList("ol")
    toDoItem.addEventListener("dbclick", toggleToDoItemState)  // attaches and event listener for a double click to the "toDoItem" and tells it to call a function named "toggleToDoItemsState" in-response.
}

/*connecting the functions above to the "Add button": to do that you just have to 
change your "addToDoItem" function to get the text from the box and pass it to the
"newToDoItem" function you've just created */

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function toggleToDoItemsState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

/* Removing items from the list after they've been completed in order to add new 
items or after being away from the todo app for a long time, coming back to
refresh the list*/ 

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.items(0).remove();
    }
}

/* To clear everything off the list, with the same code as above but select all the
children of the toDoList */

function emptyList() {
    var toDoItems = toDOList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

/*Saving the list to the computers local storage so when you open the same browser
you find your saved list intact. Local storage can't store HTML so we need to make
use of an array to turn HTML into pure JS */

var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);  // This will alert something to store

/*storing weather the task is completed or not */

var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

// Putting it all together

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.lengthl; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.conatins("completed")
        };

        toDos.push(toDoInfo);
        
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

// Loading the saved list

function loadList() {
    if(localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem(toDOs));


        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();