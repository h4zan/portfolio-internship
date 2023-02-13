import { Todos } from "./models/todos";
let todosWrapper=document.createElement("div")
let titleWrapper = document.createElement("div");
let title = document.createElement("h3");
let taskWrapper = document.createElement("div");
let userinput = document.createElement("input");
let taskBtnContainer = document.createElement("div");
let addTask = document.createElement("button");
let clearAll = document.createElement("button");
let todosContainer = document.createElement("div");

todosWrapper.className="todos"
titleWrapper.className = "todos__title";
title.className = "todos__title__text";
taskWrapper.className = "taskWrapper";

title.innerHTML = "ToDo List";
userinput.className = "userinput";
userinput.setAttribute("type", "text");
userinput.placeholder = "Type a task here";
taskBtnContainer.className = "taskBtnContainer";
addTask.className = "addTask","taskBtn";
addTask.innerHTML = "Add Tasks";
addTask.type="button"
clearAll.className = "clearAll","taskBtn";
clearAll.type="button"
clearAll.innerHTML = "Clear Tasks";

todosContainer.className= "allTodos";

titleWrapper.appendChild(title)
todosWrapper.appendChild(titleWrapper)
todosWrapper.appendChild(taskWrapper)
taskWrapper.appendChild(userinput);
taskBtnContainer.appendChild(addTask);
taskBtnContainer.appendChild(clearAll);
taskWrapper.appendChild(taskBtnContainer);
taskWrapper.appendChild(todosContainer);
document.body.appendChild(todosWrapper);



addTask.addEventListener("click", function () {

  if (userinput.value === "") {
    alert("Please add a task name!");
  } else {
    task.push(new Todos(userinput.value, false));
    createHtml();
    saveToLocalStorage();
    userinput.value =" ";


  }

}

);



let task = [
  new Todos("Eat", false),
  new Todos("Code", false),
  new Todos("Sleep", false),
];


function createHtml() {
  let main = document.querySelector(".allTodos");
  main.innerHTML = "";

  for (let i = 0; i < task.length; i++) {

    let container = document.createElement("div");
    let list = document.createElement("div");
    let listItem = document.createElement("div");
    let btns=document.createElement("span");
    let deleteTask = document.createElement("button");
    let taskDone = document.createElement("button");

    container.className = "taskContainer";
    list.className = "tasks";
    listItem.className = "taskname";
    btns.className="btns"
    taskDone.className = "taskFinished","taskBtn";
    deleteTask.className = "deleteTask","taskBtn";

    main.appendChild(container);

    container.appendChild(list);
    list.appendChild(listItem);
    btns.appendChild(taskDone);
    btns.appendChild(deleteTask);
    list.appendChild(btns);

    taskDone.type="button"
    deleteTask.type="button"
   

    listItem.innerHTML = task[i].task;

    const getTasks= localStorage.getItem("todos")
    

    taskDone.addEventListener("click", () => {
      if (task[i].done === false) {
        listItem.style.textDecoration = "line-through";
        task[i].done = true;
        console.log(task);
      }
    });

    taskDone.addEventListener("dblclick", () => {
      if (task[i].done === true) {
        listItem.style.textDecoration = "none";
      
        task[i].done = false;
      }
      console.log(task);
    });

    deleteTask.addEventListener("click", () => {
      const newTasks = task?.filter((clickToDelete) => {
        return clickToDelete !== task[i];
      });
      task = newTasks;

      createHtml();
      saveToLocalStorage();
      console.log(newTasks);
    });

    clearAll.addEventListener("click", function () {
      task = [];
      createHtml();
      saveToLocalStorage();

    });
  }
}

createHtml();



function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(task));
}

function loadFromLocalStorage() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    task = JSON.parse(savedTodos);
  }
}
window.addEventListener("load", function () {
  loadFromLocalStorage();
  createHtml();
}); 