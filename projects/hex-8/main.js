const container = document.querySelector(".container");
const title = document.querySelector(".title");
const hexes = document.querySelectorAll(".hex");
const refreshBtn = document.querySelector(".btn-refresh");
const nextBtn = document.querySelector(".btn-next");

function init(items = []) {
	items.forEach((hex, idx) => {
		const color = generateColor();
		hex.innerText = color;
		hex.style.background = color;
		hex.onclick = () => {
			document.body.style.background = color;
			title.innerText = color;
		};
	});
}

function generateColor() {
	return "#" + Math.random().toString(16).substring(2, 8);
}

function handleNext() {
	const additionHexes = [];

	for (let i = 0; i < 4; i++) {
		const hex = document.createElement("div");
		hex.className = "hex";
		additionHexes[additionHexes.length] = hex;
		container.appendChild(hex);
	}

	init(additionHexes);
}

init(hexes);

refreshBtn.onclick = init;
nextBtn.onclick = handleNext;
