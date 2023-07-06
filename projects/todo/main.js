//  DOM VARIABLES
const todoInput = document.getElementById("todo_name");
const addBtn = document.getElementById("add_btn");
const clearBtn = document.getElementById("clear_btn");
const randomBtn = document.getElementById("random_btn");
const todosWrapper = document.querySelector(".todos");
const form = document.querySelector("form");
// LOGICAL VARIABLES
const todos = [];
let mode = "ADD"; // ADD || EDIT
let editingTodoIdx;

// HANDLER FUNCTIONS
function handleSubmit(e) {
	e.preventDefault();
	const todoName = todoInput.value;

	if (!todoName.length) return alert("Please enter valid todo name");

	const todo = { name: todoName, isCompleted: false };
	if (mode === "ADD") {
		todos.push(todo);
	} else if (mode === "EDIT") {
		todos[editingTodoIdx].name = todoName;
		addBtn.innerText = "Add";
		editingTodoIdx = undefined;
		mode = "ADD";
	}
	todoInput.value = "";
	renderTodos();
}

function handleComplete(idx) {
	todos[idx].isCompleted = !todos[idx].isCompleted;

	renderTodos();
}

function handleEdit(idx) {
	const todoName = todos[idx].name;
	todoInput.value = todoName;
	addBtn.innerText = "Save";
	mode = "EDIT";
	editingTodoIdx = idx;
}

function handleDelete(idx) {
	todos.splice(idx, 1);
	renderTodos();
}

function handleRandom() {
	todos.sort(() => Math.random() - 0.5);
	renderTodos();
}
function handleClear() {
	todos.splice(0, todos.length);
	renderTodos();
}

form.addEventListener("submit", handleSubmit);
clearBtn.addEventListener("click", handleClear);
randomBtn.addEventListener("click", handleRandom);
// LOGICAL FUNCTIONS

// UI FUNCTIONS

function renderTodos() {
	let result = "";

	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];
		const name = todo.name;
		const isCompleted = todo.isCompleted;
		result += `<li class="list-group-item justify-content-between d-flex align-items-center ${
			isCompleted ? "list-group-item-success" : ""
		}">
  <span>${name}</span>
  <div class="btn-group">
   <button type="button" onclick="handleComplete('${i}')" class="btn btn-success">${
			isCompleted ? "Uncomplete" : "Complete"
		}</button>
   <button type="button" onclick="handleEdit('${i}')" class="btn btn-warning">Edit</button>
   <button type="button" onclick="handleDelete('${i}')" class="btn btn-danger">Delete</button>
  </div>
 </li>`;
	}

	todosWrapper.innerHTML = result;
}
