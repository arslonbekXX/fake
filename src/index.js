// const addBtn = document.querySelector(".add-btn");
// const boxesElm = document.querySelector(".boxes");
// let count = 0;

// addBtn.addEventListener("click", () => {
// 	count++;
// 	let result = "";

// 	for (let i = 0; i < count; i++) {
// 		result += `<div class="box box-2">Box-${i + 1}</div>`;
// 	}

// 	console.log("result = ", result);
// 	boxesElm.innerHTML = result;
// });

// const innerHTMLBtn = document.querySelector(".inner-html-btn");
// const createElementBtn = document.querySelector(".create-element-btn");
// const clearBtn = document.querySelector(".clear-btn");
// const boxesElm = document.querySelector(".boxes");

// function handleInnerHTML() {
// 	console.time();
// 	boxesElm.innerHTML = "<div class='box box-1'>Box-1</div>";
// 	const box1 = document.querySelector(".box-1");
// 	box1.addEventListener("click", () => {
// 		console.log("Box-1 clicked");
// 	});
// 	console.timeEnd();
// }

// function handleCreateElement() {
// 	console.time();
// 	const box = document.createElement("div");
// 	box.className = `box box-1`;
// 	box.innerText = `Box-1`;

// 	box.addEventListener("click", () => console.log("Box-1 clicked"));
// 	boxesElm.appendChild(box);

// 	console.timeEnd();
// }

// function handleClear() {
// 	[...boxesElm.children].forEach((elm) => elm.remove());
// }
// innerHTMLBtn.addEventListener("click", handleInnerHTML);
// createElementBtn.addEventListener("click", handleCreateElement);
// clearBtn.addEventListener("click", handleClear);

// const container = document.querySelector(".container");
// const form = document.forms[0];
// const commentInput = document.querySelector("#comment");

// container.innerHTML = `<div><button style="position: absolute; top: 0; right: 0;" class="btn btn-primary" onclick="for(let i = 0; i < 1000; i++){console.log(i)}">Click Me</button></div>`;

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const value = commentInput.value;

// 	container.innerHTML = value;
// 	commentInput.value = "";
// });

// const container = document.querySelector(".container");

// let counter = 0;

// function addFront() {
// 	const element = container.children[0];
// 	const newBox = document.createElement("div");
// 	newBox.innerText = `New Box-${++counter}`;
// 	newBox.className = "box";
// 	container.replaceChild(newBox, element);
// }

// setInterval(addFront, 10000);

const colors = ["light", "dark", "danger", "success"];
const boxes = document.querySelectorAll(".box");

const _colors = {
	dark: "light",
	light: "dark",
	danger: "success",
	success: "danger",
};

// const MAIN_KEY = "color"; // ...

// boxes.forEach((box) => {
// 	box.addEventListener("click", (e) => {
// 		const color = box.getAttribute(MAIN_KEY);
// 		const replaceColor = _colors[color];

// 		if (!replaceColor) return box.remove();

// 		box.setAttribute(MAIN_KEY, replaceColor);
// 	});
// });

// boxes.forEach((box) => {
// 	box.addEventListener("click", (e) => {
// 		const color = box.classList[1];
// 		const replaceColor = _colors[color];

// 		box.classList.replace(color, replaceColor);

// 		console.log("color = ", color);
// 		console.log("replaceColor = ", replaceColor);
// 	});
// });

// const setList = new Set();
// setList.add(20);
// setList.add(10);
// setList.add(30);
// console.log(setList.values());

// console.log(Array.from(setList));

boxes.forEach((box, idx) => {
	box.addEventListener("click", () => {
		console.log(`clicked box-${idx + 1}`);
	});
	box.addEventListener("click", () => {
		console.log(`clicked box-${idx + 1}`);
	});
	box.addEventListener("click", () => {
		console.log(`clicked box-${idx + 1}`);
	});
	box.addEventListener("click", () => {
		console.log(`clicked box-${idx + 1}`);
	});
});
