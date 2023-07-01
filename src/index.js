// const box = document.querySelector(".box");

// box.addEventListener("mouseenter", () => {
// 	const top = Math.floor(Math.random() * (window.innerHeight - 100));
// 	const left = Math.floor(Math.random() * (window.innerWidth - 100));

// 	box.style.left = `${left}px`;
// 	box.style.top = `${top}px`;
// });

// const myForm = document.getElementById("my-form");
// const emailInput = myForm.querySelector("#email");
// const passwordInput = myForm.querySelector("#password");

// myForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const email = emailInput.value;
// 	const password = passwordInput.value;

// 	if (!email || !password) return alert("Please enter a valid email or password");

// 	console.log({ email, password });
// });

// const btn = document.querySelector(".btn");

// emailInput.addEventListener("focus", () => {
// 	emailInput.value = "ars@domain.com";
// });
// emailInput.addEventListener("blur", () => {
// 	emailInput.value = "code@domain.com";
// });
// passwordInput.addEventListener("focus", () => {
// 	passwordInput.value = "root123";
// });

// btn.addEventListener("mouseenter", (event) => {
// 	console.log("event = ", event);

// 	if (event.altKey) {
// 		btn.classList.add("btn-secondary");
// 	}
// 	if (event.ctrlKey) {
// 		btn.classList.add("btn-info");
// 	}
// 	if (event.metaKey) {
// 		btn.classList.add("btn-danger");
// 	}
// });

// btn.addEventListener("mouseleave", () => {
// 	btn.className = "btn btn-primary";
// });

const box = document.querySelector(".box");
const innerBox = document.querySelector(".inner-box");

document.body.addEventListener("click", () => {
	console.log("BODY CLICKED");
});

box.addEventListener("click", (event) => {
	console.log("target = ", event.target);

	console.log("BOX CLICKED");
	event.stopPropagation();
});

innerBox.addEventListener("click", (event) => {
	console.log("target = ", event.target);
	console.log("INNER-BOX CLICKED");
});
