//  DOM VARIABLES
const todoInput = document.getElementById("todo_name");
const addBtn = document.getElementById("add_btn");
const clearBtn = document.getElementById("clear_btn");
const randomBtn = document.getElementById("random_btn");
const todosWrapper = document.querySelector(".todos");
const form = document.querySelector("form");
// LOGICAL VARIABLES
const KEY_TODOS = "data-todos";
const todos = JSON.parse(localStorage.getItem(KEY_TODOS) || "[]");
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

	localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
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
	localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
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

function createBtn(title, className, onClick) {
	const btn = document.createElement("button");
	btn.className = className;
	btn.innerText = title;
	btn.addEventListener("click", onClick);

	return btn;
}

function renderTodos() {
	todosWrapper.innerHTML = "";
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];
		const name = todo.name;
		const isCompleted = todo.isCompleted;
		const todoElm = document.createElement("li");
		todoElm.className = "list-group-item justify-content-between d-flex align-items-center";
		if (isCompleted) todoElm.classList.add("list-group-item-success");

		const titleElm = document.createElement("span");
		titleElm.innerText = name;

		const btnGroup = document.createElement("div");
		btnGroup.className = "btn-group";

		const btnComplete = createBtn(isCompleted ? "Uncompleted" : "Complete", "btn btn-success", () =>
			handleComplete(i)
		);
		const btnEdit = createBtn("Edit", "btn btn-warning", () => handleEdit(i));
		const btnDanger = createBtn("Delete", "btn btn-danger", () => handleDelete(i));

		btnGroup.append(btnComplete, btnEdit, btnDanger);
		todoElm.append(titleElm, btnGroup);

		todosWrapper.appendChild(todoElm);
	}
}

renderTodos();
