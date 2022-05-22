const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

let toDos = [];

function saveTodo() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
  saveTodo();
}

function paintTodo(toDo) {
  const li = document.createElement("li");
  li.id = toDo.id;
  const span = document.createElement("span");
  span.innerText = toDo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const toDo = todoInput.value;
  todoInput.value = "";
  const toDoObj = { text: toDo, id: new Date().getTime() };
  paintTodo(toDoObj);
  toDos.push(toDoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem("toDos");

if (savedTodo) {
  const parsedTodo = JSON.parse(savedTodo);
  toDos = parsedTodo;
  toDos.forEach((todo) => paintTodo(todo));
}
