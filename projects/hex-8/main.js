const title = document.querySelector(".title");
const hexes = document.querySelectorAll(".hex");
const refreshBtn = document.querySelector(".btn-refresh");

function init() {
	hexes.forEach((hex, idx) => {
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

refreshBtn.onclick = init;

init();
