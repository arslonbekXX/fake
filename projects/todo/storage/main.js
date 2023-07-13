const saveBtn = document.querySelector(".save-data");
const showBtn = document.querySelector(".show-data");
const removeBtn = document.querySelector(".remove-data");
const clearBtn = document.querySelector(".clear-data");

const KEY = "age";
saveBtn.onclick = () => {
	const age = Math.floor(Math.random() * 100);
	localStorage.setItem(KEY, age);
};

showBtn.onclick = () => {
	const age = localStorage.getItem(KEY);
	console.log(`${KEY} = `, age);
};

clearBtn.onclick = () => {
	localStorage.clear();
};

removeBtn.onclick = () => {
	localStorage.removeItem(KEY);
};

// ----removeItem
