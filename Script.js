const inputbox = document.getElementById("todo-input");
const listcontainer = document.getElementById("todo-list");

function addTask(){
    if(inputbox.value === ""){
        alert("please  write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        event.preventDefault();
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}


listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}


function showTasks() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTasks();