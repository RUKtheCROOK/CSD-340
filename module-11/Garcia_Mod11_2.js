// This holds all of the list items
let ToDolist = [];

// This function is to track the input
function inputTracker() {
    let input = document.getElementById("input");
}

// This function is to add the task to the list
function addTask() {
    let task = input.value;
    ToDolist.push(task);
    console.log(ToDolist);
    input.value = "";
    refresh();
    }

    // This function is to refresh the list
function refresh() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    for (let i = 0; i < ToDolist.length; i++) {
        list.innerHTML += `<div style='display: flex;'><li>${ToDolist[i]}</li><button style='margin-left: 15px; margin-bottom: 10px;' onClick='deleteTask()'>Delete Task</button></div>`;
    }
}

// This function is to delete the task
function deleteTask() {
    let index = ToDolist.indexOf(event.target.previousSibling.innerHTML);
    ToDolist.splice(index, 1);
    refresh();
}
